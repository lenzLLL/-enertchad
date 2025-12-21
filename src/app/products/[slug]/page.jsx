import React from "react";
import Link from "next/link";
import { Droplet, Sparkles, Fuel, Truck, Wrench } from "lucide-react";
import { ps } from "../../../data/products";

function toSlug(title) {
	return title
		.normalize("NFD")
		.replace(/\p{M}/gu, "")
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
}

// using shared `ps` from src/data/products

export async function generateMetadata({ params }) {
	const { slug } = params || {};
	const product = ps.find((p) => toSlug(p.title) === slug);
	if (!product) return { title: "Produit — EnerTchad" };
	return {
		title: `${product.title} — EnerTchad`,
		description: product.desc || product.description,
	};
}

export default function ProductDetail({ params }) {
	const { slug } = params || {};
	const product = ps.find((p) => toSlug(p.title) === slug);

	if (!product) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-3xl font-bold mb-4">Produit non trouvé</h1>
					<p className="mb-6">Nous n'avons pas trouvé ce produit. Retournez à la liste des produits.</p>
					<Link href="/products" className="inline-block bg-[#1E5FA8] text-white px-6 py-3 rounded-lg">Voir les produits</Link>
				</div>
			</div>
		);
	}

	const Icon = product.icon;

	return (
		<div className="min-h-screen bg-white">
			<section className="py-12 md:py-24 px-4">
				<div className="max-w-4xl mx-auto">
					<div className="flex items-center space-x-4 mb-6">
						<Link href="/products" className="text-sm text-gray-600">← Retour</Link>
						<div className="flex-1 h-px bg-gray-200" />
					</div>

					<div className="bg-white rounded-3xl p-8 md:p-16 shadow-lg">
						<div className="flex flex-col items-center gap-6 text-center">
							<div className="w-28 h-28 flex items-center justify-center bg-gradient-to-br from-[#1E5FA8] to-[#164a8a] rounded-full">
								{Icon ? (
									<Icon size={44} className="text-[#E6C34A]" />
								) : (
									<Droplet size={44} className="text-[#E6C34A]" />
								)}
							</div>
							<div className="max-w-2xl">
								<h1 className="text-3xl md:text-5xl font-bold text-[#1E5FA8] mb-2">{product.title}</h1>
								<div className="inline-block mb-4">
									<span className="px-3 py-1 bg-gray-100 text-sm rounded-full text-gray-700">{product.segment}</span>
								</div>
								<section className="mt-4">
									<h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">Description</h2>
									<p className="text-xl md:text-2xl text-gray-700 leading-relaxed whitespace-pre-line">{product.desc || product.description}</p>
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
