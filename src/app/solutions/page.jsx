"use client"

import Link from 'next/link'
import { Users, Briefcase, Globe, Factory, Zap } from 'lucide-react'

export default function SolutionsPage() {
    const sections = [
    {
      id: 'particuliers-professionnels',
      title: 'Particuliers & Professionnels',
      desc: "Installations solaires résidentielles, bornes de recharge, maintenance et solutions de financement adaptées.",
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'entreprises-industries',
      title: 'Entreprises & Industries',
      desc: "Audits énergétiques, optimisation des procédés, fourniture d'énergie et solutions d'efficacité pour sites industriels.",
      icon: Briefcase,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'gouvernements-institutions',
      title: 'Gouvernements & Institutions',
      desc: "Conseil politique, projets d'infrastructure et partenariats public‑privé pour accélérer la transition nationale.",
      icon: Globe,
      color: 'from-yellow-400 to-yellow-500'
    },
    {
      id: 'solutions-industrielles-techniques',
      title: 'Solutions Industrielles & Techniques',
      desc: "Intégration d'équipements, automatisation, gestion des émissions et services de maintenance industrielle.",
      icon: Factory,
      color: 'from-indigo-500 to-indigo-700'
    },
    {
      id: 'transition-energetique-durabilite',
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
              <a href="#particuliers-professionnels" className="inline-block px-4 py-2.5 text-[#1E5FA8] border border-[#1E5FA8] rounded-md">Voir les sous-liens</a>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg h-72 md:h-96">
            <img src="/h5.png" alt="Solutions" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Cards overview removed to simplify page (anchors below used instead) */}

      {/* Detailed sections (cards-like layout) */}
        <div className="max-w-6xl mx-auto px-4 py-12 grid gap-8">
        

        {/* Main solution sections (updated) */}
        {sections.map((s) => (
          <section id={s.id} key={s.id} className="scroll-mt-28">
            <div className="bg-white rounded-2xl overflow-hidden border transform transition-all duration-200 group hover:shadow-lg hover:-translate-y-1">
              <div className="grid md:grid-cols-4">
                <div className={`p-8 flex items-center justify-center md:col-span-1 bg-gradient-to-br ${s.color}`}>
                  <div className="text-white text-center">
                    <s.icon size={36} className="mx-auto mb-3" />
                    <h4 className="text-xl font-extrabold tracking-tight">{s.title}</h4>
                  </div>
                </div>
                <div className="md:col-span-3 p-8">
                  <p className="text-gray-700 leading-relaxed mb-4">{s.desc}</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Analyse et diagnostic adaptés au contexte local</li>
                    <li>Mise en œuvre avec partenaires locaux</li>
                    <li>Suivi et rapport d'impact périodique</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

    </main>
  )
}
