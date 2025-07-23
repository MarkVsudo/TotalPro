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
} from "react-icons/fa";

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
      icon: <FaBoxes className="text-3xl text-[#002B5B]" />,
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
      icon: <FaHammer className="text-3xl text-[#002B5B]" />,
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
      icon: <FaCalendarAlt className="text-3xl text-[#002B5B]" />,
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
      icon: <FaUsers className="text-2xl text-[#002B5B]" />,
      title: "Опитен екип",
      description: "Професионални хамали с богат опит в областта",
    },
    {
      icon: <FaTools className="text-2xl text-[#002B5B]" />,
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
    },
    {
      step: "02",
      title: "Планиране и подготовка",
      description:
        "Съставяме детайлен план и подготвяме необходимите материали",
    },
    {
      step: "03",
      title: "Изпълнение",
      description:
        "Нашият опитен екип извършва преместването професионално и внимателно",
    },
    {
      step: "04",
      title: "Завършване",
      description:
        "Проверяваме всички детайли и се увериваме, че сте напълно удовлетворени",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="text-white py-20"
        style={{
          background:
            "linear-gradient(135deg, #002B5B 0%, #003d7a 50%, #002B5B 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaTruck
              className="text-6xl mx-auto mb-6"
              style={{ color: "rgba(255,255,255,0.3)" }}
            />
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Професионални хамалски услуги
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Вашето преместване е в сигурни ръце! Предлагаме комплексни
              хамалски услуги с гарантирано качество и професионализъм във всеки
              етап от процеса.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaCheckCircle />
                <span>Лицензирани и застраховани</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaStar />
                <span>5+ години опит</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaUsers />
                <span>Обучен екип</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Нашите услуги
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Предлагаме широка гама от хамалски услуги, адаптирани към вашите
              специфични нужди
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              // <div
              //   key={index}
              //   className="p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              // >
              //   <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
              //     {service.icon}
              //   </div>
              //   <h3 className="text-xl font-semibold text-gray-900 mb-3">
              //     {service.title}
              //   </h3>
              //   <p className="text-gray-600 leading-relaxed">
              //     {service.description}
              //   </p>
              // </div>
              <div
                key={index}
                className="p-6 border border-[#002B5B] rounded-2xl shadow-md bg-white hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
              >
                {service.icon}
                <h3 className="text-xl font-semibold text-[#002B5B] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Защо да ни изберете
            </h2>
            <p className="text-lg text-gray-600">
              Нашите предимства, които ни правят най-добрия избор
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group ">
                <div className="bg-white p-6 rounded-full border border-[#002B5B] w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Как работим
            </h2>
            <p className="text-lg text-gray-600">
              Нашият проверен процес в 4 лесни стъпки
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center relative">
                <div
                  className="text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #002B5B 0%, #003d7a 100%)",
                  }}
                >
                  {item.step}
                </div>
                {index < process.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 w-full h-0.5 transform translate-x-[calc(50%+32px)]"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(0,43,91,0.2), rgba(0,43,91,0.5))",
                    }}
                  ></div>
                )}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Combined CTA Section */}
      <div
        className="py-20 text-white relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #002B5B 0%, #003d7a 50%, #002B5B 100%)",
        }}
      >
        {/* Background pattern */}
        {/* <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
        </div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Готови за вашето преместване?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Получете безплатна оценка днес! Нашият екип е готов да направи
              вашето преместване лесно и безстресово.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Stats and CTA */}
            <div className="text-center lg:text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div
                      className="text-4xl font-bold mb-2"
                      style={{ color: "rgba(255,255,255,0.9)" }}
                    >
                      А+
                    </div>
                    <div className="text-sm opacity-80">Качество</div>
                  </div>
                  <div>
                    <div
                      className="text-4xl font-bold mb-2"
                      style={{ color: "rgba(255,255,255,0.9)" }}
                    >
                      100%
                    </div>
                    <div className="text-sm opacity-80">Гаранция</div>
                  </div>
                  <div>
                    <div
                      className="text-4xl font-bold mb-2"
                      style={{ color: "rgba(255,255,255,0.9)" }}
                    >
                      500+
                    </div>
                    <div className="text-sm opacity-80">Доволни клиенти</div>
                  </div>
                </div>
              </div>

              <button
                className="bg-white text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3 mx-auto lg:mx-0 group mb-4"
                style={{ color: "#002B5B" }}
              >
                <FaPhoneAlt className="group-hover:animate-pulse" />
                Получете безплатна оценка
              </button>

              <p className="text-sm opacity-75">
                Свържете се с нас днес за персонализирана оферта
              </p>
            </div>

            {/* Right side - Consultation info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="mb-6">
                <FaPhoneAlt className="text-4xl mx-auto lg:mx-0 mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-4 text-center lg:text-left">
                  Безплатна консултация и оценка
                </h3>
                <p className="opacity-90 leading-relaxed mb-6 text-center lg:text-left">
                  Всеки проект е уникален, затова предлагаме индивидуален подход
                  към всеки клиент. Получете детайлна оферта, адаптирана към
                  вашите нужди.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-400 text-lg flex-shrink-0" />
                  <span className="text-sm">Безплатен оглед на място</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-400 text-lg flex-shrink-0" />
                  <span className="text-sm">Детайлна писмена оферта</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-400 text-lg flex-shrink-0" />
                  <span className="text-sm">Консултация за оптимизация</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-400 text-lg flex-shrink-0" />
                  <span className="text-sm">Никакви скрити такси</span>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center">
                <div className="text-sm opacity-80 mb-1">Работно време:</div>
                <div className="font-semibold text-lg">Пн-Нд: 8:00 - 22:00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingServicesPage;
