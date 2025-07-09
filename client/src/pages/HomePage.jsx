import HeroSection from "../components/HomePageComponents/HeroSection";
import AboutUsSection from "../components/HomePageComponents/AboutUsSection";
import ContactSection from "../components/HomePageComponents/ContactSection";
import PartnersSection from "../components/HomePageComponents/PartnersSection";
import ServicesSection from "../components/HomePageComponents/ServicesSection";
import ProjectsSection from "../components/HomePageComponents/ProjectsSection";
import NewsletterSection from "../components/HomePageComponents/NewsletterSection";
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PartnersSection />
      <ProjectsSection />
      <AboutUsSection />
      <ContactSection />
      <NewsletterSection />
    </>
  );
};

export default HomePage;
