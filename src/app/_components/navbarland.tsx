import Link from 'next/link';

import { Noto_Sans } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const notoSans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
})  

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

const NavBar = () => {
  return (
    <div className={notoSans.className}>
    <nav className="w-full bg-[#969195] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/landing"> 
          <img src={PictureUrls[0]?.spark2url} alt="Landing" className="h-20 object-cover animate-fadeIn"/>
          </Link>
        </div>
        <div className="space-x-4">
        <Link href="/login"><button className="text-[#f1d302] bg-[#3c3744] font-bold rounded-full px-3 py-3 hover:text-[#3c3744] hover:bg-[#f1d302] shadow-lg hover:shadow-xl transform transition hover:scale-105 animate-fadeIn">
                Sign-In/Login
              </button>
            </Link>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default NavBar;