import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const AddressCards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 px-4 py-10">
      {/* Location Card */}
      <div className="flex flex-col items-center gap-5 bg-[#ddfdff] p-8 rounded-lg shadow-lg w-full sm:w-1/3 text-center dark:bg-gray-700 dark:text-white">
        <div className="bg-[#269dff] w-24 h-24 flex items-center justify-center rounded-full">
          <FaMapMarkerAlt className="text-5xl text-[#ffffff]" />
        </div>
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300">
            123 Street, Mekelle, Tigray
          </p>
        </div>
      </div>

      {/* Phone Card */}
      <div className="flex flex-col items-center gap-5 bg-[#ddfdff] p-8 rounded-lg shadow-lg w-full sm:w-1/3 text-center dark:bg-gray-700 dark:text-white">
        <div className="bg-[#269dff] w-24 h-24 flex items-center justify-center rounded-full">
          <FaPhoneAlt className="text-5xl text-[#ffffff]" />
        </div>
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300">+251 91 234 5678</p>
        </div>
      </div>

      {/* Email Card */}
      <div className="flex flex-col items-center gap-5 bg-[#ddfdff] p-8 rounded-lg shadow-lg w-full sm:w-1/3 text-center dark:bg-gray-700 dark:text-white">
        <div className="bg-[#269dff] w-24 h-24 flex items-center justify-center rounded-full">
          <FaEnvelope className="text-5xl text-[#ffffff]" />
        </div>
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300">
            contact@amenhospital.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddressCards;
