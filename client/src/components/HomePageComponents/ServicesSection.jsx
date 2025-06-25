import { PiFanFill } from "react-icons/pi";
import { GiElectric, GiScrew } from "react-icons/gi";
import { FaPeopleCarry } from "react-icons/fa";

const services = [
  {
    icon: <PiFanFill className="w-6 h-6 text-white" />,
    title: "Климатици – продажба, монтаж и демонтаж",
    description:
      "Професионална консултация, доставка, монтаж и демонтаж на климатици за дома и офиса. Работим с водещи марки и гарантираме качество и бързо обслужване.",
    link: "Виж повече",
  },
  {
    icon: <GiElectric className="w-6 h-6 text-white" />,
    title: "Електроинсталации",
    description:
      "Изграждане, поддръжка и ремонт на електроинсталации. Безопасно, надеждно и според всички стандарти. Подходящо както за ново строителство, така и за ремонти.",
    link: "Виж повече",
  },
  {
    icon: <FaPeopleCarry className="w-6 h-6 text-white" />,
    title: "Хамалски услуги",
    description:
      "Преместване, пренасяне и транспорт на мебели, техника и други товари. Работим бързо, внимателно и с опитен екип. Услуги за дома и бизнеса.",
    link: "Виж повече",
  },
  {
    icon: <GiScrew className="w-6 h-6 text-white" />,
    title: "Гипсокартон и довършителни работи",
    description:
      "Монтаж на гипсокартон, окачени тавани и вътрешни прегради. Прецизност, качество и спазване на срокове – за естетичен и функционален интериор.",
    link: "Виж повече",
  },
];

const ServicesSection = () => {
  return (
    <section className="my-12 px-4 max-w-7xl mx-auto">
      <div className="flex justify-center mb-8">
        <h2 className="text-4xl font-bold mb-4 text-[#002B5B]">
          Услугите, които предлагаме
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="group px-4 py-6 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:bg-gradient-to-br hover:from-[#002B5B] hover:to-blue-900"
            style={{ backgroundColor: "var(--blue)" }}
          >
            <div className="bg-blue-900 w-10 h-10 flex items-center justify-center rounded-lg mb-4">
              {service.icon}
            </div>
            <h3 className="font-semibold text-lg text-white duration-300 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-200 group-hover:text-gray-100 transition-colors duration-300 mb-4">
              {service.description}
            </p>
            <a
              href="#"
              className="group text-gray-100 font-medium inline-flex items-center gap-1 transition-colors duration-300 group-hover:text-white"
            >
              {service.link}
              <span
                aria-hidden="true"
                className="transform transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
