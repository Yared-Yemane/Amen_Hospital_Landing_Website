"use client";

import React, { useState } from "react";
import TimePicker from "react-time-picker";
import DatePicker from "react-datepicker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentHero = () => {
  const [timeValue, setTimeValue] = useState("10:00");
  const [dateValue, setDateValue] = useState(new Date());

  return (
    <div className=" bg-[#269dff] py-16 px-14 grid grid-cols-1 md:grid-cols-2 gap-10 dark:bg-[#2d3748]">
      <div>
        <h1 className="relative font-bold text-lg text-[#ffffff] dark:text-white after:block after:w-[131px] after:h-1 after:bg-[#b8d4eb] dark:after:bg-[#4fd1c5]">
          APPOINTMENT
        </h1>

        <h1 className="text-[46px] font-bold mt-4 leading-tight mb-6 text-white dark:text-white">
          Make An Appointment For Your Family
        </h1>
        <p className="text-white dark:text-[#e2e8f0]">
          Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
          ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum
          sea invidunt voluptua.
        </p>
        <div className="flex gap-6 mt-10">
          <button className="bg-black text-white rounded-full p-4 w-44 font-bold hover:shadow-md hover:shadow-black transition-all duration-300">
            Find Doctor
          </button>
          <button className="bg-transparent border-2 border-black text-black hover:text-white hover:bg-black hover:shadow-md hover:shadow-black transition-all duration-300 rounded-full p-4 w-44 font-bold">
            Read More
          </button>
        </div>
      </div>

      <div className="mx-auto bg-white dark:bg-[#2d3748] px-12 py-14 rounded-lg shadow-md">
        <form action="/">
          <h2 className="text-3xl font-bold text-center text-[#269dff] dark:text-[#4fd1c5] mb-6">
            Book an Appointment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-[#9f9f9f] dark:text-[#e2e8f0]">
            <div>
              <div className="mb-4">
                <select
                  required
                  id="service"
                  name="service"
                  defaultValue=""
                  className="bg-gray-100 dark:bg-[#4a5568] dark:text-white transition-all duration-200 w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#269dff] focus:border-transparent"
                >
                  <option value="" disabled>
                    Choose Department
                  </option>
                  <option value="general">General Consultation</option>
                  <option value="dental">Dental Checkup</option>
                  <option value="surgery">Surgery Consultation</option>
                  <option value="pediatrics">Pediatrics</option>
                </select>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Enter your full name"
                  className="bg-gray-100 dark:bg-[#4a5568] dark:text-white transition-all duration-200 w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#269dff] focus:border-transparent"
                  required
                />
              </div>
              <div className="mb-6">
                <DatePicker
                  required
                  selected={dateValue}
                  onChange={(date) => setDateValue(date)}
                  placeholderText="Select Date"
                  dateFormat="MMMM d, yyyy"
                  className="bg-gray-100 dark:bg-[#4a5568] dark:text-white w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#269dff] focus:border-transparent"
                  popperPlacement="bottom"
                />
              </div>
            </div>
            <div>
              <div className="mb-4">
                <select
                  required
                  id="doctor"
                  name="doctor"
                  className="bg-gray-100 dark:bg-[#4a5568] dark:text-white w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#269dff] focus:border-transparent transition-all duration-200"
                >
                  <option value="" disabled selected>
                    Select Doctor
                  </option>
                  <option value="general">General Consultation</option>
                  <option value="dental">Dental Checkup</option>
                  <option value="surgery">Surgery Consultation</option>
                  <option value="pediatrics">Pediatrics</option>
                </select>
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="bg-gray-100 dark:bg-[#4a5568] dark:text-white transition-all duration-200 w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#269dff] focus:border-transparent"
                  required
                />
              </div>
              <div className="mb-6">
                <TimePicker
                  required
                  onChange={setTimeValue}
                  value={timeValue}
                  clockIcon={null}
                  clearIcon={null}
                  disableClock={true}
                  className="w-full p-4 border rounded-md focus:ring-2 focus:ring-[#269dff] border-transparent text-gray-700 dark:text-white"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#269dff] text-white font-semibold p-4 rounded-md transition-all duration-300 ease-in-out hover:bg-[#1e82cc] hover:text-black hover:shadow-[4px_4px_10px_rgba(0,0,0,0.7)] hover:pb-5"
          >
            Make An Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentHero;
