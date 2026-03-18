import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1E5FA8] to-[#164a8a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Entreprise */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo.png" 
                alt="EnerTchad Logo" 
                className="h-12 w-24 object-contain"
              />
              <h3 className="font-bold text-xl">EnerTchad</h3>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed mb-6">
              L'énergie qui fait avancer le Tchad. Distribution de carburant,
              énergies renouvelables et mobilité électrique.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-white/10 p-2 rounded-lg hover:bg-[#E6C34A] hover:text-[#1E5FA8] transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-lg hover:bg-[#E6C34A] hover:text-[#1E5FA8] transition"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-lg hover:bg-[#E6C34A] hover:text-[#1E5FA8] transition"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/stations"
                  className="text-gray-200 hover:text-[#E6C34A] transition"
                >
                  Trouver une station
                </a>
              </li>
              <li>
                <a
                  href="/#faq"
                  className="text-gray-200 hover:text-[#E6C34A] transition"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/support"
                  className="text-gray-200 hover:text-[#E6C34A] transition"
                >
                  Support / SAV
                </a>
              </li>
              <li>
                <a
                  href="/pro"
                  className="text-gray-200 hover:text-[#E6C34A] transition"
                >
                  Espace Pro
                </a>
              </li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="font-bold text-lg mb-4">Entreprise</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/blog"
                  className="text-gray-200 hover:text-[#E6C34A] transition"
                >
                  Actualités
                </a>
              </li>
              <li>
                <a
                  href="/carrieres"
                  className="text-gray-200 hover:text-[#E6C34A] transition"
                >
                  Carrières
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-gray-200 hover:text-[#E6C34A] transition"
                >
                  Presse
                </a>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="font-bold text-lg mb-4">Légal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/mentions-legales"
                  className="text-gray-200 hover:text-[#E6C34A] transition"
                >
                  Mentions légales
                </a>
              </li>
              <li>
                <a
                  href="/confidentialite"
                  className="text-gray-200 hover:text-[#E6C34A] transition"
                >
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-[#E6C34A] transition"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-center text-gray-300 text-sm">
              &copy; 2025 EnerTchad S.A. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
