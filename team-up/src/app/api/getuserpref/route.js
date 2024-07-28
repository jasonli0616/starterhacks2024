import clientPromise from "@/app/components/mongodb";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const incomingData = await req.json();
    const userEmail = incomingData.email;

    const client = await clientPromise;
    const db = client.db();

    let user = await db
      .collection("users")
      .findOne({ email: userEmail });

    // Get user preferences
    if (user) {
      

      return NextResponse.json(
        { success: true, preferences: user.preferences }
      )

    }else {
        return NextResponse.json({
          success: false,
          message: "User does not exist"
        });
      }

    //Object.keys(obj).filter(k => obj[k]);
  } catch (error) {
    console.error("Error getting preferences", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 },
    );
  }
}