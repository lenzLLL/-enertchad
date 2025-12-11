// src/app/api/upload/route.ts - Simple UploadThing proxy upload endpoint

import { NextRequest, NextResponse } from "next/server";

const _RAW_UPLOADTHING_TOKEN = process.env.UPLOADTHING_TOKEN;
// Trim surrounding quotes if someone accidentally wrapped the token in quotes in .env
const UPLOADTHING_TOKEN = _RAW_UPLOADTHING_TOKEN
  ? _RAW_UPLOADTHING_TOKEN.replace(/^['\"]|['\"]$/g, "")
  : undefined;

/**
 * POST /api/upload - Upload file to UploadThing
 * Expects FormData with file field
 */
export async function POST(request: NextRequest) {
  try {
    if (!UPLOADTHING_TOKEN) {
      console.error("UPLOADTHING_TOKEN is not configured in process.env");
      return NextResponse.json(
        { error: "UploadThing token not configured" },
        { status: 500 }
      );
    }

    // Debug: log masked token presence (do not log full secret in production)
    try {
      const masked = UPLOADTHING_TOKEN ? `***${UPLOADTHING_TOKEN.slice(-6)}` : "(none)";
      console.log("UPLOADTHING_TOKEN present:", !!UPLOADTHING_TOKEN, "masked:", masked);
    } catch (e) {
      // ignore
    }

    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    // Validate file type (images only)
    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Only image files are allowed" },
        { status: 400 }
      );
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "File size exceeds 5MB limit" },
        { status: 400 }
      );
    }

    // Create FormData for UploadThing API
    const uploadFormData = new FormData();
    uploadFormData.append("file", file);

    // Call UploadThing API
    // Note: This is a simplified example. For production, use official UploadThing SDK
    // Send multiple common header names in case UploadThing expects a specific one
    const headers: Record<string, string> = {
      Authorization: `Bearer ${UPLOADTHING_TOKEN}`,
      "x-api-key": UPLOADTHING_TOKEN,
      "api-key": UPLOADTHING_TOKEN,
    };

    // Log header keys and a masked preview (do NOT log full secret in prod)
    try {
      const maskedPreview = (v?: string) => (v ? `***${String(v).slice(-6)}` : "(none)");
      console.log("Uploading to UploadThing with headers:", {
        Authorization: maskedPreview(headers.Authorization),
        "x-api-key": maskedPreview(headers["x-api-key"]),
        "api-key": maskedPreview(headers["api-key"]),
      });
    } catch (e) {
      // ignore
    }

    const uploadResponse = await fetch("https://api.uploadthing.com/upload", {
      method: "POST",
      headers,
      body: uploadFormData,
    });

    if (!uploadResponse.ok) {
      let respText = "";
      try {
        respText = await uploadResponse.text();
      } catch (e) {
        respText = String(e);
      }
      console.error("UploadThing responded with status:", uploadResponse.status, respText);
      let parsedError: any = null;
      try {
        parsedError = JSON.parse(respText);
      } catch (e) {
        // ignore
      }
      throw new Error((parsedError && (parsedError.message || parsedError.error)) || `Upload failed (status ${uploadResponse.status})`);
    }

    const uploadedFile = await uploadResponse.json();

    return NextResponse.json(
      {
        success: true,
        url: uploadedFile.url,
        key: uploadedFile.key,
        name: uploadedFile.name,
        size: uploadedFile.size,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: error.message || "Upload failed" },
      { status: 500 }
    );
  }
}
