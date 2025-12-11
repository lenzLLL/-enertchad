import { Calendar, User, ArrowRight } from "lucide-react";

export default function BlogSection({ articles: propArticles }) {
  const fuelTips =
    "https://raw.createusercontent.com/f65761c3-3a24-4d96-86d2-04e2ce50d663/";
  const evCharging =
    "https://raw.createusercontent.com/74077318-7dbb-4b25-bd81-0d396f3a9993/";
  const solarEnergy =
    "https://raw.createusercontent.com/65649431-384f-4f10-8370-24aa69766035/";

  const fallbackArticles = [
    {
      id: 1,
      title: "L'énergie solaire: L'avenir du Tchad",
      excerpt: "Découvrez pourquoi les panneaux solaires sont la solution idéale pour les entreprises tchadiennes en 2025 et comment économiser jusqu'à 60% sur vos factures énergétiques.",
      author: "Ahmed Hassan",
      date: "15 Décembre 2024",
      category: "Énergie",
      image: solarEnergy,
      slug: "energie-solaire-avenir-tchad",
    },
    {
      id: 2,
      title: "Mobilité électrique: La révolution commence",
      excerpt: "Les véhicules électriques transforment le paysage urbain. Apprenez comment notre réseau de recharge facilite la transition vers une mobilité plus verte.",
      author: "Fatima Abdoulaye",
      date: "12 Décembre 2024",
      category: "Mobilité",
      image: evCharging,
      slug: "mobilite-electrique-revolution",
    },
    {
      id: 3,
      title: "Maintenance auto: 5 conseils pour prolonger la vie de votre véhicule",
      excerpt: "Apprenez les meilleures pratiques d'entretien automobile pour garder votre véhicule en excellent état et éviter les réparations coûteuses.",
      author: "Jean Pierre Dubois",
      date: "8 Décembre 2024",
      category: "Maintenance",
      image: fuelTips,
      slug: "maintenance-auto-5-conseils",
    },
  ];

  const propProvided = Array.isArray(propArticles);
  const articlesToRender = propProvided ? propArticles : fallbackArticles;

  // date parsing helper to handle strings, numbers and Firestore timestamps
  function parseToDate(value) {
    if (!value) return null;
    if (value instanceof Date) return value;
    if (typeof value.toDate === 'function') return value.toDate();
    if (typeof value === 'object') {
      if (typeof value.seconds === 'number') return new Date(value.seconds * 1000);
      if (typeof value._seconds === 'number') return new Date(value._seconds * 1000);
    }
    if (typeof value === 'number') return value > 1e12 ? new Date(value) : new Date(value * 1000);
    if (typeof value === 'string') {
      const d = new Date(value);
      if (!isNaN(d)) return d;
      const n = Number(value);
      if (!isNaN(n)) return n > 1e12 ? new Date(n) : new Date(n * 1000);
    }
    return null;
  }

  function formatDateStr(value) {
    const d = parseToDate(value);
    if (!d) return '';
    try { return d.toLocaleDateString('fr-FR'); } catch (e) { return d.toDateString(); }
  }

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-white to-[#F5E6D3]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[#3AA655] font-bold text-sm uppercase tracking-widest inline-block mb-4 px-4 py-2 bg-green-100/50 rounded-full">
            📰 Blog EnerTchad
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-[#1E5FA8] mb-6">
            Nos Articles <span className="bg-gradient-to-r from-[#3AA655] to-[#E6C34A] bg-clip-text text-transparent">Récents</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            Restez informé des dernières actualités sur l'énergie, la mobilité électrique et les solutions automobiles innovantes
          </p>
        </div>

        {/* Articles Grid */}
        {propProvided && articlesToRender.length === 0 ? (
          <div className="text-center py-12 mb-12">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-[#1E5FA8] mb-2">Aucun article disponible</h3>
            <p className="text-gray-600">Il n'y a pas encore d'articles publiés. Revenez bientôt ou contactez l'administrateur.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8 mb-12">
            {articlesToRender.map((article, idx) => (
              <article
                key={article.id || article.slug || idx}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-[#E6C34A] group flex flex-col"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-300">
                  <img
                    src={article.image || article.imageUrl || ''}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-[#E6C34A] text-[#1E5FA8] px-3 py-1 rounded-full text-xs font-bold">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1E5FA8] transition">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="space-y-3 border-t border-gray-100 pt-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <User size={16} />
                      <span>{article.author || article.authorName || 'EnerTchad'}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar size={16} />
                      <span>{ article.date ? (typeof article.date === 'string' && article.date.length>0 && isNaN(Date.parse(article.date)) ? article.date : formatDateStr(article.date)) : (article.createdAt ? formatDateStr(article.createdAt) : '') }</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={`/blog/${article.slug}`}
                    className="mt-6 inline-flex items-center space-x-2 text-[#1E5FA8] font-bold group-hover:text-[#E6C34A] transition"
                  >
                    <span>Lire l'article</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="/blog"
            className="inline-block bg-gradient-to-r from-[#1E5FA8] to-[#3AA655] text-white px-12 py-4 rounded-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105 text-lg"
          >
            Lire tous les articles
          </a>
        </div>
      </div>
    </section>
  );
}
