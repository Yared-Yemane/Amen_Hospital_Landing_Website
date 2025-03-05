import React from "react";
import Guidelines from "./components/Guidelines";
import HealthAndSafetyGuidelines from "./components/HealthAndSafetyGuidelines";
import { Lora } from "next/font/google";
import { Encode_Sans } from "next/font/google";

const encode_Sans = Encode_Sans({
  subsets: ["latin"],
  weight: ["400"], // Specify font weights
});

const lora = Lora({
  subsets: ["latin"], // Optional: Specify subsets like 'latin', 'cyrillic'
  weight: ["400", "500", "700"], // Optional: Choose font weights
  display: "swap", // Optional: Prevents FOIT (Flash of Invisible Text)
});

const page = () => {
  return (
    <div className={`${encode_Sans.className} dark:bg-gray-800`}>
      <Guidelines />
      <HealthAndSafetyGuidelines />
    </div>
  );
};

export default page;
