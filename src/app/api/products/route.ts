// src/app/api/products/route.ts - Products CRUD API with Firestore

import { NextRequest, NextResponse } from "next/server";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "@/firebase.config";

const PRODUCTS_COLLECTION = "products";

/**
 * GET /api/products - Fetch all products or filter by category
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    const productsRef = collection(db, PRODUCTS_COLLECTION);
    let q;

    if (category && category !== "Tous") {
      q = query(productsRef, where("category", "==", category));
    } else {
      q = query(productsRef);
    }

    const snapshot = await getDocs(q);
    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Record<string, any>),
    }));

    return NextResponse.json(products, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch products" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/products - Create a new product
 * Body: { name, category, price, description, image, stock }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, category, price, description, image, stock } = body;

    // Validate required fields
    if (!name || !category || price === undefined) {
      return NextResponse.json(
        { error: "Missing required fields: name, category, price" },
        { status: 400 }
      );
    }

    const productsRef = collection(db, PRODUCTS_COLLECTION);
    const docRef = await addDoc(productsRef, {
      name,
      category,
      price: Number(price),
      description: description || "",
      image: image || "",
      stock: Number(stock) || 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json(
      {
        id: docRef.id,
        message: "Product created successfully",
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create product" },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/products?id={docId} - Update a product
 */
export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    const body = await request.json();
    const productRef = doc(db, PRODUCTS_COLLECTION, id);

    // Check if product exists
    const productSnapshot = await getDoc(productRef);
    if (!productSnapshot.exists()) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    // Update only provided fields
    await updateDoc(productRef, {
      ...body,
      updatedAt: new Date(),
    });

    return NextResponse.json(
      { message: "Product updated successfully", id },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { error: error.message || "Failed to update product" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/products?id={docId} - Delete a product
 */
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    const productRef = doc(db, PRODUCTS_COLLECTION, id);

    // Check if product exists before deleting
    const productSnapshot = await getDoc(productRef);
    if (!productSnapshot.exists()) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    await deleteDoc(productRef);

    return NextResponse.json(
      { message: "Product deleted successfully", id },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { error: error.message || "Failed to delete product" },
      { status: 500 }
    );
  }
}
