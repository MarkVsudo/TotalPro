import React from "react";
import {
  FaThLarge,
  FaBath,
  FaRulerCombined,
  FaClock,
  FaUsers,
  FaTools,
  FaHome,
  FaBuilding,
  FaWarehouse,
  FaPhoneAlt,
  FaCheckCircle,
  FaStar,
  FaShower,
  FaSwimmingPool,
  FaPaintRoller,
  FaHammer,
  FaCalendarAlt,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaEye,
  FaCog,
  FaDraftingCompass,
} from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const TilingServicesPage = () => {
  const services = [
    {
      icon: <FaHome className="text-3xl text-[#002B5B]" />,
      title: "Жилищни проекти",
      description:
        "Професионално полагане на плочки в домове, апартаменти и къщи с перфектно изпълнение.",
    },
    {
      icon: <FaBuilding className="text-3xl text-[#002B5B]" />,
      title: "Търговски обекти",
      description:
        "Облицовка на офиси, магазини, ресторанти и други търговски пространства.",
    },
    {
      icon: <FaBath className="text-3xl text-[#002B5B]" />,
      title: "Бани и санитарни възли",
      description:
        "Специализирано полагане на плочки в бани с водоустойчивост и дълготрайност.",
    },
    {
      icon: <FaShower className="text-3xl text-[#002B5B]" />,
      title: "Душ кабини",
      description:
        "Прецизно облицоване на душ кабини с модерни дизайнерски решения.",
    },
    {
      icon: <FaSwimmingPool className="text-3xl text-[#002B5B]" />,
      title: "Басейни и спа",
      description:
        "Облицовка на басейни, джакузита и спа центрове със специализирани материали.",
    },
    {
      icon: <FaThLarge className="text-3xl text-[#002B5B]" />,
      title: "Подови настилки",
      description:
        "Полагане на подови плочки, гранитогрес и други видове твърди настилки.",
    },
    {
      icon: <FaPaintRoller className="text-3xl text-[#002B5B]" />,
      title: "Стенни облицовки",
      description:
        "Облицоване на стени с керамични, каменни и декоративни плочки.",
    },
    {
      icon: <FaHammer className="text-3xl text-[#002B5B]" />,
      title: "Ремонт и реставрация",
      description:
        "Ремонт на повредени плочки и реставрация на съществуващи облицовки.",
    },
    {
      icon: <FaCalendarAlt className="text-3xl text-[#002B5B]" />,
      title: "Спешни ремонти",
      description:
        "Бързо отстраняване на повреди и аварийни ремонти на плочкови покрития.",
    },
  ];

  const features = [
    {
      icon: <FaRulerCombined className="text-2xl text-[#002B5B]" />,
      title: "Прецизност в работата",
      description: "Милиметрова точност при полагането и перфектни фуги",
    },
    {
      icon: <FaClock className="text-2xl text-[#002B5B]" />,
      title: "Спазване на срокове",
      description: "Точност и професионализъм при всеки проект",
    },
    {
      icon: <FaUsers className="text-2xl text-[#002B5B]" />,
      title: "Майстори с опит",
      description: "Сертифицирани плочкаджии с дългогодишен опит",
    },
    {
      icon: <FaTools className="text-2xl text-[#002B5B]" />,
      title: "Качествени материали",
      description: "Работим с най-добрите лепила, фугирки и инструменти",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Консултация и оглед",
      description:
        "Безплатен оглед на обекта и консултация за най-подходящите решения",
      icon: FaPhone,
    },
    {
      step: "02",
      title: "Дизайн и планиране",
      description:
        "Избор на материали, създаване на дизайн и планиране на работния процес",
      icon: FaDraftingCompass,
    },
    {
      step: "03",
      title: "Подготовка и полагане",
      description:
        "Подготовка на повърхността и професионално полагане на плочките",
      icon: FaHammer,
    },
    {
      step: "04",
      title: "Финиширане и контрол",
      description: "Фугиране, почистване и финален контрол на качеството",
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
            <FaThLarge className="text-6xl mx-auto mb-6 text-white/80" />
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Професионални плочкаджийски услуги
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Превърнете вашите пространства в произведения на изкуството!
              Предлагаме комплексни плочкаджийски услуги с безупречно качество и
              внимание към всеки детайл.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaCheckCircle />
                <span>Лицензирани и застраховани</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaStar />
                <span>20+ години опит</span>
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
              Предлагаме широка гама от плочкаджийски услуги за всеки тип
              пространство и архитектурни изисквания
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
              плочкаджийски услуги
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
              Нашият процес е проектиран да осигури перфектен резултат и пълно
              удовлетворение на клиентите
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
            Готови за красив интериор?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Свържете се с нас днес за безплатна консултация и оферта без скрити
            такси. Нашият екип е готов да създаде перфектните плочкови покрития
            за вас.
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

export default TilingServicesPage;
