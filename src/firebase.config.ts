// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// Read from environment variables (NEXT_PUBLIC_* are exposed to client)
const firebaseConfig = {
  apiKey: "AIzaSyBdbS3GryBdZfXRNyjcic5pzBssS8XY2k0",
  authDomain: "tchd-adedc.firebaseapp.com",
  projectId: "tchd-adedc",
  storageBucket: "tchd-adedc.firebasestorage.app",
  messagingSenderId: "369755200454",
  appId: "1:369755200454:web:d13957ec52439323d9f0c7",
  measurementId: "G-DLWB3EQ38T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth and Firestore instances for use in the app
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
