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


export function AuthButtonBottom() {
  return (
    <><SignedOut>
      <SignInButton>
      <button className="rounded-full px-10 py-5 text-[#f1d302] bg-[#665d74] font-bold hover:text-[#3c3744] hover:bg-[#f1d302] shadow animate-pulse transform transition hover:scale-110">
              Sign In
            </button>
        </SignInButton>
    </SignedOut>
    <SignedIn>
    <SignInButton>
      <button className="rounded-full px-10 py-5 text-[#f1d302] bg-[#665d74] font-bold hover:text-[#3c3744] hover:bg-[#f1d302] shadow animate-pulse transform transition hover:scale-110">
              Sign In
            </button>
        </SignInButton>
      </SignedIn></>
  );
}
