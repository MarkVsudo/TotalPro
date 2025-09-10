import { Outlet } from "react-router-dom";

import ScrollToTopButton from "../components/shared/ScrollToTopButton";
import Navbar from "../components/DashboardPageComponents/Navbar";

const DashboardLayout = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Navbar />
        <Outlet />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default DashboardLayout;
