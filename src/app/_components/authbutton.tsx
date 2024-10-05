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

import { 
  dark,
} from "@clerk/themes"

export function AuthButton() {
  return (
    <ClerkProvider
     appearance={{
        baseTheme: dark,
      }}
     >
    <><SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
        <UserButton />
      </SignedIn></>
      </ClerkProvider>
  );
}
