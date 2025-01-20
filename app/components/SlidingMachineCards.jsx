"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import SwiperCore, { Navigation, Autoplay } from "swiper"; // Import Swiper modules

// Sample data for medical machines
const machines = [
  {
    id: 1,
    name: "Laparoscopy",
    purpose: "Imaging of abdomen or pelvis",
    description:
      "A medical imaging technique used in an operation performed in the abdomen or pelvis.",
    image: "/images/machines/laparoscopy.png", // Replace with actual image path
    referenceLink: "#mri-details", // Replace with actual link
  },
  {
    id: 2,
    name: "CT Scanner",
    purpose: "Detailed body imaging",
    description:
      "A diagnostic imaging procedure that uses x-rays to create detailed pictures of structures inside the human body.",
    image: "/images/machines/CTScanner.png",
    referenceLink: "#ct-scanner-details",
  },
  {
    id: 3,
    name: "X-ray Machine",
    purpose: "Imaging bones and tissues",
    description:
      "A quick and effective method for viewing the inside of the body, used for detecting internal fractures.",
    image: "/images/machines/xray.png",
    referenceLink: "#xray-details",
  },
  {
    id: 4,
    name: "Ultrasound",
    purpose: "Real-time imaging for soft tissues",
    description:
      "A non-invasive imaging technique used to examine soft tissues and organs in real-time.",
    image: "/images/machines/ultrasound.png",
    referenceLink: "#ultrasound-details",
  },
];

// Install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const SlidingMachineCards = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Check if swiperRef.current is defined and has the swiper instance
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      if (swiperInstance.autoplay) {
        swiperInstance.autoplay.start(); // Start autoplay after component is mounted
      }
    }
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto py-10 px-5 sm:px-10 lg:px-14">
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        slidesPerView={2} // Show 2 slides per view by default
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }} // Enable navigation buttons
        autoplay={{
          delay: 4000, // Auto-slide delay
          disableOnInteraction: false, // Don't disable autoplay after user interaction
          pauseOnMouseEnter: true, // Pause autoplay when hovering over the slider
        }}
        loop // Enable loop
        speed={1000} // Set transition speed (in milliseconds)
        breakpoints={{
          768: {
            slidesPerView: 2, // Show 2 slides on tablets and above
          },
          480: {
            slidesPerView: 1, // Show 1 slide on mobile
          },
        }}
      >
        {machines.map((machine) => (
          <SwiperSlide key={machine.id}>
            <div className="flex flex-col sm:flex-row bg-white dark:bg-[#2d3748] rounded-lg shadow-lg overflow-hidden border dark:border-[#4a5568] h-80">
              {/* Left Section - Image */}
              <div className="w-full sm:w-1/2 h-full">
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Section */}
              <div className="w-full sm:w-1/2 p-5 sm:p-10 flex flex-col justify-between h-full">
                {/* Upper Section - Name, Purpose, Description */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    {machine.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 italic">
                    {machine.purpose}
                  </p>
                  <p className="mt-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    {machine.description}
                  </p>
                </div>

                {/* Thin Line Divider */}
                <div className="my-4 border-t border-gray-300 dark:border-gray-600"></div>

                {/* Bottom Section - Reference Link */}
                <div>
                  <a
                    href={machine.referenceLink}
                    className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600"
                  >
                    More
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 px-4">
        <button
          className="prev-btn bg-[#269dff] text-white font-bold py-3 px-4 rounded-full shadow-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-color duration-300"
          onClick={() => swiperRef.current.swiper.slidePrev()} // Slide to the previous slide
        >
          &#8592;
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 px-4">
        <button
          className="next-btn bg-[#269dff] text-white font-bold py-3 px-4 rounded-full shadow-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-color duration-300"
          onClick={() => swiperRef.current.swiper.slideNext()} // Slide to the next slide
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default SlidingMachineCards;
