import React from "react";
import TestimonialSlider from "./TestimonialSlider";
import { Encode_Sans } from "next/font/google";

const encode_Sans = Encode_Sans({
  subsets: ["latin"],
  weight: ["400"], // Specify font weights
});

const TestimonialHero = () => {
  return (
    <div className={`${encode_Sans.className} mt-10 dark:bg-gray-800 dark:text-white px-4 sm:px-6 lg:px-10`}>
      <div className="flex flex-col items-center justify-center text-center mb-5">
        {/* Heading Section */}
        <h1 className="relative font-bold text-lg text-[#269dff] after:block after:w-[127px] after:h-1 after:bg-[#b8d4eb] dark:text-[#269dff]">
          TESTIMONIAL
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold mt-4 leading-tight dark:text-white">
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
