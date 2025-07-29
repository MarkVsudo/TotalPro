import React from "react";
import {
  FaCouch,
  FaHammer,
  FaBed,
  FaClock,
  FaUsers,
  FaTools,
  FaHome,
  FaBuilding,
  FaWarehouse,
  FaCheckCircle,
  FaStar,
  FaChair,
  FaDoorOpen,
  FaCube,
  FaPaintBrush,
  FaCalendarAlt,
  FaPhone,
  FaDraftingCompass,
  FaCog,
} from "react-icons/fa";
import HeroSection from "../components/ServicePagesComponents/HeroSection";
import ServicesSection from "../components/ServicePagesComponents/ServicesSection";
import FeaturesSection from "../components/ServicePagesComponents/FeaturesSection";
import ProcessSection from "../components/ServicePagesComponents/ProcessSection";
import ContanctSection from "../components/ServicePagesComponents/ContanctSection";

const FurnitureServicesPage = () => {
  const services = [
    {
      icon: <FaHome className="text-3xl text-[#002B5B]" />,
      title: "Домашни мебели",
      description:
        "Производство на мебели по поръчка за домове - кухни, спални, дневни и детски стаи.",
    },
    {
      icon: <FaBuilding className="text-3xl text-[#002B5B]" />,
      title: "Офис мебели",
      description:
        "Проектиране и изработка на офис мебели - бюра, шкафове, конферентни маси.",
    },
    {
      icon: <FaWarehouse className="text-3xl text-[#002B5B]" />,
      title: "Търговски обзавеждане",
      description:
        "Специализирани решения за магазини, шоуруми и търговски пространства.",
    },
    {
      icon: <FaCube className="text-3xl text-[#002B5B]" />,
      title: "Вградени мебели",
      description:
        "Гардероби, библиотеки и други вградени решения, максимално оползотворяващи пространството.",
    },
    {
      icon: <FaDoorOpen className="text-3xl text-[#002B5B]" />,
      title: "Кухни по поръчка",
      description:
        "Изработка на кухни с индивидуален дизайн, включващи всички необходими елементи.",
    },
    {
      icon: <FaBed className="text-3xl text-[#002B5B]" />,
      title: "Спални комплекти",
      description:
        "Пълни спални комплекти - легла, нощни шкафчета, гардероби и тоалетки.",
    },
    {
      icon: <FaChair className="text-3xl text-[#002B5B]" />,
      title: "Столове и маси",
      description:
        "Маси, столове и седящи мебели за всеки интериор и стил на живот.",
    },
    {
      icon: <FaPaintBrush className="text-3xl text-[#002B5B]" />,
      title: "Реставрация мебели",
      description:
        "Възстановяване и обновяване на стари мебели с модерни техники.",
    },
    {
      icon: <FaCalendarAlt className="text-3xl text-[#002B5B]" />,
      title: "Експресни поръчки",
      description: "Бързо изпълнение на спешни поръчки с гарантирано качество.",
    },
  ];

  const features = [
    {
      icon: <FaDraftingCompass className="text-2xl text-[#002B5B]" />,
      title: "Индивидуален дизайн",
      description: "Уникални решения, създадени специално за вашите нужди",
    },
    {
      icon: <FaClock className="text-2xl text-[#002B5B]" />,
      title: "Точни срокове",
      description: "Спазване на договорените срокове за изработка и монтаж",
    },
    {
      icon: <FaUsers className="text-2xl text-[#002B5B]" />,
      title: "Опитни майстори",
      description: "Сертифицирани мебелисти с дългогодишен опит в занаята",
    },
    {
      icon: <FaTools className="text-2xl text-[#002B5B]" />,
      title: "Качествени материали",
      description: "Използваме само най-добрите дървени материали и фурнитура",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Консултация и замерване",
      description:
        "Безплатна консултация, замерване на пространството и обсъждане на идеите",
      icon: FaPhone,
    },
    {
      step: "02",
      title: "Дизайн и проектиране",
      description:
        "Създаване на 3D визуализация и технически чертежи на мебелите",
      icon: FaDraftingCompass,
    },
    {
      step: "03",
      title: "Производство",
      description:
        "Изработка на мебелите в нашето производство с прецизни машини",
      icon: FaCog,
    },
    {
      step: "04",
      title: "Монтаж и финализиране",
      description: "Професионален монтаж в дома ви и окончателни корекции",
      icon: FaHammer,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        MainIcon={FaCouch}
        title="Производство и инсталиране на мебели"
        description="Създаваме мебели, които съчетават функционалност с красота! От
        идеята до финалното изпълнение - предлагаме комплексни мебелни
        решения по индивидуален проект."
        tagsIcons={[<FaCheckCircle />, <FaStar />, <FaUsers />]}
        tagsTitles={[
          "Лицензирани и застраховани",
          "25+ години опит",
          "Собствено производство",
        ]}
      />
      {/* Services Section */}
      <ServicesSection
        description="Предлагаме широка гама от мебелни услуги - от проектиране до финално инсталиране във вашия дом или офис"
        services={services}
      />
      {/* Features Section */}
      <FeaturesSection
        description="Нашите предимства, които ни правят най-добрия избор за производство на мебели"
        features={features}
      />
      {/* Process Section */}
      <ProcessSection
        description="Нашият процес осигурява перфектно изпълнение от първоначалната идея до финалното инсталиране"
        process={process}
      />
      {/* Contact Section */}
      <ContanctSection />
    </div>
  );
};

export default FurnitureServicesPage;
