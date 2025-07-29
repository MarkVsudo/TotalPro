import AirConHeader from "../../components/AirConPageComponents/AirConHeader";
import AirConInstallation from "../../components/AirConPageComponents/AirConInstallation";
import AirConMaintenance from "../../components/AirConPageComponents/AirConMaintenance";
import AirConServices from "../../components/AirConPageComponents/AirConServices";

import {
  FaSnowflake,
  FaShieldAlt,
  FaClock,
  FaPhoneAlt,
  FaCheckCircle,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaHandsHelping,
  FaClipboardList,
} from "react-icons/fa";
import { LuAirVent } from "react-icons/lu";

import { HashLink } from "react-router-hash-link";

const AirConditioningPage = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-2xl text-[#002B5B]" />,
      title: "Гаранция и качество",
      description: "Пълна гаранция на извършените услуги и използвани части",
    },
    {
      icon: <FaClock className="text-2xl text-[#002B5B]" />,
      title: "Бърз сервиз",
      description: "Навременно обслужване и спазване на договорените срокове",
    },
    {
      icon: <FaHandsHelping className="text-2xl text-[#002B5B]" />,
      title: "Опитни техници",
      description: "Сертифицирани специалисти с богат опит в областта",
    },
    {
      icon: <FaSnowflake className="text-2xl text-[#002B5B]" />,
      title: "Модерно оборудване",
      description: "Използваме най-новите инструменти и технологии",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Безплатен оглед",
      description:
        "Свържете се с нас за безплатен оглед и консултация за вашия обект",
      icon: FaPhone,
    },
    {
      step: "02",
      title: "Оферта и планиране",
      description: "Съставяме детайлна оферта и планираме монтажа или сервиза",
      icon: FaClipboardList,
    },
    {
      step: "03",
      title: "Изпълнение",
      description: "Нашият екип извършва работата професионално и в срок",
      icon: FaHandsHelping,
    },
    {
      step: "04",
      title: "Тестване и гаранция",
      description:
        "Тестваме системата и предоставяме гаранция за извършената работа",
      icon: FaCheckCircle,
    },
  ];

  return (
    <div className="min-h-screen">
      <AirConHeader />
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
            <LuAirVent className="text-6xl mx-auto mb-6 text-white/80" />
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Професионални услуги за климатици
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Осигуряваме комфорт през цялата година! Предлагаме пълен спектър
              от услуги за климатични системи - от монтаж до сервиз и поддръжка
              с гарантирано качество.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaShieldAlt />
                <span>Лицензирани техници</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaSnowflake />
                <span>15+ години опит</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaHandsHelping />
                <span>Професионален екип</span>
              </div>
            </div>
            <HashLink
              to="/#contact"
              className="bg-white text-white w-max px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3 mx-auto group mb-4"
              style={{ color: "#002B5B" }}
            >
              <FaPhoneAlt className="group-hover:animate-pulse" />
              Получете безплатен оглед
            </HashLink>

            <p className="text-sm opacity-75">
              Свържете се с нас днес за персонализирана оферта
            </p>
          </div>
        </div>
      </div>
      {/* Services Section */}
      <AirConServices />
      {/* Aircon maintenance */}
      <AirConMaintenance />
      {/* Aircon installation */}
      <AirConInstallation />
      {/* Features Section */}
      <div className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002B5B] mb-6">
              Защо да ни изберете
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Нашите предимства, които ни правят най-добрия избор за климатични
              услуги
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
              удовлетвореност на клиентите
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
            Нуждаете се от климатични услуги?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Свържете се с нас днес за безплатен оглед и оферта без скрити такси.
            Нашият екип от специалисти е готов да осигури максимален комфорт във
            вашия дом или офис.
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
            Получете безплатен оглед
          </HashLink>

          <p className="text-sm opacity-75">
            Свържете се с нас днес за персонализирана оферта
          </p>
        </div>
      </section>
    </div>
  );
};

export default AirConditioningPage;
