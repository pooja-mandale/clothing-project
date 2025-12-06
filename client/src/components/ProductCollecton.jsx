import React from "react";

const ProductCollecton = () => {
  return <>
  <div className=" h-40 flex items-center m-4 p-4">
  <h1 className="text-4xl font-serif">Popular Products</h1>
</div>

    <section
      className="w-full h-[600px] relative bg-cover bg-center flex items-center object-cover"
      style={{
        backgroundImage: "url('https://plus.unsplash.com/premium_photo-1664202526047-405824c633e7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      }}
    >
      <div className="absolute inset-0 bg-opacity-20"></div>

      {/* Text Content */}
      <div className="relative max-w-4xl mx-8 lg:mx-20 p-6 bg-white rounded-md shadow-md">
        <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-4 text-black">
          Coastal breeze <br /> collection
        </h1>

        <p className="text-gray-700 mb-6 text-lg">
          Effortless style inspired by the coast.
        </p>

        <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
          SHOP NEW ARRIVAL
        </button>
      </div>
    </section>
  </>
};

export default ProductCollecton;
