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
  FaCheckCircle,
  FaStar,
  FaFaucet,
  FaThermometerHalf,
  FaCalendarAlt,
  FaPhone,
  FaCog,
  FaHammer,
} from "react-icons/fa";
import { MdOutlinePlumbing } from "react-icons/md";

import HeroSection from "../components/ServicePagesComponents/HeroSection";
import ServicesSection from "../components/ServicePagesComponents/ServicesSection";
import FeaturesSection from "../components/ServicePagesComponents/FeaturesSection";
import ProcessSection from "../components/ServicePagesComponents/ProcessSection";
import ContanctSection from "../components/ServicePagesComponents/ContanctSection";

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
      <HeroSection
        MainIcon={MdOutlinePlumbing}
        title="Професионални ВиК услуги"
        description="Надежден партньор за всички ваши ВиК нужди! Предлагаме комплексни
        водопроводни и канализационни услуги с гарантирано качество и
        професионализъм на най-високо ниво."
        tagsIcons={[<FaCheckCircle />, <FaStar />, <FaUsers />]}
        tagsTitles={[
          "Лицензирани и застраховани",
          "18+ години опит",
          "24/7 спешна помощ",
        ]}
      />
      {/* Services Section */}
      <ServicesSection
        description="Предлагаме широка гама от ВиК услуги, адаптирани към вашите специфични нужди за водопровод и канализация"
        services={services}
      />
      {/* Features Section */}
      <FeaturesSection
        description="Нашите предимства, които ни правят най-добрия избор за ВиК услуги"
        features={features}
      />
      {/* Process Section */}
      <ProcessSection
        description="Нашият процес е проектиран да осигури максимално качество и надеждност на всеки ВиК проект"
        process={process}
      />

      {/* Contact Section */}
      <ContanctSection />
    </div>
  );
};

export default PlumbingServicesPage;
