import React from "react";

const BookHero = () => {
  return (
    <section className="pt-40 pb-20 bg-[#F6F2EC] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 text-center">

        <h1 className="text-5xl mb-6 text-[#2F2F2F] font-serif 
        opacity-0 translate-y-10 animate-[fadeUp_1s_ease_forwards]">
          Reserve Your Space
        </h1>

        <p className="max-w-xl mx-auto text-[#6E665E] 
        opacity-0 translate-y-10 animate-[fadeUp_1.2s_ease_forwards]">
          Select a class or private session to begin your practice.
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

export default BookHero;