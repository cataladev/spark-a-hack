
"use client"
import Link from "next/link";
import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Noto_Sans } from "next/font/google";
import * as Clerk from '@clerk/nextjs'

// If loading a variable font, you don't need to specify the font weight
const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
});

const PictureUrls = [
  {
    spark1url:
      "https://utfs.io/f/No1xVDcvm1RwL4EtfFRBlTDo3f5IFaAPCwSgVOWUZzsjYMtQ",
    spark2url:
      "https://utfs.io/f/No1xVDcvm1Rwb5cOxQBzJ6hxBfGsEQPM1aTSlrRvqgOXyNFo",
    spark3url:
      "https://utfs.io/f/No1xVDcvm1RwwvDjvolO9kdilBGjJ1UxnEqhsgbM238WHAPK",
    spark4url:
      "https://utfs.io/f/No1xVDcvm1RwckSTJAnIok9uHGy5XfgalwjiM8YsUqZbxrTz",
    title: "Spark-a-Hack",
    description: "Idk yet",
  },
];

const NavBar = () => {
  return (
    <div className={notoSans.className}>
      <nav className="w-full gradient-background p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <Link href="/">
              <img
                src={PictureUrls[0]?.spark2url}
                alt="Landing"
                className="h-20 object-cover animate-fadeIn transform transition hover:scale-110"
              />
            </Link>
          </div>
          <div className="space-x-4 ">
            <SignedOut>
              <SignInButton>
              <button className="rounded-full px-4 py-2 text-[#f1d302] bg-[#3c3744] font-bold animate-fadeInslow hover:text-[#3c3744] hover:bg-[#f1d302] shadow transform transition hover:scale-110">
              Sign In
            </button>
            </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className="animate-fadeInslow">
                <button className="flex items-center justify-center rounded-full px-4 py-3 text-[#f1d302] bg-[#3c3744] font-bold animate-fadeInslow hover:text-[#3c3744] hover:bg-[#f1d302] shadow transform transition hover:scale-110">
                <UserButton />
                </button> 
              </div>
            </SignedIn>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
