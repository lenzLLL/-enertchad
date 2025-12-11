"use client";

import { useState } from "react";
import { ArrowLeft, Upload, X } from "lucide-react";
import Link from "next/link";
import { UploadButton } from "@/utils/uploadthing";

export default function CreateBlogPage() {
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    author: "",
    imageUrl: "",
    status: "Brouillon",
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
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




const validateForm = (): boolean => {
  const newErrors: Record<string, string> = {};

  if (!formData.title.trim()) newErrors.title = "Le titre est obligatoire";
  if (!formData.excerpt.trim()) newErrors.excerpt = "L'extrait est obligatoire";
  if (!formData.content.trim()) newErrors.content = "Le contenu est obligatoire";
  if (!formData.category) newErrors.category = "La catégorie est obligatoire";
  if (!formData.author.trim()) newErrors.author = "L'auteur est obligatoire";
  if (!formData.imageUrl) newErrors.imageUrl = "L'image est obligatoire";

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Ensure we have an image URL (uploaded via UploadThing)
      const imageUrl = formData.imageUrl || imagePreview || "";

      // generate slug from title
      const slug = formData.title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      const res = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: formData.title,
          slug,
          content: formData.content,
          author: formData.author,
          category: formData.category,
          image: imageUrl,
          excerpt: formData.excerpt,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Erreur création article");
      }

      alert("Article créé avec succès!");
      // reset
      setFormData({
        title: "",
        excerpt: "",
        content: "",
        category: "",
        author: "",
        imageUrl: "",
        status: "Brouillon",
      });
      setImagePreview(null);
    } catch (error: any) {
      alert(`Erreur : ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const categories = ["Énergie", "Mobilité", "Maintenance", "Innovation", "Durabilité"];
    const removeImage = () => {
    setFormData((prev) => ({ ...prev, imageUrl: "" }));
    
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-8">
        <Link
          href="/admin/blog"
          className="flex items-center space-x-2 text-[#1E5FA8] hover:text-[#164a8a] font-semibold mb-4 transition"
        >
          <ArrowLeft size={20} />
          <span>Retour aux articles</span>
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Créer un nouvel article</h1>
        <p className="text-gray-600 mt-2">Remplissez les informations ci-dessous pour publier un nouvel article</p>
      </div>

      {/* Form */}
      <div className="p-8">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Image Upload */}
            <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 sticky top-24">
                               <h2 className="text-lg font-bold text-gray-900 mb-6">
                                 Image de l'article
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

            {/* Right Column - Form Fields */}
            <div className="lg:col-span-2 space-y-6">
              {/* Titre */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <label className="block text-sm font-bold text-gray-900 mb-3">
                  Titre *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Ex: L'énergie solaire: L'avenir du Tchad"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5FA8] transition ${
                    errors.title ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.title && (
                  <p className="text-red-500 text-sm mt-2">{errors.title}</p>
                )}
              </div>

              {/* Extrait */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <label className="block text-sm font-bold text-gray-900 mb-3">
                  Extrait (description courte) *
                </label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  placeholder="Une description courte qui apparaîtra dans la liste des articles..."
                  rows={3}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5FA8] transition resize-none ${
                    errors.excerpt ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.excerpt && (
                  <p className="text-red-500 text-sm mt-2">{errors.excerpt}</p>
                )}
              </div>

              {/* Catégorie et Auteur */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <label className="block text-sm font-bold text-gray-900 mb-3">
                    Catégorie *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5FA8] transition ${
                      errors.category ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Sélectionnez une catégorie</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="text-red-500 text-sm mt-2">{errors.category}</p>
                  )}
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <label className="block text-sm font-bold text-gray-900 mb-3">
                    Auteur *
                  </label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    placeholder="Nom de l'auteur"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5FA8] transition ${
                      errors.author ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.author && (
                    <p className="text-red-500 text-sm mt-2">{errors.author}</p>
                  )}
                </div>
              </div>

              {/* Contenu */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <label className="block text-sm font-bold text-gray-900 mb-3">
                  Contenu complet *
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  placeholder="Écrivez le contenu complet de votre article..."
                  rows={10}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5FA8] transition resize-none ${
                    errors.content ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.content && (
                  <p className="text-red-500 text-sm mt-2">{errors.content}</p>
                )}
              </div>

              {/* Statut */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <label className="block text-sm font-bold text-gray-900 mb-3">
                  Statut
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5FA8] transition"
                >
                  <option value="Brouillon">Brouillon</option>
                  <option value="Publié">Publié</option>
                  <option value="Archivé">Archivé</option>
                </select>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <Link
              href="/admin/blog"
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Annuler
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 bg-gradient-to-r from-[#1E5FA8] to-[#E6C34A] text-white rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed ${
                isSubmitting ? "opacity-50" : ""
              }`}
            >
              {isSubmitting ? "Publication en cours..." : "Publier l'article"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
