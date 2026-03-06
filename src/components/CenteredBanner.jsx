import React from "react";
import bannerImg from "../assets/arch3.jpg"; // <-- replace with your image path

const CenteredBanner = () => {
  return (
    <div className="relative w-full h-100">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bannerImg}
          alt="Banner Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Centered text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="px-8 py-4 rounded-full shadow-lg text-sm tracking-widest uppercase font-bold text-white bg-white/10 backdrop-blur-sm border border-white/20">
          THE PILATES PALMS AND PULSE
        </div>
      </div>
    </div>
  );
};

export default CenteredBanner;