import React from "react";
import Footer from "../components/Footer";

const ShopPage = () => {
  return (
    <div className="w-full">

      {/* ------------------------ BANNER SECTION ------------------------ */}
      <section className="w-full bg-[#f5f2e9]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center px-6 md:px-10 py-16 md:py-24">

          {/* LEFT TEXT */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif font-semibold leading-tight">
              Exclusive offer: <br />
              20% Off + free gift!
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed max-w-md">
              It’s our way of saying thank you for choosing us as your
              go-to destination for quality fashion.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center mt-10 md:mt-0">
            <img
              src="https://framerusercontent.com/images/g3kaWq22fzOJwm5xhcbf0a5dMA.png?width=360&height=570"
              alt="Shop model"
              className="w-[300px] md:w-[450px] object-cover"
            />
          </div>

        </div>
      </section>



      {/* ------------------------ FILTER SECTION ------------------------ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-3 gap-10">

        {/* FILTERS LEFT */}
        <div>
          <h2 className="text-2xl font-serif mb-6">Filter:</h2>

          {/* Availability */}
          <div className="mb-8">
            <p className="font-medium mb-2">Availability</p>
            <hr className="mb-3" />

            <div className="space-y-3 text-gray-700">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="radio" name="availability" />
                <span>In stock</span>
              </label>

              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="radio" name="availability" defaultChecked />
                <span>Out of stock</span>
              </label>
            </div>
          </div>

          {/* Category */}
          <div>
            <p className="font-medium mb-2">Category</p>
            <hr className="mb-3" />

            <label className="flex items-center space-x-2 cursor-pointer text-gray-700">
              <input type="radio" name="category" defaultChecked />
              <span>All products</span>
            </label>
          </div>
        </div>

        {/* PRODUCTS RIGHT */}
        <div className="md:col-span-2 flex items-start justify-center">
          <p className="text-gray-600 text-lg">No products found.</p>
        </div>

      </section>
      <Footer/>
    </div>
  );
};

export default ShopPage;
