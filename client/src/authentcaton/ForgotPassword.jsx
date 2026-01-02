import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForgotPasswordMutation } from "../redux/apis/userApi";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [forgotPassword, { isSuccess, isError, error, isLoading }] =
    useForgotPasswordMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),

    onSubmit: (values) => {
      // 🔐 save email for reset password page
      localStorage.setItem("resetEmail", values.email);
      forgotPassword(values);
    },
  });

  // ✅ HANDLE SUCCESS & ERROR
  useEffect(() => {
    if (isSuccess) {
      toast.success("📩 OTP sent to your email");
      setTimeout(() => {
        navigate("/verify-otp"); // 👉 next page
      }, 1500);
    }

    if (isError) {
      toast.error(error?.data?.message || "Failed to send OTP");
    }
  }, [isSuccess, isError]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Forgot Password?
        </h2>
        <p className="text-gray-500 text-center mt-2 mb-6">
          Enter your email to receive OTP
        </p>

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          
          {/* EMAIL */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
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

          {/* BUTTON */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition disabled:opacity-60"
          >
            {isLoading ? "Sending OTP..." : "Send OTP"}
          </button>

          {/* BACK TO LOGIN */}
          <p className="text-center text-sm text-gray-500">
            Remember your password?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-black font-semibold cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
