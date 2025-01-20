import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // For the arrow icons
import Link from "next/link";
import SearchModal from "./SearchModal";

export default function Dropdown({ menu }) {
  const [isOpen, setIsOpen] = useState(false); // Track whether the dropdown is open or closed
  const dropdownRef = useRef(null); // Reference to the dropdown menu container
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const handleLinkClick = (optionName) => {
    if (optionName === "Search") {
      setIsSearchModalOpen(true); // Show the modal if "Search" is clicked
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the dropdown visibility
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false); // Close the dropdown if clicked outside
    }
  };

  // Close dropdown if Escape key is pressed
  const handleEscapeKey = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false); // Close the dropdown if Escape key is pressed
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    // Cleanup the event listeners when component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <div className="relative mt-7 font-semibold" ref={dropdownRef}>
      {/* Button with Arrow Icon */}

      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 hover:border-b-[#269dff] hover:text-[#269dff] hover:border-b-4 transition-all pb-6 text-sm sm:text-base"
      >
        {menu.url ? <Link href={menu.url}>{menu.name}</Link> : menu.name}

        {menu.subMenus &&
          (isOpen ? (
            <FaChevronUp className="-ml-1 transition-all" size={16} /> // Show up arrow when the dropdown is open
          ) : (
            <FaChevronDown className=" -ml-1 transition-all" size={16} /> // Show down arrow when the dropdown is closed
          ))}
      </button>

      {/* Dropdown Menu */}
      {isOpen && menu.subMenus && (
        <div className="z-50 absolute mt-2 w-full sm:w-48 bg-white border border-gray-200 rounded-md shadow-lg font-medium text-gray-500 text-sm sm:text-[17px]">
          <ul className="py-2 w-full">
            {menu.subMenus.map((option, index) => (
              <li key={index} className="mb-1 w-full">
                <Link
                  href={option.url}
                  className="block px-4 py-2 rounded-sm hover:bg-gray-100 cursor-pointer w-full focus:bg-[#269dff]"
                  onClick={() => handleLinkClick(option.name)} // Handle click
                >
                  {option.name}
                </Link>
                {isSearchModalOpen && <SearchModal />}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
