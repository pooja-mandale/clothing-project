import React from "react";

const SaleBanner = () => {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 relative overflow-hidden">


      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

        {/* LEFT TEXT SECTION */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Your favorites, now <br /> at discounts!
          </h1>

          <p className="text-gray-600 text-lg">
            Grab your favorite styles now at unbeatable sale prices!
          </p>

          <button className="px-8 py-3 bg-black text-white rounded-full font-semibold w-max hover:bg-gray-900 transition">
            SHOP NOW
          </button>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative w-full flex justify-center lg:justify-end">

          {/* BEIGE BG BAR */}
          <div className="absolute bottom-0 w-[70%] h-[35px] bg-[#ece8df] -z-10 rounded-md"></div>

          {/* PERSON IMAGE */}
          <img
            src="https://framerusercontent.com/images/GgklwQYSLkrkj8pzHebIfKy2Rbc.png?width=250&height=959"
            alt="model"
            className="
              w-[130px] 
              sm:w-[150px] 
              md:w-[180px] 
              lg:w-[210px] 
              xl:w-[230px]
              object-contain
              drop-shadow-md
            "
          />
        </div>

      </div>
    </section>
  );
};

export default SaleBanner;
