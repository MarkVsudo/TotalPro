import React from "react";
import {
  FaHammer,
  FaRulerCombined,
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaTools,
  FaHome,
  FaBuilding,
  FaWarehouse,
  FaPhoneAlt,
  FaCheckCircle,
  FaStar,
  FaWrench,
  FaPaintRoller,
  FaCube,
  FaHardHat,
  FaCalendarAlt,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const DrywallPage = () => {
  const services = [
    {
      icon: <FaHome className="text-3xl text-[#002B5B]" />,
      title: "Жилищни проекти",
      description:
        "Професионален монтаж на гипсокартонни конструкции в домове, апартаменти и къщи.",
    },
    {
      icon: <FaBuilding className="text-3xl text-[#002B5B]" />,
      title: "Офис конструкции",
      description:
        "Изграждане на офис прегради, окачени тавани и декоративни елементи за бизнес обекти.",
    },
    {
      icon: <FaWarehouse className="text-3xl text-[#002B5B]" />,
      title: "Промишлени обекти",
      description:
        "Гипсокартонни решения за складове, фабрики и други промишлени помещения.",
    },
    {
      icon: <FaRulerCombined className="text-3xl text-[#002B5B]" />,
      title: "Окачени тавани",
      description:
        "Монтаж на окачени тавани от гипсокартон с модерен дизайн и перфектно изпълнение.",
    },
    {
      icon: <FaCube className="text-3xl text-[#002B5B]" />,
      title: "Прегради и стени",
      description:
        "Изграждане на гипсокартонни прегради за разделяне на пространства с отлична звукоизолация.",
    },
    {
      icon: <FaWrench className="text-3xl text-[#002B5B]" />,
      title: "Арки и ниши",
      description:
        "Създаване на декоративни арки, ниши и нестандартни архитектурни форми.",
    },
    {
      icon: <FaPaintRoller className="text-3xl text-[#002B5B]" />,
      title: "Финишни работи",
      description:
        "Шпакловка, боядисване и довършителни работи за перфектен завършен вид.",
    },
    {
      icon: <FaHardHat className="text-3xl text-[#002B5B]" />,
      title: "Ремонтни услуги",
      description:
        "Ремонт на повредени гипсокартонни конструкции и обновяване на съществуващи елементи.",
    },
    {
      icon: <FaCalendarAlt className="text-3xl text-[#002B5B]" />,
      title: "Спешни ремонти",
      description:
        "Бързо реагиране при спешни случаи - ремонт на повреди в рамките на 24 часа.",
    },
  ];

  const features = [
    {
      icon: <FaShieldAlt className="text-2xl text-[#002B5B]" />,
      title: "Гарантирано качество",
      description: "Гаранция върху всички изпълнени гипсокартонни работи",
    },
    {
      icon: <FaClock className="text-2xl text-[#002B5B]" />,
      title: "Навременно изпълнение",
      description: "Точност и спазване на договорените срокове за завършване",
    },
    {
      icon: <FaUsers className="text-2xl text-[#002B5B]" />,
      title: "Опитни майстори",
      description: "Професионални гипсокартонджии с богат опит в областта",
    },
    {
      icon: <FaTools className="text-2xl text-[#002B5B]" />,
      title: "Качествени материали",
      description:
        "Използваме само най-добрите материали от водещи производители",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Безплатна консултация",
      description:
        "Свържете се с нас за безплатна оценка и консултация за вашия проект",
      icon: FaPhone,
    },
    {
      step: "02",
      title: "Проектиране и планиране",
      description:
        "Създаваме детайлен план и подготвяме необходимите материали",
      icon: FaRulerCombined,
    },
    {
      step: "03",
      title: "Изпълнение",
      description:
        "Нашият опитен екип извършва монтажа професионално и прецизно",
      icon: FaHammer,
    },
    {
      step: "04",
      title: "Завършване и контрол",
      description:
        "Финишни работи и строг контрол на качеството преди предаване",
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
            <FaHammer className="text-6xl mx-auto mb-6 text-white/80" />
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Професионални гипсокартонни услуги
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Превръщаме вашите идеи в реалност! Предлагаме комплексни
              гипсокартонни решения с гарантирано качество и професионализъм във
              всеки етап от проекта.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaCheckCircle />
                <span>Лицензирани и застраховани</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaStar />
                <span>15+ години опит</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaUsers />
                <span>Сертифицирани майстори</span>
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
              Предлагаме широка гама от гипсокартонни услуги, адаптирани към
              вашите специфични нужди и архитектурни изисквания
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
              гипсокартонни работи
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
              удовлетвореност на клиентите при всеки гипсокартонен проект
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
            Готови за нов проект?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Свържете се с нас днес за безплатна консултация и оферта без скрити
            такси. Нашият екип е готов да превърне вашите идеи в реалност.
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

export default DrywallPage;
