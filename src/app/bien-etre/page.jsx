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

            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <a href="#hygiene-sante" className="text-[#1E5FA8] hover:underline">Hygiène &amp; Santé</a>
              <a href="#securite" className="text-[#1E5FA8] hover:underline">Sécurité</a>
              <a href="#carriere-famille" className="text-[#1E5FA8] hover:underline">Carrière &amp; Famille</a>
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

      {/* Additional sections requested */}
      <section id="hygiene-sante" className="scroll-mt-28 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-8 md:gap-12">
            <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#E6F8F4] to-white text-[#0EA5A3] shadow-md">🩺</div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Hygiène &amp; Santé</h2>
              <p className="text-gray-700 mb-6 max-w-2xl">Actions de prévention sanitaire, dépistage, protocoles d'hygiène sur site et campagnes de sensibilisation pour réduire les risques sanitaires. Nous adaptons les interventions à vos contraintes opérationnelles.</p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
                  <h4 className="font-semibold mb-2">Audits & recommandations</h4>
                  <p className="text-sm text-gray-600 mb-3">Évaluation sur site avec plan d'action priorisé.</p>
                  <a href="/contact" className="text-sm text-[#1E5FA8] font-semibold">Contactez‑nous →</a>
                </div>

                <div className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
                  <h4 className="font-semibold mb-2">Campagnes de dépistage</h4>
                  <p className="text-sm text-gray-600 mb-3">Organisation complète (logistique, communication, suivi).</p>
                  <a href="/contact" className="text-sm text-[#1E5FA8] font-semibold">En savoir plus →</a>
                </div>

                <div className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
                  <h4 className="font-semibold mb-2">Formations hygiène</h4>
                  <p className="text-sm text-gray-600 mb-3">Modules pratiques pour équipes et encadrement.</p>
                  <a href="/contact" className="text-sm text-[#1E5FA8] font-semibold">Demander une démo →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="securite" className="scroll-mt-28 py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#E8F9FF] to-white text-[#0f4f7d] shadow-md">🛡️</div>
              <h2 className="text-2xl font-bold mt-4 mb-3">Sécurité</h2>
              <p className="text-gray-700 mb-6">Prévention des risques professionnels, plans d'urgence, formations sécurité et mise en conformité réglementaire. Des parcours pratiques pour vos équipes.</p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
                  <h4 className="font-semibold mb-2">Évaluation des risques</h4>
                  <p className="text-sm text-gray-600">Cartographie des dangers, procédures et mesures correctives.</p>
                </div>
                <div className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
                  <h4 className="font-semibold mb-2">Plans & exercices</h4>
                  <p className="text-sm text-gray-600">Simulations et optimisation des réponses d'urgence.</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 bg-white rounded-xl overflow-hidden shadow-lg">
              <img src="/r.png" alt="Sécurité" className="w-full h-56 object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="carriere-famille" className="scroll-mt-28 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-8 md:gap-12">
            <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#FFF8F4] to-white text-[#b3552a] shadow-md">🏡</div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Carrière &amp; Famille</h2>
              <p className="text-gray-700 mb-6 max-w-2xl">Initiatives pour concilier carrière et vie familiale : horaires flexibles, congés parentaux, soutien à la parentalité et développement professionnel. Nous aidons à formaliser des politiques RH pratiques et inclusives.</p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
                  <h4 className="font-semibold mb-2">Politiques RH</h4>
                  <p className="text-sm text-gray-600">Rédaction et accompagnement pour des politiques durables.</p>
                </div>
                <div className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
                  <h4 className="font-semibold mb-2">Soutien parental</h4>
                  <p className="text-sm text-gray-600">Ressources, groupes de soutien et conseils pratiques.</p>
                </div>
                <div className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
                  <h4 className="font-semibold mb-2">Développement</h4>
                  <p className="text-sm text-gray-600">Plans de carrière & formations pour progression interne.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inclusion, Emplois, Dialogue social, Programmes communautaires */}
      <section id="inclusion-diversite" className="scroll-mt-28 py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Inclusion &amp; Diversité</h2>
          <p className="text-gray-700 mb-4">Politiques et actions pour favoriser l'égalité des chances, l'inclusion des groupes sous‑représentés et la diversité de nos équipes.</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg shadow">Recrutement inclusif</div>
            <div className="p-4 bg-white rounded-lg shadow">Mentorat & réseaux internes</div>
            <div className="p-4 bg-white rounded-lg shadow">Mesures anti-discrimination</div>
          </div>
        </div>
      </section>

      <section id="emplois-locaux" className="scroll-mt-28 py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Emplois locaux</h2>
          <p className="text-gray-700 mb-4">Priorité à l'embauche locale, développement des compétences et création d'emplois durables pour les communautés voisines.</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg shadow">Programmes d'alternance et apprentissage</div>
            <div className="p-4 bg-white rounded-lg shadow">Partenariats avec centres de formation locaux</div>
          </div>
        </div>
      </section>

      <section id="dialogue-social" className="scroll-mt-28 py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Dialogue social</h2>
          <p className="text-gray-700 mb-4">Canaux de dialogue et de concertation avec les représentants du personnel et les communautés pour anticiper et résoudre les impacts sociaux.</p>
          <div className="p-4 bg-white rounded-lg shadow">Comités locaux, réunions publiques et mécanismes de plainte</div>
        </div>
      </section>

      <section id="programmes-communautaires" className="scroll-mt-28 py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Programmes communautaires</h2>
          <p className="text-gray-700 mb-4">Initiatives ciblées : infrastructures locales, santé, éducation et projets économiques pour renforcer le capital social.</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg shadow">Projets d'eau potable</div>
            <div className="p-4 bg-white rounded-lg shadow">Soutien aux écoles et formations</div>
            <div className="p-4 bg-white rounded-lg shadow">Micro-projets économiques</div>
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
