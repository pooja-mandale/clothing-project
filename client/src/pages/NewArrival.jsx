import React from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const NewArrival = () => {
  const location = useLocation();
  
  // Helper function for active button styles
  const isActive = (path) =>
    location.pathname === path
      ? "bg-black text-white"
      : "bg-transparent text-black hover:bg-black hover:text-white";

  return (
    <>
      {/* TOP HEADER SECTION */}
      <section className="w-full bg-[#f6f3ee]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-12 py-16 gap-10">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              New Arrival
            </h1>
            <p className="text-gray-600 text-lg">
              Fresh drops just in—explore the latest must-haves before they’re gone.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="https://framerusercontent.com/images/QJO8Npsh1Ojp8Xa0MvNcGcDKHg.png"
              alt="New Arrival"
              className="w-[320px] md:w-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* COLLECTION BUTTONS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
          Collections:
        </h2>

        <div className="flex flex-wrap gap-4">

          <Link
            to="/bestsellers"
            className={`px-6 py-2 border border-black rounded-full transition ${isActive("/collection/bestsellers")}`}
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
            to="/mens"  // duplicate
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
            to="/style-essentials"
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

        {/* Loader */}
        <div className="flex justify-center mt-10">
          <div className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NewArrival;
