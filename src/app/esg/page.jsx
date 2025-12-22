"use client";

import { Leaf, Users, Shield, Award } from "lucide-react";

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center overflow-hidden bg-white">
        <img src="/h4.png" alt="ESG EnerTchad" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3AA655]/35 via-white/10 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-white">
          <div className="mb-4 inline-block bg-[#3AA655] text-white px-3 py-1 rounded-full text-xs font-bold shadow">🌱 ESG</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">ESG : vers une énergie responsable et inclusive</h1>
          <p className="text-base md:text-lg leading-relaxed text-gray-100 max-w-3xl">
            Nous intégrons l'environnement, le social et la gouvernance dans toutes nos activités — réduction des émissions, création d'emplois locaux et transparence pour nos partenaires.
          </p>

          <div className="mt-8 flex gap-3">
            <a href="/contact" className="inline-flex items-center px-6 py-3 bg-[#3AA655] text-white rounded-lg font-bold shadow">Demandez notre rapport ESG</a>
            <a href="/services" className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg font-medium">Découvrir nos actions</a>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-2xl text-center">
            <div className="mx-auto w-14 h-14 bg-[#E9F8EE] text-[#2d8a45] rounded-lg flex items-center justify-center mb-4">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg">Environnement</h3>
            <p className="text-gray-700 mt-2">Réduction des émissions, gestion durable des ressources, projets solaires et bioénergies à faible empreinte.</p>
          </div>

          <div className="p-6 border rounded-2xl text-center">
            <div className="mx-auto w-14 h-14 bg-[#EFF6FF] text-[#1E5FA8] rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg">Social</h3>
            <p className="text-gray-700 mt-2">Formation, emplois locaux et sécurité : nous investissons dans les compétences et le bien-être des communautés.</p>
          </div>

          <div className="p-6 border rounded-2xl text-center">
            <div className="mx-auto w-14 h-14 bg-[#FFF8E6] text-[#d4a028] rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg">Gouvernance</h3>
            <p className="text-gray-700 mt-2">Transparence, conformité et éthique : pilotage clair des risques et reporting structuré pour nos partenaires.</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-12 text-center">
          <h4 className="text-xl font-bold mb-4">Nos engagements mesurables</h4>
          <p className="text-gray-700 mb-6">Nous suivons des indicateurs clés (réduction CO₂, création d'emplois locaux, conformité HSE) et publions nos progrès pour assurer responsabilité et confiance.</p>
          <a href="/contact" className="inline-block px-8 py-3 bg-[#3AA655] text-white rounded-lg font-bold shadow">Demandez notre rapport ESG</a>
        </div>
      </section>
    </main>
  );
}
