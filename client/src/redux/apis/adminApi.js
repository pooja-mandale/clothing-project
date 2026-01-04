import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/admin`,credentials: "include" }),
  tagTypes: ["Admin"],
  endpoints: (builder) => ({

    // ✅ ADMIN REGISTER
    registerAdmin: builder.mutation({
      query: (data) => ({
        url: "/register-admin",
        method: "POST",
        body: data,
      }),
    }),

    // ✅ ADMIN LOGIN
  loginAdmin: builder.mutation({
  query: (data) => ({
    url: "/login-admin", // ⚠️ /admin-login नाही
    method: "POST",
    body: data,
  }),
}),

    // ✅ ADMIN LOGOUT
    logoutAdmin: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      transformResponse: (data) => {
        localStorage.removeItem("admin");
        return data;
      },
      invalidatesTags: ["Admin"],
    }),

  }),
});

export const {
  useRegisterAdminMutation,
  useLoginAdminMutation,
  useLogoutAdminMutation,
} = adminApi;
