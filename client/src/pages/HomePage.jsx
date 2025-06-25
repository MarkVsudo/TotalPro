import Navbar from "../components/shared/Navbar";
import HeroSection from "../components/HomePageComponents/HeroSection";
import TopBanner from "../components/shared/TopBanner";
import Cart from "../components/shared/Cart";
import AboutUsSection from "../components/HomePageComponents/AboutUsSection";
import Footer from "../components/shared/Footer";
import ContactSection from "../components/HomePageComponents/ContactSection";
import PartnersSection from "../components/HomePageComponents/PartnersSection";
import NewsletterSection from "../components/HomePageComponents/NewsletterSection";
import ServicesSection from "../components/HomePageComponents/ServicesSection";
import ProjectsSection from "../components/HomePageComponents/ProjectsSection";
const HomePage = () => {
  return (
    <>
      <TopBanner />
      <Navbar />
      <Cart />
      <HeroSection />
      <ServicesSection />
      <PartnersSection />
      <ProjectsSection />
      <AboutUsSection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </>
  );
};

export default HomePage;
