import Link from 'next/link'

export default function InvestisseursPage() {
  return (
    <main className="min-h-screen text-gray-800">
      <section className="py-20 md:py-28 px-4 bg-gradient-to-r from-white to-[#F7FBFF]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-white text-sm font-semibold border mb-3">Investissement</span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0f4f7d] mb-4">Opportunités pour investisseurs</h1>
            <p className="text-gray-700 mb-6 max-w-2xl">Découvre notre pipeline de projets en énergie et environnement, modèles financiers clairs et options de co-investissement adaptées aux profils institutionnels et privés.</p>

            <div className="flex gap-3 mb-6">
              <Link href="/contact" className="inline-block px-5 py-3 bg-[#1E5FA8] text-white rounded-md font-semibold">Contact investisseurs</Link>
              <a href="/investors-deck.pdf" className="inline-block px-5 py-3 border border-gray-200 rounded-md text-gray-700">Télécharger la brochure</a>
            </div>

            <div className="grid grid-cols-3 gap-3 max-w-xs">
              <div className="text-center">
                <div className="text-xl font-bold text-[#0f4f7d]">€30M+</div>
                <div className="text-xs text-gray-500">Capital ciblé</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-[#0f4f7d]">12</div>
                <div className="text-xs text-gray-500">Projets pipeline</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-[#0f4f7d]">5 yrs</div>
                <div className="text-xs text-gray-500">Horizon type</div>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg h-72 md:h-96">
            <img src="/b.png" alt="Investisseurs" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Pourquoi investir avec nous</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">Projets vérifiés</h3>
              <p className="text-sm text-gray-600">Due diligence complète et structuration financière.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">Retour projeté</h3>
              <p className="text-sm text-gray-600">Modèles conservateurs et scénarios stress-testés.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">Accompagnement</h3>
              <p className="text-sm text-gray-600">Support technique, juridique et opérationnel.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
