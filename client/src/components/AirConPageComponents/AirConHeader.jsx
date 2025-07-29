import { useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import AirConImg from "../../assets/air-con-img.png";
import AirConServicesImg from "../../assets/air-con-services-img.png";

const AirConHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const isStore = active === "/air-conditioning";

  const handleNavigate = (path) => {
    setActive(path);
    setTimeout(() => {
      navigate(path);
    }, 400); // Wait for the animation
  };

  return (
    <div className="relative flex w-full overflow-hidden">
      {/* Animated background shape */}
      <div
        className={`custom-shape-aircon-store absolute top-0 h-full w-1/2 z-0 transition-transform duration-500 ease-in-out ${
          isStore ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          background:
            "linear-gradient(135deg, #002B5B 0%, #003d7a 50%, #002B5B 100%)",
        }}
      ></div>

      {/* Left content - always visible */}
      <div className="flex justify-between items-center w-1/2 pl-12 pr-24 z-10">
        <img
          alt="Aircon page header store image"
          src={AirConImg}
          className="w-65"
        />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h1
              className={`font-bold text-4xl transition-colors ${
                isStore ? "text-white" : "text-[#002B5B]"
              }`}
            >
              Магазин
            </h1>
            <p
              className={`text-lg transition-colors ${
                isStore ? "text-white/85" : "text-[#002B5B]/85"
              }`}
            >
              Продажба на различни видове климатици и аксесоари
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleNavigate("/air-conditioning")}
            className={`w-fit ${
              !isStore
                ? "bg-[#002B5B] hover:bg-blue-900  text-white"
                : "bg-white hover:bg-gray-50 text-[#002B5B]"
            } px-5 py-3 rounded-lg font-medium shadow-md cursor-pointer transition-colors`}
          >
            Пазарувай
          </button>
        </div>
      </div>

      {/* Animated background shape */}
      <div
        className={`custom-shape-aircon-services absolute top-0 right-0 h-full w-[calc(50%+6rem)]
         z-0 transition-transform duration-500 ease-in-out ${
           isStore ? "translate-x-full" : "translate-x-0"
         }`}
        style={{
          background:
            "linear-gradient(135deg, #002B5B 0%, #003d7a 50%, #002B5B 100%)",
        }}
      ></div>

      {/* Right content - always visible */}
      <div className="flex justify-between items-center w-1/2 px-12 z-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h1
              className={`font-bold text-4xl ${
                isStore ? "text-[#002B5B]" : "text-white"
              } transition-colors`}
            >
              Монтаж и профилактика
            </h1>
            <p
              className={`${
                isStore ? "text-[#002B5B]/85" : "text-white/85"
              } text-lg transition-colors`}
            >
              Информационна страница за услугите ни свързани с климатици
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleNavigate("/air-conditioning/services")}
            className={`w-fit ${
              isStore
                ? "bg-[#002B5B] hover:bg-blue-900  text-white"
                : "bg-white hover:bg-gray-50 text-[#002B5B]"
            } py-3 px-5 rounded-lg font-medium shadow-md transition-colors cursor-pointer`}
          >
            Проучи
          </button>
        </div>
        <img
          alt="Aircon page header services image"
          src={AirConServicesImg}
          className="w-65"
        />
      </div>
    </div>
  );
};

export default AirConHeader;
