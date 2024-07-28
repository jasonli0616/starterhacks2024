"use client"

import Image from "next/image";
import "./Dashboard.css";
import MatchingButton from "./components/MatchingButton";
import { Apple, Github, Google } from "react-bootstrap-icons";

function TeamUpLogo() {
  return <img src={'logo.png'} width={'300px'} alt="TeamUp Logo" />;
}


function Dashboard() {
  return (
    
    <div className="dashboard">
        <TeamUpLogo />
        
        <div className="signup-prompt">
          <h3>Sign up or log in to get started.</h3>
          <MatchingButton link="/api/auth/login" full>
            Continue with <Google style={{padding: '3px'}} /> <Github style={{padding: '3px'}} /> <Apple style={{padding: '3px'}} />
          </MatchingButton> 
          <MatchingButton link="/api/manualauth/login" full>Continue with email</MatchingButton>
        </div>
    </div>
  );
}

export default Dashboard;

