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
    <section id="services" className="py-12 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-[#002B5B] mb-12">
        Услугите, които предлагаме
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link to={service.link} key={index}>
            <div className="group p-6 border border-[#002B5B] rounded-2xl shadow-md bg-white hover:shadow-lg transition duration-300 flex flex-col items-center text-center h-full">
              {service.icon}
              <h3 className="text-xl font-semibold text-[#002B5B] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
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
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

// import { PiFanFill } from "react-icons/pi";
// import { GiElectric, GiScrew } from "react-icons/gi";
// import { FaPeopleCarry } from "react-icons/fa";
// import { MdOutlinePlumbing } from "react-icons/md";
// import { BiSolidCctv } from "react-icons/bi";
// import { RiLayoutGridFill } from "react-icons/ri";
// import { RiSofaFill } from "react-icons/ri";
// import { Link } from "react-router-dom";

// const services = [
//   {
//     icon: <PiFanFill className="w-6 h-6 text-white" />,
//     title: "Климатици – продажба, монтаж и демонтаж",
//     description:
//       "Професионална консултация, доставка, монтаж и демонтаж на климатици за дома и офиса. Работим с водещи марки и гарантираме качество и бързо обслужване.",
//     link: "/air-conditioning",
//   },
//   {
//     icon: <GiElectric className="w-6 h-6 text-white" />,
//     title: "Електроинсталации",
//     description:
//       "Изграждане, поддръжка и ремонт на електроинсталации. Безопасно, надеждно и според всички стандарти. Подходящо както за ново строителство, така и за ремонти.",
//     link: "/electric-installations",
//   },
//   {
//     icon: <FaPeopleCarry className="w-6 h-6 text-white" />,
//     title: "Хамалски услуги",
//     description:
//       "Преместване, пренасяне и транспорт на мебели, техника и други товари. Работим бързо, внимателно и с опитен екип. Услуги за дома и бизнеса.",
//     link: "/moving-services",
//   },
//   {
//     icon: <GiScrew className="w-6 h-6 text-white" />,
//     title: "Гипсокартон и довършителни работи",
//     description:
//       "Монтаж на гипсокартон, окачени тавани и вътрешни прегради. Прецизност, качество и спазване на срокове – за естетичен и функционален интериор.",
//     link: "/drywall",
//   },
//   {
//     icon: <BiSolidCctv className="w-6 h-6 text-white" />,
//     title: "СОТ и охранителни системи",
//     description:
//       "Проектиране, монтаж и поддръжка на системи за сигурност – СОТ, видеонаблюдение, контрол на достъп. Надеждни решения за дома, офиса и търговски обекти.",
//     link: "/security-alarm-equipment",
//   },
//   {
//     icon: <MdOutlinePlumbing className="w-6 h-6 text-white" />,
//     title: "ВиК услуги",
//     description:
//       "Изграждане и ремонт на водопроводни и канализационни инсталации. Отстраняване на течове, монтаж на санитария, смяна на щрангове и други ВиК дейности.",
//     link: "/plumbing-services",
//   },
//   {
//     icon: <RiLayoutGridFill className="w-6 h-6 text-white" />,
//     title: "Плочкаджийски услуги",
//     description:
//       "Полагане на плочки, фаянс, теракот и гранитогрес. Качествена работа с внимание към детайла – за бани, кухни, коридори и външни пространства.",
//     link: "/tiling-services",
//   },
//   {
//     icon: <RiSofaFill className="w-6 h-6 text-white" />,
//     title: "Мебели по поръчка",
//     description:
//       "Изработка и монтаж на мебели по индивидуален проект. Кухни, гардероби, шкафове и цялостно обзавеждане – съобразено с вашето пространство и стил.",
//     link: "/furniture",
//   },
// ];

// const ServicesSection = () => {
//   return (
//     <section id="services" className="my-12 px-4 max-w-7xl mx-auto">
//       <div className="flex justify-center mb-8">
//         <h2 className="text-4xl font-bold mb-4 text-[#002B5B]">
//           Услугите, които предлагаме
//         </h2>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
//         {/* Първите 6 услуги */}
//         {services.slice(0, 6).map((service, index) => (
//           <Link to={service.link} key={index}>
//             <div
//               className="group h-full flex flex-col justify-between px-4 py-6 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:bg-gradient-to-br hover:from-[#002B5B] hover:to-blue-900"
//               style={{ backgroundColor: "var(--blue)" }}
//             >
//               <div className="bg-blue-900 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
//                 {service.icon}
//               </div>
//               <h3 className="font-semibold text-lg text-white duration-300 mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-gray-200 group-hover:text-gray-100 transition-colors duration-300 mb-4">
//                 {service.description}
//               </p>
//               <span className="group text-gray-100 font-medium inline-flex items-center gap-1 transition-colors duration-300 group-hover:text-white">
//                 Виж повече
//                 <span
//                   aria-hidden="true"
//                   className="transform transition-transform duration-300 group-hover:translate-x-1"
//                 >
//                   →
//                 </span>
//               </span>
//             </div>
//           </Link>
//         ))}
//       </div>
//       {/* Последните 2 услуги */}
//       <div className="py-10 flex gap-10 ">
//         {services.slice(6).map((service, index) => (
//           <Link to={service.link} key={index}>
//             <div
//               className="group px-4 py-6 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:bg-gradient-to-br hover:from-[#002B5B] hover:to-blue-900"
//               style={{ backgroundColor: "var(--blue)" }}
//             >
//               <div className="bg-blue-900 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
//                 {service.icon}
//               </div>
//               <h3 className="font-semibold text-lg text-white duration-300 mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-gray-200 group-hover:text-gray-100 transition-colors duration-300 mb-4">
//                 {service.description}
//               </p>
//               <span className="group text-gray-100 font-medium inline-flex items-center gap-1 transition-colors duration-300 group-hover:text-white">
//                 Виж повече
//                 <span
//                   aria-hidden="true"
//                   className="transform transition-transform duration-300 group-hover:translate-x-1"
//                 >
//                   →
//                 </span>
//               </span>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;
