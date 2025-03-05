import Image from "next/image";
import React from "react";
import aboutCards from "../data/aboutCards";
import { Encode_Sans } from "next/font/google";

const encode_Sans = Encode_Sans({
  subsets: ["latin"],
  weight: ["400"], // Specify font weights
});

const AboutHero = () => {
  return (
    <div
      className={`${encode_Sans.className}bg-white dark:bg-gray-900 grid grid-cols-1 md:grid-cols-2 gap-8 pb-20 px-6 sm:px-16 pt-14`}
    >
      {/* Image Section */}
      <div className="w-full flex justify-center md:justify-start">
        <img
          src="/images/about/about.png"
          className="rounded-lg object-cover h-auto w-full md:w-3/4"
          alt="About Us"
        />
      </div>

      {/* Text Section */}
      <div
        className={`${encode_Sans.className} w-full flex flex-col justify-center`}
      >
        <h1 className="relative font-bold text-lg text-[#269dff] dark:text-[#4fd1c5] after:block after:w-[94px] after:h-1 after:bg-[#b8d4eb] dark:after:bg-[#4fd1c5]">
          ABOUT US
        </h1>

        <h1 className="text-3xl md:text-[46px] font-bold mt-4 leading-tight mb-6 text-gray-900 dark:text-white">
          Best Medical Care For Yourself and Your Family
        </h1>

        <p
          className={`${encode_Sans.className}text-gray-700 dark:text-gray-300 mb-6`}
        >
          Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor
          diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet
          diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed
          stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur
          takimata eirmod, dolores takimata consetetur invidunt magna dolores
          aliquyam dolores dolore. Amet erat amet et magna
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center md:justify-start">
          {aboutCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-lg bg-[#e3e2ff] dark:bg-[#2d3748]"
            >
              <card.icon size={50} color="#269dff" />
              <span className="text-md mt-4 font-semibold text-gray-900 dark:text-white">
                {card.name}
              </span>
              <span className="text-[#269dff] text-sm font-semibold dark:text-[#4fd1c5]">
                {card.subname}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
