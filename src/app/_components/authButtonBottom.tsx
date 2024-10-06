"use client";

import {
    ClerkProvider,
    SignIn,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
    useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
    subsets: ["latin"],
    display: "swap",
  });


export function AuthButtonBottom() {
    return (
        <div className={notoSans.className}>
        <><SignedOut>
            <SignInButton>
                <button className="rounded-full px-10 py-5 text-[#f1d302] bg-[#665d74] font-bold hover:text-[#3c3744] hover:bg-[#f1d302] shadow animate-pulse transform transition hover:scale-110">
                <p title ="Sign in">Sign In</p>
                </button>
            </SignInButton>
        </SignedOut>
            <SignedIn>
                <Link href={"/dash"}>
                <button className="rounded-full px-10 py-5 text-[#f1d302] bg-[#665d74] font-bold hover:text-[#3c3744] hover:bg-[#f1d302] shadow animate-pulse transform transition hover:scale-110">
                <p title="Dashboard">Dashboard</p>
                </button>
                </Link>
            </SignedIn></>
        </div>
    );
}