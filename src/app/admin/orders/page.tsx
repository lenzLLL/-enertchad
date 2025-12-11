"use client";

import { useEffect, useState } from "react";
import { Eye, Edit2, Trash2, Search, Filter } from "lucide-react";
import Link from "next/link";

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    let mounted = true;
    (async () => {
      setIsLoading(true);
      try {
        const res = await fetch('/api/orders');
        if (!res.ok) throw new Error('Failed to fetch orders');
        const data = await res.json();
        if (mounted) setOrders(data || []);
      } catch (e) {
        console.error('Error loading orders:', e);
      } finally {
        if (mounted) setIsLoading(false);
      }
    })();
    return () => { mounted = false };
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("Tous");

  const filteredOrders = orders.filter((o) => {
    const customerName = typeof o.customer === 'object' && o.customer?.name ? o.customer.name : (typeof o.customer === 'string' ? o.customer : '');
    const matchSearch =
      customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = filterStatus === "Tous" || o.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const totalPages = Math.max(1, Math.ceil(filteredOrders.length / pageSize));
  if (page > totalPages) setPage(totalPages);
  const paginatedOrders = filteredOrders.slice((page - 1) * pageSize, page * pageSize);

  const statuses = ["Tous", "Livré", "En cours", "En attente", "Annulée"];

  const handleDelete = async (orderId: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cette commande?")) return;
    
    try {
      const res = await fetch(`/api/orders?id=${orderId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Erreur suppression");
      
      setOrders((prev) => prev.filter((o) => o.id !== orderId));
      alert("Commande supprimée!");
    } catch (error) {
      alert("Erreur lors de la suppression");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#1E5FA8]">Gestion des Commandes</h1>
        <div className="text-right">
          <p className="text-gray-600">Total: {orders.length} commandes</p>
          <p className="text-2xl font-bold text-[#3AA655]">
            {(orders.reduce((sum, o) => sum + o.amount, 0) / 1000000).toFixed(1)}M FCFA
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4 space-y-4">
        <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-4 py-2">
          <Search size={20} className="text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher par client ou ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-100 flex-1 outline-none"
          />
        </div>

        <div className="flex items-center space-x-2 overflow-x-auto pb-2">
          <Filter size={20} className="text-gray-600" />
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-lg font-semibold transition whitespace-nowrap ${
                filterStatus === status
                  ? "bg-gradient-to-r from-[#1E5FA8] to-[#E6C34A] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-[#1E5FA8] to-[#164a8a] text-white">
            <tr>
              <th className="text-left py-4 px-6 font-semibold">ID Commande</th>
              <th className="text-left py-4 px-6 font-semibold">Client</th>
              <th className="text-left py-4 px-6 font-semibold">Produit</th>
              <th className="text-left py-4 px-6 font-semibold">Montant</th>
              <th className="text-left py-4 px-6 font-semibold">Statut</th>
              <th className="text-left py-4 px-6 font-semibold">Date</th>
              <th className="text-left py-4 px-6 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              Array.from({ length: pageSize }).map((_, i) => (
                <tr key={`skeleton-${i}`} className="border-b border-gray-200">
                  <td className="py-4 px-6"><div className="h-4 bg-gray-200 rounded w-1/6 animate-pulse"></div></td>
                  <td className="py-4 px-6"><div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div></td>
                  <td className="py-4 px-6"><div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse"></div></td>
                  <td className="py-4 px-6"><div className="h-4 bg-gray-200 rounded w-1/5 animate-pulse"></div></td>
                  <td className="py-4 px-6"><div className="h-4 bg-gray-200 rounded w-1/6 animate-pulse"></div></td>
                  <td className="py-4 px-6"><div className="h-4 bg-gray-200 rounded w-1/5 animate-pulse"></div></td>
                  <td className="py-4 px-6"><div className="h-4 bg-gray-200 rounded w-1/6 animate-pulse"></div></td>
                </tr>
              ))
            ) : (
              paginatedOrders.map((order) => {
                const customerName = typeof order.customer === 'object' && order.customer?.name ? order.customer.name : (typeof order.customer === 'string' ? order.customer : '—');
                const productName = Array.isArray(order.items) && order.items.length > 0 ? `${order.items.length} article(s)` : (order.product || '—');
              return (
              <tr
                key={order.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="py-4 px-6">
                  <p className="font-semibold text-[#1E5FA8]">{order.id}</p>
                </td>
                <td className="py-4 px-6 text-gray-700">{customerName}</td>
                <td className="py-4 px-6 text-gray-700">{productName}</td>
                <td className="py-4 px-6">
                  <p className="font-semibold text-[#3AA655]">
                    {order.amount.toLocaleString()} FCFA
                  </p>
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      order.status === "Livré"
                        ? "bg-green-100 text-green-700"
                        : order.status === "En cours"
                        ? "bg-blue-100 text-blue-700"
                        : order.status === "En attente"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-600">{order.date}</td>
                <td className="py-4 px-6">
                  <div className="flex space-x-3">
                    <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition">
                      <Eye size={18} />
                    </button>
                    <Link
                      href={`/admin/orders/${order.id}`}
                      className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition"
                    >
                      <Edit2 size={18} />
                    </Link>
                    <button
                      onClick={() => handleDelete(order.id)}
                      className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            );
            })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {!isLoading && totalPages > 1 && (
        <div className="flex justify-between items-center">
          <p className="text-gray-600">Page {page} sur {totalPages}</p>
          <div className="flex space-x-2">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition"
            >
              Précédent
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`px-3 py-2 rounded-lg transition ${
                  page === p
                    ? "bg-gradient-to-r from-[#1E5FA8] to-[#E6C34A] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition"
            >
              Suivant
            </button>
          </div>
        </div>
      )}
    </div>
  );
}