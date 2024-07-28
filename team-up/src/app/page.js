"use client";

import "./index.css";
import "./dashboard.css";
import MatchingButton from "./components/MatchingButton";
import { Apple, Github, Google } from "react-bootstrap-icons";

function TeamUpLogo() {
  return <img src={"logo.png"} width={"300px"} alt="TeamUp Logo" />;
}

async function handleManualLogin(e) {
  e.preventDefault();

  // let formData = new FormData(e.target);

  // const response = await fetch('/api/manualauth/login', {
  //   method: 'POST',
  //   body: formData,
  // })

  // // Handle response if necessary
  // const data = await response.json();
  // console.log(data);
  // TODO
}

function Dashboard() {
  return (
    <div className="w-full dashboard">
      <TeamUpLogo />

      <div className="m-2 w-full signup-prompt">
        <h3>Sign up or log in to get started.</h3>

        <MatchingButton link="/api/auth/login" full>
          Continue with <Google style={{ padding: "3px" }} />{" "}
          <Github style={{ padding: "3px" }} />{" "}
          <Apple style={{ padding: "3px" }} />
        </MatchingButton>

        <h3>or</h3>

        <form onSubmit={handleManualLogin}>
          <input
            type="email"
            required
            name="email"
            id="email"
            placeholder="Email address"
          />
          <input
            type="password"
            required
            name="password"
            id="password"
            placeholder="Password"
          />
          <MatchingButton full type="submit">
            Continue with email
          </MatchingButton>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
