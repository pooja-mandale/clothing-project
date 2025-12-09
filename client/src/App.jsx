import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Bestseller from "./pages/BestSellers";
import Mens from "./pages/Mens";
import WomenPage from "./pages/WomenHero";
import ShopPage from "./pages/Shop";
import ContactPage from "./pages/Contact";

// Lazy Loading Pages
const Home = lazy(() => import("./pages/Home"));
const NewArrival = lazy(() => import("./pages/NewArrival"));
const Login = lazy(() => import("./pages/login"));
const Register = lazy(() => import("./pages/Regster"));

/* ------------------------------------------
   LAYOUT 1 → NAVBAR दिसणार (Home/Shop/Mens…)
------------------------------------------- */
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

/* ------------------------------------------
   LAYOUT 2 → NAVBAR दिसणार नाही (Login/Register)
------------------------------------------- */
const AuthLayout = () => {
  return (
    <div className="w-full min-h-screen bg-[#f8f6ef]">
      <Outlet />
    </div>
  );
};

/* ------------------------------------------
   MAIN APP ROUTING (COMPLETE)
------------------------------------------- */
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="p-10 text-center text-xl">Loading...</div>}>

        <Routes>

          {/* Pages WITH NAVBAR */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/arrival" element={<NewArrival />} />
            <Route path="/bestsellers" element={<Bestseller />} />
            <Route path="/mens" element={<Mens />} />
            <Route path="/women" element={<WomenPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>

          {/* Pages WITHOUT NAVBAR (Login/Register) */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* 404 */}
          <Route
            path="*"
            element={<h1 className="text-center text-3xl mt-20">Page Not Found</h1>}
          />
        </Routes>

      </Suspense>
    </BrowserRouter>
  );
};

export default App;
