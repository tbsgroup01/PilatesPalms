import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Classes", path: "/classes" },
    { name: "Pricing", path: "/pricing" },
  ];

  // detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // decide text color
  const isHome = location.pathname === "/";
  const textColor = scrolled || !isHome ? "text-black" : "text-white";

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500
      ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo} // <-- replace with your logo path
            alt="The Pilates Palms and Pulse Logo"
            className="h-12 md:h-16 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`relative text-sm uppercase tracking-wider group transition duration-300 ${textColor}`}
            >
              {link.name}

              {/* underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#A89F92] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* CTA */}
          <Link
            to="/book"
            className="bg-[#A89F92] text-white px-6 py-2 rounded-xl text-xs uppercase tracking-wider 
            hover:bg-[#8f8578] hover:scale-105 transition-all duration-300 shadow-md"
          >
            Book a Session
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className={`md:hidden text-2xl ${textColor}`}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#F6F2EC] flex flex-col gap-8 px-8 py-10 text-[#2F2F2F] uppercase tracking-wider
        transform transition-all duration-500 ease-in-out
        ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 absolute right-0"}`}
      >
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="hover:text-[#A89F92] transition duration-300"
          >
            {link.name}
          </Link>
        ))}

        <Link
          to="/book"
          className="bg-[#A89F92] text-white text-center py-3 rounded-xl hover:bg-[#8f8578] transition"
        >
          Book a Session
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
