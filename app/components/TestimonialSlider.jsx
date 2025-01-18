"use client";

import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import testimonialsData from "../data/testimonialsData";

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Move to the next testimonial
  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 600); // Matches transition duration
    }
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center px-6 overflow-hidden dark:bg-gray-800 dark:text-white">
      {/* Slider Container */}
      <div className="relative w-full max-w-md h-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-full flex flex-col items-center justify-center text-center px-4"
            >
              <FaQuoteLeft className="text-[#269dff] text-4xl opacity-20 mb-4 dark:text-[#269dff]" />
              <div className="w-36 h-36 rounded-full overflow-hidden mb-6 border-4 border-[#269dff]">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 italic text-lg leading-relaxed mb-6 dark:text-white">
                "{testimonial.testimony}"
              </p>
              <h3 className="font-semibold text-[#269dff] text-xl dark:text-[#269dff]">
                {testimonial.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {testimonial.profession}
              </p>
              <FaQuoteRight className="text-[#269dff] text-4xl opacity-20 mt-4 dark:text-[#269dff]" />
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="flex mb-5 mt-4 space-x-4">
        {testimonialsData.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-500 cursor-pointer rounded-full ${
              index === currentIndex
                ? "w-6 h-6 bg-[#269dff] scale-125 shadow-lg"
                : "w-4 h-4 bg-gray-300 dark:bg-gray-600"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
