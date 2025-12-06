import React from "react";

const FeaturedCollections = () => {
  return (
    <section className="w-full bg-white py-16 px-4 lg:px-10 xl:px-32">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* LEFT TEXT */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl font-sans font-bold mb-4">
            Featured <br /> Collections
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Discover the latest additions to our best-selling Loungewear collection.
          </p>
          <button className="px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition font-medium">
            Shop Now
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Women Image */}
          <div className="w-full relative flex flex-col justify-end">
            <img
              src="https://framerusercontent.com/images/9YDHx4UhRPrDkoMbZlnwUWuYUU.jpg?width=572&height=852"
              alt="Women Outfit"
              className="w-full h-[500px] md:h-[600px] object-cover rounded-lg shadow-md translate-y-4 md:translate-y-6"
            />
            {/* Women link */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center gap-2 cursor-pointer text-black hover:text-gray-700 font-medium text-sm">
              <span>Women</span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
                alt="arrow"
                className="w-4 h-4"
              />
            </div>
          </div>

          {/* Men Image */}
          <div className="w-full relative flex flex-col justify-end">
            <img
              src="https://framerusercontent.com/images/2eAhYmtccmJmUsY6cDXZhUMcjo.jpg?width=572&height=975"
              alt="Men Outfit"
              className="w-full h-[500px] md:h-[600px] object-cover rounded-lg shadow-md -translate-y-4 md:-translate-y-6"
            />
            {/* Men link */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center gap-2 cursor-pointer text-black hover:text-gray-700 font-medium text-sm">
              <span>Men</span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
                alt="arrow"
                className="w-4 h-4"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
