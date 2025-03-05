import React from "react";
import Image from "next/image";
import { Encode_Sans } from "next/font/google";

const notoSans = Encode_Sans({
  subsets: ["latin"],
  weight: ["400"], // Specify font weights
});

const Hero = () => {
  return (
    <div
      className={`${notoSans.className} pb-16 pt-24 relative bg-[url('/images/heroBackground.png')] bg-cover bg-center bg-no-repeat w-full h-full dark:bg-[url('/images/heroBackgroundDark.png')]`}
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-md dark:bg-black/40"></div>

      <div className="relative flex justify-center items-center h-full px-4 sm:px-8 md:px-16">
        <div className="ml-10 sm:ml-0 text-center sm:text-left">
          <h1 className="mb-5 relative font-bold text-2xl sm:text-xl md:text-2xl lg:text-3xl text-[#269dff] dark:text-[#269dff]">
            <span className="inline-block border-b-2 border-[#269dff] mr-1 dark:border-[#269dff]">
              Welcome to Amen
            </span>
          </h1>
          <h1 className="font-extrabold text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-[#ffffff] -tracking-wider leading-snug dark:text-[#ffffff]">
            Best Healthcare Solution In Your City
          </h1>
          <p className="mt-4 text-lg sm:text-sm md:text-base lg:text-lg text-white bg-black inline-block dark:bg-gray-800 dark:text-gray-300">
            Your health is our priority. We offer top-quality medical care with
            highly skilled professionals, cutting-edge technology, and a
            patient-centered approach. Book appointments, consult with experts,
            and experience a seamless healthcare journey with us.
          </p>

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
