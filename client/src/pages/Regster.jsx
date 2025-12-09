import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegisterPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm your password"),
    }),
    onSubmit: () => {
      alert("Registration Successful!");
    },
  });

  return (
    <>
      {/* TOP TITLE */}
      <div className="w-full px-6 md:px-16 py-16">
        <h1 className="text-4xl md:text-5xl font-serif text-center">Register</h1>
        <p className="text-xl font-serif text-center mt-2">
          Create your account to start shopping.
        </p>
      </div>

      {/* MAIN SECTION */}
      <div className="w-full bg-[#f8f6ef] min-h-screen">
        <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-20 px-6 lg:px-10 py-16">

          {/* ---------- LEFT FORM ---------- */}
          <div>
            <h2 className="text-2xl font-serif mb-8">
              Create your new account
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

              {/* Password */}
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full bg-white border border-gray-300 rounded-full px-5 py-3 focus:ring-2 focus:ring-black outline-none"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {formik.errors.password && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full bg-white border border-gray-300 rounded-full px-5 py-3 focus:ring-2 focus:ring-black outline-none"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                />
                {formik.errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-black text-white rounded-full py-3 font-semibold hover:bg-gray-900 transition"
              >
                REGISTER
              </button>

              <p className="text-sm mt-3">
                Already have an account?{" "}
                <a href="/login" className="text-black underline">
                  Login
                </a>
              </p>
            </form>
          </div>

          {/* ---------- RIGHT IMAGE ---------- */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://framerusercontent.com/images/JDbHVQPwvkqaUvWxu8KwWYcm4.png?width=602&height=792"
              alt="model"
              className="w-[280px] sm:w-[330px] md:w-[400px] lg:w-[430px]"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default RegisterPage;
