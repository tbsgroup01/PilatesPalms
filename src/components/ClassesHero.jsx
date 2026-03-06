import React from "react";

const ClassesHero = () => {
  return (
    <section className="pt-40 pb-24 bg-[#F9F6F1]">
      <div className="max-w-[1200px] mx-auto px-6 text-center">

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl mb-8 font-serif text-[#2F2F2F]">
          Our Classes
        </h1>

        {/* Divider */}
        <div className="w-12 h-[1px] bg-[#A89F92] mx-auto mb-10"></div>

        {/* Text */}
        <p className="max-w-xl mx-auto text-[#6E665E] text-lg leading-relaxed">
          Each class is a curated experience designed to challenge your body
          and calm your mind.
        </p>

      </div>
    </section>
  );
};

export default ClassesHero;