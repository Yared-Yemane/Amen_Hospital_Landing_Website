"use client";

import React, { useState, useRef, useEffect } from "react";
import { Phone, Mail } from "lucide-react";
import Image from "next/image";
import navLinks from "../data/navLinks";
import Link from "next/link";
import Dropdown from "./DropdownMenu";
import socialLinksFa from "../data/socialLinksFa";
import { Lora } from "next/font/google";
import { Encode_Sans } from "next/font/google";

const encode_Sans = Encode_Sans({
  subsets: ["latin"],
  weight: ["400"], // Specify font weights
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isFirstSectionVisible, setIsFirstSectionVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the hamburger menu
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

    const darkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", newDarkMode.toString());
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={encode_Sans.className}>
      {/* First Section */}
      <div
        ref={firstSectionRef}
        className={`flex justify-between w-full px-6 sm:px-14 p-2 border-b 
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
            <span className="text-[#9e95c2] dark:text-gray-300 z-10">
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
        <div className="hidden sm:flex items-center gap-4">
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

      {/* Second Section (Navbar) */}
      <div
        className={`flex justify-between items-center px-6 sm:px-20 h-16 transition-all duration-500 scroll-smooth ${
          isSticky
            ? "fixed left-0 right-0 top-0 z-20 bg-white dark:text-white dark:bg-gray-800 shadow-md"
            : "relative"
        }`}
      >
        {/* Logo Section */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={150} // Updated size
            height={150} // Updated size
            alt="Company Logo"
            className="h-full w-full sm:-ml-5 rounded-lg" // Ensures proper scaling
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center mb-4 ">
          {navLinks.map((navLink, index) => (
            <Dropdown key={index} menu={navLink} />
          ))}
          <button
            onClick={toggleDarkMode}
            className="text-[#9e95c2] dark:text-[#f9f9f9] hover:bg-[#e2e2e2] dark:hover:bg-[#444] p-2 rounded-full"
          >
            {isDarkMode ? "🌞" : "🌙"}
          </button>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden flex -mr-5 items-center relative">
          <button
            onClick={toggleMenu}
            className={`text-gray-800 dark:text-gray-300 focus:outline-none ${
              isMenuOpen && "opacity-0"
            }`}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${
              isMenuOpen ? "block" : "hidden"
            }`}
            onClick={toggleMenu}
          ></div>

          <div
            className={`fixed right-0 top-0 h-screen w-64 bg-white dark:bg-gray-800 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close Button Inside Dropdown */}
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className="text-gray-800 dark:text-gray-300 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col space-y-3 p-4">
              {navLinks.map((navLink, index) => (
                <Dropdown key={index} menu={navLink} />
              ))}
              <button
                onClick={toggleDarkMode}
                className="text-[#9e95c2] dark:text-[#f9f9f9] hover:bg-[#e2e2e2] dark:hover:bg-[#444] p-3 rounded-md"
              >
                {isDarkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
