"use client";

import React, { useState } from "react";

const SendMessage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log("Form Data Submitted:", formData);

    // Simulating a form submission with a timeout
    setTimeout(() => {
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setIsSubmitted(true);
      setIsLoading(false);

      // Hide success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 2000); // Simulate a 2-second submission delay
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-10 rounded-lg shadow-lg dark:bg-gray-800">
      {isSubmitted && (
        <p className="mb-4 text-green-500 text-center">
          ✅ Your message has been sent!
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Inputs Side by Side */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#269dff] focus:outline-none dark:bg-gray-700 dark:text-white transition-all duration-300"
            aria-label="Name"
          />

          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#269dff] focus:outline-none dark:bg-gray-700 dark:text-white transition-all duration-300"
            aria-label="Email"
          />
        </div>

        {/* Subject Input */}
        <input
          type="text"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#269dff] focus:outline-none dark:bg-gray-700 dark:text-white transition-all duration-300"
          aria-label="Subject"
        />

        {/* Message Input */}
        <textarea
          name="message"
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message..."
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#269dff] focus:outline-none dark:bg-gray-700 dark:text-white transition-all duration-300"
          aria-label="Message"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#269dff] text-white font-semibold p-4 rounded-md transition-all duration-300 ease-in-out hover:bg-[#1e82cc] hover:text-black hover:shadow-[4px_4px_10px_rgba(0,0,0,0.7)] hover:pb-5 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-t-4 border-b-4 border-[#ffffff]"></div>
              <span className="ml-2">Sending...</span>
            </div>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
