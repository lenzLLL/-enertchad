// src/utils/useUpload.ts - Simple upload helper for UploadThing via API route

import { useState } from "react";

interface UploadProgress {
  loaded: number;
  total: number;
  percent: number;
}

interface UploadResult {
  url: string;
  key: string;
  size: number;
  name: string;
}

/**
 * Custom hook for uploading files via our API route
 * @returns Object with upload function and state
 */
export const useUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState<UploadProgress | null>(null);
  const [error, setError] = useState<string | null>(null);

  const upload = async (files: File[]): Promise<UploadResult[] | null> => {
    if (files.length === 0) {
      setError("No files selected");
      return null;
    }

    setIsUploading(true);
    setError(null);
    setProgress(null);

    try {
      const results: UploadResult[] = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // Create FormData for this file
        const formData = new FormData();
        formData.append("file", file);

        // Upload to our API route
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Upload failed");
        }

        const uploadedFile = await response.json();
        results.push(uploadedFile);

        // Update progress
        const percent = Math.round(((i + 1) / files.length) * 100);
        setProgress({
          loaded: i + 1,
          total: files.length,
          percent,
        });
      }

      setIsUploading(false);
      return results;
    } catch (err: any) {
      const errorMsg = err?.message || "Upload failed";
      setError(errorMsg);
      setIsUploading(false);
      console.error("Upload error:", err);
      return null;
    }
  };

  return {
    upload,
    isUploading,
    progress,
    error,
  };
};

/**
 * Helper to prepare files from input element
 * @param event - Change event from file input
 * @param maxSize - Max file size in bytes (default 5MB)
 * @returns Object with valid files and optional error message
 */
export const getFilesFromInput = (
  event: React.ChangeEvent<HTMLInputElement>,
  maxSize: number = 5 * 1024 * 1024
): { files: File[]; error?: string } => {
  const files = event.target.files;

  if (!files || files.length === 0) {
    return { files: [], error: "No files selected" };
  }

  const validFiles: File[] = [];
  let error: string | undefined;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    // Check file size
    if (file.size > maxSize) {
      error = `File ${file.name} is too large (max ${maxSize / 1024 / 1024}MB)`;
      continue;
    }

    // Check file type
    if (!file.type.startsWith("image/")) {
      error = `File ${file.name} is not an image`;
      continue;
    }

    validFiles.push(file);
  }

  return { files: validFiles, error };
};
