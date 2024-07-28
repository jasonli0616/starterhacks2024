"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import MatchingButton from "../components/MatchingButton";
import { useRouter } from "next/navigation";

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
  const [popUp, setPopUp] = useState({
    value: false,
    key: false,
  });
  const [value, setValue] = useState("novice");
  // useEffect(() => {
  //   console.log(user);
  //   axios.post(`/api/getuserpref`, user).then((res) => {
  //     if (res.data.success) {
  //       setInfo(res.data.preferences);
  //     }
  //   });
  // }, []);

  const submit = () => {
    axios.post(`/api/update_pref`, { info: info, user: user }).then((res) => {
      if (res.data.success) {
        console.log("Success");
      }
    });
  };

  const router = useRouter();

  const handleButtonClick = (key) => {
    console.log(info);
    setPopUp({ value: true, key: key });
  };

  useEffect(() => {
    let num = 1;

    if (value === "novice") {
      num = 1;
    } else if (value === "intermediate") {
      num = 2;
    } else if (value === "advanced") {
      num = 3;
    } else {
      num = 1;
    }

    if (popUp.value === false) {
      if (popUp.key !== false) {
        setInfo((prevInfo) => ({
          ...prevInfo,
          [popUp.key]: num,
        }));
      }
    }
  }, [popUp]);

  const keys = Object.keys(info);
  const firstHalfKeys = keys.slice(0, Math.ceil(keys.length / 2));
  const secondHalfKeys = keys.slice(Math.ceil(keys.length / 2), keys.length);

  return (
    <div className="w-full h-screen bg-[#08183c] flex flex-col items-center">
      <PopUp
        text={"none"}
        value={value}
        setValue={setValue}
        popUp={popUp}
        setPopUp={setPopUp}
      />
      <div className="w-full h-[50px] bg-[#79849c] flex flex-col justify-center items-end">
        <MatchingButton link="/api/auth/logout">Log out</MatchingButton>
      </div>
      <div className="mt-5 w-full h-5 text-center text-white text-2xl leading-tight">
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
      <MatchingButton full onclick={() => {
        submit();
        router.push("/match");
      }}>Continue</MatchingButton>
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
      <div className="text-white text-xl">
        {text}
      </div>
    </button>
  );
};

const PopUp = ({ text, value, setValue, popUp, setPopUp }) => {
  const onClose = () => {
    setPopUp((prev) => ({
      ...prev,
      value: false,
    }));
  };
  return (
    <div
      className={`${!popUp.value ? "hidden" : ""} absolute w-[90%] h-[450px] bg-white top-8`}
    >
      <div className="realtive w-[full] h-[450px] flex flex-col item-center justify-evenly">
        <div className="w-full flex flex-col justify-center items-end -mt-6 pr-3">
          {" "}
          <button onClick={onClose}>
            <Image src="/X.svg" width={30} height={30} alt="x" />
          </button>
          <div className="w-full h-[4px] bg-[#f4f4f4] mt-3"> </div>
        </div>
        <div className="w-[325px] h-5 text-center text-[#1a1c29] text-xl leading-tight">
          Choose Your Skill Level
        </div>
        <div className="w-full flex justify-evenly items-center">
          <Box
            image="/novice.svg"
            title={"Novice"}
            text={
              "New to the sport, learning basic rules and skills (<1 year experience)"
            }
            value={value}
            setValue={setValue}
          />
          <Box
            image="/intermediate.svg"
            title={"Intermediate"}
            text={"Improving techniques and (1-5 years of experience)"}
            value={value}
            setValue={setValue}
          />
          <Box
            image="/advanced.svg"
            title={"Advanced"}
            text={
              "Very skilled, plays at a high level and (>5 years of experience)"
            }
            value={value}
            setValue={setValue}
          />
        </div>
      </div>
    </div>
  );
};

const Box = ({ image, title, text, setValue, value }) => {
  const onClick = () => {
    setValue(title.toLowerCase());
    console.log(value, value === title.toLowerCase());
  };
  return (
    <button
      className={`${value === title.toLowerCase() ? "border-2 border-[#99c53e]" : ""} w-[30%] h-[261px] bg-[#f4f4f4] rounded-lg flex flex-col justify-evenly items-center`}
      onClick={onClick}
    >
      <div className="w-[90%] text-center text-[#6a6a6a] text-[15px]">
        {title}
      </div>
      <Image src={image} width={75} height={100} alt={title} />
      <div className="w-[90%] text-center text-[#070f20] text-[10px] font-normal font-['Nunito'] leading-tight">
        {text}
      </div>
    </button>
  );
};
export default Page;
