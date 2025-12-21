import React from "react";
import Link from "next/link";
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
	Leaf,
	Wind,
	Flame,
	FuelIcon,
	Wrench,
	Hammer,
	Anchor,
	Gauge,
	Atom
} from "lucide-react";

function toSlug(title) {
	return title
		.normalize("NFD")
		.replace(/\p{M}/gu, "")
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
}

const services = [
    { icon: Flame, title: "Biomasse Solide", description: "Bois énergie, charbon de bois, résidus agricoles, briquettes et déchets agro-industriels.", desc: "Bois énergie, charbon de bois, résidus agricoles, briquettes et déchets agro-industriels. Fourniture, transformation et solutions de valorisation adaptées aux besoins agricoles et industriels. Nous accompagnons la mise en place de filières locales et formations.", img: "/services/biomasse.jpg", segment: "Énergies Renouvelables" },
    { icon: Recycle, title: "Biogaz", description: "Méthane issu de biodigesteurs, gaz de décharge et stations d’épuration.", desc: "Production et valorisation du biogaz à partir de biodigesteurs et déchets organiques, solutions clé-en-main pour sites agricoles et urbains. Études, maintenance et valorisation énergétique.", img: "/services/biogaz.jpg", segment: "Énergies Renouvelables" },
    { icon: Gauge, title: "Production & Optimisation", description: "Systèmes de levage artificiel (ESP, Gas Lift, Rod Pump) et gestion des flux multiphasiques.", desc: "Optimisation de la production pétrolière: sélection et déploiement de systèmes ESP, gas lift, pompes à tiges, et surveillance temps réel pour améliorer le rendement et réduire les coûts.", img: "/services/production.jpg", segment: "Énergies Fossiles" },
    { icon: Droplet, title: "Biocarburants Liquides", description: "Bioéthanol, biodiesel, biokérosène et huiles végétales pour mobilité et industrie.", desc: "Conception, approvisionnement et qualité des biocarburants liquides (bioéthanol, biodiesel) conformes aux normes internationales pour usages routiers et industriels.", img: "/services/biocarburants.jpg", segment: "Énergies Renouvelables" },
    { icon: Atom, title: "Biohydrogène & Gaz de Synthèse", description: "Hydrogène vert et syngas (CO + H₂) issus de la biomasse par fermentation ou gazéification.", desc: "Solutions pour la production d'hydrogène vert et syngaz via gazéification et procédés de valorisation de biomasse, intégration industrielle et stockage.", img: "/services/hydrogene.jpg", segment: "Énergies Renouvelables" },
    { icon: Hammer, title: "Forage & Complétion", description: "Forage directionnel et horizontal, cimentation intelligente et acquisition de données en temps réel.", desc: "Services complets de forage, complétion et interventions en puits avec suivi HSE, cimentation avancée et acquisition de données pour prise de décision opérationnelle.", img: "/services/forage.jpg", segment: "Énergies Fossiles" },
	{ icon: Gauge, title: "Ingénierie & Maintenance", description: "Stimulation hydraulique, interventions sur puits et maintenance prédictive et industrielle, conformité HSE.", desc: "Ingénierie et maintenance industrielle : nous réalisons des études d'ingénierie complètes, la conception et l'exécution d'opérations de stimulation et d'interventions en puits (cimentation, complétion, réparations ponctuelles) et mettons en place des programmes de maintenance prédictive basés sur capteurs IoT, analyses vibratoires et surveillance conditionnelle. Nous intégrons la télésurveillance SCADA, établissons plans HSE et procédures d'urgence, gérons les pièces de rechange critiques et assurons la formation des équipes locales. Ces services visent à minimiser les arrêts non planifiés, optimiser la disponibilité des actifs, prolonger la durée de vie des installations et réduire les coûts opérationnels sur le long terme.", img: "/services/maintenance.jpg", segment: "Énergies Fossiles" },
    { icon: Anchor, title: "Offshore & Subsea", description: "Ingénierie sous-marine (SURF), inspection et monitoring des pipelines, precommissioning et decommissioning sécurisé.", desc: "Prestations offshore : SURF, inspection ROV, monitoring des pipelines, opérations de precommissioning et decommissioning avec normes internationales de sécurité.", img: "/services/offshore.jpg", segment: "Énergies Fossiles" },
    { icon: Fuel, title: "Station-Service", description: "Carburants de qualité supérieure, diesel et essence, disponibles 24/7", desc: "Réseau de stations-service avec carburants certifiés, standards de qualité, services annexes 24/7 et solutions de paiement sécurisées.", img: "/services/station.jpg", segment: "Énergies Fossiles" },
    { icon: Truck, title: "Livraison Mobile de Carburant", description: "Service de livraison directe pour industriels et particuliers - partout au Tchad", desc: "Livraison mobile de carburant (diesel, essence) avec flotte dédiée, respect des normes de sécurité et traçabilité des livraisons.", img: "/services/delivery.jpg", segment: "Énergies Fossiles" },
    { icon: Truck, title: "Transport", description: "Le transport, le stockage et la distribution des hydrocarbures et de leurs dérivés.", desc: "Solutions de transport, stockage et logistique pour hydrocarbures, incluant gestion de flotte, conformité et optimisation des routes.", img: "/services/transport.jpg", segment: "Énergies Fossiles" },
    { icon: FuelIcon, title: "Raffinérie", description: "Le raffinage, la transformation et la valorisation des produits pétroliers et gaziers.", desc: "Services de conseil et opérations pour raffineries, optimisation des procédés de raffinage et valorisation de produits pétroliers.", img: "/services/raffinerie.jpg", segment: "Énergies Fossiles" },
    { icon: Fuel, title: "Produits de carburants routiers", description: "Essence (SP95, SP98, E10, E85) et Gazole (B7, B10, B30, GNR) pour mobilité et véhicules lourds.", desc: "Gamme complète de carburants routiers conformes aux normes, avec formulation, distribution et support technique pour clients véhicules légers et lourds.", img: "/services/carburants.jpg", segment: "Énergies Fossiles" },
    { icon: Leaf, title: "Énergie Solaire", description: "Solutions d'énergie renouvelable pour particuliers et entreprises", desc: "Conception, fourniture et installation de systèmes solaires photovoltaïques, on-grid et off-grid, maintenance et financement.", img: "/services/solaire.jpg", segment: "Énergies Renouvelables" },
    { icon: Wind, title: "Énergie Éolienne", description: "Solutions d'énergie éolienne pour entreprises et communautés : études, installation et maintenance de petites et moyennes turbines.", desc: "Études de faisabilité, installation et maintenance de turbines éoliennes pour projets communautaires et industriels de petite et moyenne échelle.", img: "/services/eolien.jpg", segment: "Énergies Renouvelables" },
    { icon: Zap, title: "Recharge Électrique", description: "Stations de recharge rapide pour véhicules électriques", desc: "Déploiement de stations de recharge rapide, intégration Smart Charging et solutions pour flottes électriques.", img: "/services/recharge.jpg", segment: "Énergies Renouvelables" },
    { icon: Sparkles, title: "Laverie Auto", description: "Services de nettoyage automatisé et écologique", desc: "Laveries auto écologiques et automatisées, utilisation de technologies économes en eau et solutions de recyclage.", img: "/services/laverie.jpg", segment: "Services Complémentaires" },
    { icon: TrendingUp, title: "Produits Industriels", description: "Lubrifiants, solvants, asphalte, coke, combustibles lourds et pétrole lampant pour usages industriels.", desc: "Fourniture de produits industriels (lubrifiants, solvants, asphalte) et services d'approvisionnement adaptés aux usages industriels lourds.", img: "/services/produits-industriels.jpg", segment: "Énergies Fossiles" },
    { icon: Wrench, title: "Maintenance Auto", description: "Services d'entretien et de réparation automobiles professionnels", desc: "Maintenance et réparation automobile professionnelle, diagnostic, pièces et services atelier pour véhicules particuliers et utilitaires.", img: "/services/maintenance-auto.jpg", segment: "Services Complémentaires" },
    { icon: Recycle, title: "Traitement de Déchets", description: "Unité complète de traitement des déchets plastiques et ménagers avec solutions durables", desc: "Plateformes de traitement et valorisation des déchets plastiques et ménagers, solutions de recyclage et économie circulaire.", img: "/services/dechets.jpg", segment: "Services Complémentaires" },
    { icon: Headset, title: "Assistance Technique", description: "Support technique 24/7 pour tous vos questions et problèmes", desc: "Support technique 24/7, assistance terrain et hotline pour interventions et conseils techniques.", img: "/services/assistance.jpg", segment: "Services Complémentaires" }
];

export async function generateMetadata({ params }) {
	const { slug } = params || {};
	const service = services.find((s) => toSlug(s.title) === slug);
	if (!service) return { title: "Service — EnerTchad" };
	return {
		title: `${service.title} — EnerTchad`,
		description: service.desc || service.description,
		openGraph: {
			title: `${service.title} — EnerTchad`,
			description: service.desc || service.description,
		},
	};
}

export default function ServiceDetail({ params }) {
	const { slug } = params || {};
	const service = services.find((s) => toSlug(s.title) === slug);

	if (!service) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-3xl font-bold mb-4">Service non trouvé</h1>
					<p className="mb-6">Nous n'avons pas trouvé ce service. Retournez à la liste des services.</p>
					<Link href="/services" className="inline-block bg-[#1E5FA8] text-white px-6 py-3 rounded-lg">Voir les services</Link>
				</div>
			</div>
		);
	}

	const Icon = service.icon;

	return (
		<div className="min-h-screen bg-white">
			<section className="py-12 md:py-24 px-4">
				<div className="max-w-4xl mx-auto">
					<div className="flex items-center space-x-4 mb-6">
						<Link href="/services" className="text-sm text-gray-600">← Retour</Link>
						<div className="flex-1 h-px bg-gray-200" />
					</div>

					<div className="bg-white rounded-3xl p-8 md:p-16 shadow-lg">
						<div className="flex flex-col items-center gap-6 text-center">
							<div className="w-28 h-28 flex items-center justify-center bg-gradient-to-br from-[#1E5FA8] to-[#164a8a] rounded-full">
								<Icon size={44} className="text-[#E6C34A]" />
							</div>
							<div className="max-w-2xl">
								<h1 className="text-3xl md:text-5xl font-bold text-[#1E5FA8] mb-2">{service.title}</h1>
								{/* Segment badge */}
								<div className="inline-block mb-4">
									<span className="px-3 py-1 bg-gray-100 text-sm rounded-full text-gray-700">{service.segment}</span>
								</div>
								{/* Description - emphasized */}
								<section className="mt-4">
									<h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">Description</h2>
									<p className="text-xl md:text-2xl text-gray-700 leading-relaxed whitespace-pre-line">{service.desc || service.description}</p>
								</section>
							</div>
						</div>

						<div className="mt-8">
							<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
								<Link href="/services" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-[#1E5FA8] text-white rounded-lg font-bold">Services</Link>
								<Link href="/products" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border-2 border-[#1E5FA8] text-[#1E5FA8] rounded-lg font-bold">Produits</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

