// src/app/api/blog/route.ts - Blog articles CRUD API with Firestore

import { NextRequest, NextResponse } from "next/server";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "@/firebase.config";

const ARTICLES_COLLECTION = "articles";

/**
 * GET /api/blog - Fetch all blog articles
 */
export async function GET(request: NextRequest) {
  try {
    const articlesRef = collection(db, ARTICLES_COLLECTION);
    const snapshot = await getDocs(articlesRef);
    const articles = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Record<string, any>),
    }));

    return NextResponse.json(articles, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching articles:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch articles" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/blog - Create a new blog article
 * Body: { title, slug, content, author, category, image, excerpt }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, slug, content, author, category, image, excerpt } = body;

    if (!title || !slug) {
      return NextResponse.json(
        { error: "Missing required fields: title, slug" },
        { status: 400 }
      );
    }

    const articlesRef = collection(db, ARTICLES_COLLECTION);
    const docRef = await addDoc(articlesRef, {
      title,
      slug,
      content,
      author: author || "Admin",
      category: category || "Général",
      image: image || "",
      excerpt: excerpt || "",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json(
      {
        id: docRef.id,
        message: "Article created successfully",
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating article:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create article" },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/blog?id={docId} - Update an article
 */
export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Article ID is required" },
        { status: 400 }
      );
    }

    const body = await request.json();
    const articleRef = doc(db, ARTICLES_COLLECTION, id);

    const articleSnapshot = await getDoc(articleRef);
    if (!articleSnapshot.exists()) {
      return NextResponse.json(
        { error: "Article not found" },
        { status: 404 }
      );
    }

    await updateDoc(articleRef, {
      ...body,
      updatedAt: new Date(),
    });

    return NextResponse.json(
      { message: "Article updated successfully", id },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error updating article:", error);
    return NextResponse.json(
      { error: error.message || "Failed to update article" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/blog?id={docId} - Delete an article
 */
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Article ID is required" },
        { status: 400 }
      );
    }

    const articleRef = doc(db, ARTICLES_COLLECTION, id);

    const articleSnapshot = await getDoc(articleRef);
    if (!articleSnapshot.exists()) {
      return NextResponse.json(
        { error: "Article not found" },
        { status: 404 }
      );
    }

    await deleteDoc(articleRef);

    return NextResponse.json(
      { message: "Article deleted successfully", id },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error deleting article:", error);
    return NextResponse.json(
      { error: error.message || "Failed to delete article" },
      { status: 500 }
    );
  }
}
