import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../redux/apis/userApi";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [userRegister, { isSuccess, isError, error, isLoading }] =
    useRegisterUserMutation();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Password is required"),
    }),

    onSubmit: (values) => {
      userRegister(values);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("🎉 Registration successful!");
      formik.resetForm();
      setTimeout(() => navigate("/login"), 1500);
    }

    if (isError) {
      toast.error(error?.data?.message || "Registration failed");
    }
  }, [isSuccess, isError]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] px-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl grid md:grid-cols-2 overflow-hidden">
        
        {/* LEFT FORM */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
          <p className="text-gray-500 mt-2 mb-6">
            Join us and start your journey 🚀
          </p>

          <form onSubmit={formik.handleSubmit} className="space-y-5">
            {/* NAME */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-black outline-none"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.name}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-black outline-none"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-black outline-none"
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.password}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition disabled:opacity-60"
            >
              {isLoading ? "Creating Account..." : "Register"}
            </button>

            {/* LOGIN LINK */}
            <p className="text-center text-sm text-gray-500 mt-4">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-black font-semibold cursor-pointer hover:underline"
              >
                Login
              </span>
            </p>
          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:flex items-center justify-center bg-[#f8f6ef]">
          <img
            src="https://framerusercontent.com/images/JDbHVQPwvkqaUvWxu8KwWYcm4.png"
            alt="Register"
            className="w-[380px]"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
