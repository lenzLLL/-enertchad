"use client";

import React from "react";
import {
  Fuel,
  ArrowRight,
  PackageSearch,
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
  FuelIcon,
  Wrench,
    Hammer,
    Settings,
    Activity,
    Anchor,
    GaugeCircle,
    LineChart,
    Cpu,
    PaintBucket,Gauge,Atom,
  TreeDeciduous,
  GitGraph,
  AirVent,
  FireExtinguisher,
  BookOpen
} from "lucide-react";
import ServiceCard from "../../components/ServiceCard";

const evChargerImage = "https://raw.createusercontent.com/5222af1a-cfb4-4e80-a98e-84c680d4ac32/ev-charger.jpg";
const solarImage = "https://raw.createusercontent.com/5222af1a-cfb4-4e80-a98e-84c680d4ac32/solar.jpg";
const oilImage = "https://raw.createusercontent.com/6f7e64de-7812-4733-bf78-e5f94d805ed9/oil.jpg";
const carWashImage = "https://raw.createusercontent.com/6f7e64de-7812-4733-bf78-e5f94d805ed9/car-wash.jpg";
const stationInterior = "https://raw.createusercontent.com/6f7e64de-7812-4733-bf78-e5f94d805ed9/station.jpg";
import { ps, solarProductsServices, wasteCollectionServices, windProducts } from "../../data/products";

export default function Services() {
  function toSlug(title) {
    return title
      .normalize("NFD")
      .replace(/\p{M}/gu, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }
  
      const services = [
     {
     icon: Flame,
     title: "Biomasse Solide",
        description:
          "Bois énergie, charbon de bois, résidus agricoles, briquettes et déchets agro-industriels.",
            desc: "Bois énergie, charbon de bois et résidus agricoles transformés en briquettes et combustibles solides. Nous fournissons études de filière, solutions de transformation locale, et accompagnement pour la mise en place de chaînes de valeur durables et rentables.",
          img: "/services/biomasse.jpg",
     segment: "Énergies Renouvelables",
   },
   
   // 💨 Biogaz
   {
     icon: Recycle,
     title: "Biogaz",
    description:
      "Méthane issu de biodigesteurs, gaz de décharge et stations d’épuration.",
    desc: "Conception, construction et exploitation de systèmes de biodigestion pour valoriser les déchets organiques en énergie (biogaz) et nutriments. Services complets : études, dimensionnement, exploitation, maintenance et formation des équipes locales.",
    img: "/services/biogaz.jpg",
     segment: "Énergies Renouvelables",
   },
    {
     icon: Gauge,
     title: "Production & Optimisation",
    description:
      "Systèmes de levage artificiel (ESP, Gas Lift, Rod Pump) et gestion des flux multiphasiques.",
        desc: "Optimisation de la production pétrolière par sélection et intégration de systèmes de levage artificiel (ESP, gas lift, pompes à tiges), instrumentation et analyses multiphasiques pour améliorer la récupération et réduire les coûts opérationnels.",
      img: "/services/production.jpg",
     segment: "Énergies Fossiles",
   },
   // ⛽ Biocarburants liquides
   {
     icon: Droplet,
     title: "Biocarburants Liquides",
    description:
      "Bioéthanol, biodiesel, biokérosène et huiles végétales pour mobilité et industrie.",
    desc: "Mise en place de filières de production et distribution de biocarburants (bioéthanol, biodiesel, biokérosène), incluant formulation, contrôles qualité, certifications et intégration logistique pour marchés locaux et industriels.",
    img: "/services/biocarburants.jpg",
     segment: "Énergies Renouvelables",
   },
   
   // ⚡ Biohydrogène & Gaz de synthèse
   {
     icon: Atom,
     title: "Biohydrogène & Gaz de Synthèse",
    description:
      "Hydrogène vert et syngas (CO + H₂) issus de la biomasse par fermentation ou gazéification.",
    desc: "Solutions intégrées pour la production d'hydrogène vert et de syngaz à partir de biomasse, incluant gazéification, purification, stockage et stratégies d'intégration industrielle pour décarboner les processus énergétiques.",
    img: "/services/hydrogene.jpg",
     segment: "Énergies Renouvelables",
   },
    {
     icon: Hammer,
     title: "Forage & Complétion",
    description:
      "Forage directionnel et horizontal, cimentation intelligente et acquisition de données en temps réel.",
        desc: "Forage et complétion avec technologies modernes, instrumentation temps réel, procédures HSE strictes et opérations de cimentation avancée pour garantir intégrité, performance et sécurité des puits.",
      img: "/services/forage.jpg",
     segment: "Énergies Fossiles",
   },

    // Services spécialisés de puits
    {
      icon: GaugeCircle,
      title: "Services spécialisés de puits",
      description: "Slickline, Wireline, Coiled Tubing, Fishing, Well Testing et Workover pour opérations de puits.",
      desc: "Offre complète de services spécialisés de puits : Slickline (opérations mécaniques, ouverture/fermeture de vannes, récupération d’outils), Wireline (diagraphies, mesures de pression/température, acquisition de données), Coiled Tubing (nettoyage, acidification, interventions sous pression), Fishing Services (récupération d’outils perdus), Well Testing (tests de production et caractérisation des réservoirs) et Workover (réhabilitation, remplacement d’équipements et optimisation des débits). Ces services visent à garantir la performance, la sécurité et la longévité des puits.",
      img: "/services/puits.jpg",
      segment: "Énergies Fossiles",
    },

   
   
   // 🛠 Ingénierie & Maintenance
   {
     icon:PaintBucket,
     title: "Ingénierie & Maintenance",
    description:
      "Stimulation hydraulique, interventions sur puits et maintenance prédictive et industrielle, conformité HSE.",
    desc: "Ingénierie et maintenance industrielle : nous réalisons des études d'ingénierie complètes, la conception et l'exécution d'opérations de stimulation et d'interventions en puits (cimentation, complétion, réparations ponctuelles) et mettons en place des programmes de maintenance prédictive basés sur capteurs IoT, analyses vibratoires et surveillance conditionnelle. Nous intégrons la télésurveillance SCADA, établissons plans HSE et procédures d'urgence, gérons les pièces de rechange critiques et assurons la formation des équipes locales. Ces services visent à minimiser les arrêts non planifiés, optimiser la disponibilité des actifs, prolonger la durée de vie des installations et réduire les coûts opérationnels sur le long terme.",
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
        desc: "Réseau de stations-service modernes et sécurisées avec carburants certifiés, services annexes, boutiques et solutions digitales de paiement. Programmes de partenariat pour entreprises, gestion flotte et assistance 24/7.",
         segment: "Services Complémentaires",
       },
       
       {
         icon: Truck,
         title: "Transport et livraison",
        description:
          "Le transport, le stockage et la distribution des hydrocarbures et de leurs dérivés.",
        desc: "Transport et logistique pour hydrocarbures, stockage sécurisé et distribution sur mesure pour clients industriels.",
         segment: "Énergies Fossiles",
       },
         {
         icon: FuelIcon,
         title: "Raffinérie",
        description:
          "Le raffinage, la transformation et la valorisation des produits pétroliers et gaziers.",
        desc: "Services et conseil pour raffineries: optimisation des procédés, transformation et valorisation des produits.",
         segment: "Énergies Fossiles",
       },
    

       {
         icon: Leaf,
         title: "Énergie Solaire",
        description:
          "Solutions d'énergie renouvelable pour particuliers et entreprises",
        desc: "Conception, installation et maintenance de systèmes photovoltaïques pour particuliers et entreprises, solutions de financement.",
         segment: "Énergies Renouvelables",
       },
       {
         icon: Wind,
         title: "Énergie Éolienne",
        description:
          "Solutions d'énergie éolienne pour entreprises et communautés : études, installation et maintenance de petites et moyennes turbines.",
        desc: "Études de faisabilité, installation et maintenance de turbines éoliennes adaptées aux besoins locaux et industriels.",
         segment: "Énergies Renouvelables",
       },
       {
         icon: Zap,
         title: "Recharge Électrique",
        description: "Stations de recharge rapide pour véhicules électriques",
        desc: "Déploiement de stations de recharge rapide, solutions Smart Charging et intégration pour flottes et infrastructures.",
         segment: "Énergies Renouvelables",
       },
         {
    icon: TreeDeciduous, // Remplacez par l'icône Lucide React appropriée
    title: "Caractérisation des Biomasses",
    description: "Analyse des différents types de biomasses disponibles.",
    desc: "Caractérisation des biomasses telles que le bois, les résidus agricoles et les déchets organiques pour optimiser leur utilisation dans des projets bioénergétiques.",
    segment: "Énergies Renouvelables",
  },
  {
    icon: GitGraph, // Remplacez par l'icône Lucide React appropriée
    title: "Études de Faisabilité",
    description: "Analyse technico-économique pour projets durables.",
    desc: "Études de faisabilité pour évaluer les opportunités d'investissement dans les projets bioénergétiques, en tenant compte des aspects techniques et économiques.",
    segment: "Énergies Renouvelables",
  },
  {
    icon: AirVent, // Remplacez par l'icône Lucide React appropriée
    title: "Installation Biogaz",
    description: "Mise en œuvre d'unités de biogaz.",
    desc: "Installation de stations de biogaz pour transformer les déchets organiques en énergie renouvelable efficace.",
    segment: "Énergies Renouvelables",
  },
  {
    icon: FireExtinguisher, // Remplacez par l'icône Lucide React appropriée
    title: "Chaudières Biomasse",
    description: "Solution de chauffage efficace et durable.",
    desc: "Installation de chaudières biomasse pour fournir de la chaleur durable à différents types d'industries et de collectivités.",
    segment: "Énergies Renouvelables",
  },
  {
    icon: Shield, // Remplacez par l'icône Lucide React appropriée
    title: "Certification RED II",
    description: "Accompagnement pour biocarburants durables.",
    desc: "Aide à la certification RED II pour garantir que les biocarburants produits respectent les normes de durabilité requises.",
    segment: "Énergies Renouvelables",
  },
  {
    icon: BookOpen, // Remplacez par l'icône Lucide React appropriée
    title: "Formation Techniques Bioénergies",
    description: "Formations pour les professionnels du secteur.",
    desc: "Ateliers et formations techniques sur les dernières technologies en bioénergies, adaptés aux besoins des collectivités, entreprises et agriculteurs.",
    segment: "Énergies Renouvelables",
  },  {
    icon: Activity,
    title: "Études Géothermiques",
    description: "Analyses thermiques et potentiel géothermique du site.",
    desc: "Études géothermiques détaillées pour évaluer le potentiel géothermique, caractérisation des sols et dimensionnement des systèmes de chauffage/refroidissement.",
    segment: "Géothermie",
  },
  {
    icon: Wrench,
    title: "Installation Systèmes Géothermiques",
    description: "Pose de pompes à chaleur et circuits géothermiques.",
    desc: "Installation professionnelle de pompes à chaleur géothermiques, forage et mise en place des circuits pour chauffage, refroidissement et eau chaude.",
    segment: "Géothermie",
  },
  {
    icon: Settings,
    title: "Maintenance & Monitoring",
    description: "Suivi et entretien régulier des systèmes.",
    desc: "Services de maintenance préventive, monitoring en temps réel et optimisation des performances pour garantir l'efficacité énergétique durable.",
    segment: "Géothermie",
  },  
       {
         icon: Sparkles,
         title: "Laverie Auto",
        description: "Services de nettoyage automatisé et écologique",
        desc: "Laverie auto automatisée et écologique avec économie d'eau et solutions de recyclage pour flottes et particuliers.",
         segment: "Services Complémentaires",
       },
        
       {
         icon: Wrench,
         title: "Maintenance Auto",
        description:
          "Services d'entretien et de réparation automobiles professionnels",
        desc: "Services d'entretien, diagnostic et réparation automobile pour particuliers et flottes, interventions rapides et pièces d'origine.",
         segment: "Services Complémentaires",
       },
       {
         icon: Recycle,
         title: "Traitement de Déchets",
        description:
          "Unité complète de traitement des déchets plastiques et ménagers avec solutions durables",
        desc: "Unités de traitement et valorisation des déchets plastiques et ménagers, technologies de recyclage et filières de revalorisation.",
         segment: "Services Complémentaires",
       },
       {
         icon: Headset,
         title: "Assistance Technique",
        description:
          "Support technique 24/7 pour tous vos questions et problèmes",
        desc: "Hotline et assistance technique 24/7, interventions terrain et support pour assurer la continuité des activités.",
         segment: "Services Complémentaires",
       },
     ];
  const mainServices = [
    {
      icon: Fuel,
      title: "Station-Service",
      description:
        "Carburants de qualité supérieure, diesel et essence, disponibles 24/7 dans nos stations modernes et sécurisées.",
      desc: "Réseau de stations-service modernes avec carburants certifiés, services annexes et sécurité renforcée.",
      segment: "Énergies Fossiles",
    },
    {
      icon: Truck,
      title: "Livraison Mobile de Carburant",
      description:
        "Service de livraison directe pour industriels et particuliers — ravitaillement sur site 24/7.",
      desc: "Livraison mobile de carburant sur site, avec flotte dédiée, sécurité et traçabilité des opérations.",
      segment: "Énergies Fossiles",
    },
    {
      icon: Shield,
      title: "Import de Carburant",
      description:
        "Importation et distribution de carburant certifié internationalement avec contrôle qualité rigoureux.",
      desc: "Importation et distribution de carburant conforme aux normes internationales, avec contrôle qualité et logistique dédiée.",
      segment: "Énergies Fossiles",
    },
    {
      icon: Leaf,
      title: "Énergie Solaire",
      description:
        "Solutions photovoltaïques complètes : études, installation, stockage et maintenance pour entreprises et foyers.",
      desc: "Conception et installation de systèmes solaires PV, stockage et maintenance, avec expertise pour projets résidentiels et commerciaux.",
      segment: "Énergies Renouvelables",
    },
    {
      icon: Zap,
      title: "Recharge Électrique",
      description:
        "Stations de recharge rapide pour véhicules électriques avec monitoring et paiement numérique.",
      desc: "Installation et gestion de stations de recharge rapide, intégration de solutions de paiement et monitoring pour flottes et usagers.",
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
      key: "Géothermie",
      badge: "🌍 Géothermie",
      title: "Géothermie",
      description:
        "Exploitation de la chaleur naturelle du sous-sol pour des solutions durables de chauffage, refroidissement et production d'eau chaude.",
      imageSrc: solarImage,
      icon: Activity,
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
        
          <h1 className="text-2xl md:text-6xl font-bold text-[#1E5FA8] mb-4 md:mb-6">
            Énergies  <span className="bg-gradient-to-r from-[#3AA655] to-[#E6C34A] bg-clip-text text-transparent">Renouvelables</span>
          </h1>
          <p className="text-gray-700 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Solutions énergétiques et automobiles complètes pour tous vos besoins
          </p>
        </div>
      </section>
  <section className="py-8 md:py-32 px-4 bg-gradient-to-b from-[#F5E6D3] to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E6C34A]/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
        

          {/* Énergies Fossiles Segment */}
         

          {/* Énergies Renouvelables Segment */}
          <div id="solutions" className="mb-24">
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

            <div id="bioenergies" className="flex items-center space-x-3 mb-8">
              <Leaf className="w-8 h-8 text-[#3AA655]" />
              <h3 className="text-2xl font-bold text-[#3AA655]">Bioénergies</h3>
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
                      {ServiceIcon ? (
                        <ServiceIcon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                      ) : (
                        <Droplet className="w-6 md:w-8 h-6 md:h-8 text-white" />
                      )}
                    </div>
                    <h4 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-[#3AA655] transition line-clamp-1 md:line-clamp-none">
                      {service.title}
                    </h4>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6 line-clamp-2 md:line-clamp-none">
                      {service.description}
                    </p>
                    <a 
                      href={`/services/${toSlug(service.title)}`}
                      className="inline-flex items-center space-x-2 text-[#3AA655] font-bold text-sm md:text-base group-hover:text-[#1E5FA8] transition"
                    >
                      <span>En savoir plus</span>
                      <span className="transform group-hover:translate-x-1 transition">→</span>
                    </a>
                  </div>
                );
              })}
            </div>

                        <div id="solaire" className="flex items-center space-x-3 mb-8 mt-5">
                          <Leaf className="w-8 h-8 text-[#3AA655]" />
                          <h3 className=" text-md lg:text-2xl font-bold text-[#3AA655]">Energies Solaires</h3>
                          <div className="flex-1 h-1 bg-gradient-to-r from-[#3AA655] to-transparent rounded-full"></div>
                     
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-6">
                          {solarProductsServices.map((service, idx) => {
                            const ServiceIcon = service.icon;
                            return (
                              <div 
                                key={idx}
                                className="group bg-white rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-[#3AA655]"
                              >
                                <div className="bg-gradient-to-br from-[#3AA655] to-[#2d8a45] p-4 rounded-xl w-fit mb-4 md:mb-6 group-hover:shadow-lg transition">
                                  {ServiceIcon ? (
                                    <ServiceIcon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                                  ) : (
                                    <Droplet className="w-6 md:w-8 h-6 md:h-8 text-white" />
                                  )}
                                </div>
                                <h4 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-[#3AA655] transition line-clamp-1 md:line-clamp-none">
                                  {service.title}
                                </h4>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6 line-clamp-2 md:line-clamp-none">
                                  {service.description}
                                </p>
                                <a 
                                  href={`/services/${toSlug(service.title)}`}
                                  className="inline-flex items-center space-x-2 text-[#3AA655] font-bold text-sm md:text-base group-hover:text-[#1E5FA8] transition"
                                >
                                  <span>En savoir plus</span>
                                  <span className="transform group-hover:translate-x-1 transition">→</span>
                                </a>
                              </div>
                            );
                          })}
                        </div>
            
                        <div id="eolien" className="flex items-center space-x-3 mb-8 mt-5">
                          <Leaf className="w-8 h-8 text-[#3AA655]" />
                          <h3 className=" text-md lg:text-2xl font-bold text-[#3AA655]">Energies Éoliennes</h3>
                          <div className="flex-1 h-1 bg-gradient-to-r from-[#3AA655] to-transparent rounded-full"></div>
                    
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-6">
                          {windProducts.map((service, idx) => {
                            const ServiceIcon = service.icon;
                            return (
                              <div 
                                key={idx}
                                className="group bg-white rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-[#3AA655]"
                              >
                                <div className="bg-gradient-to-br from-[#3AA655] to-[#2d8a45] p-4 rounded-xl w-fit mb-4 md:mb-6 group-hover:shadow-lg transition">
                                  {ServiceIcon ? (
                                    <ServiceIcon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                                  ) : (
                                    <Droplet className="w-6 md:w-8 h-6 md:h-8 text-white" />
                                  )}
                                </div>
                                <h4 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-[#3AA655] transition line-clamp-1 md:line-clamp-none">
                                  {service.title}
                                </h4>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6 line-clamp-2 md:line-clamp-none">
                                  {service.description}
                                </p>
                                <a 
                                  href={`/services/${toSlug(service.title)}`}
                                  className="inline-flex items-center space-x-2 text-[#3AA655] font-bold text-sm md:text-base group-hover:text-[#1E5FA8] transition"
                                >
                                  <span>En savoir plus</span>
                                  <span className="transform group-hover:translate-x-1 transition">→</span>
                                </a>
                              </div>
                            );
                          })}
                        </div>
            
            
            
                        <div id="dechets" className="flex items-center space-x-3 mb-8 mt-5">
                          <Leaf className="w-8 h-8 text-[#3AA655]" />
                          <h3 className=" text-md lg:text-2xl font-bold text-[#3AA655]">Gestion des déchets</h3>
                          <div className="flex-1 h-1 bg-gradient-to-r from-[#3AA655] to-transparent rounded-full"></div>
                    
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-6">
                          {wasteCollectionServices.map((service, idx) => {
                            const ServiceIcon = service.icon;
                            return (
                              <div 
                                key={idx}
                                className="group bg-white rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-[#3AA655]"
                              >
                                <div className="bg-gradient-to-br from-[#3AA655] to-[#2d8a45] p-4 rounded-xl w-fit mb-4 md:mb-6 group-hover:shadow-lg transition">
                                  {ServiceIcon ? (
                                    <ServiceIcon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                                  ) : (
                                    <Droplet className="w-6 md:w-8 h-6 md:h-8 text-white" />
                                  )}
                                </div>
                                <h4 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-[#3AA655] transition line-clamp-1 md:line-clamp-none">
                                  {service.title}
                                </h4>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6 line-clamp-2 md:line-clamp-none">
                                  {service.description}
                                </p>
                                <a 
                                  href={`/services/${toSlug(service.title)}`}
                                  className="inline-flex items-center space-x-2 text-[#3AA655] font-bold text-sm md:text-base group-hover:text-[#1E5FA8] transition"
                                >
                                  <span>En savoir plus</span>
                                  <span className="transform group-hover:translate-x-1 transition">→</span>
                                </a>
                              </div>
                            );
                          })}
                        </div>

                        {/* Intro Géothermie avec image */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-12 items-center mb-8 md:mb-20 bg-gradient-to-br from-[#F0F8E8] to-white rounded-3xl p-2 lg:p-16 mt-24">
                          <img src={"/r.png"} alt="Géothermie" className="rounded-3xl shadow-2xl w-full h-64 md:h-[500px] object-cover" />
                          <div>
                            <div className="inline-block mb-6 px-4 py-2 bg-green-100 rounded-full">
                              <span className="text-[#3AA655] font-bold text-xs uppercase tracking-widest">🌍 Chauffage & Refroidissement Durables</span>
                            </div>
                            <h3 className="text-2xl md:text-6xl font-bold text-[#3AA655] mb-6">Géothermie</h3>
                            <p className="text-gray-700 text-xl leading-relaxed">
                              EnerTchad propose des solutions géothermiques innovantes pour exploiter la chaleur naturelle du sous-sol. La géothermie offre une source d'énergie renouvelable, stable et performante pour le chauffage, le refroidissement et la production d'eau chaude sanitaire. En intégrant cette technologie durable, vous réduisez vos consommations énergétiques, vos émissions de CO₂ et vos coûts opérationnels à long terme, tout en contribuant à la transition énergétique et aux objectifs ESG.
                            </p>
                          </div>
                        </div>

                        <div id="geothermie" className="flex items-center space-x-3 mb-8">
                          <Activity className="w-8 h-8 text-[#3AA655]" />
                          <h3 className="text-2xl font-bold text-[#3AA655]">Services Géothermiques</h3>
                          <div className="flex-1 h-1 bg-gradient-to-r from-[#3AA655] to-transparent rounded-full"></div>
                    
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-6">
                          {services.filter(s => s.segment === "Géothermie").map((service, idx) => {
                            const ServiceIcon = service.icon;
                            return (
                              <div 
                                key={idx}
                                className="group bg-white rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-[#3AA655]"
                              >
                                <div className="bg-gradient-to-br from-[#3AA655] to-[#2d8a45] p-4 rounded-xl w-fit mb-4 md:mb-6 group-hover:shadow-lg transition">
                                  {ServiceIcon ? (
                                    <ServiceIcon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                                  ) : (
                                    <Droplet className="w-6 md:w-8 h-6 md:h-8 text-white" />
                                  )}
                                </div>
                                <h4 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-[#3AA655] transition line-clamp-1 md:line-clamp-none">
                                  {service.title}
                                </h4>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6 line-clamp-2 md:line-clamp-none">
                                  {service.description}
                                </p>
                                <a 
                                  href={`/services/${toSlug(service.title)}`}
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

          

          {/* CTA avec WhatsApp */}
        

    
        </div>
      </section>
      {/* Main Services */}
   
      {/* Detailed Services with Images */}
  


      {/* Information Section */}
     
    </div>
  );
}
