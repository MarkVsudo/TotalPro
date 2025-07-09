import {
  FaTools,
  FaTruckMoving,
  FaSnowflake,
  FaExclamationTriangle,
  FaWrench,
  FaLayerGroup,
  FaSprayCan,
  FaRulerCombined,
  FaCalendarCheck,
} from "react-icons/fa";

import { HashLink } from "react-router-hash-link";

const extraServices = [
  {
    title: "Демонтаж на климатик",
    description:
      "Професионално сваляне на вътрешно и външно тяло при подмяна или преместване.",
    icon: <FaTools className="text-4xl text-[#002B5B] mb-4" />,
  },
  {
    title: "Преместване на климатик",
    description: "Демонтаж, транспорт и повторен монтаж в друг обект или стая.",
    icon: <FaTruckMoving className="text-4xl text-[#002B5B] mb-4" />,
  },
  {
    title: "Зареждане с фреон",
    description:
      "Дозареждане с хладилен агент и проверка на налягане и херметичност.",
    icon: <FaSnowflake className="text-4xl text-[#002B5B] mb-4" />,
  },
  {
    title: "Диагностика при проблем",
    description: "Откриване на неизправности и изготвяне на оферта за ремонт.",
    icon: <FaExclamationTriangle className="text-4xl text-[#002B5B] mb-4" />,
  },
  {
    title: "Ремонт на климатик",
    description: "Професионален ремонт на електронни и механични повреди.",
    icon: <FaWrench className="text-4xl text-[#002B5B] mb-4" />,
  },
  {
    title: "Монтаж на стойки",
    description:
      "Смяна или монтаж на метални стойки за външно тяло – надеждно и здраво.",
    icon: <FaLayerGroup className="text-4xl text-[#002B5B] mb-4" />,
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

const AirConExtraServices = () => {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-[#002B5B] mb-12">Други услуги</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {extraServices.map((service, index) => (
          <div
            key={index}
            className="p-6 border border-[#002B5B] rounded-2xl shadow-md bg-white hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
          >
            {service.icon}
            <h3 className="text-xl font-semibold text-[#002B5B] mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <HashLink
          to="/#contact"
          className="bg-[#002B5B] hover:bg-blue-900 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
        >
          Отправи запитване за услуга
        </HashLink>
      </div>
    </div>
  );
};

export default AirConExtraServices;
