import React from "react";

const ContactSection = () => {
  return (
    <section className="py-16 bg-primary-white px-6 md:px-0">
      <div className="container mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Card: Info */}
        <div className="bg-[#F6F2EC] p-8 md:p-10 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-500">
          <h2 className="text-2xl font-serif font-semibold mb-6">
            Visit Our Sanctuary
          </h2>
          <div className="space-y-6">
            {/* Location */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-taupe mb-1">
                Location
              </h4>
              <p className="text-sm md:text-base font-serif">
                122 Architectural Way
                <br />
                Boutique District, CA 90210
              </p>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-taupe mb-1">
                Hours
              </h4>
              <p className="text-xs md:text-sm">
                Monday — Friday: 6:00am – 8:00pm
              </p>
              <p className="text-xs md:text-sm">
                Saturday — Sunday: 8:00am – 4:00pm
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-taupe mb-1">
                Contact
              </h4>
              <p className="text-xs md:text-sm">hello@pilatespalms.com</p>
              <p className="text-xs md:text-sm">+1 (555) 234-5678</p>
            </div>
          </div>
        </div>

        {/* Right Card: Form */}
        <div className="bg-[#F6F2EC] p-8 md:p-10 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-500 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6">
              Send an Inquiry
            </h3>
            <form className="space-y-4 md:space-y-5">
              {/* Name */}
              <div>
                <label className="block text-[9px] uppercase tracking-widest mb-1 font-bold">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-primary-white border-b border-light-beige p-2 md:p-3 outline-none focus:border-taupe transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[9px] uppercase tracking-widest mb-1 font-bold">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-primary-white border-b border-light-beige p-2 md:p-3 outline-none focus:border-taupe transition-all duration-300"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-[9px] uppercase tracking-widest mb-1 font-bold">
                  Subject
                </label>
                <select className="w-full bg-primary-white border-b border-light-beige p-2 md:p-3 outline-none focus:border-taupe transition-all duration-300">
                  <option>General Inquiry</option>
                  <option>Private Training</option>
                  <option>Membership</option>
                  <option>Media & Partnerships</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[9px] uppercase tracking-widest mb-1 font-bold">
                  Message
                </label>
                <textarea
                  rows="3"
                  className="w-full bg-primary-white border-b border-light-beige p-2 md:p-3 outline-none focus:border-taupe transition-all duration-300"
                ></textarea>
              </div>
            </form>
          </div>

          {/* Button */}
          <div className="mt-6">
            <button
              type="button"
              className="w-100 border-2 border-taupe text-black font-semibold py-3 rounded-lg shadow-md hover:bg-[#928A7E] hover:text-black hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
