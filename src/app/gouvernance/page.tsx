"use client"

import { Eye, ShieldCheck, AlertTriangle, FileText, Users, Gavel } from "lucide-react"
import React from 'react'

export default function page() {
  const cards = [
    {
      icon: Eye,
      title: "Transparence & intégrité",
      text: "Publication d'informations claires et vérifiables ; culture d'intégrité à tous les niveaux.",
      color: "from-[#1E5FA8] to-[#3AA655]",
    },
    {
      icon: ShieldCheck,
      title: "Conformité réglementaire",
      text: "Respect des lois et processus de contrôle pour détecter et corriger tout manquement.",
      color: "from-[#3AA655] to-[#2d8242]",
    },
    {
      icon: AlertTriangle,
      title: "Gestion des risques",
      text: "Identification, évaluation et mitigation des risques stratégiques et opérationnels.",
      color: "from-[#E6C34A] to-[#FFD700]",
    },
    {
      icon: FileText,
      title: "Audits internes & externes",
      text: "Audits réguliers pour garantir l'efficacité des contrôles et l'amélioration continue.",
      color: "from-[#6b7280] to-[#374151]",
    },
    {
      icon: Users,
      title: "Anti‑corruption",
      text: "Tolérance zéro, formations et contrôles pour prévenir les pratiques inappropriées.",
      color: "from-[#ef4444] to-[#dc2626]",
    },
    {
      icon: Gavel,
      title: "Décisions traçables",
      text: "Consignation des décisions clés et des justifications pour assurer responsabilité et auditabilité.",
      color: "from-[#1E5FA8] to-[#164a8a]",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <header className="relative h-64 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E5FA8] via-[#164a8a] to-[#3AA655]"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-bold text-5xl md:text-6xl mb-2">Gouvernance</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">Transparence, conformité et gestion responsable pour garantir la confiance de nos parties prenantes.</p>
        </div>
      </header>

      <main className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <section className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E5FA8] mb-4">Notre engagement</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Nous mettons en œuvre des pratiques et des contrôles robustes pour assurer une gouvernance éthique, responsable et traçable à chaque niveau de l'organisation.</p>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {cards.map((c, idx) => {
              const Icon = c.icon
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-t-4 border-transparent hover:border-[#E6C34A]">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg mb-4 bg-gradient-to-br ${c.color} text-white`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1E5FA8] mb-2">{c.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{c.text}</p>
                </div>
              )
            })}
          </section>

          <section className="py-12 px-8 rounded-2xl bg-gradient-to-r from-[#f8fafc] to-white shadow-inner border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-[#1E5FA8]">Vous avez une question sur notre gouvernance ?</h3>
                <p className="text-gray-600">Contactez notre équipe conformité pour toute demande d'information ou d'accès aux rapports.</p>
              </div>
              <div>
                <a href="/contact" className="inline-block bg-[#E6C34A] text-[#1E5FA8] px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform">Nous contacter</a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
