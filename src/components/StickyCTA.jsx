"use client";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function StickyCTA() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ContactModal open={open} onClose={() => setOpen(false)} />

      <button
        onClick={() => setOpen(true)}
        className="fixed right-6 bottom-6 z-50 shadow-lg bg-[#1E5FA8] text-white px-4 py-3 rounded-full text-sm md:px-5 md:py-3 hover:bg-[#174a86]"
        aria-label="Demander un programme"
      >
        Demander un programme
      </button>
    </>
  );
}
