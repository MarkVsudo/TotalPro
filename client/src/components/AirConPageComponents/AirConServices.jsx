import {
  FaTools,
  FaSnowflake,
  FaWrench,
  FaSprayCan,
  FaRulerCombined,
  FaCalendarCheck,
  FaFilter,
  FaThermometerHalf,
  FaBuilding,
} from "react-icons/fa";

const services = [
  {
    title: "Демонтаж и монтаж на климатик",
    description:
      "Професионален монтаж и демонтаж на климатици за дома и офиса с гарантирано качество.",
    icon: <FaTools className="text-4xl text-[#002B5B] mb-4" />,
  },
  {
    title: "Климатизация за дома и офиса",
    description:
      "Монтаж и обслужване на климатични системи в жилища, офиси и търговски обекти.",
    icon: <FaBuilding className="text-4xl text-[#002B5B] mb-4" />,
  },
  {
    title: "Зареждане с фреон",
    description:
      "Дозареждане с хладилен агент и проверка на налягане и херметичност.",
    icon: <FaSnowflake className="text-4xl text-[#002B5B] mb-4" />,
  },
  {
    title: "Диагностика",
    description:
      "Професионална диагностика и проверка на ефективността на климатичните системи.",
    icon: <FaThermometerHalf className="text-4xl text-[#002B5B] mb-4" />,
  },
  {
    title: "Ремонт на климатик",
    description: "Професионален ремонт на електронни и механични повреди.",
    icon: <FaWrench className="text-4xl text-[#002B5B] mb-4" />,
  },
  {
    title: "Почистване на филтри",
    description:
      "Професионално почистване и смяна на филтри за оптимална работа на климатика.",
    icon: <FaFilter className="text-4xl text-[#002B5B] mb-4" />,
  },
  {
    title: "Антибактериална дезинфекция",
    description:
      "Самостоятелно почистване и обеззаразяване на вътрешното тяло.",
    icon: <FaSprayCan className="text-4xl text-[#002B5B] mb-4" />,
  },
  {
    title: "Удължаване на тръбен път",
    description:
      "Полагане на допълнителни тръби, кабели и канали над стандартния монтаж.",
    icon: <FaRulerCombined className="text-4xl text-[#002B5B] mb-4" />,
  },
  {
    title: "Абонаментна профилактика",
    description: "Годишни планове с отстъпки и регулярна грижа за климатика.",
    icon: <FaCalendarCheck className="text-4xl text-[#002B5B] mb-4" />,
  },
];

const AirConServices = () => {
  return (
    <div className="py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#002B5B] mb-6">
            Нашите услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Предлагаме пълен спектър от услуги за климатични системи, адаптирани
            към вашите потребности
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border border-[#002B5B] rounded-2xl shadow-md bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#002B5B] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AirConServices;
