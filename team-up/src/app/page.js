'use client'

import "./index.css";
import LoginPrompt from "./components/LoginPrompt";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

function TeamUpLogo() {
  return <img src={"logo.png"} width={"300px"} alt="TeamUp Logo" />;
}

function Dashboard() {

  const { user, error, loading } = useUser();
  const router = useRouter();

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error with auth</h1>

  if (user) router.push("pref");

  return (
    <div className="w-full dashboard">
      <TeamUpLogo />

      <LoginPrompt />
    </div>
  );
}

export default Dashboard;
