import NavLogoImg from "../../assets/nav-logo.png";
import { Link } from "react-router-dom";
import { IoStatsChart } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa6";
import { RiListOrdered2 } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
const navButtons = [
  {
    icon: <IoStatsChart size={18} />,
    title: "Статистика",
    url: "/dashboard/analytics",
  },
  {
    icon: <FaDatabase size={18} />,
    title: "Продукти",
    url: "/dashboard/product-management",
  },
  {
    icon: <RiListOrdered2 size={18} />,
    title: "Поръчки",
    url: "/dashboard/orders",
  },
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
      <Menu as="div" className="relative inline-block">
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#002B5B] px-3 py-2 text-sm font-semibold text-white inset-ring-1 inset-ring-white/5 hover:bg-white/20">
          МВ
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-5 text-[#002B5B]"
          />
        </MenuButton>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
        >
          <div className="py-1">
            <form action="#" method="POST">
              <MenuItem>
                <button
                  type="submit"
                  className="flex w-full px-4 py-2 text-left text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                >
                  <TbLogout2 size={18} />
                  Sign out
                </button>
              </MenuItem>
            </form>
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default Navbar;
