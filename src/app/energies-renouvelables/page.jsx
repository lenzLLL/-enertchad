"use client";

import { Leaf, Wind, Droplet } from "lucide-react";

export default function Page() {
  return (
    <main>
      <section className="relative h-[48vh] md:h-[60vh] flex items-center overflow-hidden">
        <img src="/h4.png" alt="Énergies renouvelables" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3AA655]/35 via-white/10 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-white">
          <div className="mb-4 inline-block bg-[#3AA655] text-white px-3 py-1 rounded-full text-xs font-bold shadow">🌞 Renouvelables</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">Énergies renouvelables adaptées au contexte local</h1>
          <p className="text-base md:text-lg max-w-3xl leading-relaxed text-gray-100">
            Solutions solaires, éoliennes, hydro et bioénergies conçues pour apporter une énergie propre, fiable et rentable aux communautés et aux entreprises.
          </p>

          <div className="mt-8 flex gap-3">
            <a href="/services" className="inline-flex items-center px-6 py-3 bg-[#3AA655] text-white rounded-lg font-bold shadow">Nos projets</a>
            <a href="/contact" className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg font-medium">Demander un devis</a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl border">
            <div className="w-12 h-12 bg-[#E9F8EE] text-[#2d8a45] rounded-lg flex items-center justify-center mb-4">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg">Solaire Photovoltaïque</h3>
            <p className="text-gray-700 mt-2">Conception, installation et maintenance de systèmes PV résidentiels et industriels, avec options de stockage.</p>
          </div>

          <div className="p-6 rounded-2xl border">
            <div className="w-12 h-12 bg-[#EFF6FF] text-[#1E5FA8] rounded-lg flex items-center justify-center mb-4">
              <Wind className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg">Éolien & Mini-éoliennes</h3>
            <p className="text-gray-700 mt-2">Études de faisabilité, installation et maintenance de turbines adaptées aux sites locaux.</p>
          </div>

          <div className="p-6 rounded-2xl border">
            <div className="w-12 h-12 bg-[#FFF8E6] text-[#d4a028] rounded-lg flex items-center justify-center mb-4">
              <Droplet className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg">Hydro & Bioénergies</h3>
            <p className="text-gray-700 mt-2">Valorisation de la biomasse et petites centrales hydro pour énergie décentralisée et résiliente.</p>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto text-center">
          <p className="text-gray-700 mb-6">Nous accompagnons chaque projet depuis l'étude jusqu'à l'exploitation en privilégiant l'impact social et environnemental.</p>
          <a href="/contact" className="inline-block px-8 py-3 bg-[#1E5FA8] text-white rounded-lg font-bold">Contactez notre équipe</a>
        </div>
      </section>
    </main>
  );
}
