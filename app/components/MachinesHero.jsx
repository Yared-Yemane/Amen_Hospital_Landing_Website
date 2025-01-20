import React from "react";
import SlidingMachineCards from "./SlidingMachineCards";

const MachinesHero = () => {
  return (
    <div className="pt-7 dark:bg-[#2d3748]">
      {/* Title Section */}
      <div className="flex flex-col items-center justify-center text-center mb-5 px-6">
        <h1 className="relative font-bold text-lg sm:text-md md:text-lg text-[#269dff] dark:text-[#4fd1c5] after:block after:w-[237px] after:h-1 after:bg-[#b8d4eb] dark:after:bg-[#4fd1c5]">
          ADVANCED EQUIPEMENTS
        </h1>
        <h1 className="text-[36px] sm:text-[40px] md:text-[46px] font-bold mt-4 leading-tight text-center text-black dark:text-white">
          Empowering Diagnosis and <br /> Treatment
        </h1>
      </div>

      {/* Machine Cards Section */}
      <div className="px-4 sm:px-6 md:px-8">
        <SlidingMachineCards />
      </div>
    </div>
  );
};

export default MachinesHero;
