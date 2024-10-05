import Link from "next/link";
import { api, HydrateClient } from "~/trpc/server";
import NavBar from "./_components/navbarland";
import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { AuthButtonBottom } from "./_components/authButtonBottom";

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
      description: "hawkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk tuaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      description2: "talkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk tuaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahhhhhhh",
      description3: "spit on that thanggggggggggggggggggggggggggggggggggggggggggggggggggggg",
      description4: "johnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn porkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
  },
];

export default async function HomePage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#969195] to-[#3C3744] text-white">
        <div className="flex flex-col items-center">
          <img
            src={PictureUrls[0]?.spark1url}
            alt="Spark 3"
            className="w-full max-w-4xl h-auto mt-32 animate-fadeIn"
          />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fwC46h0zUuE?si=nstQYTESOU1boN7Y"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="mt-32 mb-16"
          ></iframe>

<div className="flex w-full max-w-4xl mb-16 items-center">
              <p className="text-sm text-left text-[#f1d302] p-4 font-bold hover:text-[#3c3744] hover:bg-[#f1d302] transform transition hover:scale-110 w-[48%]">
                {PictureUrls[0]?.description}
              </p>
              <div className="w-0.5 h-96 bg-[#f1d302] mx-16"></div>
              <div className="w-[48%]"></div>
            </div>

    
            <div className="flex w-full max-w-4xl mb-16 items-center">
              <div className="w-[48%]"></div> 
              <div className="w-0.5 h-96 bg-[#f1d302] mx-8"></div> 
              <p className="text-sm text-left text-[#f1d302] p-4  font-bold hover:text-[#3c3744] hover:bg-[#f1d302] transform transition hover:scale-110 w-[48%]">
                {PictureUrls[0]?.description2}
              </p>
            </div>

    
            <div className="flex w-full max-w-4xl mb-16 items-center">
              <p className="text-sm text-left text-[#f1d302] p-4  font-bold hover:text-[#3c3744] hover:bg-[#f1d302] transform transition hover:scale-110 w-[48%]">
                {PictureUrls[0]?.description}
              </p>
              <div className="w-0.5 h-96 bg-[#f1d302] mx-8"></div>
              <div className="w-[48%]"></div>
            </div>

            <div className="flex w-full max-w-4xl mb-16 items-center">
              <div className="w-[48%] "></div> 
              <div className="w-0.5 h-96 bg-[#f1d302] mx-8"></div> 
              <p className="text-sm text-left text-[#f1d302] p-4 font-bold hover:text-[#3c3744] hover:bg-[#f1d302] transform transition hover:scale-110 w-[48%]">
                {PictureUrls[0]?.description4}
              </p>
            </div>

        </div>
        <div className="flex-grow"></div>
        <div className="mb-10 flex justify-center">
          <Link href="/registration">
            <AuthButtonBottom/>
          </Link>
        </div>
      </main>
    </>
  );
}
