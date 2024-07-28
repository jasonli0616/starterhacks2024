"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@auth0/nextjs-auth0/client";
import MatchingButton from "../components/MatchingButton";


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
      [key]: prevInfo[key] > 0 ? 0 : 1,
    }));
  };

  const keys = Object.keys(info);
  const firstHalfKeys = keys.slice(0, Math.ceil(keys.length / 2));
  const secondHalfKeys = keys.slice(Math.ceil(keys.length / 2), keys.length);

  useEffect(() => {
    axios.post("/api/getuserpref", {email: user.email})
    .then((res) => {
      if (res.data.success) {
        setInfo(res.data.preferences);
      }
    });
  }, [])

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
              defaultValue={info[firstHalfKeys[keys.indexOf(key)]]}
            />
          ))}
        </div>
        <div className="h-full flex justify-evenly items-center flex-col">
          {secondHalfKeys.map((key) => (
            <Button
              key={key}
              text={text[keys.indexOf(key)]}
              handleClick={() => handleButtonClick(key)}
              defaultValue={info[secondHalfKeys[keys.indexOf(key)-keys.length/2]]}
            />
          ))}
        </div>
      </div>
      <MatchingButton onclick={submit} full>
        Continue
      </MatchingButton>
      <div className="w-full text-center mt-2">
        <span className="text-white text-base leading-tight">
          Don't see your sport?
        </span>
        <span className="text-[#1a1c29] text-base leading-tight">
          {" "}
        </span>
        <span className="text-[#cef262] text-base leading-tight">
          Other Sport.
        </span>
        <span className="text-[#ef83ad] text-base leading-tight">
          {" "}
        </span>
      </div>
    </div>
  );
}

const Button = ({ text, handleClick, defaultValue }) => {
  const [value, setValue] = useState(defaultValue);
  const handleChange = () => {
    setValue((prev) => prev > 0 ? 0 : 1);
    handleClick();
  };

  return (
    <div>
      <button
        className={`${value ? "!bg-[#249577]" : ""} bg-[#6c8e3e] w-[160px] h-[54px] rounded-[14px] justify-center items-center flex `}
        onClick={handleChange}
      >
        <div className="text-white text-xl">
          {text}
        </div>
      </button>

    </div>
  );
};

export default Page;
