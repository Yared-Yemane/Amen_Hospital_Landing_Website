// page.jsx

import TestimonialHero from "@/app/components/TestimonialHero";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"], // Optional: Specify subsets like 'latin', 'cyrillic'
  weight: ["400", "500", "700"], // Optional: Choose font weights
  display: "swap", // Optional: Prevents FOIT (Flash of Invisible Text)
});

export default function Home() {
  return (
    <div className={`${lora.className} dark:bg-gray-800 pt-24`}>
      <TestimonialHero />
    </div>
  );
}
