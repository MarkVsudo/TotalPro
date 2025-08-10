import { PiFanFill } from "react-icons/pi";
import { GiElectric, GiScrew } from "react-icons/gi";
import { FaPeopleCarry } from "react-icons/fa";
import { MdOutlinePlumbing } from "react-icons/md";
import { BiSolidCctv } from "react-icons/bi";
import { RiLayoutGridFill } from "react-icons/ri";
import { RiSofaFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <PiFanFill className="text-4xl text-[#002B5B] mb-4" />,
    title: "Климатици – продажба, монтаж и демонтаж",
    description: "Продажба, монтаж и демонтаж на климатици.",
    link: "/air-conditioning",
  },
  {
    icon: <GiElectric className="text-4xl text-[#002B5B] mb-4" />,
    title: "Електроинсталации",
    description: "Изграждане и ремонт на ел. инсталации.",
    link: "/electric-installations",
  },
  {
    icon: <FaPeopleCarry className="text-4xl text-[#002B5B] mb-4" />,
    title: "Хамалски услуги",
    description: "Преместване и транспорт на товари.",
    link: "/moving-services",
  },
  {
    icon: <GiScrew className="text-4xl text-[#002B5B] mb-4" />,
    title: "Гипсокартон и довършителни работи",
    description: "Монтаж на гипсокартон и прегради.",
    link: "/drywall",
  },
  {
    icon: <BiSolidCctv className="text-4xl text-[#002B5B] mb-4" />,
    title: "СОТ и охранителни системи",
    description: "Монтаж на охранителни системи.",
    link: "/security-alarm-equipment",
  },
  {
    icon: <MdOutlinePlumbing className="text-4xl text-[#002B5B] mb-4" />,
    title: "ВиК услуги",
    description: "Ремонт и монтаж на ВиК инсталации.",
    link: "/plumbing-services",
  },
  {
    icon: <RiLayoutGridFill className="text-4xl text-[#002B5B] mb-4" />,
    title: "Плочкаджийски услуги",
    description: "Полагане на плочки и гранитогрес.",
    link: "/tiling-services",
  },
  {
    icon: <RiSofaFill className="text-4xl text-[#002B5B] mb-4" />,
    title: "Мебели по поръчка",
    description: "Изработка на индивидуални мебели.",
    link: "/furniture",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="my-24 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-[#002B5B] mb-12">
        Услугите, които предлагаме
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const isLastRow = index >= Math.floor(services.length / 3) * 3;
          const colSpanClass =
            services.length % 3 === 2 && isLastRow
              ? index % 3 === 0
                ? "lg:translate-x-[50%]" // first item of last row
                : "lg:translate-x-[50%]" // second item
              : "";

          return (
            <Link to={service.link} key={index} className={colSpanClass}>
              <div className="p-6 border border-[#002B5B] rounded-2xl shadow-md bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group h-full">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#002B5B] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  {service.description}
                </p>
                <button className="group text-[#002B5B] border-[#002B5B] border-2 px-4 py-2 rounded-md font-medium text-lg inline-flex items-center gap-1 duration-300 mt-auto cursor-pointer">
                  Виж повече
                  <span
                    aria-hidden="true"
                    className="transform transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
