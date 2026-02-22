import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import AirConImg from "../../assets/air-con-img.png";
import AirConServicesImg from "../../assets/air-con-services-img.png";

const STORE = "/air-conditioning";
const SERVICES = "/air-conditioning/services";

const isStorePath = (pathname) => pathname === STORE;

const AirConHeader = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const routeIsStore = isStorePath(pathname);
  const [uiIsStore, setUiIsStore] = useState(routeIsStore);

  useEffect(() => {
    setUiIsStore(routeIsStore);
  }, [routeIsStore]);

  const handleNavigate = (path) => {
    const targetIsStore = isStorePath(path);
    const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;

    if (isLargeScreen) {
      setUiIsStore(targetIsStore);
      window.setTimeout(() => navigate(path), 400);
    } else {
      navigate(path);
    }
  };

  const otherPath = routeIsStore ? SERVICES : STORE;

  return (
    <div className="relative w-full overflow-hidden">
      <div className="lg:hidden px-4 pt-4">
        <div className="flex rounded-xl  p-1 bg-white border border-gray-200 shadow-sm">
          <NavLink
            to={STORE}
            end
            className={({ isActive }) =>
              `flex-1 flex justify-center items-center text-center py-2 rounded-lg text-sm font-semibold transition
         ${isActive ? "bg-[#002B5B] text-white shadow" : "bg-white text-[#002B5B]"}`
            }
          >
            Магазин
          </NavLink>

          <NavLink
            to={SERVICES}
            className={({ isActive }) =>
              `flex-1 text-center py-2 rounded-lg text-sm font-semibold transition
         ${isActive ? "bg-[#002B5B] text-white shadow" : "bg-white text-[#002B5B]"}`
            }
          >
            Монтаж и профилактика
          </NavLink>
        </div>
      </div>
      <div className="lg:hidden px-6 py-6">
        {routeIsStore ? (
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-2xl text-[#002B5B]">Магазин</h1>
            <p className="text-[#002B5B]/80">
              Продажба на различни видове климатици и аксесоари
            </p>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => handleNavigate(otherPath)}
                className="flex-1 bg-[#002B5B] hover:bg-blue-900 text-white px-5 py-3 rounded-lg font-medium shadow-md transition-colors"
              >
                Към услуги
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-2xl text-[#002B5B]">
              Монтаж и профилактика
            </h1>
            <p className="text-[#002B5B]/80">
              Информационна страница за услугите ни свързани с климатици
            </p>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => handleNavigate(otherPath)}
                className="flex-1 bg-[#002B5B] hover:bg-blue-900 text-white px-5 py-3 rounded-lg font-medium shadow-md transition-colors"
              >
                Към магазин
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="hidden lg:flex relative w-full overflow-hidden">
        <div
          className={`custom-shape-aircon-store absolute top-0 h-full w-1/2 z-0 transition-transform duration-500 ease-in-out ${
            uiIsStore ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{
            background:
              "linear-gradient(135deg, #002B5B 25%, #003d7a 125%, #002B5B 150%)",
          }}
        />

        <div
          className={`flex flex-col-reverse sm:flex-row justify-between items-center w-1/2 px-6 sm:px-8 lg:pl-12 lg:pr-24 py-8 lg:py-0 z-10 transition-colors ${
            uiIsStore ? "text-white" : "text-[#002B5B]"
          }`}
        >
          <img
            alt="Aircon page header store image"
            src={AirConImg}
            className="w-40 sm:w-48 md:w-56 lg:w-65 mt-6 sm:mt-0"
          />

          <div className="flex flex-col gap-6 text-left">
            <div className="flex flex-col gap-1">
              <h1
                className={`font-bold text-4xl transition-colors ${
                  uiIsStore ? "text-white" : "text-[#002B5B]"
                }`}
              >
                Магазин
              </h1>
              <p
                className={`text-lg transition-colors ${
                  uiIsStore ? "text-white/85" : "text-[#002B5B]/85"
                }`}
              >
                Продажба на различни видове климатици и аксесоари
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleNavigate(STORE)}
              className={`w-fit px-5 py-3 rounded-lg font-medium shadow-md cursor-pointer transition-colors ${
                !uiIsStore
                  ? "bg-[#002B5B] hover:bg-blue-900 text-white"
                  : "bg-white hover:bg-gray-50 text-[#002B5B]"
              }`}
            >
              Към магазин
            </button>
          </div>
        </div>

        <div
          className={`custom-shape-aircon-services absolute top-0 right-0 h-full w-[calc(50%+6rem)] z-0 transition-transform duration-500 ease-in-out ${
            uiIsStore ? "translate-x-full" : "translate-x-0"
          }`}
          style={{
            background:
              "linear-gradient(135deg, #002B5B -50%, #003d7a 50%, #002B5B 150%)",
          }}
        />

        <div
          className={`flex flex-col sm:flex-row justify-between items-center w-1/2 px-6 sm:px-8 lg:px-12 py-8 lg:py-0 z-10 transition-colors ${
            uiIsStore ? "text-[#002B5B]" : "text-white"
          }`}
        >
          <div className="flex flex-col gap-6 text-left">
            <div className="flex flex-col gap-1">
              <h1
                className={`font-bold text-4xl transition-colors ${
                  uiIsStore ? "text-[#002B5B]" : "text-white"
                }`}
              >
                Монтаж и профилактика
              </h1>
              <p
                className={`text-lg transition-colors ${
                  uiIsStore ? "text-[#002B5B]/85" : "text-white/85"
                }`}
              >
                Информационна страница за услугите ни свързани с климатици
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleNavigate(SERVICES)}
              className={`w-fit py-3 px-5 rounded-lg font-medium shadow-md transition-colors cursor-pointer ${
                uiIsStore
                  ? "bg-[#002B5B] hover:bg-blue-900 text-white"
                  : "bg-white hover:bg-gray-50 text-[#002B5B]"
              }`}
            >
              Към услуги
            </button>
          </div>

          <img
            alt="Aircon page header services image"
            src={AirConServicesImg}
            className="w-40 sm:w-48 md:w-56 lg:w-65 mt-6 sm:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default AirConHeader;
