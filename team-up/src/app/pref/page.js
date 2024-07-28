"use client";
import { useState, react } from "react";

function Page() {
  const info = {
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
    boxing: false,
    rugby: false,
    ski: false,
    curling: false,
    swimming: false,
    fensing: false,
  };
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
  const keys = Object.keys(info);
  const firstHalfKeys = keys.slice(0, Math.ceil(keys.length / 2));
  const secondHalfKeys = keys.slice(Math.ceil(keys.length / 2), keys.length);
  return (
    <div className="w-full h-screen bg-[#08183c] flex flex-col  item-center">
      <div className="w-full h-[81px] bg-[#79849c] flex flex-col justify-center items-center"></div>
      <div className="mt-8 w-full h-5 text-center text-white text-2xl font-bold font-['Open Sans'] leading-tight">
        Select Sports of Interest
      </div>
      <div className="mt-4 flex justify-evenly items-center h-[630px]">
        <div className="h-full flex justify-evenly items-center flex-col">
          {firstHalfKeys.map((key) => (
            <Button key={key} text={text[keys.indexOf(key)]} />
          ))}
        </div>
        <div className="h-full flex justify-evenly items-center flex-col">
          {secondHalfKeys.map((key) => (
            <Button key={key} text={text[keys.indexOf(key)]} />
          ))}
        </div>
      </div>
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

const Button = ({ text, par }) => {
  const [value, setValue] = useState("");
  const handleChange = () => {
    setValue((prev) => !prev);
    par = value;
    console.log(value);
  };
  return (
    <button
      className={`${value === true ? "bg-[#249577]" : ""} w-[160px] h-[54px] bg-[#99c43e] rounded-[14px] justify-center items-center flex `}
      onClick={handleChange}
    >
      <div className="text-white text-xl font-extrabold font-['Nunito']">
        {text}
      </div>
    </button>
  );
};
export default Page;
