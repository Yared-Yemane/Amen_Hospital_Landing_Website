"use client";

import React, { useState, useRef, useEffect } from "react";
import { Phone, Mail } from "lucide-react";
import Image from "next/image";
import navLinks from "../data/navLinks";
import Link from "next/link";
import Dropdown from "./DropdownMenu";
import socialLinksFa from "../data/socialLinksFa";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"], // Optional: Specify subsets like 'latin', 'cyrillic'
  weight: ["400", "500", "700"], // Optional: Choose font weights
  display: "swap", // Optional: Prevents FOIT (Flash of Invisible Text)
});

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isFirstSectionVisible, setIsFirstSectionVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const firstSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const firstSectionHeight = firstSectionRef.current?.offsetHeight || 0;
      const scrollY = window.scrollY;

      if (scrollY > firstSectionHeight) {
        setIsSticky(true);
        setIsFirstSectionVisible(false);
      } else {
        setIsSticky(false);
        setIsFirstSectionVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <div className={lora.className}>
      {/* First Section */}
      <div
        ref={firstSectionRef}
        className={`flex justify-between w-full px-20 p-2 border-b 
    bg-white dark:bg-gray-900
    text-gray-800 dark:text-gray-300
    dark:border-gray-700 transform transition-transform duration-500 ease-in-out ${
      isFirstSectionVisible
        ? "translate-y-0 opacity-100"
        : "-translate-y-full opacity-0"
    }`}
      >
        {/* Left Side - Contact Info */}
        <div className="flex justify-between gap-3 font-thin z-10">
          <div className="flex gap-1">
            <Phone
              size={17}
              color={isDarkMode ? "#d1d5db" : "#9e95c2"}
              className="mt-1"
            />
            <span className="text-[#9e95c2] dark:text-gray-300">
              +251 234 4567
            </span>
          </div>
          <span className="text-[#9e95c2] dark:text-gray-300">|</span>
          <div className="flex gap-1">
            <Mail
              size={17}
              color={isDarkMode ? "#d1d5db" : "#9e95c2"}
              className="mt-1"
            />
            <span className="text-[#9e95c2] dark:text-gray-300 hover:text-[#353434] dark:hover:text-white cursor-pointer transition-colors duration-300">
              amenhospital@gmail.com
            </span>
          </div>
        </div>

        {/* Right Side - Social Links */}
        <div className="flex items-center gap-4">
          {socialLinksFa.map((socialLink, index) => (
            <div
              key={index}
              className="text-[#767575] dark:text-gray-300 hover:text-[#353434] dark:hover:text-white cursor-pointer transition-colors duration-300"
            >
              {!socialLink.type && (
                <Link href="/">
                  <socialLink.icon size={16} className="text-inherit" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Second Section */}
      <div
        className={`flex justify-around gap-80 items-center px-20 fixed left-0 right-0 z-20 bg-white dark:bg-gray-800 shadow-md transform transition-transform duration-500 ease-in-out ${
          isSticky ? "-translate-y-11" : "translate-y-0"
        }`}
      >
        <Link href="/" className="-mt-20 -mb-16 -ml-12">
          <Image
            src="/images/logo.png"
            width={300}
            height={100}
            alt="Company Logo"
          />
        </Link>

        <div className="flex justify-center gap-10">
          <div className="flex gap-5 font-bold text-lg mt-6 text-[#333] dark:text-white">
            {navLinks.map((navLink, index) => (
              <Dropdown key={index} menu={navLink} />
            ))}
          </div>

          <button
            onClick={toggleDarkMode}
            className="text-[#9e95c2] dark:text-[#f9f9f9] hover:bg-[#e2e2e2] dark:hover:bg-[#444] ml-3 p-3 rounded-full"
          >
            {isDarkMode ? "🌞" : "🌙"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
