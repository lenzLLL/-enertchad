"use client";
import {
  Leaf,
  Users,
  Shield,
  Heart,
  Target,
  Award,
  TrendingUp,
  Globe,
  Lightbulb,
  BookOpen,
  Handshake,
  Droplet,
  Wind,
  Recycle,
  Sun,
  CheckCircle,
  Zap,
  Factory,
  GraduationCap,
  Building2,
} from "lucide-react";

export default function EngagementPage() {
  const heroEngagements = [
    {
      icon: Leaf,
      title: "Environnement",
      description: "Protéger notre planète pour les générations futures",
      color: "#3AA655",
    },
    {
      icon: Users,
      title: "Social",
      description: "Soutenir les communautés locales",
      color: "#1E5FA8",
    },
    {
      icon: Shield,
      title: "Éthique",
      description: "Opérer avec intégrité et transparence",
      color: "#E6C34A",
    },
  ];

  const engagementsEnvironnementaux = [
    {
      icon: Sun,
      title: "Transition Énergétique",
      description:
        "Nous investissons massivement dans les énergies renouvelables (solaire, éolien, bioénergies) pour réduire notre empreinte carbone et celle de nos clients.",
      stats: "40% d'énergies renouvelables d'ici 2030",
      image: "/r.png",
    },
    {
      icon: Droplet,
      title: "Gestion de l'Eau",
      description:
        "Protection des ressources en eau, recyclage dans nos installations et technologies de lavage écologique dans toutes nos stations.",
      stats: "85% de l'eau recyclée",
      image: "/h9.webp",
    },
    {
      icon: Recycle,
      title: "Économie Circulaire",
      description:
        "Valorisation des déchets plastiques et ménagers, recyclage des huiles usagées et réduction des emballages.",
      stats: "5000 tonnes de déchets valorisés/an",
      image: "/h3.png",
    },
    {
      icon: Wind,
      title: "Réduction des Émissions",
      description:
        "Modernisation de notre flotte de transport, optimisation logistique et compensation carbone volontaire.",
      stats: "-30% d'émissions CO₂ depuis 2020",
      image: "/h10.jpg",
    },
  ];

  const engagementsSociaux = [
    {
      icon: GraduationCap,
      title: "Formation & Emploi Local",
      description:
        "Nous formons et recrutons prioritairement des Tchadiens. Plus de 200 employés locaux bénéficient de formations continues aux métiers de l'énergie.",
      color: "#1E5FA8",
    },
    {
      icon: Heart,
      title: "Santé & Sécurité",
      description:
        "Zéro accident est notre objectif. Protocoles HSE rigoureux, équipements de protection moderne et culture de la sécurité à tous les niveaux.",
      color: "#E6C34A",
    },
    {
      icon: Building2,
      title: "Développement Communautaire",
      description:
        "Soutien aux infrastructures locales (écoles, centres de santé), électrification rurale et partenariats avec les collectivités.",
      color: "#3AA655",
    },
    {
      icon: Handshake,
      title: "Partenariats Locaux",
      description:
        "Nous privilégions les fournisseurs et sous-traitants tchadiens pour créer de la valeur locale et développer l'économie nationale.",
      color: "#1E5FA8",
    },
  ];

  const engagementsEthiques = [
    {
      icon: Shield,
      title: "Conformité & Transparence",
      description:
        "Respect strict des réglementations locales et internationales, reporting transparent et audits réguliers.",
    },
    {
      icon: Award,
      title: "Qualité & Excellence",
      description:
        "Carburants certifiés aux normes internationales, services de qualité supérieure et amélioration continue.",
    },
    {
      icon: Target,
      title: "Lutte Anti-Corruption",
      description:
        "Politique zéro tolérance contre la corruption, formation des équipes et processus de contrôle stricts.",
    },
    {
      icon: BookOpen,
      title: "Gouvernance Responsable",
      description:
        "Conseil d'administration indépendant, comités d'éthique et de RSE, et politiques internes rigoureuses.",
    },
  ];

  const objectifsDeveloppementDurable = [
    { number: 7, title: "Énergie propre et d'un coût abordable", icon: Zap },
    {
      number: 8,
      title: "Travail décent et croissance économique",
      icon: TrendingUp,
    },
    {
      number: 9,
      title: "Industrie, innovation et infrastructure",
      icon: Factory,
    },
    { number: 11, title: "Villes et communautés durables", icon: Building2 },
    {
      number: 12,
      title: "Consommation et production responsables",
      icon: Recycle,
    },
    {
      number: 13,
      title: "Mesures relatives à la lutte contre les changements climatiques",
      icon: Globe,
    },
  ];

  const certifications = [
    {
      name: "ISO 14001",
      description: "Management environnemental",
      icon: Leaf,
    },
    {
      name: "ISO 9001",
      description: "Qualité des services",
      icon: Award,
    },
    {
      name: "ISO 45001",
      description: "Santé et sécurité au travail",
      icon: Shield,
    },
    {
      name: "RED II",
      description: "Biocarburants durables",
      icon: Droplet,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[100vh] md:h-[100vh] flex items-center justify-center text-white overflow-hidden">
        <img
          src="/h8.jpg"
          alt="Engagements EnerTchad"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E5FA8]/90 via-[#1E5FA8]/70 to-transparent"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block bg-[#E6C34A] text-[#1E5FA8] px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
            💚 Responsabilité Sociétale et Environnementale
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 font-poppins leading-tight">
            Nos Engagements pour un{" "}
            <span className="text-[#E6C34A]">Avenir Durable</span>
          </h1>
          <p className="text-lg md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto leading-relaxed">
            EnerTchad s'engage à être un acteur responsable du développement
            énergétique du Tchad, en plaçant l'humain et l'environnement au cœur
            de ses priorités.
          </p>
          <div className="hidden md:grid grid-cols-3 gap-6 max-w-5xl mx-auto">
            {heroEngagements.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Notre Vision */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#F5F9FF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#1E5FA8] font-semibold text-sm uppercase tracking-wide">
              Notre Vision
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-[#1E5FA8] mb-6 font-poppins mt-2">
              Un Leadership Responsable
            </h2>
            <p className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              EnerTchad aspire à être le leader de la transition énergétique en
              Afrique centrale, en conjuguant excellence opérationnelle,
              innovation technologique et responsabilité sociétale. Nous croyons
              qu'une entreprise prospère est une entreprise qui contribue
              positivement à la société et à l'environnement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3AA655] to-[#2d8a45] rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E5FA8] mb-4">
                Notre Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Fournir des solutions énergétiques fiables, durables et
                accessibles à tous les Tchadiens, tout en minimisant notre
                impact environnemental et en maximisant notre contribution au
                développement socio-économique du pays.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E6C34A] to-[#d4a028] rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E5FA8] mb-4">
                Nos Valeurs
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#3AA655]" />
                  <span>Intégrité et transparence</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#3AA655]" />
                  <span>Excellence et innovation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#3AA655]" />
                  <span>Respect de l'environnement</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#3AA655]" />
                  <span>Responsabilité sociale</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engagements Environnementaux */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#F0F8E8] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 px-4 py-2 rounded-full mb-4">
              <span className="text-[#3AA655] font-bold text-sm uppercase tracking-widest">
                🌱 Engagements Environnementaux
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#3AA655] mb-6 font-poppins">
              Préserver Notre Planète
            </h2>
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              La protection de l'environnement est au cœur de notre stratégie.
              Nous investissons dans des technologies propres et adoptons des
              pratiques durables dans toutes nos opérations.
            </p>
          </div>

          <div className="space-y-12">
            {engagementsEnvironnementaux.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    !isEven ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  <div className={!isEven ? "lg:col-start-2" : ""}>
                    <div className="bg-gradient-to-br from-[#3AA655] to-[#2d8a45] p-5 rounded-2xl w-fit mb-6">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#1E5FA8] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <div className="bg-[#3AA655]/10 border-l-4 border-[#3AA655] p-5 rounded-r-xl">
                      <p className="text-[#3AA655] font-bold text-xl">
                        {item.stats}
                      </p>
                    </div>
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`rounded-2xl shadow-2xl w-full h-80 object-cover ${
                      !isEven ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagements Sociaux */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#F5F9FF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 px-4 py-2 rounded-full mb-4">
              <span className="text-[#1E5FA8] font-bold text-sm uppercase tracking-widest">
                🤝 Engagements Sociaux
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#1E5FA8] mb-6 font-poppins">
              Servir Nos Communautés
            </h2>
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Nous croyons que notre succès est indissociable du bien-être des
              communautés dans lesquelles nous opérons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engagementsSociaux.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 group"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E5FA8] mb-4 group-hover:text-[#3AA655] transition">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagements Éthiques */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#FEF9E8] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-100 px-4 py-2 rounded-full mb-4">
              <span className="text-[#E6C34A] font-bold text-sm uppercase tracking-widest">
                ⚖️ Engagements Éthiques
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#E6C34A] mb-6 font-poppins">
              Opérer avec Intégrité
            </h2>
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              L'éthique et la transparence guident chacune de nos décisions et
              actions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementsEthiques.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 text-center group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#E6C34A] to-[#d4a028] rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1E5FA8] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Objectifs de Développement Durable */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#F0F8E8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 px-4 py-2 rounded-full mb-4">
              <span className="text-[#1E5FA8] font-bold text-sm uppercase tracking-widest">
                🌍 Objectifs de Développement Durable
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#1E5FA8] mb-6 font-poppins">
              Notre Contribution aux ODD
            </h2>
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              EnerTchad aligne ses actions sur les Objectifs de Développement
              Durable des Nations Unies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {objectifsDeveloppementDurable.map((odd, idx) => {
              const Icon = odd.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1E5FA8] to-[#3AA655] rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold text-2xl group-hover:scale-110 transition-transform">
                    {odd.number}
                  </div>
                  <Icon className="w-8 h-8 text-[#3AA655] mx-auto mb-3" />
                  <p className="text-gray-700 text-xs font-semibold leading-tight">
                    {odd.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 px-4 py-2 rounded-full mb-4">
              <span className="text-[#3AA655] font-bold text-sm uppercase tracking-widest">
                🏆 Certifications & Normes
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#1E5FA8] mb-6 font-poppins">
              Excellence Certifiée
            </h2>
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Nos certifications internationales attestent de notre engagement
              envers la qualité, la sécurité et l'environnement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-[#F5F9FF] to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-[#1E5FA8]/20 text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1E5FA8] to-[#3AA655] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E5FA8] mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-700 text-sm">{cert.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4 bg-gradient-to-r from-[#1E5FA8] via-[#1a5a8a] to-[#3AA655] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E6C34A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E6C34A] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins text-white">
            Construisons Ensemble un Avenir Durable
          </h2>
          <p className="text-xl mb-10 text-gray-100 font-medium max-w-3xl mx-auto">
            Rejoignez-nous dans notre mission de transformer le secteur
            énergétique tchadien de manière responsable et durable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-[#E6C34A] text-[#1E5FA8] px-10 py-4 rounded-lg font-bold hover:bg-[#d4a028] transition-all shadow-xl"
            >
              Nous contacter
            </a>
            <a
              href="/about"
              className="inline-block border-2 border-white text-white px-10 py-4 rounded-lg font-bold hover:bg-white/10 transition-all"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
