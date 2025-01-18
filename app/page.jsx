// page.jsx
import Hero from "./components/Hero";
import AboutHero from "./components/AboutHero";
import ServicesHero from "./components/ServicesHero";
import AppointmentHero from "./components/AppointmentHero";
import PackagesHero from "./components/PackagesHero";
import MachinesHero from "./components/MachinesHero";
import PatientCareAndAmenities from "./components/PatientCareAndAmenities";
import TestimonialHero from "./components/TestimonialHero";
import ArticlesHero from "./components/ArticlesHero";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"], // Optional: Specify subsets like 'latin', 'cyrillic'
  weight: ["400", "500", "700"], // Optional: Choose font weights
  display: "swap", // Optional: Prevents FOIT (Flash of Invisible Text)
});

export default function Home() {
  return (
    <div className={`${lora.className} dark:bg-gray-800`}>
      <Hero id="hero" />
      <AboutHero id="about" />
      <ServicesHero id="services" />
      <AppointmentHero id="appointment" />
      <PackagesHero id="packages" />
      <MachinesHero id="machines" />
      <PatientCareAndAmenities id="care-and-amenities" />
      <TestimonialHero id="testimonials" />
      <ArticlesHero id="articles" />
    </div>
  );
}
