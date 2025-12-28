import Link from 'next/link'

export default function MobilitePage() {
  return (
    <main className="min-h-screen text-gray-800">
      <section className="py-20 md:py-28 px-4 bg-gradient-to-r from-[#E8F9FF] to-white">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full bg-white text-sm font-semibold border">Mobilité</span>
              <span className="text-sm text-gray-500">Flottes • Trajets • Électrification</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0f4f7d] mb-4">Mobilité durable pour entreprises</h1>
            <p className="text-gray-700 mb-6 max-w-2xl">Planification stratégique des déplacements, conversion de flottes vers l'électrique, et optimisation pour réduire coûts et émissions.</p>

            <div className="flex flex-wrap gap-3 mb-6">
              <Link href="/contact" className="inline-block px-5 py-3 bg-[#1E5FA8] text-white rounded-md font-semibold">Nous contacter</Link>
              <Link href="/blog" className="inline-block px-5 py-3 border border-gray-200 rounded-md text-gray-700">Ressources</Link>
              <a href="#offers" className="inline-block px-5 py-3 text-[#1E5FA8] border border-[#1E5FA8] rounded-md">Voir offres</a>
            </div>

            <div className="grid grid-cols-3 gap-3 max-w-xs">
              <div className="text-center">
                <div className="text-xl font-bold text-[#0f4f7d]">+50</div>
                <div className="text-xs text-gray-500">Projets</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-[#0f4f7d]">-22%</div>
                <div className="text-xs text-gray-500">Émissions moyens</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-[#0f4f7d]">24/7</div>
                <div className="text-xs text-gray-500">Support</div>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg h-72 md:h-96">
            <img src="/b.png" alt="Flotte électrique" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section id="offers" className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Nos offres phares</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <article className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="mb-3 text-2xl">🚗</div>
              <h3 className="font-semibold mb-2">Plan mobilité stratégique</h3>
              <p className="text-sm text-gray-600 mb-3">Diagnostic détaillé et feuille de route opérationnelle.</p>
              <a href="/contact" className="text-sm text-[#1E5FA8] font-semibold">Demander un audit →</a>
            </article>

            <article className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="mb-3 text-2xl">⚡</div>
              <h3 className="font-semibold mb-2">Conversion flottes électriques</h3>
              <p className="text-sm text-gray-600 mb-3">Études, pilotage et infrastructures de recharge.</p>
              <a href="/contact" className="text-sm text-[#1E5FA8] font-semibold">En savoir plus →</a>
            </article>

            <article className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="mb-3 text-2xl">🗺️</div>
              <h3 className="font-semibold mb-2">Optimisation trajets & logistique</h3>
              <p className="text-sm text-gray-600 mb-3">Réduction des kilomètres et optimisation des coûts.</p>
              <a href="/contact" className="text-sm text-[#1E5FA8] font-semibold">Planifier une démo →</a>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
