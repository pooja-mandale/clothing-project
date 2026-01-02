import React from "react";

const CustomClothingSection = () => {
  return (
    <section className="w-full bg-[#f6f4ef] py-20 px-6 lg:px-20 p-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 pt-28">

        {/* LEFT IMAGE */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <img
            src="https://framerusercontent.com/images/Art6af8hQoIVfgQtz9nvMeMlfV8.jpg?width=373&height=450"
            alt="Left model"
            className="w-[260px] md:w-[320px] lg:w-[360px] rounded-lg shadow-md rotate-[-6deg]"
          />
        </div>

        {/* CENTER TEXT */}
        <div className="flex-1 text-center lg:text-center">
          <h1 className="text-2xl md:text-5xl font-serif leading-snug mb-6">
            Tailored, high-quality custom clothing From KnitKnot
          </h1>

          <p className="text-gray-700 text-sm leading-relaxed mb-8">
            Custom-designed, high-quality Clothing tailored to reflect the unique
            style of KnitKnot. Crafted with precision and attention to detail,
            ensuring both comfort and durability.
          </p>

          <button className="px-8 py-3 border border-black rounded-full text-lg hover:bg-black hover:text-white transition">
            LEARN MORE
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src="https://framerusercontent.com/images/RpbxmtYGJlMqYWHH3dhqG9Izrw.jpg?width=373&height=448"
            alt="Right model"
            className="w-[260px] md:w-[320px] lg:w-[360px] rounded-lg shadow-md rotate-[6deg]"
          />
        </div>

      </div>
    </section>
  );
};

export default CustomClothingSection;
