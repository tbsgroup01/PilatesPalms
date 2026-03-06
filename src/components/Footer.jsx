import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-24 bg-[#F6F2EC] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* LOGO + TEXT */}
          <div className="md:col-span-2">

            <Link
              to="/"
              className="mb-6 inline-block group transition duration-500"
            >
              <span className="block font-serif text-2xl font-bold uppercase tracking-widest text-[#2F2F2F] group-hover:text-[#A89F92] transition duration-500">
                The Pilates Palms
              </span>

              <span className="block text-[12px] tracking-[0.4em] text-[#A89F92] uppercase group-hover:tracking-[0.5em] transition-all duration-500">
                AND Pulse
              </span>
            </Link>

            <p className="max-w-md text-[#6E665E] leading-relaxed">
              A boutique architectural wellness space dedicated to intentional
              movement and refined strength. Experience Pilates in its most
              elevated form.
            </p>

          </div>

          {/* STUDIO */}
          <div>

            <h4 className="text-sm uppercase tracking-widest mb-6 font-bold text-[#2F2F2F]">
              Studio
            </h4>

            <ul className="space-y-4 text-sm tracking-wide">

              {[
                { name: "Our Story", path: "/about" },
                { name: "Classes", path: "/classes" },
                { name: "Pricing", path: "/pricing" },
                { name: "Contact", path: "/contact" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="relative text-[#6E665E] hover:text-[#2F2F2F] transition duration-300 group"
                  >
                    {item.name}

                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#A89F92] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* CONNECT */}
          <div>

            <h4 className="text-sm uppercase tracking-widest mb-6 font-bold text-[#2F2F2F]">
              Connect
            </h4>

            <ul className="space-y-4 text-sm tracking-wide">

              {["Instagram", "Pinterest", "Newsletter"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="relative text-[#6E665E] hover:text-[#2F2F2F] transition duration-300 group"
                  >
                    {item}

                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#A89F92] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}

            </ul>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-[#E6DFD5] flex flex-col md:flex-row justify-between items-center text-xs tracking-widest uppercase text-[#A89F92]">

          <p className="text-center md:text-left">
            © 2026 THE PILATES PALMS AND PULSE. ALL RIGHTS RESERVED.
          </p>

          <div className="flex gap-8 mt-4 md:mt-0">

            <Link
              to="/privacy"
              className="relative group hover:text-[#2F2F2F] transition"
            >
              Privacy

              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#2F2F2F] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              to="/terms"
              className="relative group hover:text-[#2F2F2F] transition"
            >
              Terms

              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#2F2F2F] transition-all duration-300 group-hover:w-full"></span>
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;