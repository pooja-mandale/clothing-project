import React, { useState } from "react";

const testimonials = [
  {
    text: "Exceptional customer service and stunning designs. I’ll definitely shop here again!",
    author: "James Brown.",
    location: "New York, NY",
  },
  {
    text: "Incredible customer service and beautiful packaging! Every order feels like a gift.",
    author: "Sarah Johnson.",
    location: "New York, NY",
  },
  {
    text: "Amazing styles and top quality material. Highly recommended!",
    author: "Daniel Carter.",
    location: "Los Angeles, CA",
  },
  {
    text: "Elegant designs and super fast delivery. My favourite store!",
    author: "Maria Gomez.",
    location: "Miami, FL",
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="w-full bg-[#eeeae4] px-4 sm:px-8 md:px-12 lg:px-20 py-16 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SIDE TEXT */}
        <div className="text-center lg:text-left">
          <p className="text-xs sm:text-sm tracking-widest text-gray-500">
            WHAT CLIENTS ARE SAYING
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium mt-4 leading-tight">
            Customer<br />care is our<br />priority
          </h1>

          {/* Slider bottom text + arrows */}
          <div className="flex items-center justify-center lg:justify-start gap-6 mt-8 sm:mt-10">
            <button
              onClick={prev}
              className="text-xl sm:text-2xl text-gray-700 hover:text-black"
            >
              ←
            </button>

            <span className="text-gray-700 font-medium text-base sm:text-lg">
              {index + 1}/{testimonials.length}
            </span>

            <button
              onClick={next}
              className="text-xl sm:text-2xl text-gray-700 hover:text-black"
            >
              →
            </button>
          </div>
        </div>

        {/* RIGHT SIDE — CARDS */}
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-300">

          {/* CARD 1 */}
          <div className="bg-white p-6 sm:p-8 shadow-md rounded-lg min-h-[250px] sm:min-h-[270px] flex flex-col justify-between">
            <p className="text-lg sm:text-xl leading-relaxed">
              "{testimonials[index].text}"
            </p>

            <div className="mt-4 sm:mt-6">
              <p className="text-yellow-500 text-lg sm:text-xl">★★★★★</p>
              <p className="font-semibold mt-2 text-sm sm:text-base">
                {testimonials[index].author}
                <span className="font-normal text-gray-600">
                  {" "} / {testimonials[index].location}
                </span>
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-6 sm:p-8 shadow-md rounded-lg min-h-[250px] sm:min-h-[270px] flex flex-col justify-between">
            <p className="text-lg sm:text-xl leading-relaxed">
              "{testimonials[(index + 1) % testimonials.length].text}"
            </p>

            <div className="mt-4 sm:mt-6">
              <p className="text-yellow-500 text-lg sm:text-xl">★★★★★</p>
              <p className="font-semibold mt-2 text-sm sm:text-base">
                {testimonials[(index + 1) % testimonials.length].author}
                <span className="font-normal text-gray-600">
                  {" "} / {testimonials[(index + 1) % testimonials.length].location}
                </span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
