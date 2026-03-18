"use client";

import { Shield, Eye, Lock, UserCheck, Cookie, Mail, Phone, Database, AlertCircle } from "lucide-react";

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1E5FA8] to-[#164a8a] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Shield size={64} className="text-[#E6C34A]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Comment nous protégeons vos données personnelles chez EnerTchad
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">

          {/* Introduction */}
          <section>
            <div className="flex items-center mb-4">
              <Eye className="text-[#1E5FA8] mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <p className="text-gray-700">
                EnerTchad S.A. s'engage à protéger la confidentialité et la sécurité des données personnelles de ses utilisateurs.
              </p>
              <p className="text-gray-700">
                Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations personnelles lorsque vous utilisez notre site web et nos services.
              </p>
              <p className="text-gray-700">
                En utilisant notre site, vous acceptez les pratiques décrites dans cette politique.
              </p>
            </div>
          </section>

          {/* Données collectées */}
          <section>
            <div className="flex items-center mb-4">
              <Database className="text-[#1E5FA8] mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Données personnelles collectées</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <p className="text-gray-700 font-semibold">Nous pouvons collecter les catégories suivantes de données personnelles :</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Informations d'identification :</h4>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>Nom et prénom</li>
                    <li>Adresse e-mail</li>
                    <li>Numéro de téléphone</li>
                    <li>Adresse postale</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Informations techniques :</h4>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>Adresse IP</li>
                    <li>Type de navigateur</li>
                    <li>Système d'exploitation</li>
                    <li>Pages visitées</li>
                    <li>Durée de visite</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Finalités du traitement */}
          <section>
            <div className="flex items-center mb-4">
              <UserCheck className="text-[#1E5FA8] mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Finalités du traitement</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <p className="text-gray-700">
                Nous utilisons vos données personnelles pour les finalités suivantes :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#1E5FA8] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Fournir et améliorer nos services énergétiques</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#1E5FA8] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Traiter vos demandes et commandes</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#1E5FA8] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Vous envoyer des informations sur nos produits et services</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#1E5FA8] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Améliorer l'expérience utilisateur sur notre site</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#1E5FA8] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Respecter nos obligations légales et réglementaires</p>
                </li>
              </ul>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <div className="flex items-center mb-4">
              <Cookie className="text-[#1E5FA8] mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Cookies et technologies similaires</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <p className="text-gray-700">
                Nous utilisons des cookies et technologies similaires pour améliorer votre expérience sur notre site.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-800">Cookies essentiels :</h4>
                  <p className="text-gray-700 text-sm">Nécessaires au fonctionnement du site (authentification, sécurité)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Cookies analytiques :</h4>
                  <p className="text-gray-700 text-sm">Pour analyser l'utilisation du site et améliorer nos services</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Cookies marketing :</h4>
                  <p className="text-gray-700 text-sm">Pour vous proposer du contenu personnalisé et des offres pertinentes</p>
                </div>
              </div>
              <p className="text-gray-700">
                Vous pouvez gérer vos préférences en matière de cookies via les paramètres de votre navigateur.
              </p>
            </div>
          </section>

          {/* Partage des données */}
          <section>
            <div className="flex items-center mb-4">
              <Lock className="text-[#1E5FA8] mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Partage des données</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <p className="text-gray-700">
                Nous ne vendons, n'échangeons ni ne louons vos données personnelles à des tiers.
              </p>
              <p className="text-gray-700">
                Nous pouvons partager vos données dans les cas suivants :
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Avec votre consentement explicite</li>
                <li>• Pour respecter nos obligations légales</li>
                <li>• Avec nos prestataires de services (hébergement, paiement, etc.) sous contrat strict</li>
                <li>• En cas de fusion, acquisition ou vente d'actifs</li>
              </ul>
            </div>
          </section>

          {/* Sécurité */}
          <section>
            <div className="flex items-center mb-4">
              <Shield className="text-[#1E5FA8] mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Sécurité des données</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <p className="text-gray-700">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre :
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• L'accès non autorisé</li>
                <li>• La perte accidentelle</li>
                <li>• La destruction</li>
                <li>• L'altération</li>
                <li>• La divulgation</li>
              </ul>
              <p className="text-gray-700">
                Ces mesures incluent le chiffrement des données, les contrôles d'accès, les sauvegardes régulières et la formation de notre personnel.
              </p>
            </div>
          </section>

          {/* Vos droits */}
          <section>
            <div className="flex items-center mb-4">
              <UserCheck className="text-[#1E5FA8] mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Vos droits</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <p className="text-gray-700">
                Conformément au RGPD et à la législation tchadienne sur la protection des données, vous disposez des droits suivants :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Droit d'accès :</strong> Connaître les données que nous détenons sur vous</li>
                  <li><strong>Droit de rectification :</strong> Corriger vos données inexactes</li>
                  <li><strong>Droit à l'effacement :</strong> Supprimer vos données dans certains cas</li>
                  <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
                </ul>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Droit d'opposition :</strong> Refuser le traitement de vos données</li>
                  <li><strong>Droit à la limitation :</strong> Restreindre le traitement de vos données</li>
                  <li><strong>Droit de retrait du consentement :</strong> Retirer votre consentement à tout moment</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <div className="flex items-center mb-4">
              <Mail className="text-[#1E5FA8] mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Contact</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <p className="text-gray-700">
                Pour exercer vos droits ou poser des questions sur notre politique de confidentialité, contactez-nous :
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="text-[#1E5FA8]" size={18} />
                  <span className="text-gray-700">confidentialite@enertchad.td</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-[#1E5FA8]" size={18} />
                  <span className="text-gray-700">+235 62 123 456</span>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="text-[#1E5FA8] mt-1" size={18} />
                  <p className="text-gray-700 text-sm">
                    Délégué à la Protection des Données<br />
                    EnerTchad S.A.<br />
                    Avenue Charles de Gaulle, N'Djaména, Tchad
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Modifications */}
          <section>
            <div className="flex items-center mb-4">
              <AlertCircle className="text-[#1E5FA8] mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Modifications de la politique</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <p className="text-gray-700">
                Nous pouvons modifier cette politique de confidentialité à tout moment.
              </p>
              <p className="text-gray-700">
                Les modifications seront publiées sur cette page avec la date de mise à jour.
              </p>
              <p className="text-gray-700">
                Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques.
              </p>
            </div>
          </section>

          {/* Mise à jour */}
          <section className="border-t pt-6">
            <p className="text-sm text-gray-500 text-center">
              Dernière mise à jour : Mars 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}