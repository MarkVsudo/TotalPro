import { MdSpaceDashboard } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa6";
import { RiListOrdered2 } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import NavLogoImg from "../../assets/nav-logo.png";

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    {
      label: "Табло",
      icon: <MdSpaceDashboard size={20} />,
      path: "/dashboard",
    },
    {
      label: "Статистика",
      icon: <IoStatsChart size={20} />,
      path: "/dashboard/analytics",
    },
    {
      label: "Продукти",
      icon: <FaDatabase size={20} />,
      path: "/dashboard/products",
    },
    {
      label: "Поръчки",
      icon: <RiListOrdered2 size={20} />,
      path: "/dashboard/orders",
    },
  ];

  return (
    <div className="sticky top-0 flex flex-col px-5 py-6 h-[90vh] w-64 bg-white text-gray-800 shadow-xl rounded-r-xl">
      <Link to="/" className="flex items-center gap-3 mb-12 justify-center">
        <img
          alt="Nav logo"
          src={NavLogoImg}
          className="h-12 w-auto rounded-lg"
        />
      </Link>

      <nav className="flex flex-col gap-3 flex-1">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200
                ${
                  isActive
                    ? "bg-[#012A4A] text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100 hover:text-[#012A4A]"
                }`}
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto flex items-center justify-between bg-gray-100 px-4 py-3 rounded-xl shadow-inner">
        <div>
          <p className="text-sm font-semibold text-[#012A4A]">Марк Весков</p>
          <p className="text-xs text-gray-500">totalproltd@gmail.com</p>
        </div>
        <button className="text-gray-500 hover:text-red-500 transition">
          <TbLogout2 size={22} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
