import React from "react";
import { Link } from "react-router-dom";

const PulseSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Image */}
          <div className="relative h-[500px] transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200"
              alt="Architectural Studio Space"
              className="w-full h-full object-cover rounded-2xl "
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl mb-10 leading-tight font-semibold">
              The Pulse of Wellness
            </h2>

            <p className="mb-8 text-gray-600 max-w-xl leading-relaxed">
              THE PILATES PALMS AND PULSE is an architectural breathing space
              designed to elevate your movement practice through refined
              methodology.
            </p>

            <p className="mb-12 text-gray-600 max-w-xl leading-relaxed">
              We focus on the intersection of form, flow, and focus, providing
              an environment that honors the body’s natural intelligence.
            </p>

            <Link
              to="/about"
              className="border border-black px-8 py-3 rounded-xl hover:bg-black hover:text-white transition duration-300"
            >
              READ OUR STORY
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PulseSection;