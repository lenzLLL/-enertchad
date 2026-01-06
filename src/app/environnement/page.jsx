"use client";

import React from "react";
import { AirVent, Droplet, TreeDeciduous, Recycle } from "lucide-react";

export default function EnvironnementPage() {
  return (
    <main className="min-h-screen text-gray-800">
      <style>{`html { scroll-behavior: smooth; }`}</style>

      {/* Hero */}
      <section className="relative py-20 md:py-32 px-4 bg-gradient-to-r from-[#E8F9FF] to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-[#E8F9FF] to-white"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid gap-8 items-center md:grid-cols-2">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#0f4f7d] mb-4">Environnement</h1>
              <p className="text-gray-700 max-w-3xl mb-6">Approche intégrée sur la qualité de l'air, la gestion de l'eau, la santé des sols et la gestion des déchets. Politiques, solutions techniques et renforcement des capacités pour préserver nos ressources naturelles.</p>
              <div className="inline-flex rounded-full bg-white/60 p-1 shadow-lg">
                <a href="#air" className="px-4 py-2 text-sm md:text-base text-[#0f4f7d] font-medium hover:underline">Air</a>
                <a href="#eau" className="px-4 py-2 text-sm md:text-base text-[#0f4f7d] font-medium hover:underline">Eau</a>
                <a href="#terre" className="px-4 py-2 text-sm md:text-base text-[#0f4f7d] font-medium hover:underline">Terre</a>
                <a href="#dechets" className="px-4 py-2 text-sm md:text-base text-[#0f4f7d] font-medium hover:underline">Déchets</a>
              </div>
            </div>

            {/* Hero image */}
            <div className="order-first md:order-last">
              <img src="/c.jpg" alt="Paysage - Environnement" className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky anchor nav */}
      <div className="sticky top-16 z-30 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex gap-4 py-3">
            <a href="#air" className="text-sm text-[#1E5FA8] font-semibold">Air</a>
            <a href="#eau" className="text-sm text-[#1E5FA8] font-semibold">Eau</a>
            <a href="#terre" className="text-sm text-[#1E5FA8] font-semibold">Terre</a>
            <a href="#dechets" className="text-sm text-[#1E5FA8] font-semibold">Déchets</a>
          </nav>
        </div>
      </div>

      {/* Sections */}
      <section id="air" className="scroll-mt-28 py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center justify-center w-14 h-14 bg-[#E8F7FF] text-[#0f4f7d] rounded-lg mb-4 shadow">
              <AirVent className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Qualité de l'air</h2>
            <p className="text-gray-700 mb-4">Surveillance des émissions, réduction des polluants atmosphériques et plans d'atténuation pour protéger la santé humaine et la biodiversité.</p>
            <ul className="grid gap-2 sm:grid-cols-2 list-inside text-gray-700">
              <li className="before:content-['•'] before:text-[#1E5FA8]">Mesures & monitoring (PM2.5, NOx, SOx)</li>
              <li className="before:content-['•'] before:text-[#1E5FA8]">Techniques de réduction des émissions</li>
              <li className="before:content-['•'] before:text-[#1E5FA8]">Zones tampon et contrôle des poussières</li>
              <li className="before:content-['•'] before:text-[#1E5FA8]">Études d'impact et conformité</li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg h-64 bg-[url('/h4.png')] bg-cover bg-center"></div>
        </div>
      </section>

      <section id="eau" className="scroll-mt-28 py-12 md:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-lg h-64 bg-[url('/r.png')] bg-cover bg-center"></div>
          <div>
            <div className="inline-flex items-center justify-center w-14 h-14 bg-[#E6F8F4] text-[#0EA5A3] rounded-lg mb-4 shadow">
              <Droplet className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Gestion de l'eau</h2>
            <p className="text-gray-700 mb-4">Conception de systèmes résilients: adduction, traitement, assainissement et réutilisation pour collectivités et industries.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-4 bg-white rounded-lg shadow">Adduction d'eau potable et réseaux</div>
              <div className="p-4 bg-white rounded-lg shadow">Traitement des eaux usées & réutilisation</div>
              <div className="p-4 bg-white rounded-lg shadow">Désalinisation et solutions côtières</div>
              <div className="p-4 bg-white rounded-lg shadow">Valorisation des boues (biogaz, compost)</div>
            </div>
          </div>
        </div>
      </section>

      <section id="terre" className="scroll-mt-28 py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center justify-center w-14 h-14 bg-[#F0F7EA] text-[#2d8a45] rounded-lg mb-4 shadow">
              <TreeDeciduous className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Santé des sols et terres</h2>
            <p className="text-gray-700 mb-4">Préservation des sols, remédiation des sites pollués, et bonnes pratiques d'utilisation pour garantir productivité et biodiversité.</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Évaluation et remédiation des sols</li>
              <li>Agroécologie et pratiques durables</li>
              <li>Protection des zones sensibles</li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg h-64 bg-[url('/h8.jpg')] bg-cover bg-center"></div>
        </div>
      </section>

      <section id="dechets" className="scroll-mt-28 py-12 md:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-[#FFF7E6] text-[#d4a028] rounded-lg mb-4 shadow">
            <Recycle className="w-6 h-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Gestion des déchets</h2>
          <p className="text-gray-700 mb-6">Collecte, tri, traitement et valorisation : réduire l'enfouissement, augmenter le recyclage et valoriser la biomasse.</p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"> 
              <h4 className="font-semibold mb-2">Collecte & logistique</h4>
              <p className="text-sm text-gray-600">Systèmes de collecte et optimisation des flux.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h4 className="font-semibold mb-2">Traitement & recyclage</h4>
              <p className="text-sm text-gray-600">Centres de tri, recyclage et valorisation énergétique.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h4 className="font-semibold mb-2">Sensibilisation & réglementation</h4>
              <p className="text-sm text-gray-600">Formations et accompagnement réglementaire.</p>
            </div>
          </div>
          <div className="text-center">
            <a href="/contact" className="inline-block px-6 py-3 bg-[#1E5FA8] text-white rounded-lg font-bold shadow">Demander un diagnostic</a>
          </div>
        </div>
      </section>

      {/* Priorités environnementales */}
      <section id="priorites-environnement" className="scroll-mt-28 py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Priorités environnementales</h2>
          <p className="text-gray-700 mb-6">Domaines d'intervention prioritaires pour minimiser notre impact environnemental et renforcer la résilience.</p>

          <ul className="grid sm:grid-cols-2 gap-4 text-gray-700 list-inside">
            <li className="before:content-['•'] before:text-[#1E5FA8]">Réduction des émissions (plans de réduction et suivi des émissions)</li>
            <li className="before:content-['•'] before:text-[#1E5FA8]">Protection des ressources naturelles (eau, sols, forêts)</li>
            <li className="before:content-['•'] before:text-[#1E5FA8]">Gestion durable des déchets (réduction, tri, valorisation)</li>
            <li className="before:content-['•'] before:text-[#1E5FA8]">Préservation de la biodiversité (aires protégées, corridors écologiques)</li>
            <li className="before:content-['•'] before:text-[#1E5FA8]">Résilience climatique (plans d'adaptation et réduction des vulnérabilités)</li>
            <li className="before:content-['•'] before:text-[#1E5FA8]">Reboisement & restauration (programmes de plantation et restauration des paysages)</li>
          </ul>
        </div>
      </section>

    </main>
  );
}
