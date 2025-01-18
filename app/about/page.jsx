import React from "react";
import AboutHero from "../components/AboutHero";
import MachinesHero from "../components/MachinesHero";
import PackagesHero from "../components/PackagesHero";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"], // Optional: Specify subsets like 'latin', 'cyrillic'
  weight: ["400", "500", "700"], // Optional: Choose font weights
  display: "swap", // Optional: Prevents FOIT (Flash of Invisible Text)
});

const About = () => {
  return (
    <div className={`${lora.className} dark:bg-gray-800`}>
      <AboutHero />
      <MachinesHero />
      <PackagesHero />
    </div>
  );
};

export default About;
