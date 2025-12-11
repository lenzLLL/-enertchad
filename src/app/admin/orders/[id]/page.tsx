"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Loader } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function EditOrderPage() {
  const params = useParams();
  const router = useRouter();
  const orderId = params.id as string;

  const [formData, setFormData] = useState({
    id: "",
    customer: { name: "", address: "", contact: "" },
    product: "",
    amount: "",
    status: "En attente",
    date: "",
  });
  const [items, setItems] = useState<any[]>([]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const statuses = ["En attente", "En cours", "Livré", "Annulée"];

  // Charger la commande
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await fetch(`/api/orders?id=${orderId}`);
        if (!res.ok) throw new Error("Commande non trouvée");
        const orders = await res.json();
        const order = orders.find((o: any) => o.id === orderId);
        
        if (order) {
          setFormData({
            id: order.id || "",
            customer: typeof order.customer === 'object' ? (order.customer || { name: "", address: "", contact: "" }) : { name: order.customer || "", address: "", contact: "" },
            product: order.product || "",
            amount: String(order.amount) || "",
            status: order.status || "En attente",
            date: order.date || new Date().toISOString().split('T')[0],
          });
          if (Array.isArray(order.items)) {
            setItems(order.items);
          }
        }
      } catch (error) {
        console.error("Erreur chargement commande:", error);
        setErrors({ general: "Impossible de charger la commande" });
      } finally {
        setIsLoading(false);
      }
    };

    if (orderId) fetchOrder();
  }, [orderId]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.customer.name.trim()) newErrors.customer = "Le nom du client est obligatoire";
    if (!formData.amount) newErrors.amount = "Le montant est obligatoire";
    else if (isNaN(Number(formData.amount)) || Number(formData.amount) <= 0)
      newErrors.amount = "Le montant doit être positif";
    if (!formData.status) newErrors.status = "Le statut est obligatoire";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch(`/api/orders?id=${orderId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: formData.customer,
          product: formData.product,
          amount: Number(formData.amount),
          status: formData.status,
          date: formData.date,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Erreur modification commande");
      }

      alert("Commande modifiée avec succès!");
      router.push("/admin/orders");
    } catch (error: any) {
      setErrors({ general: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex items-center space-x-2">
          <Loader size={24} className="animate-spin" />
          <span>Chargement...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link
          href="/admin/orders"
          className="flex items-center space-x-2 text-[#1E5FA8] hover:underline"
        >
          <ArrowLeft size={20} />
          <span>Retour aux commandes</span>
        </Link>
        <h1 className="text-3xl font-bold text-[#1E5FA8]">Modifier la commande</h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6 space-y-6">
          {/* General Error */}
          {errors.general && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {errors.general}
            </div>
          )}

          {/* Order ID (read-only) */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              ID Commande
            </label>
            <input
              type="text"
              value={formData.id}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600"
            />
          </div>

          {/* Customer Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nom du client *
            </label>
            <input
              type="text"
              name="customer"
              value={formData.customer.name}
              onChange={(e) => setFormData(prev => ({ ...prev, customer: { ...prev.customer, name: e.target.value } }))}
              placeholder="Nom du client"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5FA8] ${
                errors.customer ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.customer && (
              <p className="text-red-500 text-sm mt-1">{errors.customer}</p>
            )}
          </div>

          {/* Customer Address */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Adresse du client
            </label>
            <input
              type="text"
              name="address"
              value={formData.customer.address}
              onChange={(e) => setFormData(prev => ({ ...prev, customer: { ...prev.customer, address: e.target.value } }))}
              placeholder="Adresse de livraison"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5FA8]"
            />
          </div>

          {/* Customer Contact */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Contact du client
            </label>
            <input
              type="text"
              name="contact"
              value={formData.customer.contact}
              onChange={(e) => setFormData(prev => ({ ...prev, customer: { ...prev.customer, contact: e.target.value } }))}
              placeholder="Téléphone ou email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5FA8]"
            />
          </div>

          {/* Product */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Produits commandés
            </label>
            {items.length > 0 ? (
              <div className="space-y-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                {items.map((item, idx) => (
                  <div key={idx} className="bg-white p-3 rounded border border-gray-200">
                    <p className="font-semibold text-gray-900">{item.name || 'Produit sans nom'}</p>
                    <p className="text-sm text-gray-600">
                      Quantité: <span className="font-bold">{item.quantity || 1}</span> × {(item.price || 0).toLocaleString()} FCFA
                    </p>
                    <p className="text-sm text-[#1E5FA8] font-bold">
                      Sous-total: {((item.price || 0) * (item.quantity || 1)).toLocaleString()} FCFA
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-100 p-4 rounded-lg border border-gray-300 text-gray-600">
                Aucun produit dans cette commande
              </div>
            )}
          </div>

          {/* Amount & Date */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Montant (FCFA) *
              </label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                placeholder="0"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5FA8] ${
                  errors.amount ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.amount && (
                <p className="text-red-500 text-sm mt-1">{errors.amount}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5FA8]"
              />
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Statut *
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5FA8] ${
                errors.status ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Sélectionner un statut</option>
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            {errors.status && (
              <p className="text-red-500 text-sm mt-1">{errors.status}</p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-gradient-to-r from-[#1E5FA8] to-[#E6C34A] text-white font-semibold py-3 rounded-lg hover:shadow-lg transition disabled:opacity-50"
          >
            {isSubmitting ? "Modification..." : "Modifier"}
          </button>
          <Link
            href="/admin/orders"
            className="flex-1 bg-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-400 transition text-center"
          >
            Annuler
          </Link>
        </div>
      </form>
    </div>
  );
}
