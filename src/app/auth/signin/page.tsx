// src/app/auth/signin/page.tsx - Email link sign-in page

"use client";

import { useState } from "react";
import { sendAuthLink } from "@/lib/firebaseAuth";
import Link from "next/link";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      await sendAuthLink(email);
      setMessage({
        type: "success",
        text: `Sign-in link sent to ${email}. Check your inbox!`,
      });
      setEmail("");
    } catch (error: any) {
      setMessage({
        type: "error",
        text: error.message || "Failed to send sign-in link",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1E5FA8] to-[#164a8a] px-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-[#1E5FA8] mb-2 text-center">
          Welcome
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Sign in with your email to access your account
        </p>

        {message && (
          <div
            className={`mb-4 p-4 rounded-lg ${
              message.type === "success"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E5FA8]"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 rounded-lg font-semibold text-white transition ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-[#1E5FA8] to-[#3AA655] hover:shadow-lg"
            }`}
          >
            {isLoading ? "Sending..." : "Send Sign-In Link"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          You'll receive a secure link via email to sign in
        </p>
      </div>
    </div>
  );
}
