import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../redux/apis/userApi";

const LoginPage = () => {
  const navigate = useNavigate();

  const [loginUser, { isSuccess, isError, error, isLoading }] =
    useLoginUserMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
   onSubmit: async (values) => {
  try {
    const res = await loginAdmin(values).unwrap();

    // ✅ IMPORTANT
    localStorage.setItem("admin", JSON.stringify(res.admin));

    toast.success("🎉 Admin login successful!");
    navigate("/dashboard", { replace: true });
  } catch (err) {
    console.log("LOGIN ERROR:", err);
    toast.error(err?.data?.message || "Admin login failed");
  }
}

  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("🎉 Login successful!");
      navigate("/dashboard");
    }

  //   if (isError) {
  //     toast.error(error?.data?.message || "Login failed");
  //   }
  }, [isSuccess, isError]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] px-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl grid md:grid-cols-2 overflow-hidden">

        {/* LEFT FORM */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back 👋</h2>
          <p className="text-gray-500 mt-2 mb-8">
            Login to continue your journey
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

            {/* ACTION ROW */}
            <div className="flex items-center justify-between text-sm">
              <span
                onClick={() => navigate("/forgot-password")}
                className="cursor-pointer text-gray-600 hover:underline"
              >
                Forgot password?
              </span>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition disabled:opacity-60"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>

            {/* REGISTER LINK */}
            <p className="text-center text-sm text-gray-500">
              Don’t have an account?{" "}
              <span
                onClick={() => navigate("/register")}
                className="text-black font-semibold cursor-pointer hover:underline"
              >
                Register
              </span>
            </p>
          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:flex items-center justify-center bg-[#f8f6ef]">
          <img
            src="https://framerusercontent.com/images/JDbHVQPwvkqaUvWxu8KwWYcm4.png"
            alt="Login"
            className="w-[380px]"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
