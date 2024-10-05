import Link from "next/link";
import { api, HydrateClient } from "~/trpc/server";
import NavBar from "../_components/navbar";

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
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#969195] to-[#3C3744] text-white">
        <div className="flex-grow"></div>
        <div className="flex justify-center mb-10">
        <Link href="/registration">
      <button className="rounded-full px-10 py-5 bg-[#3c3740] shadow hover:border-white-600 animate-pulse transform transition hover:scale-110">
          Register Now!
    </button>
    </Link>
    </div>
    </main>
    </HydrateClient>
  );
}