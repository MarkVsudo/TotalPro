import { Outlet } from "react-router-dom";

import ScrollToTopButton from "../components/shared/ScrollToTopButton";
import Sidebar from "../components/DashboardPageComponents/Sidebar";

const DashboardLayout = () => {
  return (
    <>
      <div className="flex h-screen gap-6 py-10">
        <Sidebar />
        <Outlet />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default DashboardLayout;
