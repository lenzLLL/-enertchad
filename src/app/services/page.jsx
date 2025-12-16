"use client";

import React from "react";
import {
  Fuel,
  Zap,
  Droplet,
  Sparkles,
  Clock,
  MapPin,
  TrendingUp,
  Truck,
  Headset,
  Recycle,
  Shield,
  Lightning,
  Leaf,
  Wind,
  Flame,
  Wrench,
    Hammer,
    Settings,
    Activity,
    Anchor,
    GaugeCircle,
    LineChart,
    Cpu,
    PaintBucket,Gauge,Atom
} from "lucide-react";
import ServiceCard from "../../components/ServiceCard";

const evChargerImage = "https://raw.createusercontent.com/5222af1a-cfb4-4e80-a98e-84c680d4ac32/ev-charger.jpg";
const solarImage = "https://raw.createusercontent.com/5222af1a-cfb4-4e80-a98e-84c680d4ac32/solar.jpg";
const oilImage = "https://raw.createusercontent.com/6f7e64de-7812-4733-bf78-e5f94d805ed9/oil.jpg";
const carWashImage = "https://raw.createusercontent.com/6f7e64de-7812-4733-bf78-e5f94d805ed9/car-wash.jpg";
const stationInterior = "https://raw.createusercontent.com/6f7e64de-7812-4733-bf78-e5f94d805ed9/station.jpg";

export default function Services() {
  
    const services = [
    {
    icon: Flame,
    title: "Biomasse Solide",
    description:
      "Bois énergie, charbon de bois, résidus agricoles, briquettes et déchets agro-industriels.",
    segment: "Énergies Renouvelables",
  },
  
  // 💨 Biogaz
  {
    icon: Recycle,
    title: "Biogaz",
    description:
      "Méthane issu de biodigesteurs, gaz de décharge et stations d’épuration.",
    segment: "Énergies Renouvelables",
  },
  
  // ⛽ Biocarburants liquides
  {
    icon: Droplet,
    title: "Biocarburants Liquides",
    description:
      "Bioéthanol, biodiesel, biokérosène et huiles végétales pour mobilité et industrie.",
    segment: "Énergies Renouvelables",
  },
  
  // ⚡ Biohydrogène & Gaz de synthèse
  {
    icon: Atom,
    title: "Biohydrogène & Gaz de Synthèse",
    description:
      "Hydrogène vert et syngas (CO + H₂) issus de la biomasse par fermentation ou gazéification.",
    segment: "Énergies Renouvelables",
  },
   {
    icon: Hammer,
    title: "Forage & Complétion",
    description:
      "Forage directionnel et horizontal, cimentation intelligente et acquisition de données en temps réel.",
    segment: "Énergies Fossiles",
  },
  {
    icon: Gauge,
    title: "Production & Optimisation",
    description:
      "Systèmes de levage artificiel (ESP, Gas Lift, Rod Pump) et gestion des flux multiphasiques.",
    segment: "Énergies Fossiles",
  },
  
  
  // 🛠 Ingénierie & Maintenance
  {
    icon:PaintBucket,
    title: "Ingénierie & Maintenance",
    description:
      "Stimulation hydraulique, interventions sur puits et maintenance prédictive et industrielle, conformité HSE.",
    segment: "Énergies Fossiles",
  },
  
  // 🌊 Offshore & Subsea
  {
    icon: Anchor,
    title: "Offshore & Subsea",
    description:
      "Ingénierie sous-marine (SURF), inspection et monitoring des pipelines, precommissioning et decommissioning sécurisé.",
    segment: "Énergies Fossiles",
  },
  
      {
        icon: Fuel,
        title: "Station-Service",
        description:
          "Carburants de qualité supérieure, diesel et essence, disponibles 24/7",
        segment: "Énergies Fossiles",
      },
      {
        icon: Truck,
        title: "Livraison Mobile de Carburant",
        description:
          "Service de livraison directe pour industriels et clients normaux - partout au Tchad",
        segment: "Énergies Fossiles",
      },
      {
        icon: Droplet,
        title: "Huiles Moteur",
        description: "Lubrifiants premium pour tous types de véhicules",
        segment: "Énergies Fossiles",
      },
      {
        icon: Truck,
        title: "Import de Carburant",
        description:
          "Importation et distribution de carburant de qualité certifiée internationalement",
        segment: "Énergies Fossiles",
      },
      {
        icon: Fuel,
        title: "Carburants Routiers",
        description:
          "Essence (SP95, SP98, E10, E85) et Gazole (B7, B10, B30, GNR) pour mobilité et véhicules lourds.",
        segment: "Énergies Fossiles",
      },
      {
        icon: Droplet,
        title: "Combustibles de Chauffage",
        description:
          "Fioul domestique, kérosène/jet fuel et GPL (propane, butane) pour chauffage, cuisson et usages industriels.",
        segment: "Énergies Fossiles",
      },
      {
        icon: Leaf,
        title: "Énergie Solaire",
        description:
          "Solutions d'énergie renouvelable pour particuliers et entreprises",
        segment: "Énergies Renouvelables",
      },
      {
        icon: Wind,
        title: "Énergie Éolienne",
        description:
          "Solutions d'énergie éolienne pour entreprises et communautés : études, installation et maintenance de petites et moyennes turbines.",
        segment: "Énergies Renouvelables",
      },
      {
        icon: Zap,
        title: "Recharge Électrique",
        description: "Stations de recharge rapide pour véhicules électriques",
        segment: "Énergies Renouvelables",
      },
    
      {
        icon: Flame,
        title: "Biogaz",
        description:
          "Production et distribution de biogaz pour énergie domestique et industrielle",
        segment: "Services Complémentaires",
      },
      {
        icon: Sparkles,
        title: "Laverie Auto",
        description: "Services de nettoyage automatisé et écologique",
        segment: "Services Complémentaires",
      },
      {
        icon: TrendingUp,
        title: "Produits Industriels",
        description:
          "Lubrifiants, solvants, asphalte, coke, combustibles lourds et pétrole lampant pour usages industriels.",
        segment: "Services Complémentaires",
      },
      {
        icon: Sparkles,
        title: "Produits Pétrochimiques (PP)",
        description:
          "Polypropylène (PP) : matière polyvalente pour emballages, textiles, pièces automobiles et équipements médicaux.",
        segment: "Services Complémentaires",
      },
      {
        icon: Wrench,
        title: "Maintenance Auto",
        description:
          "Services d'entretien et de réparation automobiles professionnels",
        segment: "Services Complémentaires",
      },
      {
        icon: Recycle,
        title: "Traitement de Déchets",
        description:
          "Unité complète de traitement des déchets plastiques et ménagers avec solutions durables",
        segment: "Services Complémentaires",
      },
      {
        icon: Headset,
        title: "Assistance Technique",
        description:
          "Support technique 24/7 pour tous vos questions et problèmes",
        segment: "Services Complémentaires",
      },
    ];
  const mainServices = [
    {
      icon: Fuel,
      title: "Station-Service",
      description:
        "Carburants de qualité supérieure, diesel et essence, disponibles 24/7 dans nos stations modernes et sécurisées.",
      segment: "Énergies Fossiles",
    },
    {
      icon: Truck,
      title: "Livraison Mobile de Carburant",
      description:
        "Service de livraison directe pour industriels et particuliers — ravitaillement sur site 24/7.",
      segment: "Énergies Fossiles",
    },
    {
      icon: Shield,
      title: "Import de Carburant",
      description:
        "Importation et distribution de carburant certifié internationalement avec contrôle qualité rigoureux.",
      segment: "Énergies Fossiles",
    },
    {
      icon: Leaf,
      title: "Énergie Solaire",
      description:
        "Solutions photovoltaïques complètes : études, installation, stockage et maintenance pour entreprises et foyers.",
      segment: "Énergies Renouvelables",
    },
    {
      icon: Zap,
      title: "Recharge Électrique",
      description:
        "Stations de recharge rapide pour véhicules électriques avec monitoring et paiement numérique.",
      segment: "Énergies Renouvelables",
    },
    {
      icon: Flame,
      title: "Biogaz & Bioénergies",
      description:
        "Conception et exploitation de solutions biogaz, biodigesteurs et valorisation de biomasse pour production d'énergie durable.",
      segment: "Bioénergies",
    },
    {
      icon: Wrench,
      title: "Maintenance Auto",
      description:
        "Services d'entretien et de réparation automobiles professionnels, effectués par nos techniciens certifiés.",
      segment: "Services Complémentaires",
    },
    {
      icon: Sparkles,
      title: "Laverie Auto",
      description:
        "Laverie écologique et automatisée pour véhicules, utilisant des produits biodégradables.",
      segment: "Services Complémentaires",
    },
    {
      icon: Recycle,
      title: "Traitement de Déchets",
      description:
        "Solutions de collecte et traitement des déchets avec valorisation et recyclage responsables.",
      segment: "Services Complémentaires",
    },
    {
      icon: Headset,
      title: "Assistance Technique",
      description: "Support client 24/7, assistance technique et suivi après-vente.",
      segment: "Services Complémentaires",
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Disponibilité 24/7",
      description: "Services accessibles jour et nuit pour votre commodité",
    },
    {
      icon: MapPin,
      title: "Plusieurs Emplacements",
      description: "Réseau de stations réparties à travers le Tchad",
    },
    {
      icon: Shield,
      title: "Qualité Garantie",
      description: "Tous nos produits respectent les normes internationales",
    },
    {
      icon: Zap,
      title: "Technologie Moderne",
      description: "Équipements dernière génération et connectés",
    },
  ];

  const segments = [
    {
      key: "Énergies Fossiles",
      badge: "⛽ Carburants Premium 24/7",
      title: "Énergies Fossiles",
      description:
        "Nous fournissons des carburants de haute qualité, des services de livraison mobile et des solutions d'importation certifiées internationalement.",
      imageSrc: "/h8.jpg",
      icon: Fuel,
      accentFrom: "#1E5FA8",
      accentTo: "#164a8a",
    },
    {
      key: "Énergies Renouvelables",
      badge: "🌱 Solutions Durables & Écologiques",
      title: "Énergies Renouvelables",
      description:
        "EnerTchad s’engage à bâtir un avenir énergétique durable, inclusif et innovant.",
      imageSrc: "/r.png",
      icon: Leaf,
      accentFrom: "#3AA655",
      accentTo: "#2d8a45",
    },
    {
      key: "Bioénergies",
      badge: "🔥 Bioénergies",
      title: "Bioénergies",
      description:
        "Valorisation de la biomasse et production d'énergies renouvelables : biomasse solide, biogaz, biocarburants et solutions de biohydrogène.",
      imageSrc: solarImage,
      icon: Leaf,
      accentFrom: "#3AA655",
      accentTo: "#2d8a45",
    },
    {
      key: "Services Complémentaires",
      badge: "🛠️ Automobile & Environnement",
      title: "Services Complémentaires",
      description:
        "Maintenance automobile professionnelle, laverie écologique et gestion responsable des déchets.",
      imageSrc: carWashImage,
      icon: Wrench,
      accentFrom: "#E6C34A",
      accentTo: "#d4a028",
    },
  ];

  return (
    <div>

      
      {/* Hero Banner Section - Same as Blog */}
      <section className="relative py-12 md:py-32 px-4 overflow-hidden">
        <img
          src={solarImage}
          alt="Services EnerTchad"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-[#F5E6D3]/95"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="text-[#3AA655] font-bold text-sm uppercase tracking-widest inline-block mb-4 px-4 py-2 bg-green-100/50 rounded-full">
            ⚙️ Nos Services
          </span>
          <h1 className="text-2xl md:text-6xl font-bold text-[#1E5FA8] mb-4 md:mb-6">
            Découvrez Nos <span className="bg-gradient-to-r from-[#3AA655] to-[#E6C34A] bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-gray-700 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Solutions énergétiques et automobiles complètes pour tous vos besoins
          </p>
        </div>
      </section>
  <section className="py-8 md:py-32 px-4 bg-gradient-to-b from-[#F5E6D3] to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E6C34A]/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#3AA655] font-bold text-sm uppercase tracking-widest inline-block mb-4 px-4 py-2 bg-green-100/50 rounded-full">
              ✨ 
            </span>
            <h2 className="text-3xl md:text-6xl font-bold text-[#1E5FA8] mb-6">
             Nos solutions  <span className="bg-gradient-to-r from-[#3AA655] to-[#E6C34A] bg-clip-text text-transparent">complètes</span>
            </h2>
            <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
              Découvrez notre gamme complète de solutions énergétiques et services automobiles adaptés à vos besoins
            </p>
          </div>

          {/* Énergies Fossiles Segment */}
          <div className="mb-24">
            {/* Intro avec image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-12 items-center mb-20 bg-gradient-to-br from-[#F5F9FF] to-white rounded-3xl p-2 lg:p-16">
              <div className="order-2 md:order-1">
                <div className="inline-block mb-6 px-4 py-2 bg-blue-100 rounded-full">
                  <span className="text-[#1E5FA8] font-bold text-xs uppercase tracking-widest">⛽ Carburants Premium 24/7</span>
                </div>
                <h3 className="text-2xl md:text-6xl font-bold text-[#1E5FA8] mb-6">Énergies Fossiles</h3>
                <p className="text-gray-700 text-xl leading-relaxed">
                  Nous fournissons des carburants de haute qualité, des services de livraison mobile et des solutions d'importation certifiées internationalement. Disponibles partout au Tchad avec un service fiable et professionnel.
                </p>
              </div>
              <img src={"/h8.jpg"} alt="Énergies Fossiles" className="order-1 md:order-2 rounded-3xl shadow-2xl w-full h-64 md:h-[500px] object-cover" />
            </div>

            <div className="flex items-center space-x-3 mb-8">
              <Fuel className="w-8 h-8 text-[#1E5FA8]" />
              <h3 className="text-2xl font-bold text-[#1E5FA8]">Nos Services</h3>
              <div className="flex-1 h-1 bg-gradient-to-r from-[#1E5FA8] to-transparent rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-6">
              {services.filter(s => s.segment === "Énergies Fossiles").map((service, idx) => {
                const ServiceIcon = service.icon;
                return (
                  <div 
                    key={idx}
                    className="group bg-white rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-[#1E5FA8]"
                  >
                    <div className="bg-gradient-to-br from-[#1E5FA8] to-[#164a8a] p-4 rounded-xl w-fit mb-4 md:mb-6 group-hover:shadow-lg transition">
                      <ServiceIcon className="w-6 md:w-8 h-6 md:h-8 text-[#E6C34A]" />
                    </div>
                    <h4 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-[#1E5FA8] transition line-clamp-1 md:line-clamp-none">
                      {service.title}
                    </h4>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6 line-clamp-2 md:line-clamp-none">
                      {service.description}
                    </p>
                    <a 
                      href="/services"
                      className="inline-flex items-center space-x-2 text-[#1E5FA8] font-bold text-sm md:text-base group-hover:text-[#E6C34A] transition"
                    >
                      <span>En savoir plus</span>
                      <span className="transform group-hover:translate-x-1 transition">→</span>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Énergies Renouvelables Segment */}
          <div className="mb-24">
            {/* Intro avec image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-12 items-center mb-8 md:mb-20 bg-gradient-to-br from-[#F0F8E8] to-white rounded-3xl p-2 lg:p-16">
              <img src={"/r.png"} alt="Énergies Renouvelables" className="rounded-3xl shadow-2xl w-full h-64 md:h-[500px] object-cover" />
              <div>
                <div className="inline-block mb-6 px-4 py-2 bg-green-100 rounded-full">
                  <span className="text-[#3AA655] font-bold text-xs uppercase tracking-widest">🌱 Solutions Durables & Écologiques</span>
                </div>
                <h3 className="text-2xl md:text-6xl font-bold text-[#3AA655] mb-6">Énergies Renouvelables</h3>
                <p className="text-gray-700 text-xl leading-relaxed">
                  EnerTchad s’engage à bâtir un avenir énergétique durable, inclusif et innovant.  
Nous intégrons les énergies renouvelables comme pilier stratégique de la transition énergétique et du développement continental. En réduisant les émissions de CO₂ et en contribuant aux objectifs ESG, nous favorisons l’autonomie énergétique des communautés et des industries, tout en créant de la valeur locale à travers l’emploi, la formation et l’inclusion, grâce à des innovations vertes et des solutions digitales dédiées au suivi et à l’optimisation des performances.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 mb-8">
              <Leaf className="w-8 h-8 text-[#3AA655]" />
              <h3 className="text-2xl font-bold text-[#3AA655]">Nos Services</h3>
              <div className="flex-1 h-1 bg-gradient-to-r from-[#3AA655] to-transparent rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-6">
              {services.filter(s => s.segment === "Énergies Renouvelables").map((service, idx) => {
                const ServiceIcon = service.icon;
                return (
                  <div 
                    key={idx}
                    className="group bg-white rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-[#3AA655]"
                  >
                    <div className="bg-gradient-to-br from-[#3AA655] to-[#2d8a45] p-4 rounded-xl w-fit mb-4 md:mb-6 group-hover:shadow-lg transition">
                      <ServiceIcon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                    </div>
                    <h4 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-[#3AA655] transition line-clamp-1 md:line-clamp-none">
                      {service.title}
                    </h4>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6 line-clamp-2 md:line-clamp-none">
                      {service.description}
                    </p>
                    <a 
                      href="/services"
                      className="inline-flex items-center space-x-2 text-[#3AA655] font-bold text-sm md:text-base group-hover:text-[#1E5FA8] transition"
                    >
                      <span>En savoir plus</span>
                      <span className="transform group-hover:translate-x-1 transition">→</span>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Services Complémentaires Segment */}
          <div className="mb-16">
            {/* Intro avec image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-12 items-center mb-20 bg-gradient-to-br from-[#FEF9E8] to-white rounded-3xl p-2 lg:p-16">
              <div className="order-2 md:order-1">
                <div className="inline-block mb-6 px-4 py-2 bg-yellow-100 rounded-full">
                  <span className="text-[#E6C34A] font-bold text-xs uppercase tracking-widest">🛠️ Automobile & Environnement</span>
                </div>
                <h3 className="text-2xl md:text-6xl font-bold text-[#E6C34A] mb-6">Services Complémentaires</h3>
                <p className="text-gray-700 text-xl leading-relaxed">
                  Complétez votre expérience EnerTchad avec nos services : maintenance automobile professionnelle, laverie écologique haute technologie et gestion responsable des déchets pour un Tchad plus vert.
                </p>
              </div>
              <img src={carWashImage} alt="Services Complémentaires" className="order-1 md:order-2 rounded-3xl shadow-2xl w-full h-64 md:h-[500px] object-cover" />
            </div>

            <div className="flex items-center space-x-3 mb-8">
              <Wrench className="w-8 h-8 text-[#E6C34A]" />
              <h3 className="text-2xl font-bold text-[#E6C34A]">Nos Services</h3>
              <div className="flex-1 h-1 bg-gradient-to-r from-[#E6C34A] to-transparent rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-6">
              {services.filter(s => s.segment === "Services Complémentaires").map((service, idx) => {
                const ServiceIcon = service.icon;
                return (
                  <div 
                    key={idx}
                    className="group bg-white rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-[#E6C34A]"
                  >
                    <div className="bg-gradient-to-br from-[#E6C34A] to-[#d4a028] p-4 rounded-xl w-fit mb-4 md:mb-6 group-hover:shadow-lg transition">
                      <ServiceIcon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                    </div>
                    <h4 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-[#E6C34A] transition line-clamp-1 md:line-clamp-none">
                      {service.title}
                    </h4>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6 line-clamp-2 md:line-clamp-none">
                      {service.description}
                    </p>
                    <a 
                      href="/services"
                      className="inline-flex items-center space-x-2 text-[#E6C34A] font-bold text-sm md:text-base group-hover:text-[#1E5FA8] transition"
                    >
                      <span>En savoir plus</span>
                      <span className="transform group-hover:translate-x-1 transition">→</span>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA avec WhatsApp */}
        

    
        </div>
      </section>
      {/* Main Services */}
   
      {/* Detailed Services with Images */}
  

      {/* Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#003D7A] mb-12 font-poppins">
            Pourquoi nous choisir ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow text-center"
                >
                  <div className="flex justify-center mb-4">
                    <Icon size={40} className="text-[#FFB800]" />
                  </div>
                  <h3 className="font-bold text-lg text-[#003D7A] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#003D7A] mb-16 font-poppins">
            Pourquoi Choisir EnerTchad ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Livraison Gratuite */}
            <div className="bg-gradient-to-br from-[#E8F4F8] to-[#D4E8F0] p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1E5FA8] rounded-full flex items-center justify-center">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1E5FA8] mb-3">
                Livraison Gratuite
              </h3>
              <p className="text-gray-700">
                Nous existons pour vous faire plaisir
              </p>
            </div>

            {/* Paiement Facile */}
            <div className="bg-gradient-to-br from-[#F0F8E8] to-[#E0F0D4] p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#3AA655] rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#3AA655] mb-3">
                Paiement Facile
              </h3>
              <p className="text-gray-700">
                Urna est enim pellentesque
              </p>
            </div>

            {/* Suivez votre Commande */}
            <div className="bg-gradient-to-br from-[#FEF9E8] to-[#FCF0D4] p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#E6C34A] rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#E6C34A] mb-3">
                Suivez votre Commande
              </h3>
              <p className="text-gray-700">
                Nous travaillons pour votre tranquillité
              </p>
            </div>

            {/* Questions ? */}
            <div className="bg-gradient-to-br from-[#F8E8F4] to-[#F0D4E8] p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#D946A6] rounded-full flex items-center justify-center">
                <Headset className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#D946A6] mb-3">
                Vous avez des questions ?
              </h3>
              <p className="text-gray-700">
                Merci de les poser à notre équipe
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#003D7A] to-[#005A9C] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 font-poppins">
            Prêt à commencer ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous pour en savoir plus ou visiter une station
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#FFB800] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#FFA500] transition-colors"
          >
            Nous contacter
          </a>
        </div>
      </section>
    </div>
  );
}
