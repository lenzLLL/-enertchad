"use client"

import Link from 'next/link'
import { Users, Briefcase, Globe, Factory, Zap } from 'lucide-react'

export default function SolutionsPage() {
  const sections = [
    {
      id: 'particuliers',
      title: 'Particuliers & Professionnels',
      desc: "Installations solaires résidentielles, bornes de recharge, maintenance et solutions de financement adaptées.",
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'entreprises',
      title: 'Entreprises & Industries',
      desc: "Audits énergétiques, optimisation des procédés, fourniture d'énergie et solutions d'efficacité pour sites industriels.",
      icon: Briefcase,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'gouvernements',
      title: 'Gouvernements & Institutions',
      desc: "Conseil politique, projets d'infrastructure et partenariats public‑privé pour accélérer la transition nationale.",
      icon: Globe,
      color: 'from-yellow-400 to-yellow-500'
    },
    {
      id: 'solutions-industrielles',
      title: 'Solutions Industrielles & Techniques',
      desc: "Intégration d'équipements, automatisation, gestion des émissions et services de maintenance industrielle.",
      icon: Factory,
      color: 'from-indigo-500 to-indigo-700'
    },
    {
      id: 'transition',
      title: 'Transition Energétique & Durabilité',
      desc: "Feuille de route bas‑carbone, projets renouvelables, efficacité et financements verts.",
      icon: Zap,
      color: 'from-emerald-400 to-emerald-600'
    }
  ]

  return (
    <main className="min-h-screen text-gray-800 bg-white">
      <section className="py-20 md:py-28 px-4 bg-gradient-to-r from-white to-[#F7FBFF]">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full bg-white text-sm font-semibold border">Solutions</span>
              <span className="text-sm text-gray-500">Offres sur-mesure pour tous les profils</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0f4f7d] mb-4">Nos solutions — par profil</h1>
            <p className="text-gray-700 mb-6 max-w-2xl">Des offres modulaires, techniques et financières pour accompagner la transition énergétique des ménages, entreprises et institutions.</p>

            <div className="flex flex-wrap gap-2 mb-6">
              <Link href="/contact" className="inline-block px-4 py-2.5 bg-[#1E5FA8] text-white rounded-md font-semibold">Nous contacter</Link>
              <Link href="/blog" className="inline-block px-4 py-2.5 border border-gray-200 rounded-md text-gray-700">Ressources</Link>
              <a href="#particuliers" className="inline-block px-4 py-2.5 text-[#1E5FA8] border border-[#1E5FA8] rounded-md">Voir les sous-liens</a>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg h-72 md:h-96">
            <img src="/h5.png" alt="Solutions" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Cards overview */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((s) => {
              const Icon = s.icon
              return (
                <a key={s.id} href={`#${s.id}`} className="group block rounded-2xl p-4 transform hover:-translate-y-2 transition-all relative overflow-hidden" style={{border: '1px solid rgba(15,79,125,0.06)'}}>
                  <div className={`absolute left-0 top-0 w-full h-1 bg-gradient-to-r ${s.color}`}></div>
                  <div className="flex items-start gap-3 relative">
                    <div className={`flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-xl text-white shadow-lg bg-gradient-to-br ${s.color}`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#0f4f7d] mb-1">{s.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{s.desc}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E5FA8] group-hover:underline">En savoir plus <span className="text-[#E6C34A]">→</span></span>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed sections (cards-like layout) */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-12">
        {sections.map((s, idx) => {
          const Icon = s.icon
          return (
            <section id={s.id} key={s.id} className="scroll-mt-28">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border">
                  <div className="grid md:grid-cols-3">
                    <div className={`p-6 flex items-center justify-center bg-gradient-to-br ${s.color}`}>
                      <div className="text-white text-center">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-3 shadow-lg">
                          <Icon size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-white">{s.title}</h3>
                      </div>
                    </div>
                    <div className="md:col-span-2 p-6">
                      <p className="text-gray-700 mb-4">{s.desc}</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="p-3 bg-gray-50 rounded-lg">Offre clé — Audit & feuille de route</div>
                        <div className="p-3 bg-gray-50 rounded-lg">Mise en œuvre — Pilote & déploiement</div>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
          )
        })}

        <section className="py-12 px-6 rounded-2xl bg-gradient-to-r from-[#f8fafc] to-white shadow-inner border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-[#1E5FA8]">Besoin d'une solution sur-mesure ?</h3>
              <p className="text-gray-600">Contactez-nous pour un diagnostic et une proposition adaptée.</p>
            </div>
            <div>
              <a href="/contact" className="inline-block bg-[#E6C34A] text-[#1E5FA8] px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform">Nous contacter</a>
            </div>
          </div>
        </section>
      </div>

    </main>
  )
}
