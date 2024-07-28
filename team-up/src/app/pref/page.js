"use client";
import { useState } from "react";
import axios from "axios";
import { useUser } from "@auth0/nextjs-auth0/client";
import MatchingButton from "../components/MatchingButton";

function Page() {
  const { user, error, isLoading } = useUser();
  const [info, setInfo] = useState({
    soccer: false,
    basketball: false,
    volleyball: false,
    tennis: false,
    tableTennis: false,
    baseball: false,
    golf: false,
    iceHockey: false,
    bowling: false,
    archery: false,
    badminton: false,
    boxing: false,
    cricket: false,
    rugby: false,
    ski: false,
    curling: false,
    swimming: false,
    fencing: false,
  });

  const text = [
    "Soccer ⚽️ ",
    "Basketball 🏀 ",
    "Volleyball 🏐 ",
    "Tennis 🎾 ",
    "Table Tennis 🏓 ",
    "Baseball ⚾️ ",
    "Golf ⛳️ ",
    "Ice Hockey 🏒 ",
    "Bowling 🎳 ",
    "Archery 🏹 ",
    "Badminton 🏸 ",
    "Boxing 🥊 ",
    "Cricket 🏏 ",
    "Rugby 🏉 ",
    "Ski 🎿 ",
    "Curling 🥌 ",
    "Swimming 🏊 ",
    "Fencing 🤺 ",
  ];

  const submit = () => {
    axios.post(`/api/update_pref`, { info: info, user: user }).then((res) => {
      if (res.data.success) {
        console.log("Success");
      }
    });
  };

  const handleButtonClick = (key) => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      [key]: !prevInfo[key],
    }));
  };

  const keys = Object.keys(info);
  const firstHalfKeys = keys.slice(0, Math.ceil(keys.length / 2));
  const secondHalfKeys = keys.slice(Math.ceil(keys.length / 2), keys.length);

  return (
    <div className="w-full h-screen bg-[#08183c] flex flex-col items-center">
      <div className="w-full h-[50px] bg-[#79849c] flex flex-col justify-center items-end">
        <MatchingButton link="/api/auth/logout" className="h-[20px]">Log out</MatchingButton>
      </div>
      <div className="mt-5 w-full h-5 text-center text-white text-2xl font-bold font-['Open Sans'] leading-tight">
        Select Sports of Interest
      </div>
      <div className="w-[90%] mt-4 flex justify-evenly items-center h-[630px]">
        <div className="h-full flex justify-evenly items-center flex-col">
          {firstHalfKeys.map((key) => (
            <Button
              key={key}
              text={text[keys.indexOf(key)]}
              handleClick={() => handleButtonClick(key)}
            />
          ))}
        </div>
        <div className="h-full flex justify-evenly items-center flex-col">
          {secondHalfKeys.map((key) => (
            <Button
              key={key}
              text={text[keys.indexOf(key)]}
              handleClick={() => handleButtonClick(key)}
            />
          ))}
        </div>
      </div>
      <button
        className="w-[90%] h-[60px] bg-[#99c53e] rounded-[14px]"
        onClick={submit}
      >
        <div className="text-white text-xl font-extrabold font-['Nunito']">
          continue{" "}
        </div>
      </button>
      <div className="w-full text-center mt-2">
        <span className="text-white text-base font-bold font-['Nunito'] leading-tight">
          Don’t see your sport?
        </span>
        <span className="text-[#1a1c29] text-base font-bold font-['Nunito'] leading-tight">
          {" "}
        </span>
        <span className="text-[#cef262] text-base font-bold font-['Nunito'] leading-tight">
          Other Sport.
        </span>
        <span className="text-[#ef83ad] text-base font-bold font-['Nunito'] leading-tight">
          {" "}
        </span>
      </div>
    </div>
  );
}

const Button = ({ text, handleClick }) => {
  const [value, setValue] = useState(false);
  const handleChange = () => {
    setValue((prev) => !prev);
    handleClick();
  };

  return (
    <button
      className={`${value ? "!bg-[#249577]" : ""} bg-[#6c8e3e] w-[160px] h-[54px] rounded-[14px] justify-center items-center flex `}
      onClick={handleChange}
    >
      <div className="text-white text-xl font-extrabold font-['Nunito']">
        {text}
      </div>
    </button>
  );
};

export default Page;
