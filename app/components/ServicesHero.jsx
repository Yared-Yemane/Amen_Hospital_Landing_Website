import React from "react";
import serviceCards from "../data/serviceCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ServicesHero = () => {
  return (
    <div className="text-black dark:text-white flex-col justify-center p-10 mb-12">
      <div className="flex flex-col items-center justify-center text-center mb-5">
        <h1 className="relative font-bold text-lg text-[#269dff] dark:text-[#4fd1c5] after:block after:w-[90px] after:h-1 after:bg-[#b8d4eb] dark:after:bg-[#4fd1c5]">
          SERVICES
        </h1>
        <h1 className="text-[46px] font-bold mt-4 leading-tight mb-6 text-center text-gray-900 dark:text-white">
          Excellent Medical <br /> Services
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {serviceCards.map((card, index) => (
          <div
            key={index}
            className="flex-col rounded-md bg-[#e0f6ebee] dark:bg-[#2d3748] p-9 relative group"
          >
            <div className="bg-[#269dff] flex justify-center items-center py-7 rounded-full mt-5 mb-6 w-3/4 mx-auto">
              <FontAwesomeIcon
                icon={card.symbol}
                height={50}
                width={50}
                color="#ffffff"
              />
            </div>
            <div className="w-full mb-6">
              <h1 className="text-xl font-bold leading-tight flex items-center justify-center text-gray-900 dark:text-white">
                {card.title}
              </h1>
            </div>
            <div className="mb-6 text-center text-[#8a8a8a] dark:text-[#a0aec0]">
              <p>{card.desc}</p>
            </div>

            {/* Button Container */}
            <div className="absolute bottom-[-45px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-6 transition-all duration-300">
              <Link href="/">
                <button className="bg-[#269dff] text-white rounded-full p-3 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <FontAwesomeIcon icon={faArrowRight} height={30} width={30} />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesHero;
