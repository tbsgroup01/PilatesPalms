import React from "react";
import philosophyImg from "../assets/pilo.jpg";

const Philosophy = () => {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* TEXT SIDE */}
        <div className="space-y-8">

          <h2 className="text-3xl uppercase tracking-[0.4em] opacity-40 font-bold">
            The Philosophy
          </h2>

          <h3 className="text-4xl md:text-5xl leading-tight font-serif">
            "Movement is an architectural dialogue between the body and space."
          </h3>

          <p className="text-lg opacity-80 max-w-lg italic">
            We believe in every breath as the structure of your strength, and
            every pulse as a foundation for longevity.
          </p>

          <div className="flex items-center gap-6 pt-6">
            <div className="w-12 h-[1px] bg-white/30"></div>

            <span className="text-[10px] uppercase tracking-[0.4em] opacity-60">
              Grounded • Elevated • Intentional
            </span>
          </div>

        </div>

        {/* IMAGE SIDE */}
        <div className="overflow-hidden rounded-xl">

          <img
            src={philosophyImg}
            alt="Pilates Studio Movement"
            className="w-full h-[520px] object-cover object-center transition-transform duration-[3000ms] ease-out hover:scale-110"
            loading="lazy"
          />

        </div>

      </div>
    </section>
  );
};

export default Philosophy;