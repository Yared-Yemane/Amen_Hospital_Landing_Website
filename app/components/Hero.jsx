import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="mt-3 pb-16 pt-24 relative bg-[url('/images/heroBackground.png')] bg-cover bg-center bg-no-repeat w-full h-full dark:bg-[url('/images/heroBackgroundDark.png')]">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-md dark:bg-black/40"></div>

      <div className="relative flex justify-center items-center h-full px-4 sm:px-8 md:px-16">
        <div className="ml-10 sm:ml-0 text-center sm:text-left">
          <h1 className="mb-5 relative font-bold text-2xl sm:text-xl md:text-2xl lg:text-3xl text-[#269dff] dark:text-[#269dff]">
            {[
              "W",
              "E",
              "L",
              "C",
              "O",
              "M",
              "E",
              " ",
              " ",
              "T",
              "O",
              " ",
              " ",
              "A",
              "M",
              "E",
              "N",
            ].map((char, index) => (
              <span
                key={index}
                className="inline-block border-b-2 border-[#269dff] mr-1 dark:border-[#269dff]"
              >
                {char}
              </span>
            ))}{" "}
          </h1>
          <h1 className="font-extrabold font-mono text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-[#ffffff] -tracking-wider leading-snug dark:text-[#ffffff]">
            Best Healthcare Solution In Your <br className="hidden sm:block" />{" "}
            City
          </h1>
          <div className="flex gap-6 mt-10 justify-center sm:justify-start flex-wrap">
            <button className="bg-white text-black rounded-full p-4 w-44 font-bold dark:bg-[#269dff] dark:text-white">
              Find Doctor
            </button>
            <button className="bg-transparent border text-white hover:text-black hover:bg-white transition-colors duration-300 rounded-full p-4 w-44 font-bold dark:border-[#269dff] dark:text-[#269dff] dark:hover:text-white dark:hover:bg-[#269dff]">
              Appointment
            </button>
          </div>
        </div>
        <div className="mt-10 sm:mt-0 mr-40 sm:mr-0 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
          <Image
            width={30000}
            height={30000}
            src="/images/heroImage.png"
            className="rounded-md w-full h-auto"
            alt="Building"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
