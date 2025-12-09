import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      alert("Login Successful!");
    },
  });

  return (
    <>
      {/* TOP TITLE */}
      <div className="w-full px-6 md:px-16 py-16">
        <h1 className="text-4xl md:text-5xl font-serif text-center">Login</h1>
        <p className="text-xl font-serif text-center mt-2">
          Welcome back! Please login to continue.
        </p>
      </div>

      {/* MAIN SECTION */}
      <div className="w-full bg-[#f8f6ef] min-h-screen">
        <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-20 px-6 lg:px-10 py-16">

          {/* ---------- LEFT FORM ---------- */}
          <div>
            <h2 className="text-2xl font-serif mb-8">
              Enter your login details
            </h2>

            <form onSubmit={formik.handleSubmit} className="max-w-md space-y-5">

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

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-black text-white rounded-full py-3 font-semibold hover:bg-gray-900 transition"
              >
                LOGIN
              </button>

              <p className="text-sm mt-3">
                Don't have an account?{" "}
                <a href="/register" className="text-black underline">
                  Register
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

export default LoginPage;
    