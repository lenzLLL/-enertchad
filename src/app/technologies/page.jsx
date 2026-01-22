"use client";

import { Wifi, Zap, Lightbulb, Battery, Database, Lock } from "lucide-react";
import Link from "next/link";

export default function TechnologiesPage() {
  const sections = [
    {
      id: 'connectivite-reseaux',
      title: 'Connectivité & Réseaux',
      icon: Wifi,
      color: 'from-blue-500 to-blue-600',
      subsections: [
        { id: 'connectivite-reseaux-fibre', title: 'Réseaux Fibre Optique', desc: 'Infrastructure de fibre optique pour connectivité haute capacité et faible latence.' },
        { id: 'connectivite-reseaux-5g', title: '4G/5G & Sans Fil', desc: 'Connectivité mobile et solutions sans fil pour couverture étendue et mobilité.' },
        { id: 'connectivite-reseaux-wan', title: 'Solutions WAN & Point-à-Point', desc: 'Liaisons point-à-point et réseaux étendus pour redondance et résilience.' }
      ]
    },
    {
      id: 'automatisation-supervision',
      title: 'Automatisation & Supervision',
      icon: Zap,
      color: 'from-green-500 to-green-600',
      subsections: [
        { id: 'automatisation-supervision-scada', title: 'Systèmes SCADA & PLC', desc: 'Automates programmables et SCADA pour contrôle temps réel des installations.' },
        { id: 'automatisation-supervision-predictive', title: 'Maintenance Prédictive', desc: 'Surveillance des équipements et prédiction de pannes via données et IA.' },
        { id: 'automatisation-supervision-pilotage', title: 'Pilotage Intelligent', desc: 'Gestion optimisée de la charge et des flux énergétiques en temps réel.' }
      ]
    },
    {
      id: 'instrumentation-iiot',
      title: 'Instrumentation & IIoT',
      icon: Lightbulb,
      color: 'from-yellow-400 to-yellow-500',
      subsections: [
        { id: 'instrumentation-iiot-capteurs', title: 'Capteurs Industriels', desc: 'Capteurs de température, pression, débit et énergie pour mesure précise.' },
        { id: 'instrumentation-iiot-compteurs', title: 'Compteurs Intelligents', desc: 'Compteurs d\'énergie, eau, gaz avec télétransmission de données.' },
        { id: 'instrumentation-iiot-iot', title: 'Dispositifs IoT Décentralisés', desc: 'Collecte de données distribuée et edge computing pour analyse rapide.' }
      ]
    },
    {
      id: 'production-stockage-conversion',
      title: 'Production, Stockage & Conversion',
      icon: Battery,
      color: 'from-orange-500 to-orange-600',
      subsections: [
        { id: 'production-stockage-conversion-production', title: 'Panneaux Solaires & Turbines Éoliennes', desc: 'Technologies de production d\'énergie renouvelable solaire et éolienne.' },
        { id: 'production-stockage-conversion-batteries', title: 'Systèmes de Stockage', desc: 'Batteries lithium, hydrogène vert et systèmes hybrides d\'accumulation.' },
        { id: 'production-stockage-conversion-convertisseurs', title: 'Convertisseurs & Transformateurs', desc: 'Onduleurs DC/AC et transformateurs pour intégration et distribution.' }
      ]
    },
    {
      id: 'donnees-ia-jumeau-numerique',
      title: 'Données, IA & Jumeau Numérique',
      icon: Database,
      color: 'from-indigo-500 to-indigo-700',
      subsections: [
        { id: 'donnees-ia-jumeau-big-data', title: 'Plateformes Big Data', desc: 'Stockage et traitement de volumétries massives de données énergétiques.' },
        { id: 'donnees-ia-jumeau-ml', title: 'Modèles IA & Machine Learning', desc: 'Algorithmes prédictifs et optimisation via apprentissage automatique.' },
        { id: 'donnees-ia-jumeau-digital', title: 'Jumeaux Numériques', desc: 'Simulation et modélisation virtuelle des systèmes énergétiques réels.' }
      ]
    },
    {
      id: 'securite-surveillance-exploitation',
      title: 'Sécurité, Surveillance & Exploitation',
      icon: Lock,
      color: 'from-red-500 to-red-600',
      subsections: [
        { id: 'securite-surveillance-exploitation-cyber', title: 'Cybersécurité Industrielle', desc: 'Sécurité des systèmes de contrôle et protection contre les menaces cyber.' },
        { id: 'securite-surveillance-exploitation-surveillance', title: 'Surveillance Physique & Accès', desc: 'Vidéosurveillance, contrôle d\'accès et systèmes de sécurité physique.' },
        { id: 'securite-surveillance-exploitation-exploitation', title: 'Protocoles d\'Exploitation', desc: 'Procédures opérationnelles, maintenance et continuité de service.' }
      ]
    }
  ];

  return (
    <main className="min-h-screen text-gray-800 bg-white">
      {/* Hero */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-r from-white to-[#F7FBFF]">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full bg-white text-sm font-semibold border">⚙️ Technologies</span>
              <span className="text-sm text-gray-500">Solutions numériques et physiques</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0f4f7d] mb-4">Nos technologies — composants & systèmes</h1>
            <p className="text-gray-700 mb-6 max-w-2xl">Des solutions technologiques robustes et intégrées pour supporter la transition énergétique : connectivité, automatisation, données et sécurité.</p>

            <div className="flex flex-wrap gap-2 mb-6">
              <Link href="/contact" className="inline-block px-4 py-2.5 bg-[#1E5FA8] text-white rounded-md font-semibold">Nous contacter</Link>
              <Link href="/blog" className="inline-block px-4 py-2.5 border border-gray-200 rounded-md text-gray-700">Ressources</Link>
              <a href="#connectivite-reseaux" className="inline-block px-4 py-2.5 text-[#1E5FA8] border border-[#1E5FA8] rounded-md">Voir les technologies</a>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg h-72 md:h-96">
            <img src="/h4.png" alt="Technologies" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Navigation anchors */}
      <section className="bg-gray-50 border-b py-6 px-4 sticky top-16 z-30">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 justify-center">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="text-sm font-medium text-[#1E5FA8] hover:underline px-3 py-1 rounded hover:bg-white transition">
              {s.title.split(' & ')[0]}
            </a>
          ))}
        </div>
      </section>

      {/* Detailed sections with subsections */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-12">
        {sections.map((s) => (
          <div key={s.id}>
            {/* Main section header */}
            <section id={s.id} className="mb-6 scroll-mt-28">
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-lg bg-gradient-to-br ${s.color}`}>
                  <s.icon size={32} className="text-white" />
                </div>
                <h2 className="text-3xl font-extrabold text-gray-800">{s.title}</h2>
              </div>
            </section>

            {/* Subsections */}
            <div className="grid gap-6 md:grid-cols-3">
              {s.subsections.map((sub) => (
                <section id={sub.id} key={sub.id} className="scroll-mt-28">
                  <div className="bg-white rounded-xl border transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1 h-full">
                    <div className={`p-6 bg-gradient-to-br ${s.color} text-white rounded-t-xl`}>
                      <h3 className="text-lg font-extrabold">{sub.title}</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 leading-relaxed text-sm">{sub.desc}</p>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1E5FA8] to-[#174a86] text-white py-12 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Prêt à transformer votre infrastructure énergétique ?</h2>
          <p className="text-lg mb-6 opacity-90">Nos experts vous accompagnent dans le choix et l'implémentation des technologies adaptées à vos besoins.</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-[#E6C34A] text-[#1E5FA8] rounded-lg font-bold hover:shadow-lg transition">
            Demander une consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
