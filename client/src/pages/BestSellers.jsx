import React from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const Bestseller = () => {


  return (
    <>
      {/* HERO SECTION */}
      <section className="w-full bg-[#f6f3ee]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-12 py-16 gap-10">
          
          {/* LEFT TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              Bestseller's
            </h1>
            <p className="text-gray-600 text-lg max-w-lg">
              Our most-loved pieces, tried and tested by trendsetters.
              Discover what everyone’s raving about.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://framerusercontent.com/images/g3kaWq22fzOJwm5xhcbf0a5dMA.png"
              alt="Bestseller Collection"
              className="w-[330px] md:w-[450px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* COLLECTION BUTTONS SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
          Collections:
        </h2>

        <div className="flex flex-wrap gap-4">

          <Link
            to="/bestseller"
            className={`px-6 py-2 border border-black rounded-full transition ${isActive("/collection/bestseller")}`}
          >
            BESTSELLER'S
          </Link>

          <Link
            to="/mens"
            className={`px-6 py-2 border border-black rounded-full transition ${isActive("/collection/mens")}`}
          >
            MEN'S
          </Link>

          <Link
            to="/mens"
            className={`px-6 py-2 border border-black rounded-full transition ${isActive("/collection/mens")}`}
          >
            MEN'S
          </Link>

          <Link
            to="/arrival"
            className={`px-6 py-2 border border-black rounded-full transition ${isActive("/collection/new-arrival")}`}
          >
            NEW ARRIVAL
          </Link>

          <Link
            to="/styleEssentials"
            className={`px-6 py-2 border border-black rounded-full transition ${isActive("/collection/style-essentials")}`}
          >
            STYLE ESSENTIALS
          </Link>

          <Link
            to="/summer"
            className={`px-6 py-2 border border-black rounded-full transition ${isActive("/collection/summer")}`}
          >
            SUMMER COLLECTION
          </Link>

        </div>

        {/* Loader (optional) */}
        <div className="flex justify-center mt-10">
          <div className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
        </div>

      </section>

      <Footer />
    </>
  );
};

export default Bestseller;
