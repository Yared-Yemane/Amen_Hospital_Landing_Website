import React from "react";
import ArticlesCard from "./ArticlesCard";

const ArticlesHero = () => {
  return (
    <div className="px-5 mt-14 dark:bg-gray-800 dark:text-white">
      <div className="flex flex-col items-center justify-center text-center mb-5">
        <h1 className="relative font-bold text-lg text-[#269dff] after:block after:w-[91px] after:h-1 after:bg-[#b8d4eb] dark:text-[#269dff]">
          ARTICLES
        </h1>
        <h1 className="text-[46px] font-bold mt-4 leading-tight text-center dark:text-white">
          Explore Expert Perspectives <br />
          and the Latest Trends
        </h1>
      </div>
      <div>
        <ArticlesCard />
      </div>
    </div>
  );
};

export default ArticlesHero;
