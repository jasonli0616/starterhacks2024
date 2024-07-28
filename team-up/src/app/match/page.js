"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";

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
      <div className="w-full bg-[#79849c] h-[80px]"></div>
      <div className="mt-7 w-96 h-10 bg-white rounded-[10px] shadow border border-black flex items-center justify-evenly">
        <Image src="/search.svg" height={30} width={30} alt="search" />
        <div className="w-[324px] h-[25px] text-[#6c6161] text-[15px] font-extrabold font-['Nunito']">
          Search for sports and tournaments
        </div>
      </div>
      <div className="flex items-center mt-2 p-2 w-full">
        <Image src="/mapPin.svg" height={30} width={30} alt="pin" />
        <div className="pl-3 text-white text-[17px] font-bold font-['Nunito']">
          Now in Toronto, ON
        </div>
      </div>
      <div className="mt-4 w-[90%] h-[50px] px-[46px] py-5 bg-[#99c43e] rounded-[20px] shadow justify-center items-center gap-px inline-flex">
        <div className="text-white text-lg font-bold font-['Nunito']">
          View the location of your friends
        </div>
      </div>
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
            src={"/sports/soccer.png"}
            users={[
              { name: "sidak", email: "test@gmail.com" },
              { name: "sidak", email: "test@gmail.com" },
            ]}
          />
          <Box
            src={"/sports/soccer.png"}
            users={[
              { name: "sidak", email: "test@gmail.com" },
              { name: "sidak", email: "test@gmail.com" },
            ]}
          />
          <Box
            src={"/sports/soccer.png"}
            users={[
              { name: "sidak", email: "test@gmail.com" },
              { name: "sidak", email: "test@gmail.com" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

const Box = ({ src, users }) => {
  return (
    <div className="h-[470px] w-[250px] snap-center flex-shrink-0 mx-5">
      <Image
        src={src}
        width={800}
        height={400}
        alt="none"
        className="mx-3 rounded-lg"
      />
      <div className="w-[200px] mt-2">
        <div className="w-[177px] h-[29px] text-center text-black text-[15px] font-extrabold font-['Nunito']">
          Recommendation :
        </div>
        {users.map((user, index) => (
          <div
            key={index}
            className="user-card flex items-center justify-between mt-1"
          >
            <div className="text-black text-[10px] font-semibold font-['Inter']">
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
