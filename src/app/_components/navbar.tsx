import Link from 'next/link';

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
    <nav className="w-full bg-[#969195] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/landing"> 
          <img src={PictureUrls[0]?.spark3url} alt="Landing" className="h-10 object-cover "/>
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/login" className="text-[#3c3744] bg-[#f1d302] font-bold rounded-full px-3 py-3 hover:text-gray-300">Sign-In/Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;