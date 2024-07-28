"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import MatchingButton from "../components/MatchingButton";

function Page() {
  const { user, error, isLoading } = useUser();
  const [output, setOutput] = useState({});

  useEffect(() => {
    if (user) {
      axios
        .post("/api/matching", {
          email: user.email,
        })
        .then((res) => {
          for (let emailAddress of res.data.userIDs) {
            axios
              .post("/api/getuserpref", { email: emailAddress })
              .then((res1) => {
                setOutput((prevOutput) => ({
                  ...prevOutput,
                  [emailAddress]: res1.data.preferences,
                }));
              });
          }
        });
    }
  }, [user]);

  return (
    <div className="overflow-hidden w-full bg-[#283757] flex flex-col items-center justify-evenly">
      <div className="w-full h-[50px] bg-[#79849c] flex flex-col justify-center items-end">
        <MatchingButton link="/api/auth/logout">Log out</MatchingButton>
      </div>
      <div className="mt-7 w-96 h-10 bg-white rounded-[10px] shadow border border-black flex items-center justify-evenly">
        <Image src="/search.svg" height={30} width={30} alt="search" />
        <div className="w-[324px] h-[25px] text-[#6c6161] text-[15px]">
          Search for sports and tournaments
        </div>
      </div>
      <div className="flex items-center mt-2 p-2 w-full">
        <Image src="/mapPin.svg" height={30} width={30} alt="pin" />
        <div className="pl-3 text-white text-[17px] font-bold">
          Now in Waterloo, ON
        </div>
      </div>
      
      <MatchingButton full link="/embed">
          View the location of your friends
        </MatchingButton>
      <Image
        src="/reminder.png"
        width={800}
        height={480}
        alt="reminder"
        className="mt-3 rounded-[20px]"
      />
      <div className="overflow-x-auto w-full mt-4">
        <div className="flex space-x-4 snap-x snap-mandatory">
        <Box
          src={"/sports/archery.png"}
          users={[
            { name: "John", email: "john@example.com" },
            { name: "Jane", email: "jane@example.com" },
          ]}
        />
        <Box
          src={"/sports/badminton.png"}
          users={[
            { name: "Alice", email: "alice@example.com" },
            { name: "Bob", email: "bob@example.com" },
          ]}
        />
        <Box
          src={"/sports/baseball.png"}
          users={[
            { name: "Charlie", email: "charlie@example.com" },
            { name: "Daisy", email: "daisy@example.com" },
          ]}
        />
        <Box
          src={"/sports/basketball.png"}
          users={[
            { name: "Ethan", email: "ethan@example.com" },
            { name: "Fiona", email: "fiona@example.com" },
          ]}
        />
        <Box
          src={"/sports/boxing.png"}
          users={[
            { name: "George", email: "george@example.com" },
            { name: "Hannah", email: "hannah@example.com" },
          ]}
        />
        <Box
          src={"/sports/cricket.png"}
          users={[
            { name: "Isaac", email: "isaac@example.com" },
            { name: "Julia", email: "julia@example.com" },
          ]}
        />
        <Box
          src={"/sports/curling.png"}
          users={[
            { name: "Kevin", email: "kevin@example.com" },
            { name: "Lily", email: "lily@example.com" },
          ]}
        />
        <Box
          src={"/sports/football.png"}
          users={[
            { name: "Mike", email: "mike@example.com" },
            { name: "Nora", email: "nora@example.com" },
          ]}
        />
        <Box
          src={"/sports/golf.png"}
          users={[
            { name: "Oscar", email: "oscar@example.com" },
            { name: "Penny", email: "penny@example.com" },
          ]}
        />
        <Box
          src={"/sports/hockey.png"}
          users={[
            { name: "Quincy", email: "quincy@example.com" },
            { name: "Rachel", email: "rachel@example.com" },
          ]}
        />
        <Box
          src={"/sports/ski.png"}
          users={[
            { name: "Sam", email: "sam@example.com" },
            { name: "Tina", email: "tina@example.com" },
          ]}
        />
        <Box
          src={"/sports/soccer.png"}
          users={[
            { name: "Uma", email: "uma@example.com" },
            { name: "Victor", email: "victor@example.com" },
          ]}
        />
        <Box
          src={"/sports/swimming.png"}
          users={[
            { name: "Wendy", email: "wendy@example.com" },
            { name: "Xavier", email: "xavier@example.com" },
          ]}
        />
        <Box
          src={"/sports/tabletennis.png"}
          users={[
            { name: "Yara", email: "yara@example.com" },
            { name: "Zane", email: "zane@example.com" },
          ]}
        />
        <Box
          src={"/sports/tennis.png"}
          users={[
            { name: "Olivia", email: "olivia@example.com" },
            { name: "Peter", email: "peter@example.com" },
          ]}
        />
        </div>
      </div>
    </div>
  );
}

const Box = ({ src, users }) => {
  return (
    <div className="h-[470px] w-[250px] snap-center flex-shrink-0 mx-5 p-4">
      <Image
        src={src}
        width={800}
        height={380}
        alt="none"
        className="mx-3 rounded-lg"
      />
      <div className="w-[200px] mt-2">
        <div className="w-[177px] h-[29px] text-center text-white text-[20px]">
          Recommendation :
        </div>
        {users.map((user, index) => (
          <div
            key={index}
            className="user-card flex items-center justify-between mt-1"
          >
            <div className="text-white text-[15px] font-semibold">
              {user.name}
            </div>
            <Image src="/chat.svg" width={30} height={30} alt="chat" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
