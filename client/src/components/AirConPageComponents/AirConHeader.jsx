import AirConImg from "../../assets/air-con-img.png";
import AirConInfoImg from "../../assets/air-con-info-img.png";

const AirConHeader = () => {
  return (
    <div className="flex w-full">
      <div className="flex justify-between items-center bg-[#002B5B] w-1/2 px-12">
        <img
          alt="Aircon page header store image"
          src={AirConImg}
          className="w-75"
        />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-4xl text-white">Магазин</h1>
            <p className="text-white/85 text-lg">
              Продажба на различни видове климатици и аксесоари
            </p>
          </div>
          <button
            type="button"
            className="w-fit bg-white px-5 py-3 rounded-md font-medium shadow-md cursor-pointer hover:bg-gray-50 transition-colors"
          >
            Пазарувай
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center bg-white w-1/2 px-12">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-4xl text-[#002B5B]">Информация</h1>
            <p className="text-[#002B5B]/85 text-lg">
              Информационна страница за услугите ни свързани с климатици
            </p>
          </div>
          <button
            type="button"
            className="w-fit bg-[#002B5B] text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-900 focus:ring-2 focus:ring-[#002B5B] focus:ring-offset-2 transition-colors duration-200 cursor-pointer"
          >
            Проучи
          </button>
        </div>
        <img
          alt="Aircon page header information image"
          src={AirConInfoImg}
          className="w-75"
        />
      </div>
    </div>
  );
};

export default AirConHeader;
