"use client";

import { useState } from "react";
import Link from "next/link";

const NavbarResponsive = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">MyLogo</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link className="text-gray-700 hover:text-blue-600" href="/">
              Home
            </Link>
            <Link className="text-gray-700 hover:text-blue-600" href="/about">
              About
            </Link>
            <Link
              className="text-gray-700 hover:text-blue-600"
              href="/services"
            >
              Services
            </Link>
            <Link className="text-gray-700 hover:text-blue-600" href="/contact">
              Contact
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="space-y-2 px-4 pt-2 pb-4">
            <Link
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-blue-600"
              href="/"
            >
              Home
            </Link>
            <Link
              className="block text-gray-700 hover:text-blue-600"
              href="/about"
            >
              About
            </Link>
            <Link
              className="block text-gray-700 hover:text-blue-600"
              href="/services"
            >
              Services
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-blue-600"
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarResponsive;
