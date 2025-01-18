"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import SwiperCore, { Navigation, Autoplay } from "swiper"; // Import Swiper modules
import packagesData from "../data/packagesData";

// Install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const SlidingCards = () => {
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
    <div
      className="relative w-full max-w-6xl mx-auto py-10 px-14 rounded-b-[20%] bg-[#269dff] dark:bg-[#2d3748]"
      style={{
        background: "linear-gradient(to bottom, #0000 50%, #269dff 50%)",
      }}
    >
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={3} // Show 3 slides per view
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }} // Enable navigation buttons
        autoplay={{
          delay: 4000, // Auto-slide delay in milliseconds
          disableOnInteraction: false, // Don't disable autoplay after user interaction
          pauseOnMouseEnter: true, // Pause autoplay when hovering over the slider
        }}
        loop // Enable loop
        speed={1000} // Set transition speed (in milliseconds)
        breakpoints={{
          // Responsive breakpoints
          768: {
            slidesPerView: 2, // Show 2 slides on tablets and below
          },
          480: {
            slidesPerView: 1, // Show 1 slide on mobile
          },
        }}
      >
        {packagesData.map((pkg) => (
          <SwiperSlide key={pkg.id}>
            <div className="bg-white dark:bg-[#1a202c] rounded-lg shadow-lg overflow-hidden">
              {/* Upper Section */}
              <div
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${pkg.image})` }}
              >
                <div className="absolute inset-0 bg-[#063052] bg-opacity-60 flex flex-col justify-center items-center text-white p-4">
                  <h3 className="text-xl font-bold">{pkg.name}</h3>
                  <p className="text-lg font-semibold">Birr {pkg.price}</p>
                </div>
              </div>
              {/* Lower Section */}
              <div className="p-10 text-center">
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-9">
                  {pkg.description}
                </p>
                <button className="bg-[#269dff] text-white rounded-full p-4 w-44 font-bold hover:shadow-md hover:shadow-black transition-all duration-300">
                  Apply Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons below the slider */}
      <div className="flex justify-center mt-4">
        <button
          className="prev-btn bg-white text-[#269dff] dark:bg-[#4a5568] dark:text-white font-bold py-3 px-4 rounded-full shadow-md hover:text-gray-700 transition"
          onClick={() => swiperRef.current.swiper.slidePrev()} // Slide to the previous slide
        >
          &#8592;
        </button>
        <button
          className="next-btn bg-white text-[#269dff] dark:bg-[#4a5568] dark:text-white font-bold py-3 px-4 rounded-full shadow-md hover:text-gray-700 transition ml-4"
          onClick={() => swiperRef.current.swiper.slideNext()} // Slide to the next slide
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default SlidingCards;
