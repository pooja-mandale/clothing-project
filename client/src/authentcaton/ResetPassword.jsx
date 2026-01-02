import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useResetPasswordMutation } from "../redux/apis/userApi";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [resetPassword, { isSuccess, isError, error, isLoading }] =
    useResetPasswordMutation();

  const formik = useFormik({
    initialValues: {
      email: localStorage.getItem("resetEmail") || "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("New password is required"),
    }),

    onSubmit: (values) => {
      resetPassword({
        email: values.email,
        newPassword: values.password,
      });
    },
  });

  // ✅ HANDLE SUCCESS & ERROR TOAST
  useEffect(() => {
    if (isSuccess) {
      toast.success("🔐 Password reset successful!");
      localStorage.removeItem("resetEmail");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }

    if (isError) {
      toast.error(error?.data?.message || "Password reset failed");
    }
  }, [isSuccess, isError]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Reset Password
        </h2>
        <p className="text-gray-500 text-center mt-2 mb-6">
          Enter your new password below
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

          {/* PASSWORD */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="New password"
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
            {isLoading ? "Resetting..." : "Reset Password"}
          </button>

          {/* BACK TO LOGIN */}
          <p className="text-center text-sm text-gray-500">
            Back to{" "}
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

export default ResetPassword;
