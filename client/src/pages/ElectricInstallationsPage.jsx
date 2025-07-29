import React from "react";
import {
  FaBolt,
  FaLightbulb,
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaTools,
  FaHome,
  FaBuilding,
  FaIndustry,
  FaPhoneAlt,
  FaCheckCircle,
  FaStar,
  FaPlug,
  FaCog,
  FaWrench,
  FaHardHat,
  FaCalendarAlt,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaCamera,
  FaExclamationTriangle,
} from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const ElectricInstallationsPage = () => {
  const services = [
    {
      icon: <FaHome className="text-3xl text-[#002B5B]" />,
      title: "Битови електрически инсталации",
      description:
        "Професионални електрически инсталации за домове и апартаменти с гаранция за качество.",
    },
    {
      icon: <FaBuilding className="text-3xl text-[#002B5B]" />,
      title: "Офис електрические инсталации",
      description:
        "Модерни електрически решения за офиси с оптимизация на енергопотреблението.",
    },
    {
      icon: <FaIndustry className="text-3xl text-[#002B5B]" />,
      title: "Промишлени инсталации",
      description:
        "Сложни електрически инсталации за фабрики, складове и промишлени обекти.",
    },
    {
      icon: <FaLightbulb className="text-3xl text-[#002B5B]" />,
      title: "Осветителни системи",
      description:
        "Проектиране и монтаж на LED осветление, аварийно осветление и декоративно осветление.",
    },
    {
      icon: <FaPlug className="text-3xl text-[#002B5B]" />,
      title: "Контакти и ключове",
      description:
        "Монтаж на електрически контакти, ключове, димери и други електрически аксесоари.",
    },
    {
      icon: <FaCog className="text-3xl text-[#002B5B]" />,
      title: "Автоматизация и контрол",
      description:
        "Интелигентни системи за управление на осветлението, отоплението и климатиците.",
    },
    {
      icon: <FaWrench className="text-3xl text-[#002B5B]" />,
      title: "Ремонт и поддръжка",
      description:
        "Профилактика, ремонт на електрически инсталации и отстраняване на неизправности.",
    },
    {
      icon: <FaExclamationTriangle className="text-3xl text-[#002B5B]" />,
      title: "Авариен сервиз",
      description:
        "24/7 авариен сервиз при електрически неизправности и спешни случаи.",
    },
    {
      icon: <FaHardHat className="text-3xl text-[#002B5B]" />,
      title: "Проектиране и консултации",
      description:
        "Проектиране на електрически инсталации и консултации за енергийна ефективност.",
    },
  ];

  const features = [
    {
      icon: <FaShieldAlt className="text-2xl text-[#002B5B]" />,
      title: "100% Застраховка",
      description: "Пълна застрахователна покритие и гаранция за работата",
    },
    {
      icon: <FaClock className="text-2xl text-[#002B5B]" />,
      title: "Навременно изпълнение",
      description: "Точност и спазване на договорените срокове",
    },
    {
      icon: <FaUsers className="text-2xl text-[#002B5B]" />,
      title: "Лицензирани електротехници",
      description: "Квалифицирани специалисти с богат опит в областта",
    },
    {
      icon: <FaTools className="text-2xl text-[#002B5B]" />,
      title: "Професионално оборудване",
      description: "Модерни инструменти и качествени материали",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Безплатна консултация",
      description:
        "Свържете се с нас за безплатна оценка и технически консултации",
      icon: FaPhone,
    },
    {
      step: "02",
      title: "Проектиране и планиране",
      description:
        "Съставяме проект и подготвяме необходимите материали и разрешения",
      icon: FaMapMarkerAlt,
    },
    {
      step: "03",
      title: "Изпълнение на работата",
      description:
        "Нашите лицензирани електротехници извършват монтажа професионално",
      icon: FaBolt,
    },
    {
      step: "04",
      title: "Тестване и предаване",
      description:
        "Тестваме инсталацията и предаваме документацията с гаранция",
      icon: FaShieldAlt,
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
            <FaBolt className="text-6xl mx-auto mb-6 text-white/80" />
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Професионални електрически инсталации
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Вашите електрически проекти са в сигурни ръце! Предлагаме
              комплексни електротехнически услуги с гарантирано качество и
              безопасност във всеки етап от процеса.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaCheckCircle />
                <span>Лицензирани електротехници</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaStar />
                <span>15+ години опит</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaUsers />
                <span>Сертифициран екип</span>
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
              Предлагаме широка гама от електротехнически услуги, адаптирани към
              вашите специфични нужди
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
              електрически услуги
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
              Нашият процес е проектиран да осигури максимална безопасност и
              качество на електрическите инсталации
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
            Готови за нов електрически проект?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Свържете се с нас днес за безплатна консултация и оферта без скрити
            такси. Нашият екип от лицензирани електротехници е готов да
            реализира вашия проект.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <FaPhone className="mb-4 text-white/80" size={48} />
              <h3 className="text-xl font-bold mb-2">Телефон</h3>
              <p className="text-white/80">
                <a href="tel:+359889303334">+359 88 930 3334</a>
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaEnvelope className="mb-4 text-white/80" size={48} />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-white/80">
                <a href="mailto:total.pro@mail.bg">total.pro@mail.bg</a>
              </p>
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

export default ElectricInstallationsPage;
