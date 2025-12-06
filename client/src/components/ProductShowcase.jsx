import React from "react";

const ProductShowcase = () => {
  return <>
<div className="h-40 flex items-center justify-center m-4 p-4">
  <h1 className="text-4xl font-serif text-center">Top Collection</h1>
</div>


    <section className="w-full bg-white px-4 md:px-10 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT BIG IMAGE */}
        <div className="relative col-span-1 md:col-span-2 h-[450px] md:h-[650px]">
          <img
            src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&w=900"
            alt="Bestseller"
            className="w-full h-full object-cover rounded-md"
          />

          <h2 className="absolute bottom-6 left-6 text-white text-3xl font-serif font-semibold drop-shadow-lg">
            Bestseller's
          </h2>
        </div>

        {/* RIGHT SIDE 2 IMAGES */}
        <div className="flex flex-col gap-6">

          {/* TOP SMALL IMAGE */}
          <div className="relative h-[300px] md:h-[315px]">
            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&w=700"
              alt="New Arrivals"
              className="w-full h-full object-cover rounded-md"
            />

            <h2 className="absolute bottom-6 left-6 text-white text-2xl md:text-3xl font-serif font-semibold drop-shadow-lg">
              New arrivals
            </h2>
          </div>

          {/* BOTTOM SMALL IMAGE */}
          <div className="relative h-[300px] md:h-[315px]">
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&w=700"
              alt="Style Essentials"
              className="w-full h-full object-cover rounded-md"
            />

            <h2 className="absolute bottom-6 left-6 text-white text-2xl md:text-3xl font-serif font-semibold drop-shadow-lg">
              Style Essentials
            </h2>
          </div>

        </div>
      </div>
    </section>
  </>
};

export default ProductShowcase;
