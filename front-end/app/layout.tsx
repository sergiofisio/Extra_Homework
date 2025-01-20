"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bg from "../public/assets/bg.svg";

import Nav from "./components/nav";
import Footer from "./components/footer";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        style={{ backgroundImage: `url(${bg.src})` }}
        className="bg-gray-100 text-gray-900 max-w-[100vw] max-h-screen bg-fixed bg-no-repeat bg-opacity-50 relative"
        suppressHydrationWarning
      >
        <Nav />
        <main className="container min-w-full min-h-screen bg-white bg-opacity-55 flex flex-col items-center justify-center">
          {children}
        </main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
