"use client"

import { SignedOut, SignInButton } from "@clerk/nextjs"

export function AuthButton(){
    return(
        <SignedOut>
            <SignInButton />
           </SignedOut>
    )
}