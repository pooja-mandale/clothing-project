import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Footer from "../components/Footer";

const ContactPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      alert("Message Sent Successfully!");
      resetForm();
    },
  });

  return <>
  <div className="w-full   px-6 md:px-16 py-20 p-4">
  <h1 className="text-4xl md:text-5xl font-serif text-center">
    Contact us
  </h1>
  <p className="text-2xl md:text-xl font-serif text-center">
    Have questions or feedback? Reach out to us <br />
     by filling out the form below.</p>
</div>

    <div className="w-full bg-[#f8f6ef] min-h-screen">

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-20 px-6 lg:px-10 py-16">

        {/* ---------------- LEFT FORM ---------------- */}
        <div>
          <h2 className="text-2xl font-serif mb-8 leading-snug">
            Feel free to message us with any questions or concerns.
          </h2>

          <form onSubmit={formik.handleSubmit} className="max-w-md space-y-5">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full bg-white border border-gray-300 rounded-full px-5 py-3 focus:ring-2 focus:ring-black outline-none"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.errors.name && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full bg-white border border-gray-300 rounded-full px-5 py-3 focus:ring-2 focus:ring-black outline-none"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                className="w-full bg-white border border-gray-300 rounded-2xl px-5 py-3 focus:ring-2 focus:ring-black outline-none"
                value={formik.values.message}
                onChange={formik.handleChange}
              />
              {formik.errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.message}
                </p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-black text-white rounded-full py-3 font-semibold hover:bg-gray-900 transition"
            >
              SEND
            </button>
          </form>
        </div>

        {/* ---------------- RIGHT IMAGE ---------------- */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://framerusercontent.com/images/JDbHVQPwvkqaUvWxu8KwWYcm4.png?width=602&height=792"
            alt="model"
            className="w-[280px] sm:w-[330px] md:w-[400px] lg:w-[430px] object-cover"
          />
        </div>
      </section>

      {/* ADDRESS BOX */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="bg-white p-8 rounded-xl border shadow-sm max-w-md">

          <h3 className="text-lg font-semibold mb-2">Address:</h3>
          <p>123 Oak Avenue</p>
          <p>Sunnyvale, CA 94085</p>

          <hr className="my-6" />

          <h3 className="text-lg font-semibold mb-2">Hours:</h3>
          <p>Monday – Friday: 10 AM – 6 PM</p>
          <p>Saturday – Sunday: 11 AM – 4 PM</p>

          <button className="mt-6 text-sm font-semibold flex items-center gap-2 hover:underline">
            FIND US ON MAPS ➜
          </button>
        </div>
      </div>

      {/* MAP */}
      <iframe
        className="w-full h-[350px] md:h-[450px]"
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0198390641097!2d-122.03118!3d37.33182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0cae784e67b%3A0x2a8dedc5ab0e5d8c!2sApple%20Park!5e0!3m2!1sen!2sus!4v1700000000000"
        loading="lazy"
        allowFullScreen
      ></iframe>

    </div>
    <Footer/>
  </>
};

export default ContactPage;
