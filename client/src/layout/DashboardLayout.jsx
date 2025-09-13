import { Outlet } from "react-router-dom";

import ScrollToTopButton from "../components/shared/ScrollToTopButton";
import Sidebar from "../components/DashboardPageComponents/Sidebar";

const DashboardLayout = () => {
  return (
    <>
      <div className="flex items-center h-screen gap-6">
        <Sidebar />
        <Outlet />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default DashboardLayout;
