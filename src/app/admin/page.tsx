"use client";

import { useEffect, useState } from "react";
import { Package, ShoppingCart, ArrowUpRight, Zap, RefreshCw } from "lucide-react";

export default function AdminDashboard() {
  const [products, setProducts] = useState<any[]>([]);
  const [articles, setArticles] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const loadData = async (isRefresh = false) => {
    const setLoadingState = isRefresh ? setIsRefreshing : setIsLoading;
    setLoadingState(true);
    try {
      const [pRes, aRes, oRes] = await Promise.all([
        fetch('/api/products'),
        fetch('/api/blog'),
        fetch('/api/orders'),
      ]);

      const [pJson, aJson, oJson] = await Promise.all([
        pRes.ok ? pRes.json() : [],
        aRes.ok ? aRes.json() : [],
        oRes.ok ? oRes.json() : [],
      ]);

      setProducts(Array.isArray(pJson) ? pJson : []);
      setArticles(Array.isArray(aJson) ? aJson : []);
      setOrders(Array.isArray(oJson) ? oJson : []);
    } catch (e) {
      console.error('Error loading dashboard data:', e);
    } finally {
      setLoadingState(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Derived stats
  const totalProducts = products.length;
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((s, o) => s + (Number(o.amount) || 0), 0);
  
  // Format revenue with appropriate scale
  const formatRevenue = (amount: number) => {
    if (amount >= 1_000_000_000) {
      return { value: (amount / 1_000_000_000).toFixed(1), suffix: 'Md', label: 'Milliards FCFA' };
    } else if (amount >= 1_000_000) {
      return { value: (amount / 1_000_000).toFixed(1), suffix: 'M', label: 'Millions FCFA' };
    } else if (amount >= 1_000) {
      return { value: (amount / 1_000).toFixed(1), suffix: 'K', label: 'Milliers FCFA' };
    } else {
      return { value: amount.toFixed(0), suffix: '', label: 'FCFA' };
    }
  };
  
  const formattedTotalRevenue = formatRevenue(totalRevenue);
  
  const stats = [
    {
      title: 'Total Produits',
      value: isLoading ? '...' : String(totalProducts),
      icon: Package,
      gradient: 'from-[#1E5FA8] to-[#3a7ec8]',
      change: '',
      label: 'en base',
    },
    {
      title: 'Commandes',
      value: isLoading ? '...' : String(totalOrders),
      icon: ShoppingCart,
      gradient: 'from-[#3AA655] to-[#5bc878]',
      change: '',
      label: 'en base',
    },
    {
      title: 'Revenus Totaux',
      value: isLoading ? '...' : `${formattedTotalRevenue.value}${formattedTotalRevenue.suffix}`,
      icon: Zap,
      gradient: 'from-[#E6C34A] to-[#f5d76e]',
      change: '',
      label: formattedTotalRevenue.label,
    },
    // 'Clients Actifs' card removed as requested
  ];

  // Recent orders (most recent by date or createdAt)
  const recentOrders = isLoading
    ? []
    : orders
        .slice()
        .sort((a, b) => {
          const da = a.date ? new Date(a.date).getTime() : (a.createdAt ? new Date(a.createdAt).getTime() : 0);
          const db = b.date ? new Date(b.date).getTime() : (b.createdAt ? new Date(b.createdAt).getTime() : 0);
          return db - da;
        })
        .slice(0, 3)
        .map((o) => ({
          id: o.id,
          product: o.product || '—',
          customer: typeof o.customer === 'object' && o.customer?.name ? o.customer.name : (typeof o.customer === 'string' ? o.customer : '—'),
          status: o.status || '—',
          amount: (Number(o.amount) || 0).toLocaleString() + ' FCFA',
          date: o.date || (o.createdAt ? new Date(o.createdAt).toISOString().split('T')[0] : ''),
          icon: o.status === 'Livré' ? '✓' : o.status === 'En cours' ? '⏳' : '⚠️',
        }));

  // Top products by number of orders
  const topProducts = (() => {
    if (isLoading || orders.length === 0) return [];
    const tally: Record<string, { sales: number; revenue: number }> = {};
    orders.forEach((o) => {
      // If order has items array (new format), iterate through them
      if (Array.isArray(o.items) && o.items.length > 0) {
        o.items.forEach((item: any) => {
          const name = (item.name || 'Unknown').toString();
          if (!tally[name]) tally[name] = { sales: 0, revenue: 0 };
          tally[name].sales += item.quantity || 1;
          tally[name].revenue += (Number(item.price) || 0) * (item.quantity || 1);
        });
      } else {
        // Fallback to old format with product field
        const name = (o.product || 'Unknown').toString();
        if (!tally[name]) tally[name] = { sales: 0, revenue: 0 };
        tally[name].sales += 1;
        tally[name].revenue += Number(o.amount) || 0;
      }
    });
    const list = Object.keys(tally).map((name) => ({ name, sales: tally[name].sales, revenue: tally[name].revenue }));
    list.sort((a, b) => b.sales - a.sales);
    const maxSales = list[0]?.sales || 1;
    return list.slice(0, 3).map((p) => ({
      name: p.name,
      sales: p.sales,
      revenue: (p.revenue / 1_000_000).toFixed(1) + 'M',
      trend: `+${Math.round((p.sales / maxSales) * 100)}%`,
    }));
  })();

  // Monthly data for the last 7 months with dynamic scaling
  const monthlyDataRaw = (() => {
    const monthsNames = ["Jan","Fév","Mar","Avr","Mai","Juin","Juil","Aoû","Sep","Oct","Nov","Déc"];
    const now = new Date();
    const result: { month: string; revenue: number; orders: number }[] = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const monthStart = new Date(d.getFullYear(), d.getMonth(), 1);
      const monthEnd = new Date(d.getFullYear(), d.getMonth() + 1, 1);
      const monthOrders = orders.filter((o) => {
        const od = o.date ? new Date(o.date) : (o.createdAt ? new Date(o.createdAt) : null);
        if (!od) return false;
        return od >= monthStart && od < monthEnd;
      });
      // Keep revenue in raw FCFA (don't divide by million)
      const revenue = monthOrders.reduce((s, o) => s + (Number(o.amount) || 0), 0);
      const monthName = monthsNames[monthStart.getMonth()] || monthStart.toLocaleString('default',{month:'short'});
      result.push({ 
        month: monthName, 
        revenue: revenue,
        orders: monthOrders.length 
      });
    }
    return result;
  })();

  // Determine the scale for the chart (K for thousands, M for millions, B for billions)
  const maxRawRevenue = Math.max(...monthlyDataRaw.map(d => d.revenue), 1);
  let scale = 1;
  let scaleLabel = 'FCFA';
  if (maxRawRevenue >= 1_000_000_000) {
    scale = 1_000_000_000;
    scaleLabel = 'Milliards FCFA';
  } else if (maxRawRevenue >= 1_000_000) {
    scale = 1_000_000;
    scaleLabel = 'Millions FCFA';
  } else if (maxRawRevenue >= 1_000) {
    scale = 1_000;
    scaleLabel = 'Milliers FCFA';
  }

  // Convert monthly data to scaled values
  const monthlyData = monthlyDataRaw.map(d => ({
    ...d,
    revenueScaled: Number((d.revenue / scale).toFixed(1))
  }));

  // Calculate month-over-month variation
  const monthlyDataWithVariation = monthlyData.map((data, idx) => {
    let variation = 0;
    if (idx > 0) {
      const prev = monthlyData[idx - 1].revenueScaled;
      variation = prev !== 0 ? ((data.revenueScaled - prev) / prev) * 100 : 0;
    }
    return { ...data, variation };
  });

  // Find max for scaling the chart
  const maxMonthlyRevenue = Math.max(...monthlyData.map(d => d.revenueScaled), 1);

  return (
    <div className="space-y-8">
      {/* Header with Refresh Button */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Tableau de Bord</h1>
        <button
          onClick={() => loadData(true)}
          disabled={isRefreshing || isLoading}
          className="flex items-center gap-2 px-4 py-2 bg-[#1E5FA8] text-white rounded-lg hover:bg-[#1a4a88] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          <RefreshCw size={18} className={isRefreshing ? 'animate-spin' : ''} />
          {isRefreshing ? 'Rafraîchissement...' : 'Rafraîchir'}
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 md:p-6 border border-gray-100"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-gray-600 text-xs md:text-sm font-medium">{stat.title}</p>
                  <p className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 md:mt-3">
                    {stat.value}
                  </p>
                  <div className="flex items-center space-x-2 mt-3">
                    <ArrowUpRight size={16} className="text-green-500" />
                    <span className="text-green-600 text-sm font-semibold">{stat.change}</span>
                    <span className="text-gray-500 text-xs">{stat.label}</span>
                  </div>
                </div>
                <div className={`bg-gradient-to-br ${stat.gradient} p-4 rounded-xl shadow-md`}>
                  <Icon className="text-white" size={28} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Revenu & Commandes</h3>
              <p className="text-xs md:text-sm text-gray-500 mt-1">Les 7 derniers mois</p>
            </div>
            <select className="px-3 md:px-4 py-2 border border-gray-200 rounded-lg text-xs md:text-sm text-gray-700 bg-white hover:bg-gray-50">
              <option>Derniers 7 mois</option>
              <option>Dernière année</option>
              <option>Tous les temps</option>
            </select>
          </div>

          <div className="space-y-6">
            {/* Revenue Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200 bg-gray-50">
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Mois</th>
                    <th className="px-4 py-3 text-right font-semibold text-gray-700">Revenus</th>
                    <th className="px-4 py-3 text-right font-semibold text-gray-700">Commandes</th>
                    <th className="px-4 py-3 text-right font-semibold text-gray-700">Variation</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyDataWithVariation.map((data, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition">
                      <td className="px-4 py-3 font-medium text-gray-900">{data.month}</td>
                      <td className="px-4 py-3 text-right">
                        <span className="font-bold text-[#1E5FA8]">
                          {(() => {
                            if (scale === 1_000_000_000) return `${data.revenueScaled}Md`;
                            if (scale === 1_000_000) return `${data.revenueScaled}M`;
                            if (scale === 1_000) return `${data.revenueScaled}K`;
                            return `${data.revenue}`;
                          })()}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right text-gray-700">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                          {data.orders}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        {idx === 0 ? (
                          <span className="text-gray-400 text-xs">-</span>
                        ) : (
                          <span className={`font-semibold ${data.variation >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {data.variation >= 0 ? '↑' : '↓'} {Math.abs(data.variation).toFixed(1)}%
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-8">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6 md:mb-8">🏆 Produits Populaires</h3>
          <div className="space-y-5">
            {topProducts.map((product, idx) => (
              <div key={idx} className="border-b border-gray-100 pb-4 md:pb-5 last:border-b-0 last:pb-0">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2">
                  <p className="font-semibold text-gray-800 text-xs md:text-sm line-clamp-2">{product.name}</p>
                  <span className="text-green-600 text-xs font-bold whitespace-nowrap">{product.trend}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-gradient-to-r from-[#1E5FA8] to-[#E6C34A] h-2 rounded-full"
                    style={{ width: `${(product.sales / 156) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>{product.sales} ventes</span>
                  <span className="font-semibold text-[#1E5FA8]">{product.revenue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 md:p-8 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900">📋 Commandes Récentes</h3>
            <p className="text-xs md:text-sm text-gray-500 mt-1">Les 3 dernières commandes</p>
          </div>
          <a
            href="/admin/orders"
            className="text-[#1E5FA8] hover:text-[#E6C34A] text-xs md:text-sm font-bold flex items-center space-x-1 transition"
          >
            <span>Voir tout</span>
            <ArrowUpRight size={16} className="rotate-45" />
          </a>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs md:text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-3 md:py-4 px-3 md:px-8 font-bold text-gray-700 text-xs md:text-sm">Commande</th>
                <th className="text-left py-3 md:py-4 px-3 md:px-8 font-bold text-gray-700 text-xs md:text-sm hidden sm:table-cell">Produit</th>
                <th className="text-left py-3 md:py-4 px-3 md:px-8 font-bold text-gray-700 text-xs md:text-sm hidden md:table-cell">Client</th>
                <th className="text-left py-3 md:py-4 px-3 md:px-8 font-bold text-gray-700 text-xs md:text-sm">Statut</th>
                <th className="text-left py-3 md:py-4 px-3 md:px-8 font-bold text-gray-700 text-xs md:text-sm">Montant</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                  <td className="py-3 md:py-4 px-3 md:px-8">
                    <p className="font-bold text-[#1E5FA8] text-xs md:text-sm">{order.id}</p>
                    <p className="text-xs text-gray-500 mt-1">{order.date}</p>
                  </td>
                  <td className="py-3 md:py-4 px-3 md:px-8 text-gray-700 text-xs md:text-sm font-medium hidden sm:table-cell">
                    <p className="line-clamp-2">{order.product}</p>
                  </td>
                  <td className="py-3 md:py-4 px-3 md:px-8 text-gray-700 text-xs md:text-sm hidden md:table-cell">{order.customer}</td>
                  <td className="py-3 md:py-4 px-3 md:px-8">
                    <span
                      className={`px-2 md:px-3 py-1 rounded-full text-xs font-bold inline-flex items-center space-x-1 ${
                        order.status === "Livré"
                          ? "bg-green-100 text-green-700"
                          : order.status === "En cours"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      <span>{order.icon}</span>
                      <span className="hidden sm:inline">{order.status}</span>
                    </span>
                  </td>
                  <td className="py-3 md:py-4 px-3 md:px-8 font-bold text-[#3AA655] text-xs md:text-sm whitespace-nowrap">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
