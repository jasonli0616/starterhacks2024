import { NextResponse } from "next/server";
import clientPromise from "../../../components/mongodb";
import validateInputs from "../../../components/validateInput";
import fixInfo from "../../../components/fixInfoSignUp";

export async function POST(req, res) {
  const data = await req.json();

  const client = await clientPromise;
  const db = client.db();

  const user = await db.collection("users").findOne({ email: data.email });

  if (user) {
    return NextResponse.json({
      success: false,
      errors: { user: "User already exists" },
    });
  } else {
    const result = await db.collection("users").insertOne(data);
    return NextResponse.json({ success: true });
  }
}
