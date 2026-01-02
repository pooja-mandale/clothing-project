import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  useVerifyOtpMutation,
  useForgotPasswordMutation,
} from "../redux/apis/userApi";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("resetEmail");

  const [verifyOtp, { isSuccess, isError, error, isLoading }] = useVerifyOtpMutation()

  const [forgotPassword, { isLoading: resendLoading }] = useForgotPasswordMutation();

  const formik = useFormik({
    initialValues: {
      otp: "",
    },

    validationSchema: Yup.object({
      otp: Yup.string()
        .length(4, "OTP must be 4 digits")
        .required("OTP is required"),
    }),

    onSubmit: (values) => {
      verifyOtp({
        email,
        otp: values.otp,
      });
    },
  });

  // ✅ VERIFY OTP RESPONSE
  useEffect(() => {
    if (isSuccess) {
      toast.success("✅ OTP verified successfully");
      setTimeout(() => {
        navigate("/reset-password");
      }, 1200);
    }

    if (isError) {
      toast.error(error?.data?.message || "OTP verification failed");
    }
  }, [isSuccess, isError]);

  // 🔁 RESEND OTP
  const handleResendOtp = async () => {
    if (!email) {
      toast.error("Email not found. Please try again.");
      return;
    }

    try {
      await forgotPassword({ email }).unwrap();
      toast.success("📩 OTP resent successfully");
    } catch (err) {
      toast.error(err?.data?.message || "Failed to resend OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Verify OTP
        </h2>
        <p className="text-gray-500 text-center mt-2 mb-6">
          Enter the 4-digit OTP sent to your email
        </p>

        <form onSubmit={formik.handleSubmit} className="space-y-5">

          {/* OTP INPUT */}
          <div>
            <input
              type="text"
              name="otp"
              maxLength={4}
              placeholder="Enter OTP"
              value={formik.values.otp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full text-center tracking-widest text-lg border rounded-xl px-4 py-3 focus:ring-2 focus:ring-black outline-none"
            />
            {formik.touched.otp && formik.errors.otp && (
              <p className="text-red-500 text-sm mt-1 text-center">
                {formik.errors.otp}
              </p>
            )}
          </div>

          {/* VERIFY BUTTON */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition disabled:opacity-60"
          >
            {isLoading ? "Verifying..." : "Verify OTP"}
          </button>

          {/* RESEND OTP */}
          <p className="text-center text-sm text-gray-500">
            Didn’t receive OTP?{" "}
            <span
              onClick={handleResendOtp}
              className={`font-semibold cursor-pointer hover:underline ${
                resendLoading ? "opacity-50 pointer-events-none" : "text-black"
              }`}
            >
              {resendLoading ? "Resending..." : "Resend OTP"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;
