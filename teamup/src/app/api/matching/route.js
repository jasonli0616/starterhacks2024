import { NextResponse } from "next/server";
import clientPromise from "../../../components/mongodb";

export async function POST(req, res) {
  console.info("came to matching");


  const data = await req.json();
  const client = await clientPromise;
  const db = client.db();

  const user = await db.collection("users").findOne({ email: data.email });

  if (user) {
    console.info(user);
    console.log(user);
    if (data.password === user.password) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: "Incorrect Password" });
    }
  }
  return NextResponse.json({ success: false, error: "User Not Found" });
}
