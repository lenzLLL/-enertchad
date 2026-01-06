"use client";
import { Menu, X, ShoppingCart, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useCart } from "../context/CartContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);      // Menu mobile
  
  const [fossilOpen, setFossilOpen] = useState(false); // Dropdown Fossiles (desktop)
  const [renewableOpen, setRenewableOpen] = useState(false); // Dropdown Renouvelables (desktop)
  const [envOpen, setEnvOpen] = useState(false); // Dropdown Environnement (desktop)
  const [socialOpen, setSocialOpen] = useState(false); // Dropdown Social (desktop)
  const [govOpen, setGovOpen] = useState(false); // Dropdown Gouvernance (desktop)
  const [solutionOpen, setSolutionOpen] = useState(false); // Dropdown Solution (desktop)
  const [fossilMobileOpen, setFossilMobileOpen] = useState(false); // mobile submenu fossil
  const [renewableMobileOpen, setRenewableMobileOpen] = useState(false); // mobile submenu renew
  const [envMobileOpen, setEnvMobileOpen] = useState(false);
  const [socialMobileOpen, setSocialMobileOpen] = useState(false);
  const [govMobileOpen, setGovMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);  // Modal panier
  
  const fossilRef = useRef(null);
  const renewableRef = useRef(null);
  const envRef = useRef(null);
  const socialRef = useRef(null);
  const govRef = useRef(null);
  const solutionRef = useRef(null);
  
  const fossilMobileRef = useRef(null);
  const renewableMobileRef = useRef(null);
  const envMobileRef = useRef(null);
  const socialMobileRef = useRef(null);
  const govMobileRef = useRef(null);
  const solutionMobileRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (fossilRef.current && !fossilRef.current.contains(e.target)) {
        setFossilOpen(false);
      }
      if (renewableRef.current && !renewableRef.current.contains(e.target)) {
        setRenewableOpen(false);
      }
      if (envRef.current && !envRef.current.contains(e.target)) {
        setEnvOpen(false);
      }
      if (socialRef.current && !socialRef.current.contains(e.target)) {
        setSocialOpen(false);
      }
      if (govRef.current && !govRef.current.contains(e.target)) {
        setGovOpen(false);
      }
      if (solutionRef.current && !solutionRef.current.contains(e.target)) {
        setSolutionOpen(false);
      }
      
      if (fossilMobileRef.current && !fossilMobileRef.current.contains(e.target)) {
        setFossilMobileOpen(false);
      }
      if (renewableMobileRef.current && !renewableMobileRef.current.contains(e.target)) {
        setRenewableMobileOpen(false);
      }
      if (envMobileRef.current && !envMobileRef.current.contains(e.target)) {
        setEnvMobileOpen(false);
      }
      if (socialMobileRef.current && !socialMobileRef.current.contains(e.target)) {
        setSocialMobileOpen(false);
      }
      if (govMobileRef.current && !govMobileRef.current.contains(e.target)) {
        setGovMobileOpen(false);
      }
      if (solutionMobileRef.current && !solutionMobileRef.current.contains(e.target)) {
        setSolutionMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const { cart, cartCount, cartTotal, removeFromCart, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerContact, setCustomerContact] = useState("");
  const [orderLoading, setOrderLoading] = useState(false);
  const [orderError, setOrderError] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = async (e) => {
    e && e.preventDefault && e.preventDefault();
    setOrderError("");
    if (cart.length === 0) return setOrderError('Votre panier est vide.');
    if (!customerName.trim() || !customerAddress.trim() || !customerContact.trim()) {
      return setOrderError('Veuillez renseigner votre nom, adresse et contact avant de valider la commande.');
    }

    setOrderLoading(true);
    try {
      const payload = {
        items: cart,
        amount: typeof cartTotal === 'number' ? cartTotal : Number(String(cartTotal).replace(/[.,]/g, '')),
        customer: {
          name: customerName,
          address: customerAddress,
          contact: customerContact,
        },
        status: 'En cours',
      };

      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error || 'Erreur lors de la création de la commande');
      }

      // success
      setOrderPlaced(true);
      clearCart();
      setShowCheckout(false);
      setCustomerName('');
      setCustomerAddress('');
      setCustomerContact('');

      // hide success after delay
      setTimeout(() => {
        setOrderPlaced(false);
        setCartOpen(false);
      }, 3500);
    } catch (err) {
      console.error('Order error', err);
      setOrderError(err?.message || 'Erreur inattendue lors de la commande');
    } finally {
      setOrderLoading(false);
    }
  };

  const navItems = [
    { label: "Fossiles", href: "/energies-fossiles", isSelect: true },
    { label: "Renouvelables", href: "/energies-renouvelables", isSelect: true },
    { label: "Environnement", href: "/environnement" },
    { label: "Social", href: "/bien-etre" },
    { label: "Gouvernance", href: "/gouvernance" },
    { label: "Solution", href: "/solution" },
    { label: "Investisseurs", href: "/investisseurs" },
    { label: "Technologies", href: "/technologies" },

  ];

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* LOGO */}
            <a href="/" className="flex items-center">
              <img src="/logo.png" alt="Logo" className="h-12 max-w-[160px] w-auto object-contain rounded-md" />
            </a>

            {/* MENU DESKTOP */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                if (item.label === "Fossiles") {
                  return (
                    <div key="fossiles" className="relative px-2" ref={fossilRef}>
                      <button
                        aria-haspopup="true"
                        aria-expanded={fossilOpen}
                        type="button"
                        onClick={() => setFossilOpen((s) => !s)}
                        className="text-gray-700 hover:text-[#1E5FA8] px-4 py-2 font-medium transition-colors rounded-lg hover:bg-gray-100"
                      >
                        Fossiles
                      </button>

                      {fossilOpen && (
                        <div className="absolute right-0 mt-2 w-56 bg-white border rounded-md shadow-lg z-50">
                          <a href="/energies-fossiles#services" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setFossilOpen(false)}>Pétroles</a>
                          <a href="/energies-fossiles#products" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setFossilOpen(false)}>Gaz Naturel</a>
                          <a href="/energies-fossiles#products" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setFossilOpen(false)}>charbon</a>
                          
                        </div>
                      )}
                    </div>
                  );
                }

                if (item.label === "Environnement") {
                  return (
                    <div key="environnement" className="relative px-2" ref={envRef}>
                      <button
                        aria-haspopup="true"
                        aria-expanded={envOpen}
                        type="button"
                        onClick={() => setEnvOpen((s) => !s)}
                        className="text-gray-700 hover:text-[#1E5FA8] px-4 py-2 font-medium transition-colors rounded-lg hover:bg-gray-100"
                      >
                        Environnement
                      </button>

                      {envOpen && (
                        <div className="absolute right-0 mt-2 w-72 bg-white border rounded-md shadow-lg z-50">
                          <a href="/environnement#priorites-environnement" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setEnvOpen(false)}>Réduction des émissions</a>
                          <a href="/environnement#priorites-environnement" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setEnvOpen(false)}>Protection des ressources naturelles</a>
                          <a href="/environnement#priorites-environnement" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setEnvOpen(false)}>Gestion durable des déchets</a>
                          <a href="/environnement#priorites-environnement" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setEnvOpen(false)}>Préservation de la biodiversité</a>
                          <a href="/environnement#priorites-environnement" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setEnvOpen(false)}>Résilience climatique</a>
                          <a href="/environnement#priorites-environnement" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setEnvOpen(false)}>Reboisement & restauration</a>
                        </div>
                      )}
                    </div>
                  );
                }

                if (item.label === "Renouvelables") {
                  return (
                    <div key="renouvelables" className="relative px-2" ref={renewableRef}>
                      <button
                        aria-haspopup="true"
                        aria-expanded={renewableOpen}
                        type="button"
                        onClick={() => setRenewableOpen((s) => !s)}
                        className="text-gray-700 hover:text-[#1E5FA8] px-4 py-2 font-medium transition-colors rounded-lg hover:bg-gray-100"
                      >
                        Renouvelables
                      </button>

                      {renewableOpen && (
                        <div className="absolute right-0 mt-2 w-56 bg-white border rounded-md shadow-lg z-50">
                          <a href="/energies-renouvelables#bioenergies" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setRenewableOpen(false)}>Bioénergies</a>
                          <a href="/energies-renouvelables#solaire" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setRenewableOpen(false)}>Solaire</a>
                          <a href="/energies-renouvelables#eolien" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setRenewableOpen(false)}>Éolien</a>
                          <a href="/energies-renouvelables#eolien" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setRenewableOpen(false)}>Hydroélectricité</a>
                          <a href="/energies-renouvelables#eolien" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setRenewableOpen(false)}>Géothermie</a>
                        </div>
                      )}
                    </div>
                  );
                }

                if (item.label === "Gouvernance") {
                  return (
                    <div key="gouvernance" className="relative px-2" ref={govRef}>
                      <button
                        aria-haspopup="true"
                        aria-expanded={govOpen}
                        type="button"
                        onClick={() => setGovOpen((s) => !s)}
                        className="text-gray-700 hover:text-[#1E5FA8] px-4 py-2 font-medium transition-colors rounded-lg hover:bg-gray-100"
                      >
                        Gouvernance
                      </button>

                      {govOpen && (
                        <div className="absolute right-0 mt-2 w-72 bg-white border rounded-md shadow-lg z-50">
                          <a href="/gouvernance#transparence-integrite" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setGovOpen(false)}>Transparence & intégrité</a>
                          <a href="/gouvernance#conformite-reglementaire" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setGovOpen(false)}>Conformité réglementaire</a>
                          <a href="/gouvernance#gestion-des-risques" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setGovOpen(false)}>Gestion des risques</a>
                          <a href="/gouvernance#audits-internes-externes" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setGovOpen(false)}>Audits internes & externes</a>
                          <a href="/gouvernance#anti-corruption" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setGovOpen(false)}>Anti‑corruption</a>
                          <a href="/gouvernance#decisions-tracables" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setGovOpen(false)}>Décisions traçables</a>
                        </div>
                      )}
                    </div>
                  );
                }

                if (item.label === "Solution") {
                  return (
                    <div key="solution" className="relative px-2" ref={solutionRef}>
                      <button
                        aria-haspopup="true"
                        aria-expanded={solutionOpen}
                        type="button"
                        onClick={() => setSolutionOpen((s) => !s)}
                        className="text-gray-700 hover:text-[#1E5FA8] px-4 py-2 font-medium transition-colors rounded-lg hover:bg-gray-100"
                      >
                        Solution
                      </button>

                      {solutionOpen && (
                        <div className="absolute right-0 mt-2 w-72 bg-white border rounded-md shadow-lg z-50">
                          <a href="/solution#particuliers" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setSolutionOpen(false)}>Particuliers & Professionnels</a>
                          <a href="/solution#entreprises" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setSolutionOpen(false)}>Entreprises & Industries</a>
                          <a href="/solution#gouvernements" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setSolutionOpen(false)}>Gouvernements & Institutions</a>
                          <a href="/solution#solutions-industrielles" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setSolutionOpen(false)}>Solutions Industrielles & Techniques</a>
                          <a href="/solution#transition" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setSolutionOpen(false)}>Transition Energétique & Durabilité</a>
                        </div>
                      )}
                    </div>
                  );
                }

                if (item.label === "Social") {
                  return (
                    <div key="social" className="relative px-2" ref={socialRef}>
                      <button
                        aria-haspopup="true"
                        aria-expanded={socialOpen}
                        type="button"
                        onClick={() => setSocialOpen((s) => !s)}
                        className="text-gray-700 hover:text-[#1E5FA8] px-4 py-2 font-medium transition-colors rounded-lg hover:bg-gray-100"
                      >
                        Social
                      </button>

                      {socialOpen && (
                        <div className="absolute right-0 mt-2 w-64 bg-white border rounded-md shadow-lg z-50">
                          <a href="/bien-etre#securite" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setSocialOpen(false)}>Sécurité & Bien‑être</a>
                          <a href="/bien-etre#inclusion-diversite" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setSocialOpen(false)}>Inclusion & Diversité</a>
                          <a href="/bien-etre#emplois-locaux" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setSocialOpen(false)}>Emplois locaux</a>
                          <a href="/bien-etre#emplois-locaux" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setSocialOpen(false)}>Formation & Leadership</a>
                          <a href="/bien-etre#emplois-locaux" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setSocialOpen(false)}>Dialogue social</a>
                          <a href="/bien-etre#programmes-communautaires" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setSocialOpen(false)}>Programmes communautaires</a>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-[#1E5FA8] px-4 py-2 font-medium transition-colors rounded-lg hover:bg-gray-100"
                  >
                    {item.label}
                  </a>
                );
              })}
        
            </div>

            {/* PANIER + BOUTON ACHETER */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                className="relative text-[#1E5FA8]"
                onClick={() => setCartOpen(true)}
              >
                <ShoppingCart size={26} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>

              <a
                href="/shop"
                className="bg-[#1E5FA8] hover:bg-[#174a86] text-white px-6 py-2 rounded-lg font-bold transition-colors"
              >
                Acheter
              </a>
            </div>

            {/* BOUTON MOBILE */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#1E5FA8]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* MENU MOBILE */}
          {isOpen && (
            <div className="md:hidden pb-6 border-t border-gray-200">
              <div className="space-y-1 py-4">
                {navItems.map((item) => {
                  if (item.label === "Fossiles") {
                    return (
                      <div key="fossiles-mobile" className="px-2" ref={fossilMobileRef}>
                        <button
                          type="button"
                          onClick={() => setFossilMobileOpen((s) => !s)}
                          className="w-full text-left px-4 py-3 flex items-center justify-between text-gray-700 hover:bg-blue-50 hover:text-[#1E5FA8] rounded-lg font-medium transition-colors"
                        >
                          <span>Fossiles</span>
                          <span className={`transform transition-transform ${fossilMobileOpen ? "rotate-180" : "rotate-0"}`}>&#9662;</span>
                        </button>

                        {fossilMobileOpen && (
                          <div className="pl-4 mt-2 space-y-1">
                            <a href="/energies-fossiles#services" onClick={() => { setIsOpen(false); setFossilMobileOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Nos services</a>
                            <a href="/energies-fossiles#products" onClick={() => { setIsOpen(false); setFossilMobileOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Nos produits</a>
                            
                          </div>
                        )}
                      </div>
                    );
                  }

                    if (item.label === "Environnement") {
                      return (
                        <div key="environnement-mobile" className="px-2" ref={envMobileRef}>
                          <button
                            type="button"
                            onClick={() => setEnvMobileOpen((s) => !s)}
                            className="w-full text-left px-4 py-3 flex items-center justify-between text-gray-700 hover:bg-blue-50 hover:text-[#1E5FA8] rounded-lg font-medium transition-colors"
                          >
                            <span>Environnement</span>
                            <span className={`transform transition-transform ${envMobileOpen ? "rotate-180" : "rotate-0"}`}>&#9662;</span>
                          </button>

                          {envMobileOpen && (
                            <div className="pl-4 mt-2 space-y-1">
                              <a href="/environnement#priorites-environnement" onClick={() => { setIsOpen(false); setEnvMobileOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Réduction des émissions</a>
                              <a href="/environnement#priorites-environnement" onClick={() => { setIsOpen(false); setEnvMobileOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Protection des ressources naturelles</a>
                              <a href="/environnement#priorites-environnement" onClick={() => { setIsOpen(false); setEnvMobileOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Gestion durable des déchets</a>
                              <a href="/environnement#priorites-environnement" onClick={() => { setIsOpen(false); setEnvMobileOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Préservation de la biodiversité</a>
                              <a href="/environnement#priorites-environnement" onClick={() => { setIsOpen(false); setEnvMobileOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Résilience climatique</a>
                              <a href="/environnement#priorites-environnement" onClick={() => { setIsOpen(false); setEnvMobileOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Reboisement & restauration</a>
                            </div>
                          )}
                        </div>
                      );
                    }

                  if (item.label === "Renouvelables") {
                    return (
                      <div key="renewable-mobile" className="px-2" ref={renewableMobileRef}>
                        <button
                          type="button"
                          onClick={() => setRenewableMobileOpen((s) => !s)}
                          className="w-full text-left px-4 py-3 flex items-center justify-between text-gray-700 hover:bg-blue-50 hover:text-[#1E5FA8] rounded-lg font-medium transition-colors"
                        >
                          <span>Renouvelables</span>
                          <span className={`transform transition-transform ${renewableMobileOpen ? "rotate-180" : "rotate-0"}`}>&#9662;</span>
                        </button>

                        {renewableMobileOpen && (
                          <div className="pl-4 mt-2 space-y-1">
                            <a href="/energies-renouvelables#solutions" onClick={() => { setIsOpen(false); setRenewableMobileOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Nos solutions</a>
                            <a href="/energies-renouvelables#bioenergies" onClick={() => { setIsOpen(false); setRenewableMobileOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Bioénergies</a>
                            <a href="/energies-renouvelables#solaire" onClick={() => { setIsOpen(false); setRenewableMobileOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Solaire</a>
                            <a href="/energies-renouvelables#eolien" onClick={() => { setIsOpen(false); setRenewableMobileOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Éolien</a>
                            <a href="/energies-renouvelables#dechets" onClick={() => { setIsOpen(false); setRenewableMobileOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Gestion des déchets</a>
                          </div>
                        )}
                      </div>
                    );
                  }

                    if (item.label === "Gouvernance") {
                      return (
                        <div key="gouvernance-mobile" className="px-2" ref={govMobileRef}>
                          <button
                            type="button"
                            onClick={() => setGovMobileOpen((s) => !s)}
                            className="w-full text-left px-4 py-3 flex items-center justify-between text-gray-700 hover:bg-blue-50 hover:text-[#1E5FA8] rounded-lg font-medium transition-colors"
                          >
                            <span>Gouvernance</span>
                            <span className={`transform transition-transform ${govMobileOpen ? "rotate-180" : "rotate-0"}`}>&#9662;</span>
                          </button>

                          {govMobileOpen && (
                            <div className="pl-4 mt-2 space-y-1">
                              <a href="/gouvernance#transparence-integrite" onClick={() => { setIsOpen(false); setGovMobileOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Transparence & intégrité</a>
                              <a href="/gouvernance#conformite-reglementaire" onClick={() => { setIsOpen(false); setGovMobileOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Conformité réglementaire</a>
                              <a href="/gouvernance#gestion-des-risques" onClick={() => { setIsOpen(false); setGovMobileOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Gestion des risques</a>
                              <a href="/gouvernance#audits-internes-externes" onClick={() => { setIsOpen(false); setGovMobileOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Audits internes & externes</a>
                              <a href="/gouvernance#anti-corruption" onClick={() => { setIsOpen(false); setGovMobileOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Anti‑corruption</a>
                              <a href="/gouvernance#decisions-tracables" onClick={() => { setIsOpen(false); setGovMobileOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Décisions traçables</a>
                            </div>
                          )}
                        </div>
                      );
                    }

                    if (item.label === "Solution") {
                      return (
                        <div key="solution-mobile" className="px-2" ref={solutionMobileRef}>
                          <button
                            type="button"
                            onClick={() => setSolutionMobileOpen((s) => !s)}
                            className="w-full text-left px-4 py-3 flex items-center justify-between text-gray-700 hover:bg-blue-50 hover:text-[#1E5FA8] rounded-lg font-medium transition-colors"
                          >
                            <span>Solution</span>
                            <span className={`transform transition-transform ${solutionMobileOpen ? "rotate-180" : "rotate-0"}`}>&#9662;</span>
                          </button>

                          {solutionMobileOpen && (
                            <div className="pl-4 mt-2 space-y-1">
                              <a href="/solution#particuliers" onClick={() => { setIsOpen(false); setSolutionMobileOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Particuliers & Professionnels</a>
                              <a href="/solution#entreprises" onClick={() => { setIsOpen(false); setSolutionMobileOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Entreprises & Industries</a>
                              <a href="/solution#gouvernements" onClick={() => { setIsOpen(false); setSolutionMobileOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Gouvernements & Institutions</a>
                              <a href="/solution#solutions-industrielles" onClick={() => { setIsOpen(false); setSolutionMobileOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Solutions Industrielles & Techniques</a>
                              <a href="/solution#transition" onClick={() => { setIsOpen(false); setSolutionMobileOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Transition Energétique & Durabilité</a>
                            </div>
                          )}
                        </div>
                      );
                    }

                    if (item.label === "Social") {
                      return (
                        <div key="social-mobile" className="px-2" ref={socialMobileRef}>
                          <button
                            type="button"
                            onClick={() => setSocialMobileOpen((s) => !s)}
                            className="w-full text-left px-4 py-3 flex items-center justify-between text-gray-700 hover:bg-blue-50 hover:text-[#1E5FA8] rounded-lg font-medium transition-colors"
                          >
                            <span>Social</span>
                            <span className={`transform transition-transform ${socialMobileOpen ? "rotate-180" : "rotate-0"}`}>&#9662;</span>
                          </button>

                          {socialMobileOpen && (
                            <div className="pl-4 mt-2 space-y-1">
                              <a href="/bien-etre#securite" onClick={() => { setIsOpen(false); setSocialMobileOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Sécurité & Bien‑être</a>
                              <a href="/bien-etre#inclusion-diversite" onClick={() => { setIsOpen(false); setSocialMobileOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Inclusion & Diversité</a>
                              <a href="/bien-etre#emplois-locaux" onClick={() => { setIsOpen(false); setSocialMobileOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">Emplois locaux</a>
                            </div>
                          )}
                        </div>
                      );
                    }

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#1E5FA8] rounded-lg font-medium transition-colors"
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-3 px-2">
                <button
                  onClick={() => setCartOpen(true)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-50 text-[#1E5FA8] rounded-lg font-semibold hover:bg-blue-100 transition-colors"
                >
                  <ShoppingCart size={20} /> Panier
                </button>

                <a
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full block text-center px-4 py-3 bg-gradient-to-r from-[#1E5FA8] to-[#3AA655] text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Nous Contacter
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* 🛒 MODAL PANIER */}
      {cartOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] flex justify-end">
          <div className="w-80 bg-white h-full shadow-xl p-5 animate-slideLeft flex flex-col rounded-l-lg">

            {/* HEADER MODAL */}
            <div className="flex justify-between items-center mb-4 p-3 rounded-t-lg bg-[#1E5FA8]">
              <h2 className="text-xl font-bold text-white">Votre Panier</h2>
              <button onClick={() => setCartOpen(false)}>
                <X size={24} className="text-white"/>
              </button>
            </div>

            {/* LISTE DES PRODUITS */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-6">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500 py-8">Votre panier est vide</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b pb-2">
                    
                    {/* IMAGE + INFO PRODUIT */}
                    <div className="flex items-center gap-3">
                      <img 
                        src={item.image || "/placeholder.png"}
                        alt={item.name} 
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-gray-600">
                          {item.quantity} × {(item.price).toLocaleString()} CFA
                        </p>
                      </div>
                    </div>

                    {/* BOUTON SUPPRIMER */}
                    <div className="flex flex-col items-end gap-2">
                      <p className="font-bold text-[#1E5FA8]">{(item.price * item.quantity).toLocaleString()} CFA</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 text-xs"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* SUCCESS MESSAGE */}
            {orderPlaced && (
              <div className="mb-4 p-4 bg-green-100 border border-green-500 rounded-lg text-center">
                <Check size={24} className="text-green-600 mx-auto mb-2" />
                <p className="text-green-700 font-semibold">Commande placée avec succès!</p>
              </div>
            )}

            {/* TOTAL */}
            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Total :</span>
              <span>{(cartTotal).toLocaleString()} CFA</span>
            </div>

            {/* CHECKOUT FORM OR BUTTON */}
            {showCheckout ? (
              <form onSubmit={handlePlaceOrder} className="space-y-3">
                <div>
                  <label className="text-xs font-medium">Nom complet</label>
                  <input value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="w-full mt-1 px-3 py-2 border rounded-md text-sm" placeholder="Prénom Nom" />
                </div>
                <div>
                  <label className="text-xs font-medium">Adresse</label>
                  <input value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)} className="w-full mt-1 px-3 py-2 border rounded-md text-sm" placeholder="Adresse de livraison" />
                </div>
                <div>
                  <label className="text-xs font-medium">Contact</label>
                  <input value={customerContact} onChange={(e) => setCustomerContact(e.target.value)} className="w-full mt-1 px-3 py-2 border rounded-md text-sm" placeholder="Téléphone ou email" />
                </div>
                {orderError && <div className="text-xs text-red-600">{orderError}</div>}
                <div className="flex items-center gap-2">
                  <button type="submit" disabled={orderLoading} className="flex-1 bg-[#1E5FA8] text-white py-2 rounded-lg font-bold hover:bg-[#174a86] transition disabled:opacity-50 text-sm">
                    {orderLoading ? 'Envoi...' : 'Confirmer'}
                  </button>
                  <button type="button" onClick={() => setShowCheckout(false)} className="px-3 py-2 rounded-lg border text-sm">Retour</button>
                </div>
              </form>
            ) : (
              <button
                disabled={cart.length === 0}
                onClick={() => setShowCheckout(true)}
                className={`block w-full py-3 rounded-lg text-center font-bold text-white transition-colors ${
                  cart.length === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#1E5FA8] hover:bg-[#174a86]"
                }`}
              >
                {cart.length === 0 ? "Panier vide" : "Passer la commande"}
              </button>
            )}
          </div>
        </div>
      )}

      {/* ANIMATION */}
      <style>{`
        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slideLeft {
          animation: slideLeft 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
