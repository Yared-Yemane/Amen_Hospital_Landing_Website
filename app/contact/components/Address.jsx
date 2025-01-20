import React from "react";
import AddressCards from "./AddressCards";

const Address = () => {
  return (
    <div className="py-8 bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <h1 className="relative font-bold text-lg text-[#269dff] after:block after:w-[160px] after:h-1 after:bg-[#b8d4eb] dark:text-[#269dff]">
          ANY QUESTIONS?
        </h1>
        <h1 className="text-[46px] font-bold mt-4 leading-tight text-center dark:text-white">
          Please Feel Free To <br /> Contact Us
        </h1>
      </div>
      <div className="flex justify-center">
        <AddressCards />
      </div>
    </div>
  );
};

export default Address;
