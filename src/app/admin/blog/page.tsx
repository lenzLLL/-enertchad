"use client";

import { useEffect, useState } from "react";
import { Plus, Edit2, Trash2, Search, Eye } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const [articles, setArticles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    let mounted = true;
    (async () => {
      setIsLoading(true);
      try {
        const res = await fetch('/api/blog');
        if (!res.ok) throw new Error('Failed to fetch articles');
        const data = await res.json();
        if (mounted) setArticles(data || []);
      } catch (e) {
        console.error('Error loading articles:', e);
      } finally {
        if (mounted) setIsLoading(false);
      }
    })();
    return () => { mounted = false };
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = async (articleId: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cet article?")) return;
    
    try {
      const res = await fetch(`/api/blog?id=${articleId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Erreur suppression");
      
      setArticles((prev) => prev.filter((a) => a.id !== articleId));
      alert("Article supprimé!");
    } catch (error) {
      alert("Erreur lors de la suppression");
    }
  };

  const filteredArticles = articles.filter((a) =>
    a.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / pageSize));
  if (page > totalPages) setPage(totalPages);
  const paginatedArticles = filteredArticles.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#1E5FA8]">Gestion des Articles</h1>
        <a
          href="/admin/blog/create"
          className="bg-gradient-to-r from-[#1E5FA8] to-[#E6C34A] text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:shadow-lg transition"
        >
          <Plus size={20} />
          <span>Ajouter un article</span>
        </a>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-4 py-2">
          <Search size={20} className="text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher un article..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-100 flex-1 outline-none"
          />
        </div>
      </div>

      {/* Articles Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-[#1E5FA8] to-[#164a8a] text-white">
            <tr>
              <th className="text-left py-4 px-6 font-semibold">Titre</th>
              <th className="text-left py-4 px-6 font-semibold">Catégorie</th>
              <th className="text-left py-4 px-6 font-semibold">Auteur</th>
              <th className="text-left py-4 px-6 font-semibold">Statut</th>
              <th className="text-left py-4 px-6 font-semibold">Vues</th>
              <th className="text-left py-4 px-6 font-semibold">Date</th>
              <th className="text-left py-4 px-6 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              Array.from({ length: pageSize }).map((_, i) => (
                <tr key={`skeleton-${i}`} className="border-b border-gray-200">
                  <td className="py-4 px-6"><div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div></td>
                  <td className="py-4 px-6"><div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div></td>
                  <td className="py-4 px-6"><div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse"></div></td>
                  <td className="py-4 px-6"><div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div></td>
                  <td className="py-4 px-6"><div className="h-4 bg-gray-200 rounded w-1/5 animate-pulse"></div></td>
                  <td className="py-4 px-6"><div className="h-4 bg-gray-200 rounded w-1/6 animate-pulse"></div></td>
                  <td className="py-4 px-6"><div className="h-4 bg-gray-200 rounded w-1/6 animate-pulse"></div></td>
                </tr>
              ))
            ) : (
              paginatedArticles.map((article) => (
              <tr
                key={article.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="py-4 px-6">
                  <p className="font-semibold text-gray-800">{article.title}</p>
                </td>
                <td className="py-4 px-6 text-gray-600">{article.category}</td>
                <td className="py-4 px-6 text-gray-600">{article.author}</td>
                <td className="py-4 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      article.status === "Publié"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {article.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <p className="font-semibold">{article.views} vues</p>
                </td>
                <td className="py-4 px-6 text-gray-600">{article.date}</td>
                <td className="py-4 px-6">
                  <div className="flex space-x-3">
                    <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition">
                      <Eye size={18} />
                    </button>
                    <Link
                      href={`/admin/blog/${article.id}`}
                      className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition"
                    >
                      <Edit2 size={18} />
                    </Link>
                    <button
                      onClick={() => handleDelete(article.id)}
                      className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
                </tr>
              ))
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