import FeaturedCollections from "../components/FeaturedCollections";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProductCollecton from "../components/ProductCollecton";
import CustomClothingSection from "../components/CustomClothingSection";
import ProductShowcase from "../components/ProductShowcase";
import ShopTheLook from "../components/ShopTheLook";
import TestimonialSection from "../components/TestimonialSection";
import HeroNews from "../components/HeroNews";
import SaleBanner from "../components/SaleBanner";
import InstagramSection from "../components/InstagramSection";


const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeaturedCollections />   
      <ProductCollecton />
      
      <CustomClothingSection />
      <ProductShowcase />
      <ShopTheLook/>
      <TestimonialSection/>
      <HeroNews/>
      <SaleBanner/>
<InstagramSection/>
      <Footer />
    </div>
  );
};

export default Home;
