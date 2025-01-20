import React from "react";
import MedicalPackagesSlider from "./SlidingCards";

const PackagesHero = () => {
  return (
    <div className="py-7 dark:bg-[#2d3748]">
      <div className="flex flex-col items-center justify-center text-center mb-5">
        <h1 className="relative font-bold text-lg text-[#269dff] dark:text-[#4fd1c5] after:block after:w-[188px] after:h-1 after:bg-[#b8d4eb] dark:after:bg-[#4fd1c5]">
          MEDICAL PACKAGES
        </h1>
        <h1 className="text-[36px] sm:text-[46px] font-bold mt-4 leading-tight text-center text-black dark:text-white">
          Awesome Medical <br /> Programs
        </h1>
      </div>
      <div>
        <MedicalPackagesSlider />
      </div>
    </div>
  );
};

export default PackagesHero;
