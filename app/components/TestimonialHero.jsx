import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const TestimonialHero = () => {
  return (
    <div className="mt-10 dark:bg-gray-800 dark:text-white">
      <div className="flex flex-col items-center justify-center text-center mb-5">
        <h1 className="relative font-bold text-lg text-[#269dff] after:block after:w-[121px] after:h-1 after:bg-[#b8d4eb] dark:text-[#269dff]">
          TESTIMONIAL
        </h1>
        <h1 className="text-[46px] font-bold mt-4 leading-tight dark:text-white">
          Patients Say About <br /> Our Services
        </h1>
      </div>
      <div>
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default TestimonialHero;
