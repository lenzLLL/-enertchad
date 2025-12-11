# EnerTchad Backend Setup - Firebase + UploadThing

## Overview

This document explains the backend integration with Firebase (Auth + Firestore) and UploadThing for image uploads.

## Environment Variables

Create a `.env.local` file at `apps/web/.env.local` with the following (already in `.env.local.sample`):

```env
# Firebase Configuration (PUBLIC - safe)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

# UploadThing token (from https://uploadthing.com/dashboard)
UPLOADTHING_TOKEN=your_uploadthing_token

# App URL (for email link sign-in)
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Firebase Setup

### 1. Enable Email Link Authentication
- Go to Firebase Console > Authentication > Sign-in method
- Enable "Email link (passwordless sign-in)"
- Add your authorized domains (e.g., `localhost`, `your-domain.com`)

### 2. Create Firestore Collections
You'll need these collections in Firestore:
- `products` - Store product data
- `articles` - Store blog articles
- `orders` (optional) - Store orders

## Authentication Flow

### Sign-In (Email Link)
1. User clicks "Sign In" → `/auth/signin`
2. Enters email → calls `sendAuthLink(email)` from `src/lib/firebaseAuth.ts`
3. Firebase sends link to email
4. User clicks link → redirected to `/auth/finish?email=...`
5. Page calls `completeSignInWithLink(email)` to sign in user
6. User is redirected to `/admin` (or custom dashboard)

### API Helpers

Located in `src/lib/firebaseAuth.ts`:
- `sendAuthLink(email)` - Send sign-in link to email
- `isSignInLink()` - Check if current URL is a valid sign-in link
- `completeSignInWithLink(email)` - Finalize sign-in
- `logOut()` - Sign out user
- `subscribeToAuthState(callback)` - Listen to auth state changes
- `getCurrentUser()` - Get current user synchronously

## Image Upload

### Using the Upload Helper

```typescript
import { useUpload, getFilesFromInput } from "@/utils/useUpload";

export function MyComponent() {
  const { upload, isUploading, progress, error } = useUpload();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files, error: validationError } = getFilesFromInput(e);
    
    if (validationError) {
      console.error(validationError);
      return;
    }

    const results = await upload(files);
    if (results) {
      console.log("Uploaded files:", results);
      // Use results[0].url for image URL
    }
  };

  return (
    <div>
      <input 
        type="file" 
        multiple 
        accept="image/*"
        onChange={handleFileChange}
        disabled={isUploading}
      />
      {progress && <p>{progress.percent}% uploaded</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
```

## API Routes

### Products API

**GET** `/api/products` - Fetch products
- Query params: `category` (optional)
- Returns: Array of products

**POST** `/api/products` - Create product
- Body: `{ name, category, price, description, image, stock }`
- Returns: `{ id, message }`

**PUT** `/api/products?id=...` - Update product
- Query params: `id` (product ID)
- Body: Partial product object
- Returns: `{ message, id }`

**DELETE** `/api/products?id=...` - Delete product
- Query params: `id` (product ID)
- Returns: `{ message, id }`

### Blog API

**GET** `/api/blog` - Fetch all articles
- Returns: Array of articles

**POST** `/api/blog` - Create article
- Body: `{ title, slug, content, author, category, image, excerpt }`
- Returns: `{ id, message }`

**PUT** `/api/blog?id=...` - Update article
- Query params: `id` (article ID)
- Body: Partial article object
- Returns: `{ message, id }`

**DELETE** `/api/blog?id=...` - Delete article
- Query params: `id` (article ID)
- Returns: `{ message, id }`

### Upload API

**POST** `/api/upload` - Upload image file
- Body: FormData with `file` field
- Returns: `{ url, key, name, size }`

## Example: Product Creation with Auth + Upload

```typescript
"use client";

import { useState } from "react";
import { useUpload, getFilesFromInput } from "@/utils/useUpload";
import { getCurrentUser } from "@/lib/firebaseAuth";

export default function CreateProduct() {
  const { upload, isUploading } = useUpload();
  const [formData, setFormData] = useState({
    name: "",
    category: "Huile",
    price: "",
    description: "",
  });
  const [imageUrl, setImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = getFilesFromInput(e);
    if (files.length > 0) {
      const results = await upload(files);
      if (results) {
        setImageUrl(results[0].url);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const user = getCurrentUser();
      if (!user) {
        alert("You must be signed in");
        return;
      }

      const response = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          image: imageUrl,
          stock: 0,
        }),
      });

      if (response.ok) {
        alert("Product created!");
        // Reset form
        setFormData({ name: "", category: "Huile", price: "", description: "" });
        setImageUrl("");
      }
    } catch (error) {
      console.error("Error creating product:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Product name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        disabled={isUploading}
      />
      {imageUrl && <img src={imageUrl} alt="Preview" style={{ maxWidth: "200px" }} />}
      <button
        type="submit"
        disabled={isSubmitting || isUploading}
      >
        Create Product
      </button>
    </form>
  );
}
```

## Testing Locally

1. Ensure `.env.local` is filled with your Firebase and UploadThing credentials
2. Run `npm run dev`
3. Test sign-in: `http://localhost:3000/auth/signin`
4. Create products via admin dashboard (after sign-in)

## Firestore Security Rules (Optional)

To restrict write access to authenticated users, add these rules in Firebase Console > Firestore > Rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read to all
    match /products/{document=**} {
      allow read;
      allow write: if request.auth != null;
    }
    match /articles/{document=**} {
      allow read;
      allow write: if request.auth != null;
    }
  }
}
```

## Troubleshooting

- **Sign-in link not working?** Check that `NEXT_PUBLIC_APP_URL` matches your actual domain in Firebase authorized domains
- **Upload fails?** Verify `UPLOADTHING_TOKEN` is correct and the file is an image under 5MB
- **Firestore read/write errors?** Ensure Firestore database is created and rules allow your operations
