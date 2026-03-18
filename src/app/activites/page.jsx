"use client";

import { motion } from "motion/react";
import {
  Fuel,
  Truck,
  Sun,
  Zap,
  Building2,
  TrendingUp,
  MapPin,
  Users,
  BarChart3,
  Award,
} from "lucide-react";

export default function ActivitiesPage() {
  const activities = [
    {
      icon: <Fuel className="w-12 h-12" />,
      title: "Distribution de carburants",
      description:
        "Exploitation de stations-service modernes et vente de produits pétroliers de qualité (essence, diesel). Réseau de distribution fiable à travers tout le territoire.",
      image:
        "https://raw.createusercontent.com/51e1e41e-1c81-4abd-9c8e-259f70d8ca81/",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Transport & Logistique",
      description:
        "Transport sécurisé de carburant par camions-citernes, gestion optimale de la chaîne d'approvisionnement et livraison rapide auprès de nos clients.",
      image:
        "https://raw.createusercontent.com/f6e68d16-d400-4e32-bb7e-37aa4df6a7e4/",
      color: "from-orange-500 to-yellow-600",
    },
    {
      icon: <Sun className="w-12 h-12" />,
      title: "Énergie Solaire",
      description:
        "Installation de systèmes photovoltaïques pour particuliers et entreprises. Électrification des zones rurales et solutions d'autoconsommation.",
      image:
        "https://raw.createusercontent.com/f58f9480-6e2a-40a1-bb6a-526b3bcfde07/",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Solutions Hybrides",
      description:
        "Combinaison intelligente d'énergie fossile et solaire pour optimiser les coûts, garantir la continuité de service et réduire l'empreinte carbone.",
      image:
        "https://raw.createusercontent.com/d6a0ae30-36d2-4983-b853-89fbdccdec97/",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Services aux Entreprises",
      description:
        "Fourniture d'énergie sur mesure, maintenance technique, accompagnement personnalisé et conseils en optimisation énergétique pour tous secteurs.",
      image:
        "https://raw.createusercontent.com/51e1e41e-1c81-4abd-9c8e-259f70d8ca81/",
      color: "from-slate-600 to-blue-700",
    },
  ];

  const sectors = [
    {
      icon: <Building2 className="w-8 h-8" />,
      name: "Industries",
      description: "Énergie fiable pour la production",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      name: "Transport",
      description: "Carburants et solutions logistiques",
    },
    {
      icon: <Users className="w-8 h-8" />,
      name: "Ménages",
      description: "Solutions énergétiques domestiques",
    },
    {
      icon: <Award className="w-8 h-8" />,
      name: "Institutions",
      description: "Partenaire du secteur public",
    },
  ];

  const stats = [
    {
      number: "50+",
      label: "Stations-service",
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      number: "2M+",
      label: "Litres distribués/mois",
      icon: <Fuel className="w-6 h-6" />,
    },
    {
      number: "5000+",
      label: "Clients actifs",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "120+",
      label: "Projets solaires",
      icon: <Sun className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2647] via-[#144272] to-[#205295] opacity-95"></div>
        <img
          src="https://raw.createusercontent.com/ab7fa403-e2f7-4251-aaff-3e4ab4264797/"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.img
            src="https://ucarecdn.com/1b6089b9-bf45-45c9-a1f2-148eceec6a0e/-/format/auto/"
            alt="Enertchad Logo"
            className="h-16 md:h-20 mx-auto mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nos activités énergétiques au service de l'Afrique
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Enertchad déploie des solutions énergétiques diversifiées, alliant
            performance, innovation et durabilité.
          </motion.p>

          <motion.a
            href="#activities"
            className="inline-block bg-gradient-to-r from-[#F4A261] to-[#E76F51] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Découvrir nos services
          </motion.a>
        </div>
      </section>

      {/* Global Overview */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-6 font-poppins">
              Un acteur majeur de l'énergie en Afrique
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Avec une expertise reconnue dans les secteurs fossile et
              renouvelable, Enertchad joue un rôle stratégique dans
              l'approvisionnement énergétique du continent. Notre diversité
              d'activités nous permet d'offrir des solutions complètes, adaptées
              aux besoins de chaque client, tout en contribuant à la transition
              énergétique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Activities */}
      <section id="activities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#0A2647] mb-4 font-poppins">
              Nos Principales Activités
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#F4A261] to-[#E76F51] mx-auto"></div>
          </motion.div>

          <div className="space-y-16">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
              >
                <div className="w-full md:w-1/2 relative group overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  ></div>
                </div>

                <div className="w-full md:w-1/2 space-y-4">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${activity.color} text-white shadow-lg`}
                  >
                    {activity.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0A2647] font-poppins">
                    {activity.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Served */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4 font-poppins">
              Secteurs Desservis
            </h2>
            <p className="text-gray-600 text-lg">
              Des solutions adaptées à chaque secteur d'activité
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#F4A261] group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0A2647] to-[#205295] rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {sector.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0A2647] mb-2 font-poppins">
                  {sector.name}
                </h3>
                <p className="text-gray-600">{sector.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 bg-gradient-to-r from-[#0A2647] via-[#144272] to-[#205295] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#F4A261] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E76F51] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
              Chiffres Clés
            </h2>
            <p className="text-gray-200 text-lg">
              Notre performance en quelques chiffres
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#F4A261] to-[#E76F51] text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-poppins">
                  {stat.number}
                </div>
                <div className="text-gray-200 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation & Development */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4 font-poppins">
              Innovation & Développement
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#F4A261] to-[#E76F51] mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <TrendingUp className="w-12 h-12 text-[#F4A261] mb-4" />
              <h3 className="text-xl font-bold text-[#0A2647] mb-3 font-poppins">
                Énergies Renouvelables
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Investissements massifs dans les technologies solaires pour
                accélérer la transition énergétique en Afrique.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <BarChart3 className="w-12 h-12 text-[#F4A261] mb-4" />
              <h3 className="text-xl font-bold text-[#0A2647] mb-3 font-poppins">
                Modernisation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Modernisation continue de nos infrastructures pour garantir
                fiabilité, sécurité et efficacité opérationnelle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <Zap className="w-12 h-12 text-[#F4A261] mb-4" />
              <h3 className="text-xl font-bold text-[#0A2647] mb-3 font-poppins">
                Digitalisation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Transformation digitale de nos services pour une expérience
                client optimale et une gestion intelligente.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#F4A261] to-[#E76F51]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-poppins">
              Prêt à collaborer avec nous ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Découvrez comment nos solutions énergétiques peuvent propulser
              votre entreprise vers l'avenir.
            </p>
            <a
              href="/"
              className="inline-block bg-white text-[#0A2647] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Contactez-nous
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
