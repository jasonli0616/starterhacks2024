// pages/api/generate-content.js

import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  // if (req.method !== "POST") {
  //   res.status(405).json({ message: "Only POST requests are allowed" });
  //   return;
  // }

  const { GOOGLE_API_KEY } = process.env;

  if (!GOOGLE_API_KEY) {
    res.status(500).json({ message: "API key not found" });
    return;
  }

  const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const prompt = req.body.prompt || "Write a story about an AI and magic";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    console.log(response.text());
    const text = response.text();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}
