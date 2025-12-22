"use client";

import { Cpu, Battery, Wifi, LineChart, Atom } from "lucide-react";

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center overflow-hidden">
        <img src="/h4.png" alt="Technologies EnerTchad" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E5FA8]/30 via-[#E6C34A]/10 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-white">
          <div className="mb-4 inline-block bg-[#E6C34A] text-[#1E5FA8] px-3 py-1 rounded-full text-xs font-bold shadow">⚙️ Technologies</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">Solutions technologiques pour une transition énergétique résiliente</h1>
          <p className="text-base md:text-lg max-w-3xl leading-relaxed opacity-95 text-gray-100">
            Stockage, réseaux intelligents, hydrogène vert et supervision : nous concevons et déployons des technologies robustes adaptées aux réalités locales pour maximiser la disponibilité et l'impact.
          </p>

          <div className="mt-8 flex gap-3">
            <a href="/services" className="inline-flex items-center px-6 py-3 bg-[#E6C34A] text-[#1E5FA8] rounded-lg font-bold shadow">Voir nos solutions</a>
            <a href="/contact" className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg font-medium">Nous contacter</a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 bg-[#E6F0FF] text-[#1E5FA8] rounded-lg flex items-center justify-center">
                <Cpu className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold">Systèmes de stockage</h3>
              <p className="text-gray-700">Batteries modulaires et solutions hybrides permettant de stocker l'énergie produite par le solaire et l'éolien pour une disponibilité continue.</p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 bg-[#F0F8F1] text-[#2d8a45] rounded-lg flex items-center justify-center">
                <Battery className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold">Smart Grid & Monitoring</h3>
              <p className="text-gray-700">Réseaux intelligents, capteurs IoT et plateformes de supervision pour optimiser la distribution et réduire les pertes.</p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 bg-[#FFF6E3] text-[#d4a028] rounded-lg flex items-center justify-center">
                <Wifi className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold">Connectivité & Télégestion</h3>
              <p className="text-gray-700">Solutions de télégestion pour piloter installations à distance, maintenance prédictive et dashboards clairs pour décisionnaires.</p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <LineChart className="w-6 h-6 text-[#1E5FA8]" />
                <h4 className="font-bold">Analytique & IA</h4>
              </div>
              <p className="text-gray-700">Modèles prédictifs pour optimiser rendement, planification de charge et maintenance.</p>
            </div>

            <div className="p-6 border rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Atom className="w-6 h-6 text-[#3AA655]" />
                <h4 className="font-bold">Hydrogène & Power-to-X</h4>
              </div>
              <p className="text-gray-700">Études de faisabilité pour production d'hydrogène vert et son intégration industrielle.</p>
            </div>

            <div className="p-6 border rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-6 h-6 text-[#E6C34A]" />
                <h4 className="font-bold">Microgrids & Off-grid</h4>
              </div>
              <p className="text-gray-700">Solutions micro-réseaux pour sites isolés, combinant solaire, stockage et gouvernance locale.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="/contact" className="inline-block px-8 py-3 bg-[#E6C34A] text-[#1E5FA8] rounded-lg font-bold shadow-md">Nous contacter pour un audit technologique</a>
          </div>
        </div>
      </section>
    </main>
  );
}
