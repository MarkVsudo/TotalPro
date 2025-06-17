import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TopBanner from "../components/TopBanner";
import Cart from "../components/Cart";
import AboutUsSection from "../components/AboutUsSection";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <>
      <TopBanner />
      <Navbar />
      <Cart />
      <HeroSection />
      <AboutUsSection />
      <Footer />
    </>
  );
};

export default HomePage;
