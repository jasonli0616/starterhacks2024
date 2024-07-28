import clientPromise from "@/app/components/mongodb";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const incomingData = await req.json();
    const userEmail = incomingData.email;

    const client = await clientPromise;
    const db = client.db();

    let userIDs = {};

    let user = await db
      .collection("users")
      .findOne({ email: userEmail });

    // Get user preferences
    if (user) {
      const preferences = Object.keys(user.preferences).filter(k => user.preferences[k]);
      
      // Find users with same preferences
      let output = await db
        .collection("users")
        .find({ email: { '$ne': userEmail } })
        .toArray();
        
      for (let foundUser of output) {

        let times = 0;

        for (let preference of preferences) {
          if (foundUser.preferences[preference]) {
            let value = user.preferences[preference] - foundUser.preferences[preference];
            switch (Math.abs(value)) {
              case 0:
                times += 5
                break;
              case 1:
                times += 4;
                break;
              case 2:
                times += 2;
                break;
              default:
                times += 1;
                break;
            }
          }
        }

        if (times) {
          userIDs[foundUser.info.email] = times;
        }
      }

      return NextResponse.json(
        { success: true, userIDs: Object.keys(userIDs).sort((a, b) => userIDs[b] - userIDs[a]) }
      )

    }else {
      return NextResponse.json({
        success: false,
        message: "User does not exist"
      });
    }

    //Object.keys(obj).filter(k => obj[k]);
  } catch (error) {
    console.error("Error getting DB from matching algorithm", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 },
    );
  }
}