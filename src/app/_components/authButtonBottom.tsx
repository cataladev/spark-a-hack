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
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Sign In
            </button>
        </SignInButton>
    </SignedOut>
    <SignedIn>
    <SignInButton>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Sign In
            </button>
        </SignInButton>
      </SignedIn></>
  );
}
