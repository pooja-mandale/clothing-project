import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-white overflow-hidden relative">

      {/* HERO SECTION */}
      <div
        className="max-w-7xl mx-auto px-2 lg:px-6 py-20
        flex flex-col lg:flex-row items-center justify-center gap-0"
      >

        {/* LEFT TEXT */}
        <div className="flex-1 text-center lg:text-right">
          <h1
            className="text-[55px] sm:text-[85px] lg:text-[120px]
            font-black tracking-tight leading-[0.85] text-black"
          >
            YOUR <br /> STARTS
          </h1>
          <p className="mt-3 text-[16px] text-gray-600 leading-relaxed">
            Discover our new summer collection! <br />
            Shop now and refresh your wardrobe.
          </p>
        </div>

        {/* CENTER IMAGE */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://framerusercontent.com/images/dz9jyD4eKoxFvRvO2exMS97GwOY.png?width=619&height=786"
            alt="Model"
            className="w-[300px] sm:w-[420px] md:w-[550px] lg:w-[650px] xl:w-[750px] 2xl:w-[880px] object-cover"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="flex-1 text-center lg:text-left">
          <h1
            className="text-[55px] sm:text-[85px] lg:text-[120px]
            font-black tracking-tight leading-[0.85] text-black"
          >
            STYLE <br /> HERE
          </h1>
        </div>

      </div>

{/* SHOP NOW BUTTON - fixed on right, with discount badge */}
<div className="right-6 top-[20%] transform -translate-y-1/2 z-50 flex flex-col items-end gap-3">
  {/* Discount Badge */}
  <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
    30% OFF SALE
  </div>

  {/* Shop Now Button */}
  <button className="bg-black text-white text-xl font-bold px-10 py-5 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300">
    SHOP NOW
  </button>
</div>





      {/* FEATURES SECTION */}
<div className="w-full bg-[#f7f4ef] py-14 -mt-24 relative"> {/* moved up with -mt-24 */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center px-6">

    {/* 1 - Free Shipping */}
    <div className="flex flex-col items-center">
      <div className="w-28 h-28 flex items-center justify-center rounded-full bg-white shadow-md"> {/* bigger circle */}
        <span className="text-4xl">🚚</span> {/* bigger icon */}
      </div>
      <h3 className="mt-4 text-2xl font-semibold">Free Shipping</h3> {/* bigger text */}
      <p className="text-gray-600 text-[16px] mt-2">
        Enjoy free shipping on everything.
      </p>
    </div>

    {/* 2 - Customer Support */}
    <div className="flex flex-col items-center">
      <div className="w-28 h-28 flex items-center justify-center rounded-full bg-white shadow-md">
        <span className="text-4xl">❓</span>
      </div>
      <h3 className="mt-4 text-2xl font-semibold">Customer Support</h3>
      <p className="text-gray-600 text-[16px] mt-2">
        Always here to assist you.
      </p>
    </div>

    {/* 3 - Secure Payment */}
    <div className="flex flex-col items-center">
      <div className="w-28 h-28 flex items-center justify-center rounded-full bg-white shadow-md">
        <span className="text-4xl">💳</span>
      </div>
      <h3 className="mt-4 text-2xl font-semibold">Secure Payment</h3>
      <p className="text-gray-600 text-[16px] mt-2">
        Fast, safe, and secure payments.
      </p>
    </div>

    {/* 4 - Seamless Shopping */}
    <div className="flex flex-col items-center">
      <div className="w-28 h-28 flex items-center justify-center rounded-full bg-white shadow-md">
        <span className="text-4xl">🛍️</span>
      </div>
      <h3 className="mt-4 text-2xl font-semibold">Seamless Shopping</h3>
      <p className="text-gray-600 text-[16px] mt-2">
        Smooth, easy, and convenient.
      </p>
    </div>

  </div>
</div>


    </section>
  );
};

export default Hero;
