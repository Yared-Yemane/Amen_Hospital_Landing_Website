import React from "react";
import Address from "./components/Address";
import GoogleMapLocation from "./components/GoogleMapLocation";
import SendMessage from "./components/SendMessage";
import { Lora } from "next/font/google";
import { Encode_Sans } from "next/font/google";

const encode_Sans = Encode_Sans({
  subsets: ["latin"],
  weight: ["400"], // Specify font weights
});

const lora = Lora({
  subsets: ["latin"], // Optional: Specify subsets like 'latin', 'cyrillic'
  weight: ["400", "500", "700"], // Optional: Choose font weights
  display: "swap", // Optional: Prevents FOIT (Flash of Invisible Text)
});

const Contact = () => {
  return (
    <div className={`${encode_Sans.className} dark:bg-gray-800`}>
      <Address />
      <div className="relative z-0">
        <GoogleMapLocation />
      </div>
      <div className="relative z-10 -mt-52 pb-10">
        <SendMessage />
      </div>
    </div>
  );
};

export default Contact;
