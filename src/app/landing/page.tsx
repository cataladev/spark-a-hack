
import Link from "next/link";
import { api, HydrateClient } from "~/trpc/server";
import NavBar from "../_components/navbarland";
import { ClerkProvider, SignIn, SignInButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { AuthButton } from "./authbutton";

const PictureUrls = [
  {
    spark1url: "https://utfs.io/f/No1xVDcvm1RwL4EtfFRBlTDo3f5IFaAPCwSgVOWUZzsjYMtQ",
    spark2url: "https://utfs.io/f/No1xVDcvm1Rwb5cOxQBzJ6hxBfGsEQPM1aTSlrRvqgOXyNFo", 
    spark3url: "https://utfs.io/f/No1xVDcvm1RwwvDjvolO9kdilBGjJ1UxnEqhsgbM238WHAPK", 
    spark4url: "https://utfs.io/f/No1xVDcvm1RwckSTJAnIok9uHGy5XfgalwjiM8YsUqZbxrTz",
    title: "Spark-a-Hack",
    description: "Idk yet",
  },
];

export default async function HomePage() {
  return (
    <HydrateClient>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#969195] to-[#3C3744] text-white">
        <div className="flex flex-col items-center justify-center">
          <img src={PictureUrls[0]?.spark1url} alt="Spark 3" className="w-full max-w-4xl h-auto mt-10" />
          {/* Add YouTube embed under the logo */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fwC46h0zUuE?si=nstQYTESOU1boN7Y"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="mt-8"
          ></iframe>
        </div>
        <div className="flex-grow"></div>
        <div className="flex justify-center mb-10">
          <Link href="/registration">
          <AuthButton/>
          </Link>
        </div>
      </main>
    </HydrateClient>
    
  );
}
