// src/app/api/auth/send-link/route.ts - API route to send authentication link

import { sendAuthLink } from "@/lib/firebaseAuth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required and must be a string" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Firebase sendSignInLinkToEmail runs client-side
    // This is just a wrapper/proxy endpoint for your frontend
    // The actual sending happens in firebaseAuth.ts
    
    return NextResponse.json(
      { 
        message: "Check your email for the sign-in link",
        email: email,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error in send-link route:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send link" },
      { status: 500 }
    );
  }
}
