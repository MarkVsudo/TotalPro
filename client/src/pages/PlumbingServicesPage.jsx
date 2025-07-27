import React from "react";
import {
  FaTint,
  FaShower,
  FaClock,
  FaUsers,
  FaTools,
  FaHome,
  FaBuilding,
  FaWarehouse,
  FaPhoneAlt,
  FaCheckCircle,
  FaStar,
  FaFaucet,
  FaThermometerHalf,
  FaCalendarAlt,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaCog,
  FaHammer,
} from "react-icons/fa";
import { MdOutlinePlumbing } from "react-icons/md";

import { HashLink } from "react-router-hash-link";

const PlumbingServicesPage = () => {
  const services = [
    {
      icon: <FaHome className="text-3xl text-[#002B5B]" />,
      title: "Битови инсталации",
      description:
        "Професионален монтаж и ремонт на ВиК инсталации в домове и апартаменти.",
    },
    {
      icon: <FaBuilding className="text-3xl text-[#002B5B]" />,
      title: "Офис инсталации",
      description:
        "Комплексни ВиК решения за офиси, търговски центрове и административни сгради.",
    },
    {
      icon: <FaWarehouse className="text-3xl text-[#002B5B]" />,
      title: "Промишлени системи",
      description:
        "Специализирани водопроводни системи за фабрики, складове и промишлени обекти.",
    },
    {
      icon: <FaShower className="text-3xl text-[#002B5B]" />,
      title: "Баня и санитария",
      description:
        "Монтаж на душ кабини, вани, мивки и цялостно обновяване на бани.",
    },
    {
      icon: <FaThermometerHalf className="text-3xl text-[#002B5B]" />,
      title: "Отопление",
      description:
        "Инсталиране и поддръжка на отоплителни системи, радиатори и подово отопление.",
    },
    {
      icon: <FaFaucet className="text-3xl text-[#002B5B]" />,
      title: "Смесители и арматури",
      description:
        "Монтаж и ремонт на смесители, кранове и всички видове водопроводни арматури.",
    },
    {
      icon: <FaTint className="text-3xl text-[#002B5B]" />,
      title: "Течове и аварии",
      description:
        "Бързо отстраняване на течове, запушвания и аварийни ВиК проблеми.",
    },
    {
      icon: <FaCog className="text-3xl text-[#002B5B]" />,
      title: "Поддръжка и сервиз",
      description:
        "Редовна поддръжка на ВиК системи и превантивни прегледи за дългосрочна работа.",
    },
    {
      icon: <FaCalendarAlt className="text-3xl text-[#002B5B]" />,
      title: "Спешни ремонти",
      description:
        "24/7 спешна помощ при аварии - отстраняване на проблеми в рамките на часове.",
    },
  ];

  const features = [
    {
      icon: <FaCheckCircle className="text-2xl text-[#002B5B]" />,
      title: "Качествени материали",
      description:
        "Използваме само сертифицирани материали от водещи производители",
    },
    {
      icon: <FaClock className="text-2xl text-[#002B5B]" />,
      title: "Бърза реакция",
      description: "Бързо реагиране при аварии и спешни случаи 24/7",
    },
    {
      icon: <FaUsers className="text-2xl text-[#002B5B]" />,
      title: "Опитни майстори",
      description: "Лицензирани ВиК техници с богат професионален опит",
    },
    {
      icon: <FaTools className="text-2xl text-[#002B5B]" />,
      title: "Професионални инструменти",
      description:
        "Модерно оборудване и специализирани инструменти за всяка работа",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Безплатна консултация",
      description:
        "Оглед на обекта и безплатна консултация за най-подходящите ВиК решения",
      icon: FaPhone,
    },
    {
      step: "02",
      title: "Планиране и проектиране",
      description:
        "Създаваме детайлен план с оптимално разположение на инсталациите",
      icon: FaCog,
    },
    {
      step: "03",
      title: "Монтаж и изпълнение",
      description:
        "Професионален монтаж с използване на качествени материали и техника",
      icon: FaHammer,
    },
    {
      step: "04",
      title: "Тестване и гаранция",
      description:
        "Пълно тестване на системата и предоставяне на гаранция за работата",
      icon: FaCheckCircle,
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
            <MdOutlinePlumbing className="text-6xl mx-auto mb-6 text-white/80" />
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Професионални ВиК услуги
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Надежден партньор за всички ваши ВиК нужди! Предлагаме комплексни
              водопроводни и канализационни услуги с гарантирано качество и
              професионализъм на най-високо ниво.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaCheckCircle />
                <span>Лицензирани и застраховани</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaStar />
                <span>18+ години опит</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaUsers />
                <span>24/7 спешна помощ</span>
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
              Предлагаме широка гама от ВиК услуги, адаптирани към вашите
              специфични нужди за водопровод и канализация
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
              Нашите предимства, които ни правят най-добрия избор за ВиК услуги
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
              Нашият процес е проектиран да осигури максимално качество и
              надеждност на всеки ВиК проект
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
            Имате ВиК проблем?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Свържете се с нас днес за безплатна консултация и оферта без скрити
            такси. Нашият екип е готов да реши всеки ВиК проблем бързо и
            качествено.
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
              <p className="text-white/80">info@vik-service.bg</p>
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

export default PlumbingServicesPage;
