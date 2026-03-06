import React from "react";
import visionImg from "../assets/03-scaled.webp";

const VisionSection = () => {
  return (
    <section className="py-28 bg-[#EFE7DD]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Outer Container */}
        <div className="bg-[#F9F6F1] rounded-[40px] p-12 md:p-20">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>
              <h2 className="text-4xl md:text-5xl mb-10 text-[#2F2F2F] font-serif">
                The Vision
              </h2>

              <p className="mb-8 text-[#6E665E] leading-relaxed">
                Founded on the belief that the environment we move in profoundly
                shapes our internal state, THE PILATES PALMS AND PULSE was
                conceived as a boutique sanctuary for the modern practitioner.
              </p>

              <p className="mb-8 text-[#6E665E] leading-relaxed">
                We stripped away the clinical atmosphere of traditional studios,
                replacing it with soft architectural curves, natural textures,
                and a flood of natural light.
              </p>

              <p className="italic text-[#6E665E] leading-relaxed">
                Every detail, from the matte surfaces to the intentional spacing
                between reformers, has been curated to foster a sense of calm
                and focused strength.
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center md:justify-end">
              <div className="overflow-hidden rounded-3xl w-[360px] md:w-[420px] shadow-lg">
                <img
                  src={visionImg}
                  alt="Studio"
                  className="w-full h-[500px] object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionSection;