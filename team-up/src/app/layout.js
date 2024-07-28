import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TeamUp",
  description: "StarterHacks 2024 submission",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body>{children}</body>
      </UserProvider>
    </html>
  );
}
