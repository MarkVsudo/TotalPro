import { Outlet } from "react-router-dom";
import TopBanner from "../components/shared/TopBanner";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const ServicesLayout = () => {
  return (
    <>
      <TopBanner />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default ServicesLayout;
