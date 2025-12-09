import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-white overflow-hidden relative">

      {/* SHOP NOW - DESKTOP */}
      <div className="
        hidden 
        lg:flex 
        flex-col items-end gap-3 
        absolute right-8 top-1/2 -translate-y-1/2 
        z-50
      ">
        <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
          30% OFF SALE
        </div>

        <button className="bg-black text-white text-xl font-bold px-10 py-5 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300">
          SHOP NOW
        </button>
      </div>

      {/* HERO CONTENT */}
      <div className="max-w-7xl mx-auto px-4 lg:px-10 py-20
        flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0"
      >

        {/* LEFT TEXT */}
        <div className="flex-1 text-center lg:text-right">
          <h1 className="text-[40px] sm:text-[70px] lg:text-[110px]
            font-black tracking-tight leading-[0.9]">
            YOUR <br /> STARTS
          </h1>
          <p className="mt-4 text-gray-600 text-[15px] md:text-[17px]">
            Discover our new summer collection!
            <br /> Shop now and refresh your wardrobe.
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://framerusercontent.com/images/dz9jyD4eKoxFvRvO2exMS97GwOY.png?width=619&height=786"
            alt="Model"
            className="w-[260px] sm:w-[380px] md:w-[500px] lg:w-[620px] xl:w-[720px] object-cover"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-[40px] sm:text-[70px] lg:text-[110px]
            font-black tracking-tight leading-[0.9]">
            STYLE <br /> HERE
          </h1>
        </div>

      </div>

      {/* SHOP NOW - MOBILE */}
      <div className="lg:hidden flex flex-col items-center gap-3 mt-6">
        <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
          30% OFF SALE
        </div>

        <button className="bg-black text-white text-lg font-bold px-8 py-4 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300">
          SHOP NOW
        </button>
      </div>


      {/* FEATURES */}
      <div className="w-full bg-[#f7f4ef] py-16 mt-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center px-6">
          {[
            { icon: "🚚", title: "Free Shipping", desc: "Enjoy free shipping on everything." },
            { icon: "❓", title: "Customer Support", desc: "Always here to assist you." },
            { icon: "💳", title: "Secure Payment", desc: "Fast, safe, and secure payments." },
            { icon: "🛍️", title: "Seamless Shopping", desc: "Smooth, easy, and convenient." },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white shadow-md">
                <span className="text-4xl">{item.icon}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-[15px] mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;
  