import React from "react";
import { Link } from "react-router-dom";

import reformer from "../assets/reformer.webp";
import mat from "../assets/03-scaled.webp";
import privateImg from "../assets/arch3.jpg";

const RefinedPractice = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-serif text-[#2F2F2F] mb-6">
            Refined Practice
          </h2>

          <p className="text-[#A89F92] uppercase tracking-[0.4em] text-[10px] md:text-xs font-semibold">
            Elevate Your Movement
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-12 lg:gap-16">

          {/* Card 1 */}
          <div className="group text-center">
            <div className="aspect-[4/5] mb-10 overflow-hidden rounded-2xl bg-[#F9F6F1] shadow-sm">
              <img
                src={reformer}
                alt="Boutique Reformer Machine"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 saturate-[0.8]"
              />
            </div>

            <h3 className="text-3xl font-serif text-[#2F2F2F] mb-6">
              Reformer
            </h3>

            <div className="flex items-start justify-center gap-4 px-4 text-left">
              <div className="w-10 h-10 rounded-full bg-[#2F2F2F] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-[10px] font-bold">N</span>
              </div>

              <p className="text-sm text-[#6E665E] leading-relaxed">
                Controlled resistance for deep stability and elongated strength.
              </p>
            </div>

            <div className="mt-8">
              <Link
                to="/classes#reformer"
                className="text-[10px] uppercase tracking-[0.25em] text-[#A89F92] font-bold border-b border-[#A89F92]/30 pb-2 hover:border-[#A89F92] transition-colors"
              >
                DISCOVER
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group text-center">
            <div className="aspect-[4/5] mb-10 overflow-hidden rounded-2xl bg-[#F9F6F1] shadow-sm">
              <img
                src={mat}
                alt="Mat Pilates"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 saturate-[0.8]"
              />
            </div>

            <h3 className="text-3xl font-serif text-[#2F2F2F] mb-6">Mat</h3>

            <div className="flex items-start justify-center gap-4 px-4 text-left">
              <div className="w-10 h-10 rounded-full bg-[#2F2F2F] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-[10px] font-bold">N</span>
              </div>

              <p className="text-sm text-[#6E665E] leading-relaxed">
                Core-centric movement focusing on breath and precision flow.
              </p>
            </div>

            <div className="mt-8">
              <Link
                to="/classes#mat"
                className="text-[10px] uppercase tracking-[0.25em] text-[#A89F92] font-bold border-b border-[#A89F92]/30 pb-2 hover:border-[#A89F92] transition-colors"
              >
                DISCOVER
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group text-center">
            <div className="aspect-[4/5] mb-10 overflow-hidden rounded-2xl bg-[#F9F6F1] shadow-sm">
              <img
                src={privateImg}
                alt="Private Pilates Session"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 saturate-[0.8]"
              />
            </div>

            <h3 className="text-3xl font-serif text-[#2F2F2F] mb-6">
              Private
            </h3>

            <div className="flex items-start justify-center gap-4 px-4 text-left">
              <div className="w-10 h-10 rounded-full bg-[#2F2F2F] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-[10px] font-bold">N</span>
              </div>

              <p className="text-sm text-[#6E665E] leading-relaxed">
                Tailored sessions designed for your specific anatomical needs.
              </p>
            </div>

            <div className="mt-8">
              <Link
                to="/classes#private"
                className="text-[10px] uppercase tracking-[0.25em] text-[#A89F92] font-bold border-b border-[#A89F92]/30 pb-2 hover:border-[#A89F92] transition-colors"
              >
                DISCOVER
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RefinedPractice;