import React from "react";
import ServicesHero from "../components/ServicesHero";
import AppointmentHero from "../components/AppointmentHero";
import TestimonialHero from "../components/TestimonialHero";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"], // Optional: Specify subsets like 'latin', 'cyrillic'
  weight: ["400", "500", "700"], // Optional: Choose font weights
  display: "swap", // Optional: Prevents FOIT (Flash of Invisible Text)
});

const Services = () => {
  return (
    <div className={`${lora.className} dark:bg-gray-800`}>
      <ServicesHero />
      <AppointmentHero />
      <TestimonialHero />
    </div>
  );
};

export default Services;
