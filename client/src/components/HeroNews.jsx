import React from "react";

const HeroNews = () => {
  return (
    <section className="w-full bg-white py-10 px-4 lg:px-10">

      {/* GRID SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* LEFT BIG CARD */}
        <div className="relative rounded-xl overflow-hidden h-[320px] md:h-[380px] lg:h-[420px]">
          <img
            src="https://plus.unsplash.com/premium_photo-1664202526047-405824c633e7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="fashion"
            className="w-full h-full object-cover"
          />

          {/* TEXT OVERLAY */}
          <div className="absolute bottom-6 left-6 text-white space-y-2">
            <p className="text-sm tracking-widest font-semibold">INNOVATIVE</p>
            <h1 className="text-xl md:text-2xl font-bold max-w-xs leading-snug">
              Discover our latest fashion trends – exclusively
            </h1>
            <p className="text-sm opacity-90">Jul 12, 2024</p>
          </div>
        </div>

        {/* MIDDLE MEDIUM CARD */}
        <div className="relative rounded-xl overflow-hidden h-[320px] md:h-[380px] lg:h-[420px]">
          <img
            src="https://images.pexels.com/photos/6311651/pexels-photo-6311651.jpeg"
            alt="women"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-6 left-6 text-gray-900 space-y-2">
            <p className="text-sm tracking-widest font-semibold">CONFIDENCE</p>
            <h1 className="text-xl md:text-2xl font-bold max-w-xs leading-snug">
              Find your perfect fit today – comfort
            </h1>
            <p className="text-sm opacity-80">Jun 18, 2024</p>
          </div>
        </div>

        {/* RIGHT SMALL CARD (person image) */}
        <div className="relative rounded-xl overflow-hidden h-[320px] md:h-[380px] lg:h-[420px]">
          <img
            src="https://images.pexels.com/photos/7679729/pexels-photo-7679729.jpeg"
            alt="model"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-6 left-6 text-gray-900 space-y-2">
            <p className="text-sm tracking-widest font-semibold">ESSENTIALS</p>
            <h1 className="text-xl md:text-2xl font-bold max-w-xs leading-snug">
              Shop essential pieces for everyday wear
            </h1>
            <p className="text-sm opacity-80">May 28, 2024</p>
          </div>
        </div>

      </div>

      {/* READ MORE BUTTON */}
      <div className="w-full flex justify-center mt-10">
        <button className="px-8 py-3 border border-black rounded-full font-semibold hover:bg-black hover:text-white transition">
          READ MORE
        </button>
      </div>

    </section>
  );
};

export default HeroNews;
