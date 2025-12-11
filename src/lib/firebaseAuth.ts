// src/lib/firebaseAuth.ts - Firebase Authentication helpers for email link sign-in

import {
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/firebase.config";

/**
 * Send a sign-in link to the user's email address
 * @param email - User email address
 * @returns Promise resolving when link is sent
 */
export const sendAuthLink = async (email: string): Promise<void> => {
  const actionCodeSettings = {
    url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/auth/finish?email=${encodeURIComponent(email)}`,
    handleCodeInApp: true,
  };

  try {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    // Save email to localStorage for later use in finish page
    localStorage.setItem("emailForSignIn", email);
    console.log(`Sign-in link sent to ${email}`);
  } catch (error: any) {
    console.error("Error sending sign-in link:", error);
    throw new Error(error.message || "Failed to send sign-in link");
  }
};

/**
 * Check if current URL is a sign-in link
 * @returns boolean
 */
export const isSignInLink = (): boolean => {
  if (typeof window === "undefined") return false;
  return isSignInWithEmailLink(auth, window.location.href);
};

/**
 * Complete the sign-in process with email link
 * @param email - User email (typically retrieved from localStorage or query param)
 * @returns Promise resolving to the user credential
 */
export const completeSignInWithLink = async (email: string) => {
  if (typeof window === "undefined") {
    throw new Error("completeSignInWithLink must be called from client");
  }

  try {
    const result = await signInWithEmailLink(auth, email, window.location.href);
    // Clear email from localStorage after successful sign-in
    localStorage.removeItem("emailForSignIn");
    console.log("Sign-in successful:", result.user.email);
    return result.user;
  } catch (error: any) {
    console.error("Error completing sign-in:", error);
    throw new Error(error.message || "Failed to complete sign-in");
  }
};

/**
 * Sign out the current user
 * @returns Promise
 */
export const logOut = async (): Promise<void> => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error: any) {
    console.error("Error signing out:", error);
    throw new Error(error.message || "Failed to sign out");
  }
};

/**
 * Subscribe to auth state changes
 * @param callback - Function called with user object or null
 * @returns Unsubscribe function
 */
export const subscribeToAuthState = (
  callback: (user: any | null) => void
) => {
  return onAuthStateChanged(auth, callback);
};

/**
 * Get current user (synchronously when available)
 * @returns Current user or null
 */
export const getCurrentUser = () => {
  return auth.currentUser;
};
