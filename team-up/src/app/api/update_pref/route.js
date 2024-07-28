import { NextResponse } from "next/server";
import clientPromise from "@/app/components/mongodb";

export async function POST(req, res) {
  try {
    const data = await req.json();
    //console.log(data);

    const client = await clientPromise;
    const db = client.db();

    console.log(data.user.email);
    const user = await db
      .collection("users")
      .findOne({ email: data.user.email });

    if (user) {
      console.log("user exists");
      await db
        .collection("users")
        .updateOne(
          { email: data.user.email },
          { $set: { preferences: data.info } },
        );
      return NextResponse.json({
        success: true,
        message: "User preferences updated",
        updated: true,
      });
    } else {
      console.log("user does not exist");
      const result = await db.collection("users").insertOne({
        email: data.user.email,
        preferences: data.info,
        info: data.user,
      });
      return NextResponse.json({
        success: true,
        message: "User added",
        insertedId: result.insertedId,
      });
    }
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
