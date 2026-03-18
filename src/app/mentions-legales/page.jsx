"use client";

import { FileText, Building, MapPin, Phone, Mail, Calendar, Shield, AlertTriangle } from "lucide-react";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1E5FA8] to-[#164a8a] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <FileText size={64} className="text-[#E6C34A]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mentions Légales
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Informations légales et conditions d'utilisation du site EnerTchad
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">

          {/* Éditeur du site */}
          <section>
            <div className="flex items-center mb-4">
              <Building className="text-[#1E5FA8] mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Éditeur du site</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <p className="text-gray-700">
                <strong>EnerTchad S.A.</strong>
              </p>
              <p className="text-gray-700">
                Société Anonyme au capital de 10 000 000 000 FCFA
              </p>
              <p className="text-gray-700">
                Immatriculée au Registre du Commerce et du Crédit Mobilier de N'Djaména
              </p>
              <p className="text-gray-700">
                Numéro d'identification : RCCM/TD/2020/B/1234
              </p>
              <div className="flex items-start space-x-3">
                <MapPin className="text-[#1E5FA8] mt-1" size={18} />
                <div>
                  <p className="text-gray-700">Siège social :</p>
                  <p className="text-gray-700">
                    Avenue Charles de Gaulle<br />
                    BP 1234<br />
                    N'Djaména, Tchad
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Directeur de publication */}
          <section>
            <div className="flex items-center mb-4">
              <Shield className="text-[#1E5FA8] mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Directeur de publication</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700">
                <strong>M. Ahmed Mahamat</strong>
              </p>
              <p className="text-gray-700">
                Directeur Général d'EnerTchad S.A.
              </p>
            </div>
          </section>

          {/* Hébergement */}
          <section>
            <div className="flex items-center mb-4">
              <Building className="text-[#1E5FA8] mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Hébergement</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <p className="text-gray-700">
                <strong>Vercel Inc.</strong>
              </p>
              <p className="text-gray-700">
                340 S Lemon Ave #4133<br />
                Walnut, CA 91789<br />
                États-Unis
              </p>
              <div className="flex items-center space-x-3">
                <Phone className="text-[#1E5FA8]" size={18} />
                <p className="text-gray-700">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-[#1E5FA8]" size={18} />
                <p className="text-gray-700">support@vercel.com</p>
              </div>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <div className="flex items-center mb-4">
              <Shield className="text-[#1E5FA8] mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Propriété intellectuelle</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <p className="text-gray-700">
                L'ensemble de ce site relève de la législation tchadienne et internationale sur le droit d'auteur et la propriété intellectuelle.
              </p>
              <p className="text-gray-700">
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="text-gray-700">
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de publication.
              </p>
            </div>
          </section>

          {/* Conditions d'utilisation */}
          <section>
            <div className="flex items-center mb-4">
              <FileText className="text-[#1E5FA8] mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Conditions d'utilisation</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <p className="text-gray-700">
                L'utilisation de ce site implique l'acceptation pleine et entière des conditions générales d'utilisation décrites ci-après.
              </p>
              <p className="text-gray-700">
                Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment, les utilisateurs du site sont donc invités à les consulter de manière régulière.
              </p>
              <p className="text-gray-700">
                Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par EnerTchad.
              </p>
            </div>
          </section>

          {/* Responsabilité */}
          <section>
            <div className="flex items-center mb-4">
              <AlertTriangle className="text-[#1E5FA8] mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Responsabilité</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <p className="text-gray-700">
                EnerTchad s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur ce site.
              </p>
              <p className="text-gray-700">
                Cependant, EnerTchad ne peut encourir aucune responsabilité :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site</li>
                <li>Pour tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à disposition sur le site</li>
                <li>Plus généralement, pour tous dommages directs ou indirects, quelles qu'en soient les causes, origines, natures ou conséquences</li>
              </ul>
            </div>
          </section>

          {/* Liens hypertextes */}
          <section>
            <div className="flex items-center mb-4">
              <FileText className="text-[#1E5FA8] mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Liens hypertextes</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <p className="text-gray-700">
                Le site EnerTchad peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet.
              </p>
              <p className="text-gray-700">
                Les liens vers ces autres ressources vous font quitter le site d'EnerTchad.
              </p>
              <p className="text-gray-700">
                EnerTchad n'exerce aucun contrôle sur ces sites et ne peut assumer aucune responsabilité quant à leur contenu, publicités, produits ou services disponibles sur ou à partir de ces sites.
              </p>
            </div>
          </section>

          {/* Droit applicable */}
          <section>
            <div className="flex items-center mb-4">
              <Calendar className="text-[#1E5FA8] mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Droit applicable et juridiction</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <p className="text-gray-700">
                Tout litige en relation avec l'utilisation du site EnerTchad est soumis au droit tchadien.
              </p>
              <p className="text-gray-700">
                Il est fait attribution exclusive de juridiction aux tribunaux compétents de N'Djaména.
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