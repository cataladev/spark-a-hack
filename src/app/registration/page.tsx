import Link from "next/link";
import { api, HydrateClient } from "~/trpc/server";
import NavBar from "../_components/navbargen";
import { SignedIn, SignedOut } from "@clerk/nextjs";


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

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#969195] to-[#3C3744] text-white">

      </main>
    </HydrateClient>
  );
}