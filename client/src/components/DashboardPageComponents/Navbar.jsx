import NavLogoImg from "../../assets/nav-logo.png";
import { Link } from "react-router-dom";
import { IoStatsChart } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa6";
import { RiListOrdered2 } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import { useState } from "react";

const navButtons = [
  { icon: <IoStatsChart size={18} />, title: "Статистика", url: "#" },
  { icon: <FaDatabase size={18} />, title: "Продукти", url: "#" },
  { icon: <RiListOrdered2 size={18} />, title: "Поръчки", url: "#" },
];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mx-auto flex w-full items-center justify-between max-w-7xl p-4 lg:px-8 bg-white ">
      {/* Лого */}
      <Link to="/">
        <span className="sr-only">TotalPro</span>
        <img alt="Nav logo" src={NavLogoImg} className="h-10 w-auto" />
      </Link>

      {/* Нав бутони */}
      <div className="flex justify-center items-center gap-6 px-4 py-2  rounded-lg">
        {navButtons.map((btn, index) => (
          <Link
            key={index}
            to={btn.url}
            onClick={() => setActiveIndex(index)}
            className={`flex gap-2 items-center px-3 py-2 rounded-lg transition-all duration-200 
              ${
                activeIndex === index
                  ? "bg-[#002B5B] text-white shadow-md scale-105"
                  : "text-[#002B5B] hover:bg-[#002B5B]/10 hover:scale-105"
              }`}
          >
            {btn.icon}
            <span className="font-semibold text-sm">{btn.title}</span>
          </Link>
        ))}
      </div>

      {/* Logout бутон */}
      <Link
        to="/logout"
        className="flex gap-2 justify-center items-center bg-[#002B5B] text-white px-4 py-2 rounded-lg hover:bg-[#014580] transition-all shadow-md"
      >
        <TbLogout2 size={18} />
        <span className="font-semibold text-sm">Изход</span>
      </Link>
    </div>
  );
};

export default Navbar;
