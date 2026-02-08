import { PiFanFill } from "react-icons/pi";
import { GiElectric, GiScrew } from "react-icons/gi";
import { FaPeopleCarry } from "react-icons/fa";
import { MdOutlinePlumbing } from "react-icons/md";
import { BiSolidCctv } from "react-icons/bi";
import { RiLayoutGridFill, RiSofaFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <PiFanFill className="text-4xl text-[#002B5B]" />,
    title: "Климатици – продажба, монтаж и демонтаж",
    description: "Продажба, монтаж и демонтаж на климатици.",
    link: "/air-conditioning",
  },
  {
    icon: <GiElectric className="text-4xl text-[#002B5B]" />,
    title: "Електроинсталации",
    description: "Изграждане и ремонт на ел. инсталации.",
    link: "/electric-installations",
  },
  {
    icon: <FaPeopleCarry className="text-4xl text-[#002B5B]" />,
    title: "Хамалски услуги",
    description: "Преместване и транспорт на товари.",
    link: "/moving-services",
  },
  {
    icon: <GiScrew className="text-4xl text-[#002B5B]" />,
    title: "Гипсокартон и довършителни работи",
    description: "Монтаж на гипсокартон и прегради.",
    link: "/drywall",
  },
  {
    icon: <BiSolidCctv className="text-4xl text-[#002B5B]" />,
    title: "СОТ и охранителни системи",
    description: "Монтаж на охранителни системи.",
    link: "/security-alarm-equipment",
  },
  {
    icon: <MdOutlinePlumbing className="text-4xl text-[#002B5B]" />,
    title: "ВиК услуги",
    description: "Ремонт и монтаж на ВиК инсталации.",
    link: "/plumbing-services",
  },
  {
    icon: <RiLayoutGridFill className="text-4xl text-[#002B5B]" />,
    title: "Плочкаджийски услуги",
    description: "Полагане на плочки и гранитогрес.",
    link: "/tiling-services",
  },
  {
    icon: <RiSofaFill className="text-4xl text-[#002B5B]" />,
    title: "Мебели по поръчка",
    description: "Изработка на индивидуални мебели.",
    link: "/furniture",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative">
      {/* subtle background to separate the section */}
      <div className="absolute inset-0 -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#002B5B]">
            Услугите, които предлагаме
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Изберете категория и вижте подробности за услугата.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const remainder = services.length % 3;

            // Detect last row when we have 2 items (8 services case)
            const isSecondLastRowItem =
              remainder === 2 && index === services.length - 2;
            const isLastItem = remainder === 2 && index === services.length - 1;

            let colPosition = "lg:col-span-2";

            if (isSecondLastRowItem) colPosition += " lg:col-start-2";
            if (isLastItem) colPosition += " lg:col-start-4";

            return (
              <Link
                to={service.link}
                key={index}
                className={`group h-full focus:outline-none ${colPosition}`}
                aria-label={`Виж повече за: ${service.title}`}
              >
                <div className="h-full rounded-2xl bg-white p-6 sm:p-7 shadow-sm ring-1 ring-[#002B5B]/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-[#002B5B]/25 focus-within:ring-2 focus-within:ring-[#002B5B]/50">
                  {/* icon badge */}
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#002B5B]/10 ring-1 ring-[#002B5B]/15 transition-transform duration-300 group-hover:scale-105">
                    {service.icon}
                  </div>

                  <h3 className="mt-4 text-lg sm:text-xl font-bold text-[#002B5B]">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 font-semibold text-[#002B5B]">
                    <span className="underline-offset-4 group-hover:underline">
                      Виж повече
                    </span>
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
