import React from "react";
import { Link } from "react-router-dom";

import reformerImg from "../assets/pilo.jpg";
import matImg from "../assets/gym.jpg";
import flowImg from "../assets/reformer.webp";
import privateImg from "../assets/arch1.jpg";

const ClassesSection = () => {
  return (
    <section className="py-32 bg-[#EFE7DD] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="grid gap-32">

{/* ---------- REFORMER ---------- */}

<div id="reformer" className="flex flex-col md:flex-row gap-20 items-center group">

<div className="md:w-1/2 w-full aspect-[16/10]">
<div className="w-full h-full overflow-hidden rounded-xl shadow-md border border-black/5 transition-all duration-700 group-hover:shadow-2xl">

<img
src={reformerImg}
alt="Structural Reformer"
className="w-full h-full object-cover transition-all duration-[1500ms] ease-out 
group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110"
/>

</div>
</div>

<div className="md:w-1/2 transform transition-all duration-700 ease-out group-hover:-translate-y-2">

<div className="flex gap-4 mb-6">

<span className="text-[10px] uppercase tracking-[0.25em] bg-white px-4 py-1 rounded-full text-[#A89F92] font-bold border border-[#A89F92]/20 transition hover:bg-black hover:text-white">
  All Levels
</span>

<span className="text-[10px] uppercase tracking-[0.25em] bg-white px-4 py-1 rounded-full text-[#A89F92] font-bold border border-[#A89F92]/20 transition hover:bg-black hover:text-white">
  50 Minutes
</span>

</div>

<h2 className="text-4xl md:text-5xl mb-8 font-serif text-[#2F2F2F] transition-all duration-500 group-hover:tracking-wider">
Structural Reformer
</h2>

<p className="mb-10 text-[#6E665E] leading-relaxed text-lg transition-opacity duration-500 group-hover:opacity-90">
Our signature session focusing on skeletal alignment and deep muscular engagement using the high-performance reformer.
</p>

<Link
to="/book"
className="inline-block px-10 py-4 bg-[#A89F92] text-white text-sm tracking-[0.15em] uppercase rounded-xl 
transition-all duration-500 ease-out 
hover:bg-black hover:scale-105 hover:shadow-xl active:scale-95"
>
Book This Class
</Link>

</div>
</div>


{/* ---------- MAT ---------- */}

<div id="mat" className="flex flex-col md:flex-row-reverse gap-20 items-center group">

<div className="md:w-1/2 w-full aspect-[16/10]">
<div className="w-full h-full overflow-hidden rounded-xl shadow-md border border-black/5 transition-all duration-700 group-hover:shadow-2xl">

<img
src={matImg}
alt="Precision Mat"
className="w-full h-full object-cover transition-all duration-[1500ms] ease-out 
group-hover:scale-110 group-hover:brightness-110"
/>

</div>
</div>

<div className="md:w-1/2 transform transition-all duration-700 ease-out group-hover:-translate-y-2">

<div className="flex gap-4 mb-6">

<span className="text-[10px] uppercase tracking-[0.25em] bg-white px-4 py-1 rounded-full text-[#A89F92] font-bold border border-[#A89F92]/20">
All Levels
</span>

<span className="text-[10px] uppercase tracking-[0.25em] bg-white px-4 py-1 rounded-full text-[#A89F92] font-bold border border-[#A89F92]/20">
50 Minutes
</span>

</div>

<h2 className="text-4xl md:text-5xl mb-8 font-serif text-[#2F2F2F] transition-all duration-500 group-hover:tracking-wider">
Precision Mat
</h2>

<p className="mb-10 text-[#6E665E] leading-relaxed text-lg">
A contemporary approach to traditional mat-work focusing on breath-work and controlled concentric movements.
</p>

<Link
to="/book"
className="inline-block px-10 py-4 bg-[#A89F92] text-white text-sm tracking-[0.15em] uppercase rounded-xl 
transition-all duration-500 
hover:bg-black hover:scale-105 hover:shadow-xl"
>
Book This Class
</Link>

</div>
</div>


{/* ---------- FLOW ---------- */}

<div id="flow" className="flex flex-col md:flex-row gap-20 items-center group">

<div className="md:w-1/2 w-full aspect-[16/10]">
<div className="w-full h-full overflow-hidden rounded-xl shadow-md border border-black/5 transition-all duration-700 group-hover:shadow-2xl">

<img
src={flowImg}
alt="Pulse Flow"
className="w-full h-full object-cover transition-all duration-[1500ms] ease-out 
group-hover:scale-110"
/>

</div>
</div>

<div className="md:w-1/2 transform transition-all duration-700 ease-out group-hover:-translate-y-2">

<div className="flex gap-4 mb-6">

<span className="text-[10px] uppercase tracking-[0.25em] bg-white px-4 py-1 rounded-full text-[#A89F92] font-bold border border-[#A89F92]/20">
Intermediate
</span>

<span className="text-[10px] uppercase tracking-[0.25em] bg-white px-4 py-1 rounded-full text-[#A89F92] font-bold border border-[#A89F92]/20">
45 Minutes
</span>

</div>

<h2 className="text-4xl md:text-5xl mb-8 font-serif text-[#2F2F2F] transition-all duration-500 group-hover:tracking-wider">
Pulse Flow
</h2>

<p className="mb-10 text-[#6E665E] leading-relaxed text-lg">
A dynamic high-intensity Pilates flow that increases the heart rate while maintaining the integrity of form.
</p>

<Link
to="/book"
className="inline-block px-10 py-4 bg-[#A89F92] text-white text-sm tracking-[0.15em] uppercase rounded-xl 
transition-all duration-500 
hover:bg-black hover:scale-105 hover:shadow-xl"
>
Book This Class
</Link>

</div>
</div>


{/* ---------- PRIVATE ---------- */}

<div id="private" className="flex flex-col md:flex-row-reverse gap-20 items-center group">

<div className="md:w-1/2 w-full aspect-[16/10]">
<div className="w-full h-full overflow-hidden rounded-xl shadow-md border border-black/5 transition-all duration-700 group-hover:shadow-2xl">

<img
src={privateImg}
alt="Private Mastery"
className="w-full h-full object-cover transition-all duration-[1500ms] ease-out 
group-hover:scale-110"
/>

</div>
</div>

<div className="md:w-1/2 transform transition-all duration-700 ease-out group-hover:-translate-y-2">

<div className="flex gap-4 mb-6">

<span className="text-[10px] uppercase tracking-[0.25em] bg-white px-4 py-1 rounded-full text-[#A89F92] font-bold border border-[#A89F92]/20">
Personalized
</span>

<span className="text-[10px] uppercase tracking-[0.25em] bg-white px-4 py-1 rounded-full text-[#A89F92] font-bold border border-[#A89F92]/20">
60 Minutes
</span>

</div>

<h2 className="text-4xl md:text-5xl mb-8 font-serif text-[#2F2F2F] transition-all duration-500 group-hover:tracking-wider">
Private Mastery
</h2>

<p className="mb-10 text-[#6E665E] leading-relaxed text-lg">
One-on-one sessions tailored to your specific goals and injuries.
</p>

<Link
to="/book"
className="inline-block px-10 py-4 bg-[#A89F92] text-white text-sm tracking-[0.15em] uppercase rounded-xl 
transition-all duration-500 
hover:bg-black hover:scale-105 hover:shadow-xl"
>
Book This Class
</Link>

</div>
</div>

        </div>
      </div>
    </section>
  );
};

export default ClassesSection;