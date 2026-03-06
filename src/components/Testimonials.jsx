import React from "react";

// Testimonials array
const TestimonialsData = [
  {
    text: "Stepping into The Palms feels like a meditative exhale. The space itself inspires a different kind of movement—precise, intentional, and grounded.",
    name: "Elena V.",
    role: "Studio Member",
  },
  {
    text: "The attention to form and the architectural beauty of the studio create an environment where I can truly focus on my practice. It's transformative.",
    name: "Marcus T.",
    role: "Private Client",
  },
  {
    text: "Every session feels like a reset. The instructors are exceptional, and the space is unlike any other studio I've experienced—calm, refined, intentional.",
    name: "Sophia L.",
    role: "Reformer Regular",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F6F2EC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-serif text-[#2F2F2F] mb-8">
            Client Experiences
          </h2>
          <div className="w-16 h-px bg-[#A89F92] mx-auto opacity-40"></div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-12">
          {TestimonialsData.map((item, index) => (
            <div
              key={index}
              className="bg-[#FAF7F2] p-12 rounded-3xl shadow-sm text-center border border-[#A89F92]/10 hover:-translate-y-2 transition duration-500"
            >
              <div className="mb-10">
                <span className="text-6xl font-serif italic text-[#A89F92]/20">"</span>
              </div>

              <p className="text-xl italic font-serif text-[#2F2F2F] leading-[1.8] mb-12 min-h-[160px]">
                {item.text}
              </p>

              <div className="w-10 h-px bg-[#A89F92]/30 mx-auto mb-8"></div>

              <h4 className="text-[11px] uppercase tracking-[0.5em] text-[#A89F92] font-semibold">
                {item.name}
              </h4>

              <p className="text-[10px] uppercase tracking-[0.4em] text-[#6E665E] mt-3 opacity-60">
                {item.role}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory">
          {TestimonialsData.map((item, index) => (
            <div
              key={index}
              className="min-w-[85%] snap-center bg-[#FAF7F2] p-10 rounded-3xl shadow-sm border border-[#A89F92]/10 text-center"
            >
              <div className="mb-6">
                <span className="text-5xl font-serif italic text-[#A89F92]/20">"</span>
              </div>

              <p className="text-lg italic font-serif text-[#2F2F2F] leading-[1.8] mb-10">
                {item.text}
              </p>

              <div className="w-8 h-px bg-[#A89F92]/30 mx-auto mb-6"></div>

              <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#A89F92] font-bold">
                {item.name}
              </h4>

              <p className="text-[9px] uppercase tracking-[0.3em] text-[#6E665E] mt-2 opacity-60">
                {item.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;