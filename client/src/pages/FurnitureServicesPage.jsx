import React from "react";
import {
  FaCouch,
  FaHammer,
  FaBed,
  FaClock,
  FaUsers,
  FaTools,
  FaHome,
  FaBuilding,
  FaWarehouse,
  FaPhoneAlt,
  FaCheckCircle,
  FaStar,
  FaChair,
  FaDoorOpen,
  FaCube,
  FaPaintBrush,
  FaCalendarAlt,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaDraftingCompass,
  FaCog,
  FaRulerCombined,
} from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const FurnitureServicesPage = () => {
  const services = [
    {
      icon: <FaHome className="text-3xl text-[#002B5B]" />,
      title: "Домашни мебели",
      description:
        "Производство на мебели по поръчка за домове - кухни, спални, дневни и детски стаи.",
    },
    {
      icon: <FaBuilding className="text-3xl text-[#002B5B]" />,
      title: "Офис мебели",
      description:
        "Проектиране и изработка на офис мебели - бюра, шкафове, конферентни маси.",
    },
    {
      icon: <FaWarehouse className="text-3xl text-[#002B5B]" />,
      title: "Търговски обзавеждане",
      description:
        "Специализирани решения за магазини, шоуруми и търговски пространства.",
    },
    {
      icon: <FaCube className="text-3xl text-[#002B5B]" />,
      title: "Вградени мебели",
      description:
        "Гардероби, библиотеки и други вградени решения, максимално оползотворяващи пространството.",
    },
    {
      icon: <FaDoorOpen className="text-3xl text-[#002B5B]" />,
      title: "Кухни по поръчка",
      description:
        "Изработка на кухни с индивидуален дизайн, включващи всички необходими елементи.",
    },
    {
      icon: <FaBed className="text-3xl text-[#002B5B]" />,
      title: "Спални комплекти",
      description:
        "Пълни спални комплекти - легла, нощни шкафчета, гардероби и тоалетки.",
    },
    {
      icon: <FaChair className="text-3xl text-[#002B5B]" />,
      title: "Столове и маси",
      description:
        "Маси, столове и седящи мебели за всеки интериор и стил на живот.",
    },
    {
      icon: <FaPaintBrush className="text-3xl text-[#002B5B]" />,
      title: "Реставрация мебели",
      description:
        "Възстановяване и обновяване на стари мебели с модерни техники.",
    },
    {
      icon: <FaCalendarAlt className="text-3xl text-[#002B5B]" />,
      title: "Експресни поръчки",
      description: "Бързо изпълнение на спешни поръчки с гарантирано качество.",
    },
  ];

  const features = [
    {
      icon: <FaDraftingCompass className="text-2xl text-[#002B5B]" />,
      title: "Индивидуален дизайн",
      description: "Уникални решения, създадени специално за вашите нужди",
    },
    {
      icon: <FaClock className="text-2xl text-[#002B5B]" />,
      title: "Точни срокове",
      description: "Спазване на договорените срокове за изработка и монтаж",
    },
    {
      icon: <FaUsers className="text-2xl text-[#002B5B]" />,
      title: "Опитни майстори",
      description: "Сертифицирани мебелисти с дългогодишен опит в занаята",
    },
    {
      icon: <FaTools className="text-2xl text-[#002B5B]" />,
      title: "Качествени материали",
      description: "Използваме само най-добрите дървени материали и фурнитура",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Консултация и замерване",
      description:
        "Безплатна консултация, замерване на пространството и обсъждане на идеите",
      icon: FaPhone,
    },
    {
      step: "02",
      title: "Дизайн и проектиране",
      description:
        "Създаване на 3D визуализация и технически чертежи на мебелите",
      icon: FaDraftingCompass,
    },
    {
      step: "03",
      title: "Производство",
      description:
        "Изработка на мебелите в нашето производство с прецизни машини",
      icon: FaCog,
    },
    {
      step: "04",
      title: "Монтаж и финализиране",
      description: "Професионален монтаж в дома ви и окончателни корекции",
      icon: FaHammer,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="text-white py-12 md:py-16 lg:py-20"
        style={{
          background:
            "linear-gradient(135deg, #002B5B 0%, #003d7a 50%, #002B5B 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaCouch className="text-6xl mx-auto mb-6 text-white/80" />
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Производство и инсталиране на мебели
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Създаваме мебели, които съчетават функционалност с красота! От
              идеята до финалното изпълнение - предлагаме комплексни мебелни
              решения по индивидуален проект.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaCheckCircle />
                <span>Лицензирани и застраховани</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaStar />
                <span>25+ години опит</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaUsers />
                <span>Собствено производство</span>
              </div>
            </div>
            <HashLink
              to="/#contact"
              className="bg-white text-white w-max px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3 mx-auto group mb-4"
              style={{ color: "#002B5B" }}
            >
              <FaPhoneAlt className="group-hover:animate-pulse" />
              Получете безплатна оценка
            </HashLink>

            <p className="text-sm opacity-75">
              Свържете се с нас днес за персонализирана оферта
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#002B5B] mb-6">
              Нашите услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Предлагаме широка гама от мебелни услуги - от проектиране до
              финално инсталиране във вашия дом или офис
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

      {/* Features Section */}
      <div className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002B5B] mb-6">
              Защо да ни изберете
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Нашите предимства, които ни правят най-добрия избор за
              производство на мебели
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-6 rounded-full border border-[#002B5B] w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#002B5B] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002B5B] mb-6">
              Как работим
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Нашият процес осигурява перфектно изпълнение от първоначалната
              идея до финалното инсталиране
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-[#002B5B] shadow-lg rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="text-white" size={32} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#002B5B] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#002B5B] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="py-16 md:py-20 lg:py-24 text-white"
        style={{
          background:
            "linear-gradient(135deg, #002B5B 0%, #003d7a 50%, #002B5B 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Готови за уникални мебели?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Свържете се с нас днес за безплатна консултация и оферта без скрити
            такси. Нашият екип е готов да създаде перфектните мебели за вашия
            дом.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <FaPhone className="mb-4 text-white/80" size={48} />
              <h3 className="text-xl font-bold mb-2">Телефон</h3>
              <p className="text-white/80">+359 88 123 4567</p>
            </div>
            <div className="flex flex-col items-center">
              <FaEnvelope className="mb-4 text-white/80" size={48} />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-white/80">info@mebeli-pro.bg</p>
            </div>
            <div className="flex flex-col items-center">
              <FaMapMarkerAlt className="mb-4 text-white/80" size={48} />
              <h3 className="text-xl font-bold mb-2">Адрес</h3>
              <p className="text-white/80">София, България</p>
            </div>
          </div>

          <HashLink
            to="/#contact"
            className="bg-white text-white px-10 py-5 w-max rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3 mx-auto group mb-4"
            style={{ color: "#002B5B" }}
          >
            <FaPhoneAlt className="group-hover:animate-pulse" />
            Получете безплатна оценка
          </HashLink>

          <p className="text-sm opacity-75">
            Свържете се с нас днес за персонализирана оферта
          </p>
        </div>
      </section>
    </div>
  );
};

export default FurnitureServicesPage;
