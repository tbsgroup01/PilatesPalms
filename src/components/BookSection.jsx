import React from "react";
import { Link } from "react-router-dom";

const BookSection = () => {
  return (
    <section className="py-32 bg-white min-h-[600px] flex items-center overflow-hidden">
      <div className="max-w-lg mx-auto px-6 text-center">

        {/* ICON */}
        <div className="mb-12 opacity-0 translate-y-10 animate-[fadeUp_1s_ease_forwards]">

          <svg
            className="mx-auto text-[#A89F92] mb-8 transition-transform duration-700 hover:scale-110 hover:rotate-6"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>

          <h2 className="text-3xl mb-4 italic text-[#2F2F2F]">
            The Booking Portal is opening soon.
          </h2>

          <p className="text-[#6E665E] text-sm leading-relaxed">
            We are currently migrating to our new architectural booking system.
            In the meantime, please contact our studio directly to reserve your session.
          </p>

        </div>

        {/* BUTTONS */}

        <div className="space-y-4 opacity-0 translate-y-10 animate-[fadeUp_1.4s_ease_forwards]">

          <Link
            to="/contact"
            className="block w-full py-4 rounded-xl bg-[#A89F92] text-white 
            font-medium text-[0.75rem] tracking-[0.15em] uppercase
            transition-all duration-500 
            hover:bg-black hover:shadow-xl hover:scale-[1.03]"
          >
            Email Studio
          </Link>

          <Link
            to="/contact"
            className="block w-full py-4 rounded-xl border border-[#A89F92]
            text-[#2F2F2F] font-medium text-[0.75rem] tracking-[0.15em] uppercase
            transition-all duration-500
            hover:bg-black hover:text-white hover:border-black hover:shadow-xl hover:scale-[1.03]"
          >
            Call Studio
          </Link>

        </div>

        {/* BOTTOM TEXT */}

        <p className="mt-12 text-[10px] uppercase tracking-widest text-[#A89F92] 
        transition-all duration-500 hover:tracking-[0.35em]">
          Experience the Pulse — Opening March 2026
        </p>

      </div>

<style>{`

@keyframes fadeUp{
0%{
opacity:0;
transform:translateY(40px);
}
100%{
opacity:1;
transform:translateY(0);
}
}

`}</style>

    </section>
  );
};

export default BookSection;