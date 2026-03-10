import { Outlet } from "react-router-dom";

import ScrollToTopButton from "../components/shared/ScrollToTopButton";
import Sidebar from "../components/DashboardPageComponents/Sidebar";

const DashboardLayout = () => {
  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1">
          <Outlet />
        </div>
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default DashboardLayout;
