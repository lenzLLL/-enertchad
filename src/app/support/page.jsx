"use client";

import { Search, ChevronRight,Phone, Mail, MessageSquare, HelpCircle, Fuel, Building, CreditCard, Truck, Wrench, MapPin, Clock, CheckCircle, Send, FileText, Users, Zap } from "lucide-react";
import { useState } from "react";

export default function Support() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      icon: Fuel,
      title: "Produits & Carburants",
      description: "Qualité, disponibilité et problèmes liés aux carburants",
      color: "from-blue-500 to-blue-600",
      items: ["Qualité du carburant", "Disponibilité produits", "Problèmes de pompe", "Conseils utilisation"]
    },
    {
      icon: Building,
      title: "Stations-Service",
      description: "Localisation, services et équipements des stations",
      color: "from-green-500 to-green-600",
      items: ["Trouver une station", "Services disponibles", "Horaires d'ouverture", "État des équipements"]
    },
    {
      icon: CreditCard,
      title: "Paiements",
      description: "Mobile Money, cartes et problèmes de facturation",
      color: "from-purple-500 to-purple-600",
      items: ["Paiement Mobile Money", "Carte de fidélité", "Problèmes de facturation", "Remboursements"]
    },
    {
      icon: Truck,
      title: "Livraison",
      description: "Commandes et livraison de carburant",
      color: "from-orange-500 to-orange-600",
      items: ["Suivi de commande", "Retard de livraison", "Modification commande", "Annulation"]
    },
    {
      icon: Wrench,
      title: "Support Technique",
      description: "Maintenance et problèmes techniques",
      color: "from-red-500 to-red-600",
      items: ["Maintenance équipements", "Pannes techniques", "Installation", "Réparations"]
    }
  ];

  const faqs = [
    {
      question: "Comment localiser la station-service la plus proche ?",
      answer: "Utilisez notre outil de localisation sur le site web ou l'application mobile. Vous pouvez également appeler notre service client au +235 62 123 456."
    },
    {
      question: "Quels moyens de paiement sont acceptés dans vos stations ?",
      answer: "Nous acceptons les paiements en espèces, Mobile Money (Airtel Money, Moov Money), cartes de débit/crédit Visa et Mastercard, ainsi que notre carte de fidélité EnerTchad."
    },
    {
      question: "Que faire en cas de problème de qualité du carburant ?",
      answer: "Contactez immédiatement notre service qualité au +235 62 123 456. Un technicien se rendra sur place pour analyser le problème. Nous garantissons la qualité de nos produits."
    },
    {
      question: "Comment devenir partenaire EnerTchad ?",
      answer: "Pour devenir partenaire (stations, entreprises, industries), contactez notre service commercial au commercial@enertchad.td ou appelez le +235 62 123 457."
    },
    {
      question: "Quelles sont vos horaires de service client ?",
      answer: "Notre service client est disponible 24h/24 et 7j/7 au +235 62 123 456. Pour les demandes complexes, notre équipe technique est disponible du lundi au vendredi de 8h à 17h."
    },
    {
      question: "Comment suivre ma commande de carburant ?",
      answer: "Connectez-vous à votre espace client sur notre site web ou utilisez l'application mobile. Vous pouvez suivre l'état de votre commande en temps réel."
    }
  ];

  const suggestions = [
    "Problème de paiement",
    "Localiser une station",
    "Réclamation carburant",
    "Problème carte client",
    "Qualité du carburant",
    "Horaires d'ouverture",
    "Devenir partenaire",
    "Commande carburant"
  ];

  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1E5FA8] to-[#164a8a] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <HelpCircle size={64} className="text-[#E6C34A]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Comment pouvons-nous vous aider ?
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Notre équipe est là pour résoudre vos problèmes rapidement et efficacement
          </p>

          {/* Search Bar */}
      

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-[#E6C34A] text-[#1E5FA8] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              <MessageSquare className="mr-2" size={20} />
              Contacter le support
            </a>

       
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Catégories d'assistance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trouvez rapidement l'aide dont vous avez besoin selon votre problème
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer hover:border-[#1E5FA8]"
                onClick={() => setSelectedCategory(selectedCategory === index ? null : index)}
              >
                <div className={`bg-gradient-to-r ${category.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <category.icon className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>

                {selectedCategory === index && (
                  <div className="space-y-2 animate-fade-in">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle size={14} className="text-green-500 mr-2" />
                        {item}
                      </div>
                    ))}
                  </div>
                )}

                <button className="text-[#1E5FA8] font-semibold hover:text-blue-800 mt-4 flex items-center">
                  En savoir plus
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-lg text-gray-600">
              Trouvez rapidement des réponses à vos questions les plus courantes
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <summary className="px-6 py-4 font-semibold text-gray-900 cursor-pointer hover:bg-gray-50 flex items-center">
                  <HelpCircle size={18} className="text-[#1E5FA8] mr-3 flex-shrink-0" />
                  {faq.question}
                </summary>
                <div className="px-6 pb-4 text-gray-700">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Vous ne trouvez pas la réponse à votre question ?
            </p>
            <a
              href="#contact"
              className="bg-[#1E5FA8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center"
            >
              <MessageSquare className="mr-2" size={16} />
              Contactez-nous
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contacter le support
            </h2>
            <p className="text-lg text-gray-600">
              Notre équipe vous répondra dans les plus brefs délais
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5FA8] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Type de client
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5FA8] focus:border-transparent">
                    <option>Particulier</option>
                    <option>Entreprise</option>
                    <option>Station partenaire</option>
                    <option>Autre</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5FA8] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5FA8] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Catégorie *
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5FA8] focus:border-transparent" required>
                  <option>Sélectionnez une catégorie</option>
                  <option>Produits & Carburants</option>
                  <option>Stations-Service</option>
                  <option>Paiements</option>
                  <option>Livraison</option>
                  <option>Support Technique</option>
                  <option>Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  placeholder="Décrivez brièvement votre problème"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5FA8] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  rows={5}
                  placeholder="Décrivez en détail votre problème ou votre demande d'assistance..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5FA8] focus:border-transparent"
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Pièces jointes (optionnel)
                </label>
                <p className="text-sm text-gray-500 mb-2">
                  Photos, factures, captures d'écran... (max 10MB)
                </p>
                <input
                  type="file"
                  multiple
                  accept="image/*,.pdf,.doc,.docx"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E5FA8] focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#1E5FA8] file:text-white hover:file:bg-blue-800"
                />
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="consent"
                  className="mt-1"
                  required
                />
                <label htmlFor="consent" className="text-gray-700 text-sm">
                  J'accepte que mes données soient traitées conformément à la
                  <a href="/confidentialite" className="text-[#1E5FA8] hover:underline"> politique de confidentialité</a> d'EnerTchad. *
                </label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#1E5FA8] text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors inline-flex items-center"
                >
                  <Send className="mr-2" size={20} />
                  Envoyer la demande
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Autres moyens de nous contacter
            </h3>
            <p className="text-gray-600">
              Pour une réponse plus rapide selon l'urgence de votre situation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-[#1E5FA8] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Service Client</h4>
              <p className="text-gray-600 mb-3">24h/24 - 7j/7</p>
              <p className="text-[#1E5FA8] font-semibold">+235 62 123 456</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-[#E6C34A] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-[#1E5FA8]" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Email Support</h4>
              <p className="text-gray-600 mb-3">Réponse sous 24h</p>
              <p className="text-[#1E5FA8] font-semibold">support@enertchad.td</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Chat en ligne</h4>
              <p className="text-gray-600 mb-3">Disponible 8h-18h</p>
              <button className="text-[#1E5FA8] font-semibold hover:text-blue-800">
                Démarrer un chat
              </button>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <Clock className="text-[#1E5FA8] mt-1" size={20} />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Temps de réponse garanti</h4>
                <ul className="text-gray-700 space-y-1">
                  <li><strong>Urgent :</strong> Réponse sous 2 heures</li>
                  <li><strong>Standard :</strong> Réponse sous 24 heures</li>
                  <li><strong>Technique :</strong> Réponse sous 48 heures</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}