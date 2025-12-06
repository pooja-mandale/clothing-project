import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Bestseller from "./pages/BestSellers";
import Mens from "./pages/Mens";
import WomenPage from "./pages/WomenHero";
import ShopPage from "./pages/Shop";
import ContactPage from "./pages/Contact";

// Lazy Loading Pages
const Home = lazy(() => import("./pages/Home"));
const NewArrival = lazy(() => import("./pages/NewArrival"));

const App = () => {
  return (
    <BrowserRouter>

      {/* NAVBAR should show on all pages */}
      <Navbar />

      {/* All pages will now lazy load */}
      <Suspense fallback={<div className="p-10 text-center text-xl">Loading...</div>}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arrival" element={<NewArrival />} />
         <Route path="/bestsellers" element={<Bestseller />} /> 
         <Route path="/mens" element={<Mens />} /> 
         <Route path="/women" element={<WomenPage />} /> 
         <Route path="/shop" element={<ShopPage />} /> 
         <Route path="/contact" element={<ContactPage />} /> 
          <Route path="*" element={<h1 className="text-center text-3xl mt-20">Page Not Found</h1>} />
        </Routes>

      </Suspense>

    </BrowserRouter>
  );
};

export default App;
