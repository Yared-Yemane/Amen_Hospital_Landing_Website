"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleModal = () => setIsOpen(!isOpen);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSearchQuery(""); // Reset search query when closing the modal
  };

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={toggleModal}
        className="p-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none"
      >
        <FaSearch />
      </button>
      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div
            className="bg-white rounded-lg shadow-lg w-11/12 sm:w-1/2 p-6"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
              Search
            </h3>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <div className="flex justify-end">
              <button
                onClick={handleClose}
                className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      "use client"
    </>
  );
};

export default SearchModal;
