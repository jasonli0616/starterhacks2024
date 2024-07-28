import { NextResponse } from "next/server";

export async function POST(req, res) {
  return NextResponse.json({ success: false, error: "User Not Found" });
}
