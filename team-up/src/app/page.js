"use client";

import { useEffect, useState } from "react";
import "./index.css";
import "./globals.css";

// function DashboardBg() {
//   //return <style>{'body {background-color: #BBE3D4; }' } </style>
//   return (
//     <img
//       src="https://i.imgur.com/GiqDyDR.png"
//       width={1920}
//       height={1080}
//       alt="background"
//     />
//   ); //image of blue background with lines
// }

// function TeamUpLogo() {
//   return (
//     <img
//       src="https://i.imgur.com/2gRXjvM.png"
//       width={500}
//       height={420}
//       alt="ecovader logo"
//     />
//   );
// }

// function InputComponent() {
//   // Declare state variables to hold input values
//   const [inputValue, setInputValue] = useState("");

//   // Event handler to update the state when the input changes
//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <div>
//       {/* Input field with an onChange event */}
//       <input
//         style={{
//           width: "60%",
//           height: "80%",
//           padding: "10px",
//           fontSize: "16px",
//           borderRadius: "10px",
//           border: "0.5px solid #0B3B36",
//           boxShadow: "0px 0px 10px 0px #0B3B36",
//           boxSizing: "border-box",
//           textAlign: "left",
//         }}
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Enter your email address to continue: "
//       />
//     </div>
//   );
// }

// function HeaderBg() {
//   return <style>{"header {background-color: #236D5E; }"} </style>;
// }

// function Dashboard() {
//   return (
//     <div className="Dashboard">
//       {/* <header className="flex flex-col gap-4 justify-center items-center">
//         <br />
//         <DashboardBg />
//         <TeamUpLogo />
//         <h1 className="text-9xl font-bold text-white stroke-black">
//           Together We Thrive:{" "}
//           <i>Community-Led Solutions to Invasive Species!</i>
//         </h1>
//         <br />
//       </header> */}
//     </div>
//   );
// }

function DashboardWrapper() {
  return (
    <>
      <h1 className="bg-red-100">Hello</h1>
      {/* <a href="/api/auth/login">Login</a> */}
      {/* <Dashboard /> */}
    </>
  );
}

export default DashboardWrapper;
