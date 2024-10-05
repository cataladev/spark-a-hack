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


export function AuthButton() {
  return (
    <><SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
        <UserButton />
      </SignedIn></>
  );
}
