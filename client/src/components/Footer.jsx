import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f4f1ea] text-gray-800 pt-16 pb-10 px-6 lg:px-20">

      {/* SUBSCRIBE SECTION */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold">
          Subscribe to get 10% OFF
        </h2>
        <p className="mt-2 text-gray-600">
          Subscribe for store updates and discounts.
        </p>

        <div className="mt-6 flex items-center w-full max-w-md bg-white rounded-full shadow px-4 py-3">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 outline-none bg-transparent"
          />
          <button className="text-xl font-bold">→</button>
        </div>
      </div>

      {/* FOOTER LINKS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick links</h3>
          <ul className="space-y-2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/story">Story</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        {/* CATEGORIES */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li><Link to="/bestsellers">Bestseller's</Link></li>
            <li><Link to="/mens">Men's</Link></li>
            <li><Link to="/women">Women's</Link></li>
            <li><Link to="/arrival">New Arrival</Link></li>
            <li><Link to="/essentials">Style Essentials</Link></li>
            <li><Link to="/summer">Summer Collection</Link></li>
          </ul>
        </div>

        {/* CUSTOMER CARE */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
          <ul className="space-y-2">
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/shipping">Shipping & Returns</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/404">404</Link></li>
          </ul>
        </div>

      </div>

      {/* SOCIAL + COPYRIGHT */}
      <div className="max-w-7xl mx-auto mt-16 border-t border-gray-300 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">
        <p className="text-gray-600 text-sm">
          © Framerify 2025 KnitKnot. All Rights Reserved.
        </p>

        <div className="flex items-center gap-4">
          <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow">
            <img src="https://cdn-icons-png.flaticon.com/512/20/20673.png" className="w-4"/>
          </button>
          <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" className="w-4"/>
          </button>
          <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" className="w-4"/>
          </button>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
