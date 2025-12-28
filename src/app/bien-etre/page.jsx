import Link from 'next/link'
import TestimonialsCarousel from '../../components/TestimonialsCarousel'
import StickyCTA from '../../components/StickyCTA'

export default function BienEtrePage() {
  return (
    <main className="min-h-screen text-gray-800">
      {/* Hero riche */}
      <section className="relative py-20 md:py-32 px-4 bg-gradient-to-r from-[#FFF8F4] to-white overflow-hidden">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#FFECE0] text-[#b3552a] font-semibold text-sm">Programme</span>
              <span className="text-sm text-gray-500">Formules : Diagnostic • Formation • Suivi</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-[#b3552a] leading-tight">Bien‑être & Santé au travail</h1>
            <p className="text-gray-700 max-w-2xl">Des solutions complètes pour améliorer la qualité de vie au travail : prévention, ergonomie, santé mentale, activité physique et accompagnement sur mesure.</p>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-block px-5 py-3 bg-[#1E5FA8] text-white rounded-md font-semibold">Demander un programme</Link>
              <Link href="/blog" className="inline-block px-5 py-3 border border-gray-200 rounded-md text-gray-700">Ressources</Link>
              <a href="#programs" className="inline-block px-5 py-3 text-[#1E5FA8] border border-[#1E5FA8] rounded-md">Voir les programmes</a>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 max-w-sm">
              <div className="text-center">
                <div className="text-xl font-bold text-[#0f4f7d]">+120</div>
                <div className="text-xs text-gray-500">Bénéficiaires</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-[#0f4f7d]">95%</div>
                <div className="text-xs text-gray-500">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-[#0f4f7d]">3+</div>
                <div className="text-xs text-gray-500">Modules</div>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg h-72 md:h-96">
            <img src="/h6.png" alt="Bien-être" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Nos programmes</h2>
          <p className="text-gray-700 mb-6">Des offres modulaires que nous adaptons à la taille et aux besoins de votre organisation.</p>

          <div className="grid md:grid-cols-3 gap-6">
            <article className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <div className="mb-3 w-12 h-12 rounded-md bg-[#FEEFE8] flex items-center justify-center text-[#b3552a]">💬</div>
              <h3 className="font-semibold mb-2">Santé mentale</h3>
              <p className="text-sm text-gray-600 mb-3">Ateliers, écoute et plans de prévention du stress au travail.</p>
              <a href="/contact" className="text-sm text-[#b3552a] font-semibold">En savoir plus →</a>
            </article>

            <article className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <div className="mb-3 w-12 h-12 rounded-md bg-[#EFFDFB] flex items-center justify-center text-[#0ea79a]">🏃‍♂️</div>
              <h3 className="font-semibold mb-2">Santé physique</h3>
              <p className="text-sm text-gray-600 mb-3">Programmes d'activité, dépistages et conseils santé sur site.</p>
              <a href="/contact" className="text-sm text-[#b3552a] font-semibold">En savoir plus →</a>
            </article>

            <article className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <div className="mb-3 w-12 h-12 rounded-md bg-[#F3FAF0] flex items-center justify-center text-[#2d8a45]">🪑</div>
              <h3 className="font-semibold mb-2">Ergonomie</h3>
              <p className="text-sm text-gray-600 mb-3">Audits, recommandations et équipements pour postes de travail.</p>
              <a href="/contact" className="text-sm text-[#b3552a] font-semibold">En savoir plus →</a>
            </article>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Témoignages</h2>
          <div className="max-w-2xl">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      <StickyCTA />

      {/* FAQ */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-3">
            <details className="p-4 bg-white rounded-lg shadow">
              <summary className="font-medium">Quels formats d'intervention proposez-vous ?</summary>
              <div className="mt-2 text-sm text-gray-600">Nous proposons des diagnostics, ateliers en présentiel, modules e-learning et accompagnement sur mesure.</div>
            </details>

            <details className="p-4 bg-white rounded-lg shadow">
              <summary className="font-medium">Combien de temps dure un programme ?</summary>
              <div className="mt-2 text-sm text-gray-600">Les programmes vont d'une demi-journée à plusieurs mois selon l'ambition et le suivi souhaités.</div>
            </details>

            <details className="p-4 bg-white rounded-lg shadow">
              <summary className="font-medium">Intervenez‑vous à distance ?</summary>
              <div className="mt-2 text-sm text-gray-600">Oui, nous adaptons nos interventions en présentiel, hybride ou 100% distanciel selon vos besoins.</div>
            </details>
          </div>
        </div>
      </section>

    </main>
  )
}
