"use client";

import { useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import Link from "next/link";

// UploadThing
import type { OurFileRouter } from "@/app/api/uploadthing/core";
import { UploadButton } from "@/utils/uploadthing";

export default function CreateProductPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    stock: "",
    imageUrl: "",      // <- stocke l’URL venant d’UploadThing
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = ["Énergie", "Stockage", "Électrique", "Accessoires", "Services"];

  // 🔧 Gestion des inputs
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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

  // ❌ Supprimer l’image UploadThing
  const removeImage = () => {
    setFormData((prev) => ({ ...prev, imageUrl: "" }));
    
  };

  // ✔️ Validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Le nom est obligatoire";
    if (!formData.description.trim())
      newErrors.description = "La description est obligatoire";
    if (!formData.category) newErrors.category = "La catégorie est obligatoire";

    if (!formData.price) newErrors.price = "Le prix est obligatoire";
    else if (isNaN(Number(formData.price)) || Number(formData.price) <= 0)
      newErrors.price = "Le prix doit être positif";

    if (!formData.stock) newErrors.stock = "Le stock est obligatoire";
    else if (isNaN(Number(formData.stock)) || Number(formData.stock) < 0)
      newErrors.stock = "Le stock doit être positif";

    if (!formData.imageUrl) newErrors.imageUrl = "L'image est obligatoire";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🚀 SUBMIT FINAL : Upload URL → Firestore
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          description: formData.description,
          category: formData.category,
          price: Number(formData.price),
          stock: Number(formData.stock),
          image: formData.imageUrl, // <-- URL venant d’UploadThing
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Erreur création produit");
      }

      alert("Produit créé avec succès 🎉");

      // reset
      setFormData({
        name: "",
        description: "",
        category: "",
        price: "",
        stock: "",
        imageUrl: "",
      });

    } catch (error: any) {
      alert("Erreur : " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* HEADER */}
      <div className="bg-white border-b border-gray-200 p-8">
        <Link
          href="/admin/products"
          className="flex items-center space-x-2 text-[#1E5FA8] font-semibold hover:text-[#164a8a]"
        >
          <ArrowLeft size={20} />
          <span>Retour aux produits</span>
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mt-4">
          Créer un nouveau produit
        </h1>
      </div>

      {/* FORM */}
      <div className="p-8">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* IMAGE UPLOAD */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 sticky top-24">
                <h2 className="text-lg font-bold text-gray-900 mb-6">
                  Image du produit
                </h2>

                {!formData.imageUrl ? (
                  <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res[0]?.ufsUrl);
          setFormData((prev) => ({
            ...prev,
            imageUrl: res[0]?.ufsUrl || "",
          }));
        
         
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
                ) : (
                  <div className="relative">
                    <img
                      src={formData.imageUrl}
                      className="w-full h-64 object-cover rounded-xl"
                    />

                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full shadow-lg"
                    >
                      <X size={20} />
                    </button>
                  </div>
                )}

                {errors.imageUrl && (
                  <p className="text-red-500 text-sm mt-3">{errors.imageUrl}</p>
                )}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Nom */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <label className="block text-sm font-bold mb-3">Nom *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-lg"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              {/* Description */}
              <div className="bg-white rounded-xl shadow-sm border p-8">
                <label className="block text-sm font-bold mb-3">Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border rounded-lg"
                ></textarea>
                {errors.description && (
                  <p className="text-red-500 text-sm">{errors.description}</p>
                )}
              </div>

              {/* Catégorie */}
              <div className="bg-white rounded-xl shadow-sm border p-8">
                <label className="block text-sm font-bold mb-3">Catégorie *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-lg"
                >
                  <option value="">Choisir...</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="text-red-500 text-sm">{errors.category}</p>
                )}
              </div>

              {/* PRICE + STOCK */}
              <div className="grid grid-cols-2 gap-6">
                {/* Prix */}
                <div className="bg-white rounded-xl shadow-sm border p-8">
                  <label className="block text-sm font-bold mb-3">Prix *</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg"
                  />
                  {errors.price && (
                    <p className="text-red-500 text-sm">{errors.price}</p>
                  )}
                </div>

                {/* Stock */}
                <div className="bg-white rounded-xl shadow-sm border p-8">
                  <label className="block text-sm font-bold mb-3">Stock *</label>
                  <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg"
                  />
                  {errors.stock && (
                    <p className="text-red-500 text-sm">{errors.stock}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex justify-end space-x-4">
            <Link
              href="/admin/products"
              className="px-8 py-3 border rounded-lg"
            >
              Annuler
            </Link>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-gradient-to-r from-[#1E5FA8] to-[#E6C34A] text-white rounded-lg"
            >
              {isSubmitting ? "Création..." : "Créer le produit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
