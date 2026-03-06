import React from "react";
import ctaImg from "../assets/gym.jpg"; // apni downloaded image yaha use karo
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* Background Image */}
      <img
        src={ctaImg}
        alt="Boutique Studio Environment"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-12 md:p-16 shadow-xl">

          <h2 className="text-4xl md:text-6xl font-serif text-[#2F2F2F] mb-6">
            Begin Your Practice
          </h2>

          <p className="text-[#6E665E] text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Join our boutique wellness community and discover the transformative
            power of architectural, intentional Pilates.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">

            <Link
              to="/book"
              className="bg-black text-white px-8 py-3 rounded-xl 
              hover:bg-[#A89F92] transition-all duration-300"
            >
              BOOK A SESSION
            </Link>

            <Link
              to="/classes"
              className="border border-black text-black px-8 py-3 rounded-xl 
              hover:bg-black hover:text-white transition-all duration-300"
            >
              VIEW CLASSES
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FinalCTA;