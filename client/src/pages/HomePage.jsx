import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TopBanner from "../components/TopBanner";
import Cart from "../components/Cart";
import AboutUsSection from "../components/AboutUsSection";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import PartnersSection from "../components/PartnersSection";
import NewsletterSection from "../components/NewsletterSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
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
