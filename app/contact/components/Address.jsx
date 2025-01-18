import React from "react";
import AddressCards from "./AddressCards";

const Address = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center mb-5 pt-8">
        <h1 className="relative font-bold text-lg text-[#269dff] after:block after:w-[160px] after:h-1 after:bg-[#b8d4eb] dark:text-[#269dff]">
          ANY QUESTIONS?
        </h1>
        <h1 className="text-[46px] font-bold mt-4 leading-tight text-center dark:text-white">
          Please Feel Free To <br /> Contact Us
        </h1>
      </div>
      <div>
        <AddressCards />
      </div>
    </div>
  );
};

export default Address;
