"use client";
import { useState } from "react";

export default function ContactModal({ open, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  if (!open) return null;

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      }).catch(() => {});
      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => {
        setSent(false);
        onClose();
      }, 1500);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6 z-10">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500">✕</button>
        <h3 className="text-lg font-semibold mb-2">Contact rapide</h3>
        {sent ? (
          <div className="p-4 bg-green-50 rounded">Merci — nous vous recontactons bientôt.</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom" className="w-full px-3 py-2 border rounded" required />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full px-3 py-2 border rounded" type="email" required />
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message (courte)" className="w-full px-3 py-2 border rounded" rows={4} />
            <div className="flex justify-end gap-2">
              <button type="button" onClick={onClose} className="px-4 py-2 rounded border">Annuler</button>
              <button type="submit" disabled={loading} className="px-4 py-2 rounded bg-[#1E5FA8] text-white">{loading ? 'Envoi…' : 'Envoyer'}</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
