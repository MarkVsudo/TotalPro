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
  FaCheckCircle,
  FaStar,
  FaPlug,
  FaCog,
  FaWrench,
  FaHardHat,
  FaPhone,
  FaMapMarkerAlt,
  FaExclamationTriangle,
} from "react-icons/fa";
import HeroSection from "../components/ServicePagesComponents/HeroSection";
import ServicesSection from "../components/ServicePagesComponents/ServicesSection";
import FeaturesSection from "../components/ServicePagesComponents/FeaturesSection";
import ProcessSection from "../components/ServicePagesComponents/ProcessSection";
import ContanctSection from "../components/ServicePagesComponents/ContanctSection";

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
      <HeroSection
        MainIcon={FaBolt}
        title="Професионални електрически инсталации"
        description="Вашите електрически проекти са в сигурни ръце! Предлагаме
        комплексни електротехнически услуги с гарантирано качество и
        безопасност във всеки етап от процеса."
        tagsIcons={[<FaCheckCircle />, <FaStar />, <FaUsers />]}
        tagsTitles={[
          "Лицензирани електротехници",
          "15+ години опит",
          "Сертифициран екип",
        ]}
      />
      {/* Services Section */}
      <ServicesSection
        description="Предлагаме широка гама от електротехнически услуги, адаптирани към вашите специфични нужди"
        services={services}
      />
      {/* Features Section */}
      <FeaturesSection
        description="Нашите предимства, които ни правят най-добрия избор за електрически услуги"
        features={features}
      />
      {/* Process Section */}
      <ProcessSection
        description="Нашият процес е проектиран да осигури максимална безопасност и качество на електрическите инсталации"
        process={process}
      />
      {/* Contact Section */}
      <ContanctSection />
    </div>
  );
};

export default ElectricInstallationsPage;
