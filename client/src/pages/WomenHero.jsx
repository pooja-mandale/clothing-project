import React from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const WomenPage = () => {
    const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "bg-black text-white"
      : "bg-transparent text-black hover:bg-black hover:text-white";
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="w-full bg-[#f5f2e9]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center px-6 md:px-10 py-16 md:py-24">

          {/* LEFT TEXT */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif font-semibold">
              Women's
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed max-w-md">
              Effortlessly chic and made to move with you.
              Find your signature look here.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center mt-10 md:mt-0">
            <img
              src="https://framerusercontent.com/images/ro77CWCbfYuuwiGwO55K1BjlRA.png"
              alt="Woman model"
              className="w-[300px] md:w-[450px] object-cover"
            />
          </div>

        </div>
      </section>

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
       
               {/* Loading Spinner (optional) */}
               <div className="flex justify-center mt-10">
                 <div className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
               </div>
             </section>
             <Footer/>
    </div>
  );
};

export default WomenPage;
