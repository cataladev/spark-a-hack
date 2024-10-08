// src/app/dashboard/page.tsx
"use client";

import Link from "next/link";
import NavBar from "../_components/navbarland";
import UserInputForm from "../_components/userinputform";

export default async function Dashboard() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-center gradient-background text-white">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[#f1d302] bg-[#3C3744] mt-10 text-4xl font-bold rounded-full px-4 py-2">Dashboard</h1>
          <UserInputForm />
        </div>
        <div className="flex-grow"></div>
        <div className="mb-10 flex justify-center">
        </div>
      </main>
    </>
  );
}