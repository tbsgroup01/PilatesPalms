import React from "react";

const pillars = [
  {
    number: "01",
    title: "Precision",
    text: "We value the small adjustments that lead to profound shifts in alignment and strength.",
  },
  {
    number: "02",
    title: "Intention",
    text: "Every pulse, every breath, and every movement is performed with deliberate focus.",
  },
  {
    number: "03",
    title: "Aesthetic",
    text: "We believe beauty and wellness are inseparable.",
  },
];

const Pillars = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl mb-6 text-[#2F2F2F]">
            Our Pillars
          </h2>

          <div className="w-12 h-[1px] bg-[#A89F92] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-16 text-center">

          {pillars.map((pillar, index) => (
            <div key={index} className="group">

              <span className="text-5xl italic text-[#A89F92]/40 mb-8 block group-hover:text-[#A89F92] transition">
                {pillar.number}
              </span>

              <h3 className="text-xl mb-6 uppercase tracking-[0.25em] font-bold text-[#2F2F2F]">
                {pillar.title}
              </h3>

              <p className="text-sm text-[#6E665E] leading-relaxed">
                {pillar.text}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Pillars;