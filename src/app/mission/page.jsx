"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Zap,
  Users,
  Leaf,
  ShieldCheck,
  ArrowRight,
  Sun,
  Droplets,
  Globe,
  Target,
  Handshake,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

const Logo = ({ className = "" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <img
      src="https://ucarecdn.com/1b6089b9-bf45-45c9-a1f2-148eceec6a0e/-/format/auto/"
      alt="Enertchad Logo"
      className="h-10 w-auto"
    />
    <span className="text-[#1a365d] font-poppins font-bold text-2xl tracking-tight">
      ENERTCHAD
    </span>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-[#1a365d] font-medium hover:text-[#fbbf24] transition-colors"
            >
              Notre Vision
            </a>
            <a
              href="#"
              className="text-[#1a365d] font-medium hover:text-[#fbbf24] transition-colors"
            >
              Mission
            </a>
            <a
              href="#"
              className="text-[#1a365d] font-medium hover:text-[#fbbf24] transition-colors"
            >
              Impact
            </a>
            <button className="bg-[#1a365d] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#2a4a7d] transition-all shadow-lg shadow-blue-900/10">
              Nous contacter
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1a365d]"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-4 py-6 flex flex-col gap-4 shadow-xl"
        >
          <a href="#" className="text-[#1a365d] font-medium text-lg">
            Notre Vision
          </a>
          <a href="#" className="text-[#1a365d] font-medium text-lg">
            Mission
          </a>
          <a href="#" className="text-[#1a365d] font-medium text-lg">
            Impact
          </a>
          <button className="bg-[#1a365d] text-white px-6 py-3 rounded-full font-medium text-lg">
            Nous contacter
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-screen flex items-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src="https://raw.createusercontent.com/2cb41492-a49e-4f35-a6dc-ffef94e3d7ab/"
        alt="Modern African Energy Landscape"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/90 to-transparent"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <span className="inline-block px-4 py-1.5 bg-[#fbbf24] text-[#1a365d] rounded-full text-sm font-bold tracking-wider uppercase mb-6">
          Énergie Durable pour l'Afrique
        </span>
        <h1 className="text-5xl md:text-7xl font-poppins font-bold text-white leading-tight mb-6">
          Notre mission : <br />
          <span className="text-[#fbbf24]">Alimenter l’avenir</span> 
          
        </h1>
        <p className="text-xl text-blue-50/90 leading-relaxed mb-8 font-light">
          Chez Enertchad, nous combinons expertise énergétique et innovation
          pour fournir des solutions fiables, responsables et tournées vers la
          transition écologique.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href={"/contact"}>
          <button className="bg-[#fbbf24] text-[#1a365d] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 group">
            Découvrir nos engagements
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </button>
          </Link>
          
        </div>
      </motion.div>
    </div>

    {/* Scroll Indicator */}
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
    >
      <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
        <div className="w-1 h-2 bg-white/50 rounded-full"></div>
      </div>
    </motion.div>
  </section>
);

const MissionSection = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2 relative"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#fbbf24]/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
          <img
            src="https://raw.createusercontent.com/ccfcd0c8-cfea-4f10-a7ce-9ca6ea08d946/"
            alt="Technical team working"
            className="rounded-3xl shadow-2xl relative z-10"
          />
          <div className="absolute bottom-6 right-6 bg-[#1a365d] p-6 rounded-2xl shadow-xl z-20 text-white hidden sm:block">
            <p className="text-3xl font-bold mb-1 tracking-tight">100%</p>
            <p className="text-blue-200 text-sm">Engagement local</p>
          </div>
        </motion.div>

        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-poppins font-bold text-[#1a365d] mb-8 leading-tight">
              Une vision claire pour <br />
              l'indépendance énergétique
            </h2>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#1a365d]">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-2">
                    Accessibilité Mondiale
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fournir une énergie accessible et fiable à travers tout le
                    Tchad et l'Afrique centrale pour stimuler la croissance.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-[#fbbf24]/10 rounded-xl flex items-center justify-center text-[#f59e0b]">
                  <Leaf size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-2">
                    Transition Énergétique
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Accélérer l'adoption de solutions hybrides et solaires pour
                    réduire notre empreinte carbone.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-2">
                    Développement Économique
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Soutenir le tissu industriel local en garantissant une
                    fourniture d'énergie stable et prévisible.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const PillarCard = ({ icon: Icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-[#fbbf24] transition-all hover:shadow-2xl hover:shadow-blue-900/5 group"
  >
    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#1a365d] mb-6 group-hover:bg-[#fbbf24] group-hover:text-white transition-colors">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-bold text-[#1a365d] mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </motion.div>
);

const Pillars = () => (
  <section className="py-24 bg-gray-50/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-poppins font-bold text-[#1a365d] mb-4">
          Nos piliers stratégiques
        </h2>
        <p className="text-gray-600 text-lg">
          Nous bâtissons l'avenir sur des fondations solides et une expertise
          multidisciplinaire.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <PillarCard
          icon={Users}
          title="Accessibilité"
          desc="Rendre l'énergie disponible pour tous, partout, sans compromis sur la qualité."
          delay={0.1}
        />
        <PillarCard
          icon={Zap}
          title="Innovation"
          desc="Développer des solutions hybrides de pointe combinant le meilleur du solaire et du fossile."
          delay={0.2}
        />
        <PillarCard
          icon={ShieldCheck}
          title="Durabilité"
          desc="Investir massivement dans le renouvelable pour préserver l'environnement pour les générations futures."
          delay={0.3}
        />
        <PillarCard
          icon={Handshake}
          title="Excellence"
          desc="Une rigueur opérationnelle garantissant sécurité, efficacité et satisfaction client."
          delay={0.4}
        />
      </div>
    </div>
  </section>
);

const ImpactSection = () => (
  <section className="py-24 bg-[#1a365d] text-white relative overflow-hidden">
    {/* Abstract Background Elements */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-[#fbbf24]/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl font-poppins font-bold mb-12">
            Engagement & Impact Social
          </h2>

          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-[#fbbf24]">
                <Sun size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Vision Écologique Long Terme
                </h3>
                <p className="text-blue-100 font-light leading-relaxed">
                  Nous réduisons activement nos émissions à travers
                  l'optimisation de nos stations et l'intégration systématique
                  du solaire dans nos infrastructures.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-blue-300">
                <Users size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Développement Local</h3>
                <p className="text-blue-100 font-light leading-relaxed">
                  Plus de 90% de nos équipes techniques sont formées localement,
                  créant des opportunités durables et spécialisées dans tout le
                  pays.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-green-400">
                <Globe size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Impact Rural</h3>
                <p className="text-blue-100 font-light leading-relaxed">
                  Nous apportons des solutions énergétiques modulaires dans les
                  zones les plus reculées, ouvrant la voie à l'éducation et à la
                  santé.
                </p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://raw.createusercontent.com/6f35fe7c-9fb1-41b6-a55d-33d332b22fda/"
            alt="Modern Service Station"
            className="rounded-3xl shadow-2xl brightness-90 border border-white/10"
          />
          <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-2xl">
            <div className="flex items-center gap-4 text-[#1a365d]">
              <div className="text-5xl font-bold tracking-tighter tracking-tighter">
                500+
              </div>
              <div className="text-sm font-bold uppercase tracking-wider leading-tight">
                Emplois <br />
                Directs Créés
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Quote = () => (
  <section className="py-32 bg-white relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center mb-10 text-[#fbbf24]">
          <span className="text-8xl font-serif leading-none">“</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-poppins italic font-bold text-[#1a365d] mb-10 leading-tight">
          L’énergie est le moteur du progrès, et notre mission est de la rendre
          durable pour tous.
        </h2>
        <div className="h-1 w-24 bg-[#fbbf24] mx-auto rounded-full mb-6"></div>
        <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-sm">
          Vision Enertchad 2030
        </p>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-950 text-gray-400 py-20 border-t border-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <Logo className="mb-6 brightness-0 invert" />
          <p className="max-w-md text-lg text-gray-500 leading-relaxed">
            Leader de la transition énergétique en Afrique Centrale, nous
            œuvrons pour un avenir où l'énergie est propre, abondante et
            partagée.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
            Navigation
          </h4>
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                À propos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Expertise
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Carrières
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Actualités
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
            Contact
          </h4>
          <ul className="space-y-4">
            <li>N'Djaména, Tchad</li>
            <li>contact@enertchad.com</li>
            <li>+235 XX XX XX XX</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>© 2026 Enertchad. Tous droits réservés.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">
            Mentions légales
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Politique de confidentialité
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-white font-poppins selection:bg-[#fbbf24]/30">
      <Hero />
      <MissionSection />
      <Pillars />
      <ImpactSection />
      <Quote />

  
    </div>
  );
}
