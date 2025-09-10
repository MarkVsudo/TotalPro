import MainContent from "../../components/DashboardPageComponents/MainContent";
import Navbar from "../../components/DashboardPageComponents/Navbar";
import Sidebar from "../../components/DashboardPageComponents/Sidebar";

const DashboardPage = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Navbar />
        {/* <Sidebar /> */}
        {/* <div className="flex flex-col w-screen"> */}
        <MainContent />
        {/* </div> */}
      </div>
    </>
  );
};

export default DashboardPage;
