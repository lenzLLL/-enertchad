"use client";
import { useState, useEffect } from "react";

const TESTIMONIALS = [
  {
    quote: "Le programme a transformé notre quotidien — moins d'absences et une équipe plus engagée.",
    author: "Responsable RH, Entreprise X",
  },
  {
    quote: "Ateliers pratiques et suivi : résultats visibles en 3 mois.",
    author: "Manager, ONG Y",
  },
  {
    quote: "Approche pragmatique et adaptée à nos contraintes.",
    author: "Directeur opérationnel, PME Z",
  },
];

export default function TestimonialsCarousel({ interval = 5000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), interval);
    return () => clearInterval(t);
  }, [interval]);

  function prev() {
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }
  function next() {
    setIndex((i) => (i + 1) % TESTIMONIALS.length);
  }

  return (
    <div className="relative">
      <div className="p-6 bg-white rounded-lg shadow">
        <p className="text-gray-700 mb-4">“{TESTIMONIALS[index].quote}”</p>
        <div className="text-sm text-gray-500">— {TESTIMONIALS[index].author}</div>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              aria-label={`Aller au témoignage ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full ${i === index ? "bg-[#1E5FA8]" : "bg-gray-300"}`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button onClick={prev} className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200">Préc</button>
          <button onClick={next} className="px-3 py-1 rounded-md bg-[#1E5FA8] text-white hover:bg-[#174a86]">Suiv</button>
        </div>
      </div>
    </div>
  );
}
