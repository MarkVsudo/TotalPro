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
  FaCheckCircle,
  FaStar,
  FaWrench,
  FaPaintRoller,
  FaCube,
  FaHardHat,
  FaCalendarAlt,
  FaPhone,
} from "react-icons/fa";
import { GiScrew } from "react-icons/gi";
import HeroSection from "../components/ServicePagesComponents/HeroSection";
import ServicesSection from "../components/ServicePagesComponents/ServicesSection";
import FeaturesSection from "../components/ServicePagesComponents/FeaturesSection";
import ProcessSection from "../components/ServicePagesComponents/ProcessSection";
import ContanctSection from "../components/ServicePagesComponents/ContanctSection";

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
      <HeroSection
        MainIcon={GiScrew}
        title="Професионални гипсокартонни услуги"
        description="Превръщаме вашите идеи в реалност! Предлагаме комплексни
        гипсокартонни решения с гарантирано качество и професионализъм във
        всеки етап от проекта."
        tagsIcons={[<FaCheckCircle />, <FaStar />, <FaUsers />]}
        tagsTitles={[
          "Лицензирани и застраховани",
          "15+ години опит",
          "Сертифицирани майстори",
        ]}
      />
      {/* Services Section */}
      <ServicesSection
        description="Предлагаме широка гама от гипсокартонни услуги, адаптирани към вашите специфични нужди и архитектурни изисквания"
        services={services}
      />
      {/* Features Section */}
      <FeaturesSection
        description="Нашите предимства, които ни правят най-добрия избор за гипсокартонни работи"
        features={features}
      />
      {/* Process Section */}
      <ProcessSection
        description="Нашият процес е проектиран да осигури максимално качество и удовлетвореност на клиентите при всеки гипсокартонен проект"
        process={process}
      />
      {/* Contact Section */}
      <ContanctSection />
    </div>
  );
};

export default DrywallPage;
