import Link from "next/link";
import NavBar from "./_components/navbarland";
import { AuthButtonBottom } from "./_components/authButtonBottom";
import FadeInWhenVisible from "./_components/FadeWhenInvisible"; 
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
});

const PictureUrls = [
  {
    spark1url:
      "https://utfs.io/f/No1xVDcvm1RwL4EtfFRBlTDo3f5IFaAPCwSgVOWUZzsjYMtQ",
    title: "Spark-a-Hack",
    description: "Spark-a-Hack is an AI powered tool that assists users with coming up with hackathon competition ideas and work flow",
    description2: "Spark-a-Hack is an AI powered tool that assists users with coming up with hackathon competition ideas and work flow",
    description3: "Spark-a-Hack is an AI powered tool that assists users with coming up with hackathon competition ideas and work flow",
    description4: "Spark-a-Hack is an AI powered tool that assists users with coming up with hackathon competition ideas and work flow",
  },
];

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#969195] to-[#3C3744] text-white">
        <div className={notoSans.className}>
        <div className="flex flex-col items-center">
          
          {/* Fade in the image */}
          <FadeInWhenVisible>
            <img
              src={PictureUrls[0]?.spark1url}
              alt="Spark 3"
              className="w-full max-w-4xl h-auto mt-32"
            />
          </FadeInWhenVisible>

          <div className="mt-32 mb-20">
            <AuthButtonBottom />
          </div>

          {/* Fade in the YouTube video */}
          <FadeInWhenVisible>
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
          </FadeInWhenVisible>

          {/* Fade in the description sections */}
          <FadeInWhenVisible>
            <div className="flex w-full max-w-4xl mb-16 items-center">
              <p className="text-l text-right text-[#f1d302] p-4 font-bold hover:text-[#3c3744] hover:bg-[#f1d302] transform transition hover:scale-110 w-[48%]">
                {PictureUrls[0]?.description}
              </p>
              <div className="w-0.5 h-96 bg-[#f1d302] mx-16"></div>
              <div className="w-[48%]"></div>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <div className="flex w-full max-w-4xl mb-16 items-center">
              <div className="w-[48%]"></div>
              <div className="w-0.5 h-96 bg-[#f1d302] mx-8"></div>
              <p className="text-l text-left text-[#f1d302] p-4  font-bold hover:text-[#3c3744] hover:bg-[#f1d302] transform transition hover:scale-110 w-[48%]">
                {PictureUrls[0]?.description2}
              </p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <div className="flex w-full max-w-4xl mb-16 items-center">
              <p className="text-l text-right text-[#f1d302] p-4 font-bold hover:text-[#3c3744] hover:bg-[#f1d302] transform transition hover:scale-110 w-[48%]">
                {PictureUrls[0]?.description3}
              </p>
              <div className="w-0.5 h-96 bg-[#f1d302] mx-8"></div>
              <div className="w-[48%]"></div>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <div className="flex w-full max-w-4xl mb-16 items-center">
              <div className="w-[48%]"></div>
              <div className="w-0.5 h-96 bg-[#f1d302] mx-4"></div>
              <p className="text-l text-left text-[#f1d302] p-4 font-bold hover:text-[#3c3744] hover:bg-[#f1d302] transform transition hover:scale-110 w-[48%]">
                {PictureUrls[0]?.description4}
              </p>
            </div>
          </FadeInWhenVisible>

        </div>
        <div className="flex-grow"></div>
        <div className="mb-10 flex justify-center">
          <Link href="/registration">
            <AuthButtonBottom />
          </Link>
        </div>
        </div>
      </main>
    </>
  );
}
