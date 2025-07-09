import { Outlet } from "react-router-dom";

import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import TopBanner from "../components/shared/TopBanner";
import ScrollToTopButton from "../components/shared/ScrollToTopButton";
import Cart from "../components/shared/Cart";

const MainLayout = () => {
  return (
    <>
      <TopBanner />
      <Navbar />
      <Cart />
      <Outlet />
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default MainLayout;
