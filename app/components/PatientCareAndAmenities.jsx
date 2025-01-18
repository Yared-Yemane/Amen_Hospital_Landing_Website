"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHospitalUser,
  faBed,
  faUtensils,
  faWifi,
  faHandHoldingMedical,
  faShieldAlt,
  faWheelchair,
  faParking,
  faHeart,
  faStethoscope,
  faLungs,
  faNotesMedical,
} from "@fortawesome/free-solid-svg-icons";
import facilityImages from "../data/facilityImages";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PatientCareAndAmenities = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setCurrentSlide(0);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === facilityImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? facilityImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="mb-5 bg-[#269dff] py-16 px-14 dark:bg-[#1a202c] dark:text-white">
      <div className="w-full">
        <div className="flex flex-col justify-center items-center">
          <h1 className="relative font-bold text-lg text-[#ffffff] dark:text-[#e2e8f0] after:block after:w-[250px] after:h-1 after:bg-[#b8d4eb] dark:after:bg-[#4a5568]">
            PATIENT CARE & AMENITIES
          </h1>

          <h1 className="text-[46px] font-bold mt-4 leading-tight mb-6 text-center dark:text-[#edf2f7]">
            Comfort and Care for <br /> Every Patient
          </h1>

          <div className="flex gap-8 w-full mt-8">
            {/* Paragraph 1 */}
            <div className="flex-1 bg-white dark:bg-[#2d3748] p-6 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-semibold mb-4 dark:text-[#edf2f7]">
                Our Commitment
              </h3>
              <p className="text-[#555] dark:text-[#e2e8f0]">
                We are dedicated to providing the highest quality of care,
                ensuring that each patient feels comfortable, safe, and
                supported during their stay with us.
              </p>
            </div>

            {/* Paragraph 2 */}
            <div className="flex-1 bg-white dark:bg-[#2d3748] p-6 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-semibold mb-4 dark:text-[#edf2f7]">
                Compassionate Staff
              </h3>
              <p className="text-[#555] dark:text-[#e2e8f0]">
                Our team is passionate about making a difference in every
                patient’s life, offering personalized care and attention to
                detail at every stage of recovery.
              </p>
            </div>

            {/* Paragraph 3 */}
            <div className="flex-1 bg-white dark:bg-[#2d3748] p-6 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-semibold mb-4 dark:text-[#edf2f7]">
                State-of-the-Art Facilities
              </h3>
              <p className="text-[#555] dark:text-[#e2e8f0]">
                We offer modern, fully equipped medical facilities designed to
                deliver exceptional healthcare in a comfortable and welcoming
                environment.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Service Highlight Items */}
          {[
            {
              icon: faHospitalUser,
              title: "24/7 Nursing Care",
              description: "Always available to attend to your needs.",
            },
            {
              icon: faBed,
              title: "Private Rooms",
              description: "Privacy and comfort with the latest tech.",
            },
            {
              icon: faUtensils,
              title: "On-Site Cafeteria",
              description: "Fresh meals for a nourishing experience.",
            },
            {
              icon: faWifi,
              title: "Free Wi-Fi",
              description: "Stay connected in every corner of the hospital.",
            },
            {
              icon: faHandHoldingMedical,
              title: "Emergency Services",
              description: "Quick response for any medical emergency.",
            },
            {
              icon: faShieldAlt,
              title: "Patient Safety",
              description: "Ensuring the highest standards of safety.",
            },
            {
              icon: faWheelchair,
              title: "Wheelchair Accessibility",
              description:
                "Convenient access for patients with mobility needs.",
            },
            {
              icon: faParking,
              title: "Parking Facilities",
              description: "Safe and spacious parking for your convenience.",
            },
            // {
            //   icon: faHeart,
            //   title: "Heart Care",
            //   description: "Comprehensive care for heart patients.",
            // },
            // {
            //   icon: faStethoscope,
            //   title: "Regular Check-ups",
            //   description: "Routine check-ups to maintain optimal health.",
            // },
            // {
            //   icon: faLungs,
            //   title: "Pulmonary Care",
            //   description: "Expert care for lung and respiratory conditions.",
            // },
            // {
            //   icon: faNotesMedical,
            //   title: "Medical Records",
            //   description:
            //     "Safe and secure management of your medical history.",
            // },
          ].map(({ icon, title, description }, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-white text-center hover:bg-[#1d76d2] p-6 rounded-lg transition duration-300 dark:hover:bg-[#4a5568]"
            >
              <FontAwesomeIcon
                icon={icon}
                className="w-12 h-12 mb-4 text-[#fff] transition duration-300"
              />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="opacity-75 dark:text-[#e2e8f0]">{description}</p>
            </div>
          ))}
        </div>

        <div className="">
          <div className="flex gap-6 mt-14 justify-center">
            <button
              className="bg-black text-white rounded-full p-4 w-44 font-bold hover:shadow-md hover:shadow-black transition-all duration-300"
              onClick={toggleModal}
            >
              Quick Tour
            </button>
            <button className="bg-transparent border-2 border-black text-black hover:text-white hover:bg-black hover:shadow-md hover:shadow-black transition-all duration-300 rounded-full p-4 w-44 font-bold">
              Read More
            </button>
          </div>

          {/* Modal for Gallery */}
          {isModalOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 transition-opacity duration-500"
              onClick={toggleModal}
            >
              <div
                className="relative bg-white rounded-lg w-[90%] md:w-[70%] lg:w-[50%] overflow-hidden shadow-lg transform scale-100 transition-transform duration-500 dark:bg-[#2d3748]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={toggleModal}
                  className=" z-10 absolute top-4 right-4 text-gray-600 hover:text-red-600 transition-colors duration-300 dark:text-[#e2e8f0]"
                >
                  <FaTimes size={24} />
                </button>

                <div className="relative w-full h-[400px]">
                  {facilityImages.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className={`absolute w-full h-full object-cover rounded-lg transition-transform duration-700 ${
                        index === currentSlide
                          ? "translate-x-0"
                          : "translate-x-full"
                      }`}
                    />
                  ))}

                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#269dff] text-white p-2 rounded-full hover:bg-opacity-70 transition"
                  >
                    <FaChevronLeft size={20} />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#269dff] text-white p-2 rounded-full hover:bg-opacity-70 transition"
                  >
                    <FaChevronRight size={20} />
                  </button>
                </div>

                <div className="flex justify-center mt-4 mb-5">
                  {facilityImages.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
                        index === currentSlide ? "bg-[#269dff]" : "bg-gray-300"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientCareAndAmenities;
