import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useLoginAdminMutation } from "../../redux/apis/adminApi";

const AdminLoginPage = () => {
  const navigate = useNavigate();

  const [loginAdmin, { isSuccess, isError, error, isLoading }] =
    useLoginAdminMutation();

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

    localStorage.setItem("admin", JSON.stringify(res.admin));

    toast.success("🎉 Admin login successful!");
    navigate("/dashboard", { replace: true });
  } catch (err) {
    toast.error(err?.data?.message || "Admin login failed");
  }
}


  });

//   useEffect(() => {
//     if (isSuccess) {
//       toast.success("🎉 Admin login successful!");
//       navigate("/dashboard"); // admin dashboard route
//     }

//     if (isError) {
//       toast.error(error?.data?.message || "Admin login failed");
//     }
//   }, [isSuccess, isError, error, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] px-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl grid md:grid-cols-2 overflow-hidden">

        {/* LEFT FORM */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Admin Login 🔐
          </h2>
          <p className="text-gray-500 mt-2 mb-8">
            Login as admin to manage the system
          </p>

          <form onSubmit={formik.handleSubmit} className="space-y-5">

            {/* EMAIL */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Admin email"
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
              {isLoading ? "Logging in..." : "Login as Admin"}
            </button>
          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:flex items-center justify-center bg-[#f8f6ef]">
          <img
            src="https://framerusercontent.com/images/JDbHVQPwvkqaUvWxu8KwWYcm4.png"
            alt="Admin Login"
            className="w-[380px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
