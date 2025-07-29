import React from "react";
import {
  FaShieldAlt,
  FaVideo,
  FaClock,
  FaUsers,
  FaTools,
  FaHome,
  FaBuilding,
  FaWarehouse,
  FaCheckCircle,
  FaStar,
  FaWifi,
  FaBell,
  FaEye,
  FaKey,
  FaCalendarAlt,
  FaPhone,
  FaDesktop,
} from "react-icons/fa";

import HeroSection from "../components/ServicePagesComponents/HeroSection";
import ServicesSection from "../components/ServicePagesComponents/ServicesSection";
import FeaturesSection from "../components/ServicePagesComponents/FeaturesSection";
import ProcessSection from "../components/ServicePagesComponents/ProcessSection";
import ContanctSection from "../components/ServicePagesComponents/ContanctSection";

const SecurityAlarmEquipmentPage = () => {
  const services = [
    {
      icon: <FaHome className="text-3xl text-[#002B5B]" />,
      title: "Домашни системи",
      description:
        "Професионален монтаж на сигнализации и охранителни системи за домове и апартаменти.",
    },
    {
      icon: <FaBuilding className="text-3xl text-[#002B5B]" />,
      title: "Офис сигурност",
      description:
        "Комплексни решения за офиси - контрол на достъпа, видеонаблюдение и аларми.",
    },
    {
      icon: <FaWarehouse className="text-3xl text-[#002B5B]" />,
      title: "Промишлени обекти",
      description:
        "Специализирани системи за фабрики, складове и други промишлени съоръжения.",
    },
    {
      icon: <FaVideo className="text-3xl text-[#002B5B]" />,
      title: "Видеонаблюдение",
      description:
        "IP камери с висока резолюция, нощно виждане и възможност за отдалечен достъп.",
    },
    {
      icon: <FaBell className="text-3xl text-[#002B5B]" />,
      title: "Алармени системи",
      description:
        "Модерни алармени системи с безжични датчици и мобилни уведомления.",
    },
    {
      icon: <FaKey className="text-3xl text-[#002B5B]" />,
      title: "Контрол на достъпа",
      description:
        "Електронни брави, карт-ридери и биометрични системи за контрол на достъпа.",
    },
    {
      icon: <FaWifi className="text-3xl text-[#002B5B]" />,
      title: "Smart системи",
      description:
        "Интелигентни системи с управление чрез мобилно приложение и автоматизация.",
    },
    {
      icon: <FaDesktop className="text-3xl text-[#002B5B]" />,
      title: "Мониторинг услуги",
      description:
        "24/7 наблюдение и бързо реагиране при сигнал от охранителната система.",
    },
    {
      icon: <FaCalendarAlt className="text-3xl text-[#002B5B]" />,
      title: "Спешни ремонти",
      description:
        "Бързо реагиране при повреди - ремонт на системите в рамките на 24 часа.",
    },
  ];

  const features = [
    {
      icon: <FaShieldAlt className="text-2xl text-[#002B5B]" />,
      title: "Сертифицирани системи",
      description:
        "Работим само с лицензирани и сертифицирани охранителни системи",
    },
    {
      icon: <FaClock className="text-2xl text-[#002B5B]" />,
      title: "24/7 поддръжка",
      description:
        "Непрекъсната техническа поддръжка и мониторинг на системите",
    },
    {
      icon: <FaUsers className="text-2xl text-[#002B5B]" />,
      title: "Опитни техници",
      description:
        "Сертифицирани специалисти с богат опит в областта на сигурността",
    },
    {
      icon: <FaTools className="text-2xl text-[#002B5B]" />,
      title: "Модерна техника",
      description:
        "Най-новите технологии и оборудване от водещи световни производители",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Безплатна консултация",
      description:
        "Оглед на обекта и консултация за най-подходящите решения за сигурност",
      icon: FaPhone,
    },
    {
      step: "02",
      title: "Проектиране на системата",
      description:
        "Създаваме детайлен проект с оптимално разположение на всички компоненти",
      icon: FaEye,
    },
    {
      step: "03",
      title: "Монтаж и настройка",
      description:
        "Професионален монтаж и настройка на цялата охранителна система",
      icon: FaTools,
    },
    {
      step: "04",
      title: "Тестване и предаване",
      description: "Пълно тестване на системата и обучение на потребителите",
      icon: FaShieldAlt,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        MainIcon={FaShieldAlt}
        title="Професионални СОТ услуги"
        description="Защитете вашия дом или бизнес с най-модерните сигнализации и
        охранителни технологии! Предлагаме комплексни решения за сигурност
        с гарантирано качество и надеждност."
        tagsIcons={[<FaCheckCircle />, <FaStar />, <FaUsers />]}
        tagsTitles={[
          "Лицензирани и сертифицирани",
          "10+ години опит",
          "24/7 мониторинг",
        ]}
      />
      {/* Services Section */}
      <ServicesSection
        description="Предлагаме широка гама от СОТ услуги, адаптирани към вашите специфични нужди за сигурност и защита"
        services={services}
      />
      {/* Features Section */}
      <FeaturesSection
        description="Нашите предимства, които ни правят най-добрия избор за охранителни системи"
        features={features}
      />
      {/* Process Section */}
      <ProcessSection
        description="Нашият процес е проектиран да осигури максимална сигурност и надеждност на всеки охранителен проект"
        process={process}
      />
      {/* Contact Section */}
      <ContanctSection />
    </div>
  );
};

export default SecurityAlarmEquipmentPage;
