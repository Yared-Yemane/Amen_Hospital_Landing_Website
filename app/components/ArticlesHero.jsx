import React from "react";
import ArticlesCard from "./ArticlesCard";
import { Encode_Sans } from "next/font/google";

const encode_Sans = Encode_Sans({
  subsets: ["latin"],
  weight: ["400"], // Specify font weights
});

const ArticlesHero = () => {
  return (
    <div
      className={`${encode_Sans.className} px-5 mt-14 dark:bg-gray-800 dark:text-white`}
    >
      {/* Title Section */}
      <div className="flex flex-col items-center justify-center text-center mb-5 px-6">
        <h1 className="relative font-bold text-lg sm:text-xl md:text-2xl text-[#269dff] dark:text-[#269dff] after:block after:w-[118px] after:h-1 after:bg-[#b8d4eb] dark:after:bg-[#269dff]">
          ARTICLES
        </h1>
        <h1 className="text-[36px] sm:text-[40px] md:text-[46px] font-bold mt-4 leading-tight text-center dark:text-white">
          Explore Expert Perspectives <br />
          and the Latest Trends
        </h1>
      </div>

      {/* Articles Cards Section */}
      <div className="px-4 sm:px-6 md:px-8">
        <ArticlesCard />
      </div>
    </div>
  );
};

export default ArticlesHero;
