import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./apis/userApi";
// import { userApi } from "./apis/userApi";



const reduxStore = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,

    },
    middleware: dev => [...dev(), userApi.middleware]
})

export default reduxStore


