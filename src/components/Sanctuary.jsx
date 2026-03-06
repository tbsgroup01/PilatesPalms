import React from "react";

import img1 from "../assets/arch1.jpg";
import img2 from "../assets/arch2.jpg";
import img3 from "../assets/arch3.jpg";

const Sanctuary = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-[#F6F2EC]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20 md:mb-24 lg:mb-28">
          <h2 className="text-5xl md:text-6xl text-[#2F2F2F] font-serif mb-6">
            An Architectural Sanctuary
          </h2>

          <div className="w-12 h-[2px] bg-[#A89F92] mx-auto opacity-30"></div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">

          {/* Card 1 */}
          <div>
            <div className="aspect-[4/5] rounded-2xl bg-[#F9F6F1] shadow-[0_20px_40px_rgba(0,0,0,0.03)] overflow-hidden group">
              <img
                src={img1}
                alt="Minimalist studio architecture"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 saturate-[0.8] contrast-[0.95]"
              />
            </div>

            <h3 className="text-2xl mt-6 text-[#2F2F2F] font-serif">
              Soft Curves
            </h3>

            <p className="text-[#6E665E] mt-3">
              The gentle flow of form designed to support intentional movement.
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <div className="aspect-[4/5] rounded-2xl bg-[#F9F6F1] shadow-[0_20px_40px_rgba(0,0,0,0.03)] overflow-hidden group">
              <img
                src={img2}
                alt="Natural wood and stone textures"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 saturate-[0.8] contrast-[0.95]"
              />
            </div>

            <h3 className="text-2xl mt-6 text-[#2F2F2F] font-serif">
              Natural Textures
            </h3>

            <p className="text-[#6E665E] mt-3">
              Earth, stone, and wood in harmony with the body and space.
            </p>
          </div>

          {/* Card 3 */}
          <div>
            <div className="aspect-[4/5] rounded-2xl bg-[#F9F6F1] shadow-[0_20px_40px_rgba(0,0,0,0.03)] overflow-hidden group">
              <img
                src={img3}
                alt="Grounded studio lighting"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 saturate-[0.8] contrast-[0.95]"
              />
            </div>

            <h3 className="text-2xl mt-6 text-[#2F2F2F] font-serif">
              Grounded Light
            </h3>

            <p className="text-[#6E665E] mt-3">
              Soft daylight shaping a calm, focused atmosphere for every breath.
            </p>
          </div>

        </div>

        {/* Mobile Slider */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-6 pb-10 scrollbar-hide">

          {[img1, img2, img3].map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85%] max-w-[300px] snap-center"
            >
              <div className="aspect-[4/5] rounded-2xl bg-[#F9F6F1] shadow-sm overflow-hidden">
                <img
                  src={img}
                  alt="studio"
                  className="w-full h-full object-cover saturate-[0.8] contrast-[0.95]"
                />
              </div>

              <h3 className="text-2xl mt-6 text-[#2F2F2F] font-serif">
                {index === 0
                  ? "Soft Curves"
                  : index === 1
                  ? "Natural Textures"
                  : "Grounded Light"}
              </h3>

              <p className="text-[#6E665E] mt-2">
                {index === 0
                  ? "The gentle flow of form designed to support intentional movement."
                  : index === 1
                  ? "Earth, stone, and wood in harmony with the body and space."
                  : "Soft daylight shaping a calm, focused atmosphere for every breath."}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Sanctuary;