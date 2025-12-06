import React from "react";

const InstagramSection = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-20 px-6 lg:px-16 relative overflow-hidden">

      <div className="max-w-6xl mx-auto relative">

        {/* LEFT SIDE IMAGES */}
        <div className="absolute left-0 top-10 space-y-6 hidden lg:block">
          
          <img
            src="https://framerusercontent.com/images/n0lQQczzjTxcD8GtHA7SWvJRk.jpg?width=284&height=312"
            className="w-60 rounded-lg shadow"
          />

          <img
            src="https://framerusercontent.com/images/rx3UPq5EH0T5jia3PP7q85HMKg.jpg?width=278&height=304"
            className="w-48 rounded-lg shadow -ml-8"
          />
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="absolute right-0 top-10 space-y-6 hidden lg:block">
          
          <img
            src="https://framerusercontent.com/images/3NvboJoFVUaBlNUciSOshNBtRc.jpg?width=233&height=255"
            className="w-60 rounded-lg shadow"
          />

          <img
            src="https://framerusercontent.com/images/K2BclV8D7vCNzKiogkrsfpZQYi8.jpg?width=279&height=306"
            className="w-48 rounded-lg shadow ml-10"
          />
        </div>

        {/* CENTER TEXT */}
        <div className="text-center py-24">

          <p className="uppercase tracking-widest text-gray-600 text-sm">
            Follow Us
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-semibold mt-2 leading-tight">
            We're KnitKnot <br /> on instagram
          </h2>

          <button className="mt-8 px-6 py-3 border border-black rounded-full flex items-center gap-2 mx-auto hover:bg-black hover:text-white transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
              className="w-5 h-5"
            />
            KNIT_KNOT
          </button>
        </div>

        {/* MOBILE IMAGES GRID */}
        <div className="grid grid-cols-2 gap-4 mt-8 lg:hidden">
          <img
            src="https://framerusercontent.com/images/n0lQQczzjTxcD8GtHA7SWvJRk.jpg?width=284&height=312"
            className="w-full rounded-lg shadow"
          />
          <img
            src="https://framerusercontent.com/images/rx3UPq5EH0T5jia3PP7q85HMKg.jpg?width=278&height=304"
            className="w-full rounded-lg shadow"
          />
          <img
            src="https://framerusercontent.com/images/3NvboJoFVUaBlNUciSOshNBtRc.jpg?width=233&height=255"
            className="w-full rounded-lg shadow"
          />
          <img
            src="https://framerusercontent.com/images/K2BclV8D7vCNzKiogkrsfpZQYi8.jpg?width=279&height=306"
            className="w-full rounded-lg shadow"
          />
        </div>

      </div>
    </section>
  );
};

export default InstagramSection;
