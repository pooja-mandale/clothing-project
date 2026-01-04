import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
     baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/users`,credentials: "include" }),
    tagTypes: ["User"],
    endpoints: (builder) => ({

        // REGISTER
        registerUser: builder.mutation({
            query: (data) => ({
                url: "/register",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["User"]
        }),

        // LOGIN
        loginUser: builder.mutation({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data
            }),
            transformResponse: (data) => {
                localStorage.setItem("user", JSON.stringify(data.result));
                return data.result;
            },
            invalidatesTags: ["User"]
        }),

        // LOGOUT
        logOutUser: builder.mutation({
            query: () => ({
                url: "/logout",
                method: "POST"
            }),
            transformResponse: (data) => {
                localStorage.removeItem("user");
                return data;
            },
            invalidatesTags: ["User"]
        }),

        // FORGOT PASSWORD (SEND OTP)
        forgotPassword: builder.mutation({
            query: (data) => ({
                url: "/forgot-password",
                method: "POST",
                body: data
            })
        }),

        // VERIFY OTP
        verifyOtp: builder.mutation({
            query: (data) => ({
                url: "/verify-otp",
                method: "POST",
                body: data
            })
        }),

        // RESET PASSWORD
        resetPassword: builder.mutation({
            query: (data) => ({
                url: "/reset-password",
                method: "POST",
                body: data
            })
        }),

    })
});

export const {
    // useRegisterUserMutation,
    // useLoginUserMutation,
    // useLogOutUserMutation,
    // useForgotPasswordMutation,
    // useVerifyOtpMutation,
    // useResetPasswordMutation,
    useRegisterUserMutation,
    useLogOutUserMutation,
    useLoginUserMutation,
    useForgotPasswordMutation,
    useVerifyOtpMutation,
    useResetPasswordMutation
} = userApi;
