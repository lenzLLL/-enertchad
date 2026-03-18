"use client";
import { Menu, X, ShoppingCart, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Search, Globe } from "lucide-react";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);      // Menu mobile
  const [searchOpen, setSearchOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("FR");
  const [fossilOpen, setFossilOpen] = useState(false); // Dropdown Fossiles (desktop)
  const [renewableOpen, setRenewableOpen] = useState(false); // Dropdown Renouvelables (desktop)
  const [envOpen, setEnvOpen] = useState(false); // Dropdown Environnement (desktop)
  const [socialOpen, setSocialOpen] = useState(false); // Dropdown Social (desktop)
  const [govOpen, setGovOpen] = useState(false); // Dropdown Gouvernance (desktop)
  const [solutionOpen, setSolutionOpen] = useState(false); // Dropdown Solution (desktop)
  const [technologiesOpen, setTechnologiesOpen] = useState(false); // Dropdown Technologies (desktop)
  const [fossilMobileOpen, setFossilMobileOpen] = useState(false); // mobile submenu fossil
  const [renewableMobileOpen, setRenewableMobileOpen] = useState(false); // mobile submenu renew
  const [envMobileOpen, setEnvMobileOpen] = useState(false);
  const [socialMobileOpen, setSocialMobileOpen] = useState(false);
  const [govMobileOpen, setGovMobileOpen] = useState(false);
  const [solutionMobileOpen, setSolutionMobileOpen] = useState(false);
  const [technologiesMobileOpen, setTechnologiesMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);  // Modal panier
  
  const fossilRef = useRef(null);
  const renewableRef = useRef(null);
  const envRef = useRef(null);
  const socialRef = useRef(null);
  const govRef = useRef(null);
  const solutionRef = useRef(null);
  const technologiesRef = useRef(null);
  
  const fossilMobileRef = useRef(null);
  const renewableMobileRef = useRef(null);
  const envMobileRef = useRef(null);
  const socialMobileRef = useRef(null);
  const govMobileRef = useRef(null);
  const solutionMobileRef = useRef(null);
  const technologiesMobileRef = useRef(null);

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
      if (technologiesRef.current && !technologiesRef.current.contains(e.target)) {
        setTechnologiesOpen(false);
      }
      if (technologiesMobileRef.current && !technologiesMobileRef.current.contains(e.target)) {
        setTechnologiesMobileOpen(false);
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
  { label: "Accueil", href: "/" },
  { label: "Mission", href: "/mission" },
  { label: "Activités", href: "/activites" },
  { label: "Transition énergétique", href: "/transition-energetique" },
  { label: "Technologies", href: "/technologies" },
  { label: "Engagements", href: "/engagements" },
  { label: "Investisseurs", href: "/investisseurs" },
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
            <div className="hidden md:flex items-center space-x-2">

  {navItems.map((item) => (
    <a
      key={item.href}
      href={item.href}
      className="text-gray-700 hover:text-[#1E5FA8] px-3 py-2 font-medium transition-colors rounded-lg hover:bg-gray-100"
    >
      {item.label}
    </a>
  ))}

  {/* CTA */}
  <a
    href="#"
    className="ml-3 bg-[#1E5FA8] hover:bg-[#174a86] text-white px-5 py-2 rounded-lg font-bold transition"
  >
    Trouver une station
  </a>

   <div className="flex items-center gap-3 ml-4 relative">

  {/* 🔍 SEARCH */}
  <div className="relative">
    <button
      onClick={() => setSearchOpen(!searchOpen)}
      className="p-2 rounded-full hover:bg-gray-100 transition"
    >
      <Search size={20} className="text-gray-600 hover:text-[#1E5FA8]" />
    </button>

    {/* Input animé */}
    <div className={`absolute right-0 top-12 transition-all duration-300 ${
      searchOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
    }`}>
      <input
        type="text"
        placeholder="Rechercher..."
        className="w-64 px-4 py-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#1E5FA8]"
      />
    </div>
  </div>

  {/* 🌐 LANGUE */}
  <div className="relative">
    <button
      onClick={() => setLangOpen(!langOpen)}
      className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-gray-100 transition"
    >
      <Globe className="text-gray-700 " size={18} />
      <span className="text-sm text-gray-700 font-semibold">{lang}</span>
    </button>

    {/* Dropdown langue */}
    <div className={`absolute right-0 mt-2 w-24 bg-white border rounded-md shadow-lg transition-all duration-200 ${
      langOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
    }`}>
      {["FR", "EN"].map((l) => (
        <button
          key={l}
          onClick={() => {
            setLang(l);
            setLangOpen(false);
          }}
          className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 ${
            lang === l ? "font-bold text-[#1E5FA8]" : ""
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  </div>

  </div>

  {/* Panier */}
  <button
    className="relative text-[#1E5FA8] ml-3"
    onClick={() => setCartOpen(true)}
  >
    <ShoppingCart size={24} />
    {cartCount > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
        {cartCount}
      </span>
    )}
  </button>
           
            </div>

            {/* PANIER + BOUTON ACHETER */}
            {/* <div className="hidden md:flex items-center space-x-6">
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
            </div> */}

            {/* BOUTON MOBILE */}
            <div className="flex md:hidden items-center justify-center gap-5">
                <div className="flex items-center gap-3 ml-4 relative">

  {/* 🔍 SEARCH */}
  <div className="relative">
    <button
      onClick={() => setSearchOpen(!searchOpen)}
      className="p-2 rounded-full hover:bg-gray-100 transition"
    >
      <Search size={20} className="text-gray-600 hover:text-[#1E5FA8]" />
    </button>

    {/* Input animé */}
    <div className={`absolute right-0 top-12 transition-all duration-300 ${
      searchOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
    }`}>
      <input
        type="text"
        placeholder="Rechercher..."
        className="w-64 px-4 py-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#1E5FA8]"
      />
    </div>
  </div>

  {/* 🌐 LANGUE */}
  <div className="relative">
    <button
      onClick={() => setLangOpen(!langOpen)}
      className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-gray-100 transition"
    >
      <Globe className="text-gray-700 " size={18} />
      <span className="text-sm text-gray-700 font-semibold">{lang}</span>
    </button>

    {/* Dropdown langue */}
    <div className={`absolute right-0 mt-2 w-24 bg-white border rounded-md shadow-lg transition-all duration-200 ${
      langOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
    }`}>
      {["FR", "EN"].map((l) => (
        <button
          key={l}
          onClick={() => {
            setLang(l);
            setLangOpen(false);
          }}
          className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 ${
            lang === l ? "font-bold text-[#1E5FA8]" : ""
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  </div>

                </div>
                  <button
    className="relative text-[#1E5FA8] ml-3"
    onClick={() => setCartOpen(true)}
  >
    <ShoppingCart size={24} />
    {cartCount > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
        {cartCount}
      </span>
    )}
                 </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=" p-2 text-[#1E5FA8]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            </div>
          </div>

          {/* MENU MOBILE */}
          {isOpen && (
            <div className="space-y-1 py-4">
  {navItems.map((item) => (
    <a
      key={item.href}
      href={item.href}
      onClick={() => setIsOpen(false)}
      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#1E5FA8] rounded-lg font-medium"
    >
      {item.label}
    </a>
  ))}

  {/* CTA mobile */}
  <a
    href="/stations"
    onClick={() => setIsOpen(false)}
    className="block text-center px-4 py-3 bg-[#1E5FA8] text-white rounded-lg font-bold mt-2"
  >
    Trouver une station
  </a>

  {/* Recherche + langue */}
  
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
