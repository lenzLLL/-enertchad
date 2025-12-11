// src/app/auth/finish/page.tsx - Complete sign-in with email link

"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { isSignInLink, completeSignInWithLink, getCurrentUser } from "@/lib/firebaseAuth";

export default function FinishSignInPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const finishSignIn = async () => {
      try {
        // Get email from localStorage or query param
        const emailFromParam = searchParams.get("email");
        const emailFromStorage = localStorage.getItem("emailForSignIn");
        const email = emailFromParam || emailFromStorage;

        if (!email) {
          setError("Email not found. Please sign in again.");
          setIsLoading(false);
          return;
        }

        // Check if this is a sign-in link
        if (!isSignInLink()) {
          setError("Invalid sign-in link. Please request a new one.");
          setIsLoading(false);
          return;
        }

        // Complete sign-in
        const user = await completeSignInWithLink(email);
        console.log("Signed in as:", user?.email);

        // Redirect to dashboard or home
        router.push("/admin");
      } catch (err: any) {
        console.error("Sign-in error:", err);
        setError(err.message || "Failed to sign in. Please try again.");
        setIsLoading(false);
      }
    };

    finishSignIn();
  }, [router, searchParams]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1E5FA8] to-[#164a8a]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-lg font-semibold">
            Signing you in...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1E5FA8] to-[#164a8a] px-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Sign-In Error
          </h1>
          <p className="text-gray-700 mb-6">{error}</p>
          <a
            href="/auth/signin"
            className="block text-center bg-gradient-to-r from-[#1E5FA8] to-[#3AA655] text-white py-2 rounded-lg font-semibold hover:shadow-lg transition"
          >
            Try Again
          </a>
        </div>
      </div>
    );
  }

  return null;
}
