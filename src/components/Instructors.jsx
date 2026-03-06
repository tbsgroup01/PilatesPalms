import React from "react";

const instructors = [
  {
    name: "Sarah Palms",
    role: "Founder & Master Instructor",
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883",
    text: "Sarah blends classical Pilates with modern biomechanics.",
  },
  {
    name: "Julianne More",
    role: "Lead Reformer Specialist",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    text: "Julianne focuses on rhythmic flow and fluid movement.",
  },
];

const Instructors = () => {
  return (
    <section className="py-24 bg-[#EFE7DD]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl text-[#2F2F2F]">
            Our Instructors
          </h2>

          <div className="w-12 h-[1px] bg-[#A89F92] mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-20">

          {instructors.map((teacher, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-12 items-center">

              <div className="w-full md:w-64 h-80 overflow-hidden rounded-xl">
                <img
                  src={teacher.img}
                  alt={teacher.name}
                  className="w-full h-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div>
                <h3 className="text-3xl mb-2 font-serif text-[#2F2F2F]">
                  {teacher.name}
                </h3>

                <p className="uppercase tracking-[0.25em] text-[10px] mb-6 font-bold text-[#A89F92]">
                  {teacher.role}
                </p>

                <p className="text-sm text-[#6E665E] leading-relaxed">
                  {teacher.text}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Instructors;