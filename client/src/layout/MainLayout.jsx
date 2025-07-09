import { Outlet } from "react-router-dom";

import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import TopBanner from "../components/shared/TopBanner";
import ScrollToTopButton from "../components/shared/ScrollToTopButton";

const MainLayout = () => {
  return (
    <>
      <TopBanner />
      <Navbar />
      <Outlet />
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default MainLayout;
