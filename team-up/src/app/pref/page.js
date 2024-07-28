"use client";
import { useState } from "react";
import axios from "axios";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

function Page() {
  const { user, error, isLoading } = useUser();
  const [info, setInfo] = useState({
    soccer: 0,
    basketball: 0,
    volleyball: 0,
    tennis: 0,
    tableTennis: 0,
    baseball: 0,
    golf: 0,
    iceHockey: 0,
    bowling: 0,
    archery: 0,
    badminton: 0,
    boxing: 0,
    cricket: 0,
    rugby: 0,
    ski: 0,
    curling: 0,
    swimming: 0,
    fencing: 0,
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
      [key]: 1,
    }));
  };

  const keys = Object.keys(info);
  const firstHalfKeys = keys.slice(0, Math.ceil(keys.length / 2));
  const secondHalfKeys = keys.slice(Math.ceil(keys.length / 2), keys.length);

  return (
    <div className="w-full h-screen bg-[#08183c] flex flex-col items-center">
      <PopUp text={"none"} value={"none"} setValue={"none"} />
      <div className="w-full h-[50px] bg-[#79849c] flex flex-col justify-center items-center"></div>
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
  const [value, setValue] = useState(0);
  const handleChange = () => {
    setValue(1);
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

const PopUp = ({ text, value, setValue }) => {
  return (
    <div className="absolute w-[90%] h-[450px] bg-white">
      <div className="realtive w-[full] h-[450px] flex flex-col item-center justify-evenly">
        <div className="w-full flex flex-col justify-center items-end -mt-6 pr-3">
          {" "}
          <Image src="/X.svg" width={30} height={30} alt="x" />
          <div className="w-full h-[4px] bg-[#f4f4f4] mt-3"> </div>
        </div>
        <div className="w-[325px] h-5 text-center text-[#1a1c29] text-xl font-bold font-['Open Sans'] leading-tight">
          Choose Your Skill Level
        </div>
        <div className="w-full flex justify-evenly items-center">
          <Box
            image="/novice.svg"
            title={"Novice"}
            text={
              "New to the sport, learning basic rules and skills (<1 year experience)"
            }
          />
          <Box
            image="/intermediate.svg"
            title={"Intermediate"}
            text={"Improving techniques and (1-5 years of experience)"}
          />
          <Box
            image="/advanced.svg"
            title={"Advanced"}
            text={
              "Very skilled, plays at a high level and (>5 years of experience)"
            }
          />
        </div>
      </div>
    </div>
  );
};

const Box = ({ image, title, text }) => {
  return (
    <div className="w-[30%] h-[261px] bg-[#f4f4f4] rounded-lg flex flex-col justify-evenly items-center">
      <div className="w-[90%] text-center text-[#6a6a6a] text-[15px] font-extrabold font-['Nunito']">
        {title}
      </div>
      <Image src={image} width={75} height={100} alt={title} />
      <div className="w-[90%] text-center text-[#070f20] text-[10px] font-normal font-['Nunito'] leading-tight">
        {text}
      </div>
    </div>
  );
};
export default Page;
