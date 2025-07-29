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
  FaCheckCircle,
  FaStar,
  FaShower,
  FaSwimmingPool,
  FaPaintRoller,
  FaHammer,
  FaCalendarAlt,
  FaPhone,
  FaDraftingCompass,
} from "react-icons/fa";

import HeroSection from "../components/ServicePagesComponents/HeroSection";
import ServicesSection from "../components/ServicePagesComponents/ServicesSection";
import FeaturesSection from "../components/ServicePagesComponents/FeaturesSection";
import ProcessSection from "../components/ServicePagesComponents/ProcessSection";
import ContanctSection from "../components/ServicePagesComponents/ContanctSection";
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
      <HeroSection
        MainIcon={FaThLarge}
        title="Професионални плочкаджийски услуги"
        description="Превърнете вашите пространства в произведения на изкуството!
        Предлагаме комплексни плочкаджийски услуги с безупречно качество и
        внимание към всеки детайл."
        tagsIcons={[<FaCheckCircle />, <FaStar />, <FaUsers />]}
        tagsTitles={[
          "Лицензирани и застраховани",
          "20+ години опит",
          "Сертифицирани майстори",
        ]}
      />
      {/* Services Section */}
      <ServicesSection
        description="Предлагаме широка гама от плочкаджийски услуги за всеки тип пространство и архитектурни изисквания"
        services={services}
      />
      {/* Features Section */}
      <FeaturesSection
        description="Нашите предимства, които ни правят най-добрия избор за плочкаджийски услуги"
        features={features}
      />
      {/* Process Section */}
      <ProcessSection
        description="Нашият процес е проектиран да осигури перфектен резултат и пълно удовлетворение на клиентите"
        process={process}
      />
      {/* Contact Section */}
      <ContanctSection />
    </div>
  );
};

export default TilingServicesPage;
