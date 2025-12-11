// src/app/api/orders/route.ts - Orders CRUD API

import { NextRequest, NextResponse } from "next/server";
import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "@/firebase.config";

const ORDERS_COLLECTION = "orders";

export async function GET(request: NextRequest) {
  try {
    const ordersRef = collection(db, ORDERS_COLLECTION);
    const snapshot = await getDocs(ordersRef);
    const orders = snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as Record<string, any>) }));
    return NextResponse.json(orders, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching orders:", error);
    return NextResponse.json({ error: error.message || "Failed to fetch orders" }, { status: 500 });
  }
}

/**
 * POST /api/orders - Create a new order
 * Expects JSON body with at least: { items: Array, amount: number, customer: { name, address, contact }, status?: string }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!body || !Array.isArray(body.items) || (typeof body.amount !== 'number' && typeof body.amount !== 'string')) {
      return NextResponse.json({ error: 'Invalid order payload' }, { status: 400 });
    }

    const order = {
      items: body.items,
      amount: typeof body.amount === 'string' ? Number(body.amount) : body.amount,
      customer: body.customer || {},
      status: body.status || 'En cours',
      createdAt: new Date().toISOString(),
    };

    const ordersRef = collection(db, ORDERS_COLLECTION);
    const docRef = await addDoc(ordersRef, order);

    return NextResponse.json({ message: 'Order created', id: docRef.id }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating order:', error);
    return NextResponse.json({ error: error.message || 'Failed to create order' }, { status: 500 });
  }
}

/**
 * PUT /api/orders?id={docId} - Update an order
 */
export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Order ID is required" },
        { status: 400 }
      );
    }

    const body = await request.json();
    const orderRef = doc(db, ORDERS_COLLECTION, id);

    const orderSnapshot = await getDoc(orderRef);
    if (!orderSnapshot.exists()) {
      return NextResponse.json(
        { error: "Order not found" },
        { status: 404 }
      );
    }

    await updateDoc(orderRef, {
      ...body,
      updatedAt: new Date(),
    });

    return NextResponse.json(
      { message: "Order updated successfully", id },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error updating order:", error);
    return NextResponse.json(
      { error: error.message || "Failed to update order" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/orders?id={docId} - Delete an order
 */
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Order ID is required" },
        { status: 400 }
      );
    }

    const orderRef = doc(db, ORDERS_COLLECTION, id);

    const orderSnapshot = await getDoc(orderRef);
    if (!orderSnapshot.exists()) {
      return NextResponse.json(
        { error: "Order not found" },
        { status: 404 }
      );
    }

    await deleteDoc(orderRef);

    return NextResponse.json(
      { message: "Order deleted successfully", id },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error deleting order:", error);
    return NextResponse.json(
      { error: error.message || "Failed to delete order" },
      { status: 500 }
    );
  }
}
