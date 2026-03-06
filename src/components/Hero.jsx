import React from "react";
import heroVideo from "../assets/vidoes/hero.mp4";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          THE PILATES PALMS <br /> AND PULSE
        </h1>

        <p className="max-w-xl text-lg mb-8">
          Discover strength, flexibility and balance with our professional Pilates sessions.
        </p>

        <button className="bg-white text-black px-8 py-3 rounded-xl 
        hover:bg-black hover:text-white 
        transition-all duration-300">
          BOOK A SESSION
        </button>

      </div>

    </section>
  );
};

export default Hero;