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

    const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;

    if (isLargeScreen) {
      setTimeout(() => {
        navigate(path);
      }, 400);
    } else {
      navigate(path);
    }
  };

  return (
    <div className="relative flex flex-col lg:flex-row w-full overflow-hidden">
      {/* Desktop background - Store */}
      <div
        className={`custom-shape-aircon-store hidden lg:block absolute top-0 h-full w-1/2 z-0 transition-transform duration-500 ease-in-out ${
          isStore ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          background:
            "linear-gradient(135deg, #002B5B 25%, #003d7a 125%, #002B5B 150%)",
        }}
      />

      {/* STORE SECTION — completely hidden on mobile when active */}
      <div
        className={`${
          isStore ? "hidden lg:flex" : "flex"
        } flex-col-reverse sm:flex-row justify-between items-center w-full lg:w-1/2 px-6 sm:px-8 lg:pl-12 lg:pr-24 py-8 lg:py-0 z-10 transition-colors ${
          isStore
            ? "bg-gradient-to-br from-[#002B5B] via-[#003d7a] to-[#002B5B] lg:bg-none"
            : "bg-white lg:bg-transparent"
        }`}
      >
        <img
          alt="Aircon page header store image"
          src={AirConImg}
          className="w-40 sm:w-48 md:w-56 lg:w-65 mt-6 sm:mt-0"
        />

        <div className="flex flex-col gap-4 lg:gap-6 text-center sm:text-left">
          <div className="flex flex-col gap-1">
            <h1
              className={`font-bold text-3xl sm:text-4xl transition-colors ${
                isStore ? "text-white" : "text-[#002B5B]"
              }`}
            >
              Магазин
            </h1>
            <p
              className={`text-base sm:text-lg transition-colors ${
                isStore ? "text-white/85" : "text-[#002B5B]/85"
              }`}
            >
              Продажба на различни видове климатици и аксесоари
            </p>
          </div>

          <button
            type="button"
            onClick={() => handleNavigate("/air-conditioning")}
            className={`w-full sm:w-fit ${
              !isStore
                ? "bg-[#002B5B] hover:bg-blue-900 text-white"
                : "bg-white hover:bg-gray-50 text-[#002B5B]"
            } px-5 py-3 rounded-lg font-medium shadow-md cursor-pointer transition-colors`}
          >
            Пазарувай
          </button>
        </div>
      </div>

      {/* Desktop background - Services */}
      <div
        className={`custom-shape-aircon-services hidden lg:block absolute top-0 right-0 h-full w-[calc(50%+6rem)]
         z-0 transition-transform duration-500 ease-in-out ${
           isStore ? "translate-x-full" : "translate-x-0"
         }`}
        style={{
          background:
            "linear-gradient(135deg, #002B5B -50%, #003d7a 50%, #002B5B 150%)",
        }}
      />

      {/* SERVICES SECTION — completely hidden on mobile when active */}
      <div
        className={`${
          !isStore ? "hidden lg:flex" : "flex"
        } flex-col sm:flex-row justify-between items-center w-full lg:w-1/2 px-6 sm:px-8 lg:px-12 py-8 lg:py-0 z-10 transition-colors ${
          isStore
            ? "bg-white lg:bg-transparent"
            : "bg-gradient-to-br from-[#002B5B] via-[#003d7a] to-[#002B5B] lg:bg-none"
        }`}
      >
        <div className="flex flex-col gap-4 lg:gap-6 text-center sm:text-left">
          <div className="flex flex-col gap-1">
            <h1
              className={`font-bold text-3xl sm:text-4xl ${
                isStore ? "text-[#002B5B]" : "text-white"
              } transition-colors`}
            >
              Монтаж и профилактика
            </h1>
            <p
              className={`${
                isStore ? "text-[#002B5B]/85" : "text-white/85"
              } text-base sm:text-lg transition-colors`}
            >
              Информационна страница за услугите ни свързани с климатици
            </p>
          </div>

          <button
            type="button"
            onClick={() => handleNavigate("/air-conditioning/services")}
            className={`w-full sm:w-fit ${
              isStore
                ? "bg-[#002B5B] hover:bg-blue-900 text-white"
                : "bg-white hover:bg-gray-50 text-[#002B5B]"
            } py-3 px-5 rounded-lg font-medium shadow-md transition-colors cursor-pointer`}
          >
            Проучи
          </button>
        </div>

        <img
          alt="Aircon page header services image"
          src={AirConServicesImg}
          className="w-40 sm:w-48 md:w-56 lg:w-65 mt-6 sm:mt-0"
        />
      </div>
    </div>
  );
};

export default AirConHeader;
