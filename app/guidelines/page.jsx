import React from "react";
import Guidelines from "./components/Guidelines";
import HealthAndSafetyGuidelines from "./components/HealthAndSafetyGuidelines";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"], // Optional: Specify subsets like 'latin', 'cyrillic'
  weight: ["400", "500", "700"], // Optional: Choose font weights
  display: "swap", // Optional: Prevents FOIT (Flash of Invisible Text)
});

const page = () => {
  return (
    <div className={`${lora.className} dark:bg-gray-800`}>
      <Guidelines />
      <HealthAndSafetyGuidelines />
    </div>
  );
};

export default page;
