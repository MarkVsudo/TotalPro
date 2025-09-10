import { MdSpaceDashboard } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa6";
import { RiListOrdered2 } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import NavLogoImg from "../../assets/nav-logo.png";

const Sidebar = () => {
  return (
    <div className="flex flex-col px-6 py-4 h-max sticky top-0 w-64 gap-24 bg-[#002B5B] text-white shadow-lg rounded-lg">
      <Link to="/">
        <span className="sr-only">TotalPro</span>
        <img alt="Nav logo" src={NavLogoImg} className="h-10 w-auto" />
      </Link>

      <nav className="flex flex-col h-full gap-6">
        {[
          { label: "Статистика", icon: <IoStatsChart size={22} /> },
          { label: "Продукти", icon: <FaDatabase size={22} /> },
          { label: "Поръчки", icon: <RiListOrdered2 size={22} /> },
        ].map((item, index) => (
          <button
            key={index}
            className="flex items-center gap-4 hover:translate-x-1 transition-all cursor-pointer"
          >
            {item.icon}
            <span className="text-md">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="flex items-center justify-between ">
        <div>
          <p className="text-lg font-semibold">Марк Весков</p>
          <p className="text-sm text-gray-300">totalproltd@gmail.com</p>
        </div>
        <TbLogout2 size={22} />
      </div>
    </div>
  );
};

export default Sidebar;
