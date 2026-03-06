import React from "react";
import { Link } from "react-router-dom";

const PricingSection = () => {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-20 bg-[#F9F6F1]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-5xl mb-6 font-serif">Pricing</h1>

          <p className="max-w-xl mx-auto text-[#6E665E]">
            Invest in your longevity. Flexible options for every level of
            commitment.
          </p>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">

          <h2 className="text-center text-4xl font-serif mb-20">
            Membership & Packs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* CARD 1 */}

            <div className="p-12 rounded-xl border border-[#E6DED3]">

              <h3 className="text-xl font-bold uppercase tracking-widest mb-2 text-center">
                Single Practice
              </h3>

              <div className="text-4xl font-serif text-center mb-8">
                $45
              </div>

              <ul className="space-y-4 mb-10 text-sm">

                <li className="flex items-center gap-3">1 Class Credit</li>
                <li className="flex items-center gap-3">Valid for 14 Days</li>
                <li className="flex items-center gap-3">All Group Classes</li>
                <li className="flex items-center gap-3">Access to Amenities</li>

              </ul>

              <Link
                to="/book"
                className="block w-full text-center border border-[#A89F92] py-3 rounded-xl tracking-widest text-sm hover:bg-black hover:text-white transition"
              >
                Select Plan
              </Link>

            </div>


            {/* CARD 2 */}

            <div className="p-12 rounded-xl border border-[#A89F92] bg-white shadow-xl scale-105 z-10">

              <h3 className="text-xl font-bold uppercase tracking-widest mb-2 text-center">
                The Weekly Pulse
              </h3>

              <div className="text-4xl font-serif text-center mb-8">
                $120
              </div>

              <ul className="space-y-4 mb-10 text-sm">

                <li className="flex items-center gap-3">3 Class Credits / Week</li>
                <li className="flex items-center gap-3">Flexible Booking</li>
                <li className="flex items-center gap-3">Full Studio Access</li>
                <li className="flex items-center gap-3">1 Guest Pass / Month</li>

              </ul>

              <Link
                to="/book"
                className="block w-full text-center bg-[#A89F92] text-white py-3 rounded-xl tracking-widest text-sm hover:bg-black transition"
              >
                Select Plan
              </Link>

            </div>


            {/* CARD 3 */}

            <div className="p-12 rounded-xl border border-[#E6DED3]">

              <h3 className="text-xl font-bold uppercase tracking-widest mb-2 text-center">
                The Monthly Flow
              </h3>

              <div className="text-4xl font-serif text-center mb-8">
                $380
              </div>

              <ul className="space-y-4 mb-10 text-sm">

                <li className="flex items-center gap-3">Unlimited Group Classes</li>
                <li className="flex items-center gap-3">Priority Booking</li>
                <li className="flex items-center gap-3">10% Off Private Sessions</li>
                <li className="flex items-center gap-3">Guest Passes Included</li>

              </ul>

              <Link
                to="/book"
                className="block w-full text-center border border-[#A89F92] py-3 rounded-xl tracking-widest text-sm hover:bg-black hover:text-white transition"
              >
                Select Plan
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* PRIVATE SESSION */}

      <section className="py-28 bg-[#F9F6F1]">

        <div className="max-w-2xl mx-auto px-6">

          <h2 className="text-center text-4xl font-serif mb-16">
            Private Sessions
          </h2>

          <div className="bg-white p-10 rounded-xl divide-y divide-[#E6DED3]">

            <div className="flex justify-between py-6 items-center">
              <span className="text-lg font-serif">Single Private</span>
              <span className="font-bold tracking-widest">$120</span>
            </div>

            <div className="flex justify-between py-6 items-center">
              <span className="text-lg font-serif">5 Private Pack</span>
              <span className="font-bold tracking-widest">$550</span>
            </div>

            <div className="flex justify-between py-6 items-center">
              <span className="text-lg font-serif">10 Private Pack</span>
              <span className="font-bold tracking-widest">$1,000</span>
            </div>

            <div className="pt-8 text-center">

              <Link
                to="/contact"
                className="inline-block border border-[#A89F92] px-8 py-3 rounded-xl tracking-widest text-sm hover:bg-black hover:text-white transition"
              >
                Inquire for Private Training
              </Link>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default PricingSection;