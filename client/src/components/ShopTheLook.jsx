import React from "react";

const ShopTheLook = () => {
  return (
    <section className="w-full bg-white px-4 lg:px-16 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT — TWO BIG IMAGES */}
        <div className="col-span-2 grid grid-cols-2 gap-6">
          <img
            src="https://framerusercontent.com/images/Ll5ELvHpyRhf1NImYk8jPusN8wM.jpg?width=296&height=700"
            className="w-full h-[650px] object-cover rounded-lg"
          />
          <img
            src="https://framerusercontent.com/images/67cgu47p3XalCphUtWTA797M0S8.jpg?width=296&height=654"
            className="w-full h-[650px] object-cover rounded-lg"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-serif font-medium leading-tight">Shop<br />the look</h1>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Explore curated outfits to perfect<br />
            your style effortlessly.
          </p>

          {/* SMALL IMAGE GRID */}
          <div className="grid grid-cols-2 gap-4 mt-10">
            <img
              src="https://framerusercontent.com/images/JCdo1Zbx2D3DK5rP3VlCsAvGdsc.jpg?width=250&height=322"
              className="w-full h-40 object-cover rounded-md"
            />
            <img
              src="https://framerusercontent.com/images/Xo2m9b4aLPmQuWOGJhTprctJcn4.jpg?width=250&height=323"
              className="w-full h-40 object-cover rounded-md"
            />
            <img
              src="https://framerusercontent.com/images/CbLmh411PekZOY4hSBq1q3UFcE.jpg?width=251&height=323"
              className="w-full h-40 object-cover rounded-md"
            />
            <img
              src="https://framerusercontent.com/images/QOQznmgVNN2dBIaCveRf29Zcc4.jpg?width=249&height=318"
              className="w-full h-40 object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopTheLook;
