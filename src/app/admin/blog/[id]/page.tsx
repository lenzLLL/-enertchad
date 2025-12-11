"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, X, Loader } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { UploadButton } from "@/utils/uploadthing";

export default function EditBlogPage() {
  const params = useParams();
  const router = useRouter();
  const articleId = params.id as string;

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    author: "",
    imageUrl: "",
    status: "Brouillon",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Charger l'article
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await fetch(`/api/blog?id=${articleId}`);
        if (!res.ok) throw new Error("Article non trouvé");
        const articles = await res.json();
        const article = articles.find((a: any) => a.id === articleId);
        
        if (article) {
          setFormData({
            title: article.title || "",
            excerpt: article.excerpt || "",
            content: article.content || "",
            category: article.category || "",
            author: article.author || "",
            imageUrl: article.image || "",
            status: article.status || "Brouillon",
          });
        }
      } catch (error) {
        console.error("Erreur chargement article:", error);
        setErrors({ general: "Impossible de charger l'article" });
      } finally {
        setIsLoading(false);
      }
    };

    if (articleId) fetchArticle();
  }, [articleId]);

  const handleInputChange = (e: any) => {
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const slug = formData.title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      const res = await fetch(`/api/blog?id=${articleId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: formData.title,
          slug,
          content: formData.content,
          author: formData.author,
          category: formData.category,
          image: formData.imageUrl,
          excerpt: formData.excerpt,
          status: formData.status,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Erreur modification article");
      }

      alert("Article modifié avec succès!");
      router.push("/admin/blog");
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
          href="/admin/blog"
          className="flex items-center space-x-2 text-[#1E5FA8] hover:underline"
        >
          <ArrowLeft size={20} />
          <span>Retour aux articles</span>
        </Link>
        <h1 className="text-3xl font-bold text-[#1E5FA8]">Modifier l'article</h1>
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

          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Titre *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Titre de l'article"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5FA8] ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>

          {/* Author & Category */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Auteur *
              </label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                placeholder="Nom de l'auteur"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5FA8] ${
                  errors.author ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.author && (
                <p className="text-red-500 text-sm mt-1">{errors.author}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Catégorie *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5FA8] ${
                  errors.category ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Sélectionner</option>
                <option value="Actualités">Actualités</option>
                <option value="Tutoriels">Tutoriels</option>
                <option value="Guides">Guides</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">{errors.category}</p>
              )}
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Statut
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5FA8]"
            >
              <option value="Brouillon">Brouillon</option>
              <option value="Publié">Publié</option>
            </select>
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Extrait *
            </label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleInputChange}
              placeholder="Court résumé de l'article"
              rows={2}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5FA8] ${
                errors.excerpt ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.excerpt && (
              <p className="text-red-500 text-sm mt-1">{errors.excerpt}</p>
            )}
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Contenu *
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              placeholder="Contenu complet de l'article"
              rows={8}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5FA8] ${
                errors.content ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.content && (
              <p className="text-red-500 text-sm mt-1">{errors.content}</p>
            )}
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Image de l'article *
            </label>
            {formData.imageUrl ? (
              <div className="relative w-48 h-48 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={formData.imageUrl}
                  alt="Article"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, imageUrl: "" }))}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition"
                >
                  <X size={20} />
                </button>
              </div>
            ) : (
              <UploadButton<any>
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  if (res && res.length > 0) {
                    setFormData((prev) => ({
                      ...prev,
                      imageUrl: res[0].url,
                    }));
                  }
                }}
                onUploadError={(error: Error) => {
                  setErrors((prev) => ({
                    ...prev,
                    imageUrl: `Upload failed: ${error.message}`,
                  }));
                }}
              />
            )}
            {errors.imageUrl && (
              <p className="text-red-500 text-sm mt-1">{errors.imageUrl}</p>
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
            href="/admin/blog"
            className="flex-1 bg-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-400 transition text-center"
          >
            Annuler
          </Link>
        </div>
      </form>
    </div>
  );
}
