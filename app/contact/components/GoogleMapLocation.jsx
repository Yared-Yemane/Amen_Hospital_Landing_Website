"use client";

import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GoogleMapLocation = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Coordinates for the hospital's location (example coordinates)
  const hospitalLocation = {
    // 13.506120412243513, 39.451352279065425
    lat: 13.506120412243513, // Latitude of the hospital
    lng: 39.451352279065425, // Longitude of the hospital
  };

  useEffect(() => {
    // Only load Google Maps script after the component mounts
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-[400px]">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#269dff]"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Loading Map...
          </p>
        </div>
      </div>
    );
  }

  // Map container style
  const containerStyle = {
    width: "100%",
    height: "600px", // Increased from 400px to 600px
  };

  return (
    <div className="my-10 p-10">
      <LoadScript googleMapsApiKey="AIzaSyAKWQbAnmCya9CjretierRF01uhFMNMFFg">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={hospitalLocation}
          zoom={15}
        >
          {/* Marker for the hospital location */}
          <Marker position={hospitalLocation} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapLocation;
