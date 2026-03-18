"use client";

import { Target,Zap, Users, Lightbulb, TrendingUp, Award, Globe, Shield } from "lucide-react";

export default function Carrieres() {
  const reasons = [
    {
      icon: Lightbulb,
      title: "Innovation Énergétique",
      description: "Travaillez sur les technologies de pointe de la transition énergétique mondiale",
      details: "Projets offshore, solaire, gaz naturel, mobilité électrique"
    },
    {
      icon: TrendingUp,
      title: "Projets à Grande Échelle",
      description: "Participez à des projets d'envergure nationale et internationale",
      details: "Développement d'infrastructures énergétiques majeures"
    },
    {
      icon: Globe,
      title: "Impact International",
      description: "Contribuez à la transition énergétique mondiale",
      details: "Projets dans toute l'Afrique centrale et au-delà"
    },
    {
      icon: Shield,
      title: "Stabilité & Croissance",
      description: "Entreprise leader avec une croissance continue",
      details: "Carrière stable dans un secteur en expansion"
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Formation Continue",
      description: "Développement professionnel et certifications internationales"
    },
    {
      icon: Users,
      title: "Équipe Dynamique",
      description: "Travaillez avec des experts passionnés et motivés"
    },
    {
      icon: Target,
      title: "Responsabilités",
      description: "Autonomie et impact direct sur les projets stratégiques"
    },
    {
      icon: Zap,
      title: "Technologies Modernes",
      description: "Outils et équipements de dernière génération"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1E5FA8] to-[#164a8a] text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Rejoignez une équipe qui façonne
              <span className="block text-[#E6C34A]">l'énergie de demain</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Construisez votre carrière dans l'énergie avec EnerTchad.
              Innovez, impactez et grandissez avec nous.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-[#E6C34A] text-[#1E5FA8] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                <Users className="mr-2" size={20} />
                Contactez-nous
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Pourquoi nous rejoindre */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pourquoi nous rejoindre ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez ce qui fait d'EnerTchad un employeur de choix dans le secteur énergétique
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-[#1E5FA8] p-3 rounded-lg mr-4">
                    <reason.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{reason.title}</h3>
                </div>

                <p className="text-gray-700 text-lg mb-4">{reason.description}</p>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-[#1E5FA8] font-semibold">{reason.details}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quote Section */}
          <div className="bg-gradient-to-r from-[#1E5FA8] to-[#164a8a] rounded-2xl p-8 md:p-12 text-white text-center">
            <blockquote className="text-2xl md:text-3xl font-light italic mb-6">
              "Travaillez sur des projets offshore, solaire, gaz naturel et contribuez à la transition énergétique mondiale"
            </blockquote>
            <cite className="text-[#E6C34A] font-semibold text-lg">
              — Direction des Ressources Humaines, EnerTchad
            </cite>
          </div>
        </div>
      </div>

      {/* Avantages */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Avantages & Bénéfices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les avantages qui font la différence chez EnerTchad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#E6C34A] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-[#1E5FA8]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact RH */}
 
    </div>
  );
}