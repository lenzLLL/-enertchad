"use client";

import { useState, useEffect } from "react";
import {
  Sun,
  Fuel,
  TrendingUp,
  Users,
  Target,
  ChevronRight,
  Leaf,
  Building2,
  Award,
} from "lucide-react";
import Link from "next/link";

export default function EnertchadPage() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll('[id^="section-"]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const solutions = [
    {
      icon: Fuel,
      title: "Énergies fossiles",
      color: "from-blue-600 to-blue-800",
      items: [
        "Distribution de carburants de qualité",
        "Réseau de stations-service moderne",
        "Fiabilité énergétique garantie",
        "Approvisionnement continu",
      ],
    },
    {
      icon: Sun,
      title: "Énergie solaire",
      color: "from-yellow-500 to-orange-600",
      items: [
        "Installation de panneaux solaires",
        "Solutions hybrides (solaire + carburant)",
        "Électrification des zones rurales",
        "Maintenance et support technique",
      ],
    },
  ];

  const timeline = [
    {
      phase: "2024",
      title: "Optimisation des carburants",
      desc: "Amélioration de l'efficacité et réduction des émissions",
    },
    {
      phase: "2025",
      title: "Investissement solaire",
      desc: "Déploiement massif de solutions photovoltaïques",
    },
    {
      phase: "2026",
      title: "Solutions hybrides",
      desc: "Intégration complète fossile-solaire",
    },
    {
      phase: "2030",
      title: "Énergie propre",
      desc: "Objectif 50% d'énergie renouvelable",
    },
  ];

  const stats = [
    { value: "35%", label: "Réduction CO₂", icon: Leaf },
    { value: "150+", label: "Installations solaires", icon: Sun },
    { value: "45", label: "Stations-service", icon: Building2 },
    { value: "500K+", label: "Clients desservis", icon: Users },
  ];

  const heroTransition = [
    {
      icon: Sun,
      title: "Énergie renouvelable",
      description:
        "Déployer des solutions solaires et hybrides pour réduire notre dépendance aux carburants fossiles.",
      color: "#F59E0B",
    },
    {
      icon: Fuel,
      title: "Infrastructure robuste",
      description:
        "Moderniser nos stations et réseaux pour garantir un approvisionnement fiable et constant.",
      color: "#3B82F6",
    },
    {
      icon: TrendingUp,
      title: "Impact durable",
      description:
        "Mesurer et partager nos progrès vers une transition qui profite à tous les Tchadiens.",
      color: "#10B981",
    },
  ];

  const projects = [
    {
      title: "Mini-centrales solaires rurales",
      desc: "Électrification de 25 villages avec panneaux solaires autonomes",
      image:
        "https://raw.createusercontent.com/cd541b11-f6ad-4a8d-80e6-81aca8244f2d/",
    },
    {
      title: "Stations hybrides urbaines",
      desc: "Conversion de 15 stations en hubs énergétiques solaire-fossile",
      image:
        "https://raw.createusercontent.com/dfbf0576-b88c-47d8-8534-1a9ca4d4b362/",
    },
    {
      title: "Partenariats énergétiques",
      desc: "Collaboration avec institutions africaines pour la transition",
      image:
        "https://raw.createusercontent.com/514be256-c7db-486d-b323-75b2fcf0d481/",
    },
  ];

  return (
    <div className="bg-white">
      {/* Header/Navigation */}
    

      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center text-white overflow-hidden">
        <img
          src="/h8.jpg"
          alt="Transition énergétique"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent"></div>
        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block bg-yellow-500/20 text-yellow-100 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            ⚡ Transition Énergétique & Développement Durable
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Vers une énergie <span className="text-yellow-300">plus propre</span> et <span className="text-blue-200">plus fiable</span> pour l'Afrique
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Enertchad accélère la transition en combinant infrastructures robustes et solutions renouvelables, pour un avenir énergétique durable et inclusif.
          </p>

       

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#solutions"
              className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-flex items-center gap-2"
            >
              Découvrir nos solutions
              <ChevronRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Engagement */}
      <section
        id="section-vision"
        className={`py-20 px-6 bg-white transition-all duration-1000 ${isVisible["section-vision"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Notre <span className="text-yellow-600">Vision</span> &{" "}
                <span className="text-blue-700">Engagement</span>
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  <span className="font-bold text-blue-700">Enertchad</span> est
                  né de la conviction que l'Afrique peut réussir sa transition
                  énergétique en valorisant ses ressources existantes tout en
                  embrassant les énergies renouvelables.
                </p>
                <p>
                  Notre mission est de fournir une énergie{" "}
                  <span className="font-semibold">
                    fiable, accessible et durable
                  </span>{" "}
                  à tous les Tchadiens, des centres urbains aux villages les
                  plus reculés.
                </p>
                <p>
                  Nous nous engageons à{" "}
                  <span className="font-semibold text-green-600">
                    réduire notre empreinte carbone de 50% d'ici 2030
                  </span>{" "}
                  en investissant massivement dans le solaire, tout en
                  maintenant la sécurité énergétique du pays.
                </p>
                <p>
                  En tant qu'acteur majeur en{" "}
                  <span className="font-semibold">Afrique centrale</span>, nous
                  contribuons au développement économique et social de la
                  région, en créant des emplois et en formant une nouvelle
                  génération de techniciens en énergies renouvelables.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://raw.createusercontent.com/514be256-c7db-486d-b323-75b2fcf0d481/"
                  alt="Vision Enertchad"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-yellow-500 p-6 rounded-xl shadow-xl text-white">
                <Target className="mb-2" size={32} />
                <p className="font-bold text-lg">Leader de la transition</p>
                <p className="text-sm text-blue-100">en Afrique centrale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Énergétiques */}
      <section
        id="solutions"
        className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos Solutions <span className="text-blue-700">Énergétiques</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche hybride pour répondre aux besoins énergétiques
              d'aujourd'hui et de demain
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`bg-gradient-to-r ${solution.color} p-8 text-white`}
                >
                  <solution.icon size={48} className="mb-4" />
                  <h3 className="text-3xl font-bold">{solution.title}</h3>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {solution.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-yellow-500 flex items-center justify-center flex-shrink-0">
                            <ChevronRight size={16} className="text-white" />
                          </div>
                        </div>
                        <span className="text-gray-700 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stratégie de Transition */}
      <section id="transition" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Stratégie de <span className="text-yellow-600">Transition</span>
            </h2>
            <p className="text-xl text-gray-600">
              Notre feuille de route vers un avenir énergétique durable
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-yellow-500 to-green-600 transform -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((step, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div
                    className={`flex-1 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                  >
                    <div className="bg-gradient-to-br from-blue-50 to-yellow-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                      <h3 className="text-2xl font-bold text-blue-700 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-700">{step.desc}</p>
                    </div>
                  </div>

                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-yellow-500 flex items-center justify-center shadow-xl">
                      <span className="text-white font-bold text-lg">
                        {step.phase}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Chiffres clés */}
      <section
        id="impact"
        className="py-20 px-6 bg-gradient-to-br from-blue-900 to-blue-800 text-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Notre <span className="text-yellow-400">Impact</span>
            </h2>
            <p className="text-xl text-blue-100">
              Des résultats concrets pour un avenir durable
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center group hover:scale-110 transition-transform duration-300"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all">
                  <stat.icon
                    size={48}
                    className="mx-auto mb-4 text-yellow-400"
                  />
                  <div className="text-5xl font-bold mb-2 text-yellow-400">
                    {stat.value}
                  </div>
                  <div className="text-blue-100 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets & Innovations */}
     

      {/* Call To Action Final */}
      <section className="py-20 px-6 bg-gradient-to-r from-yellow-500 via-yellow-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <Award size={64} className="mx-auto mb-6 text-white" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Participez à la transition énergétique avec Enertchad
          </h2>
          <p className="text-xl text-yellow-50 mb-8 leading-relaxed">
            Ensemble, construisons un avenir énergétique durable pour l'Afrique.
            Rejoignez-nous dans cette révolution verte.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3">
            <button className="bg-white text-yellow-700 px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
              Devenir partenaire
              <ChevronRight size={24} />
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  );
}
