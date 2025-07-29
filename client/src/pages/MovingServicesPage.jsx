import React from "react";
import {
  FaTruck,
  FaBoxes,
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
  FaCouch,
  FaDolly,
  FaHammer,
  FaBroom,
  FaCalendarAlt,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaHandsHelping,
  FaBoxOpen,
  FaArrowsAlt,
  FaClipboardList,
  FaHardHat,
  FaHandPaper,
} from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const MovingServicesPage = () => {
  const services = [
    {
      icon: <FaHome className="text-3xl text-[#002B5B]" />,
      title: "Жилищни премествания",
      description:
        "Професионално преместване на домове, апартаменти и къщи с грижа за вашите ценности.",
    },
    {
      icon: <FaBuilding className="text-3xl text-[#002B5B]" />,
      title: "Офис премествания",
      description:
        "Бързо и ефективно преместване на офиси с минимално прекъсване на работните процеси.",
    },
    {
      icon: <FaWarehouse className="text-3xl text-[#002B5B]" />,
      title: "Складови услуги",
      description:
        "Преместване и организация на складови помещения и промишлени обекти.",
    },
    {
      icon: <FaBoxOpen className="text-3xl text-[#002B5B]" />,
      title: "Опаковане и разопаковане",
      description:
        "Професионално опаковане с качествени материали за максимална защита.",
    },
    {
      icon: <FaCouch className="text-3xl text-[#002B5B]" />,
      title: "Пренасяне на мебели",
      description:
        "Специализирано пренасяне на тежки мебели, пиана, сейфове и габаритни предмети.",
    },
    {
      icon: <FaDolly className="text-3xl text-[#002B5B]" />,
      title: "Товарни услуги",
      description:
        "Товарене и разтоварване на стоки, материали и оборудване с професионална техника.",
    },
    {
      icon: <FaTools className="text-3xl text-[#002B5B]" />,
      title: "Демонтаж и монтаж",
      description:
        "Разглобяване и сглобяване на мебели, кухни, гардероби и други обзавеждания.",
    },
    {
      icon: <FaBroom className="text-3xl text-[#002B5B]" />,
      title: "Почистване след преместване",
      description:
        "Комплексно почистване на старото и новото помещение след завършване на преместването.",
    },
    {
      icon: <FaClock className="text-3xl text-[#002B5B]" />,
      title: "Спешни премествания",
      description:
        "Бързо реагиране при спешни случаи - преместване в рамките на 24 часа.",
    },
  ];

  const features = [
    {
      icon: <FaShieldAlt className="text-2xl text-[#002B5B]" />,
      title: "100% Застраховка",
      description: "Пълна застрахователна покритие за вашето имущество",
    },
    {
      icon: <FaClock className="text-2xl text-[#002B5B]" />,
      title: "Навременна доставка",
      description: "Точност и спазване на договорените срокове",
    },
    {
      icon: <FaHandsHelping className="text-2xl text-[#002B5B]" />,
      title: "Опитен екип",
      description: "Професионални хамали с богат опит в областта",
    },
    {
      icon: <FaTruck className="text-2xl text-[#002B5B]" />,
      title: "Професионално оборудване",
      description: "Модерни инструменти и техника за безопасен товар",
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
      title: "Планиране и подготовка",
      description:
        "Съставяме детайлен план и подготвяме необходимите материали",
      icon: FaClipboardList,
    },
    {
      step: "03",
      title: "Изпълнение",
      description:
        "Нашият опитен екип извършва преместването професионално и внимателно",
      icon: FaHandsHelping,
    },
    {
      step: "04",
      title: "Завършване",
      description:
        "Проверяваме всички детайли и се увериваме, че сте напълно удовлетворени",
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
            <FaTruck className="text-6xl mx-auto mb-6 text-white/80" />
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Професионални хамалски услуги
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Вашето преместване е в сигурни ръце! Предлагаме комплексни
              хамалски услуги с гарантирано качество и професионализъм във всеки
              етап от процеса.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaShieldAlt />
                <span>Лицензирани и застраховани</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaTruck />
                <span>12+ години опит</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaHandsHelping />
                <span>Обучен екип</span>
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
              Предлагаме широка гама от хамалски услуги, адаптирани към вашите
              специфични нужди
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
              Нашите предимства, които ни правят най-добрия избор
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

export default MovingServicesPage;
