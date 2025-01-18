import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contact from "../data/contact";
import Link from "next/link";
import {
  FaArrowRight,
  FaChevronRight,
  FaCopyright,
  FaEnvelope,
  FaLocationArrow,
  FaMap,
  FaMapMarkerAlt,
  FaPhone,
  FaRegCopyright,
  FaSearchLocation,
} from "react-icons/fa";
import { LocateIcon, Mail } from "lucide-react";
import footerMenu from "../data/footerMenu";
import socialLinks from "../data/socialLinks";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"], // Optional: Specify subsets like 'latin', 'cyrillic'
  weight: ["400", "500", "700"], // Optional: Choose font weights
  display: "swap", // Optional: Prevents FOIT (Flash of Invisible Text)
});

const Footer = () => {
  return (
    <div className={`${lora.className} bg-[#10124f] text-white`}>
      <div className=" py-20 px-10 grid grid-cols-2 md:grid-cols-4 border-b">
        <div className=" flex flex-col gap-6">
          <h1 className="relative font-bold text-2xl text-[#269dff] after:block after:w-[171px] after:h-1 after:bg-[#7597b3]">
            GET IN TOUCH
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            rerum. Velit, ut error sequi culpa hic eius
          </p>
          <div>
            <div className=" flex gap-3 mb-2">
              <FaMapMarkerAlt size={17} color="#269dff" className=" mt-1" />
              {contact.address}
            </div>
            <div className=" flex gap-3 mb-2">
              <FaEnvelope size={17} color="#269dff" className=" mt-1" />
              {contact.email}
            </div>
            <div className=" flex gap-3 mb-2">
              <FaPhone size={17} color="#269dff" className=" mt-1" />
              {contact.phoneNum}
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-6 ml-9">
          <h1 className="relative font-bold text-2xl text-[#269dff] after:block after:w-[157px] after:h-1 after:bg-[#7597b3]">
            QUICK LINKS
          </h1>
          <ul>
            {footerMenu.map((menu, index) => (
              <li key={index} className=" mb-2 flex gap-1">
                <FaChevronRight
                  size={10}
                  className=" font-extrabold mt-[6px] text-2xl"
                  style={{ strokeWidth: 4 }}
                />
                <Link href={menu.url}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className=" flex flex-col gap-6">
          <h1 className="relative font-bold text-2xl text-[#269dff] after:block after:w-[195px] after:h-1 after:bg-[#7597b3]">
            POPULAR LINKS
          </h1>
          <ul>
            {footerMenu.map((menu, index) => (
              <li key={index} className=" mb-2 flex gap-1">
                <FaChevronRight
                  size={10}
                  className=" font-extrabold mt-[6px] text-2xl"
                  style={{ strokeWidth: 4 }}
                />
                <Link href={menu.url}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className=" flex flex-col gap-6">
          <h1 className="relative font-bold text-2xl text-[#269dff] after:block after:w-[174px] after:h-1 after:bg-[#7597b3]">
            NEWS LETTER
          </h1>
          <form action="" className=" flex">
            <input
              type="text"
              placeholder="Your Email Address"
              className="pl-3 text-gray-800 rounded-l-lg border border-transparent focus:border-[#7bbcf1] focus:ring-0 focus:border-2 w-44 outline-none transition-colors duration-300"
              required
            />
            <button type="submit" className=" bg-[#269dff] rounded-r-lg p-4">
              Sign Up
            </button>
          </form>
          <div>
            <h1 className="font-bold text-base text-[#269dff] mb-1">
              FOLLOW US
            </h1>
            <div className=" flex gap-2 ">
              {socialLinks.map(
                (socialLink, index) =>
                  socialLink.name != "youtube" &&
                  socialLink.type && (
                    <div
                      key={index}
                      className="bg-[#269dff] rounded-full size-10 flex items-center justify-center cursor-pointer text-white font-extrabold hover:text-black transition-colors duration-300 hover:border-[#269dff] hover:border-2"
                    >
                      <Link href="/">
                        <img
                          src={socialLink.icon}
                          alt={socialLink.name}
                          className=" w-full h-full text-white rounded-full bg-blue-500"
                        />
                      </Link>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className=" py-6 px-16 flex justify-between">
        <div className=" flex gap-1 text-base">
          <FaRegCopyright size={13} color="white" className=" mt-[5px]" />
          <Link href="https://www.amenhospital.com" className=" text-[#269dff]">
            Amen Hospital.
          </Link>
          <span>All Rights Reserved.</span>
        </div>
        <div className=" flex gap-1">
          <span>Developed by</span>
          <Link
            href="https://www.linkedin.com/in/yared-yemane-3b1b9b13b/"
            target="_blank"
            className=" font-semibold text-[#269dff] hover:text-[#bef3ff] transition-colors duration-300"
          >
            Yared Yemane
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
