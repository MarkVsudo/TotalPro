import { PiFanFill } from "react-icons/pi";
import {
  FaBuilding,
  FaCalendarCheck,
  FaCheckCircle,
  FaClipboardList,
  FaClock,
  FaFilter,
  FaHandsHelping,
  FaPhone,
  FaRulerCombined,
  FaShieldAlt,
  FaSnowflake,
  FaSprayCan,
  FaThermometerHalf,
  FaTools,
  FaWrench,
} from "react-icons/fa";

import AirConHeader from "../../components/AirConPageComponents/AirConHeader";
import HeroSection from "../../components/ServicePagesComponents/HeroSection";
import ProcessSection from "../../components/ServicePagesComponents/ProcessSection";
import ServicesSection from "../../components/ServicePagesComponents/ServicesSection";
import FeaturesSection from "../../components/ServicePagesComponents/FeaturesSection";
import ContanctSection from "../../components/ServicePagesComponents/ContanctSection";
import AirConMaintenance from "../../components/AirConPageComponents/AirConMaintenance";
import AirConInstallation from "../../components/AirConPageComponents/AirConInstallation";

const AirConditioningPage = () => {
  const services = [
    {
      title: "Демонтаж и монтаж на климатик",
      description:
        "Професионален монтаж и демонтаж на климатици за дома и офиса с гарантирано качество.",
      icon: <FaTools className="text-4xl text-[#002B5B] mb-4" />,
    },
    {
      title: "Климатизация за дома и офиса",
      description:
        "Монтаж и обслужване на климатични системи в жилища, офиси и търговски обекти.",
      icon: <FaBuilding className="text-4xl text-[#002B5B] mb-4" />,
    },
    {
      title: "Зареждане с фреон",
      description:
        "Дозареждане с хладилен агент и проверка на налягане и херметичност.",
      icon: <FaSnowflake className="text-4xl text-[#002B5B] mb-4" />,
    },
    {
      title: "Диагностика",
      description:
        "Професионална диагностика и проверка на ефективността на климатичните системи.",
      icon: <FaThermometerHalf className="text-4xl text-[#002B5B] mb-4" />,
    },
    {
      title: "Ремонт на климатик",
      description: "Професионален ремонт на електронни и механични повреди.",
      icon: <FaWrench className="text-4xl text-[#002B5B] mb-4" />,
    },
    {
      title: "Почистване на филтри",
      description:
        "Професионално почистване и смяна на филтри за оптимална работа на климатика.",
      icon: <FaFilter className="text-4xl text-[#002B5B] mb-4" />,
    },
    {
      title: "Антибактериална дезинфекция",
      description:
        "Самостоятелно почистване и обеззаразяване на вътрешното тяло.",
      icon: <FaSprayCan className="text-4xl text-[#002B5B] mb-4" />,
    },
    {
      title: "Удължаване на тръбен път",
      description:
        "Полагане на допълнителни тръби, кабели и канали над стандартния монтаж.",
      icon: <FaRulerCombined className="text-4xl text-[#002B5B] mb-4" />,
    },
    {
      title: "Абонаментна профилактика",
      description: "Годишни планове с отстъпки и регулярна грижа за климатика.",
      icon: <FaCalendarCheck className="text-4xl text-[#002B5B] mb-4" />,
    },
  ];

  const features = [
    {
      icon: <FaShieldAlt className="text-2xl text-[#002B5B]" />,
      title: "Гаранция и качество",
      description: "Пълна гаранция на извършените услуги и използвани части",
    },
    {
      icon: <FaClock className="text-2xl text-[#002B5B]" />,
      title: "Бърз сервиз",
      description: "Навременно обслужване и спазване на договорените срокове",
    },
    {
      icon: <FaHandsHelping className="text-2xl text-[#002B5B]" />,
      title: "Опитни техници",
      description: "Сертифицирани специалисти с богат опит в областта",
    },
    {
      icon: <FaSnowflake className="text-2xl text-[#002B5B]" />,
      title: "Модерно оборудване",
      description: "Използваме най-новите инструменти и технологии",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Безплатен оглед",
      description:
        "Свържете се с нас за безплатен оглед и консултация за вашия обект",
      icon: FaPhone,
    },
    {
      step: "02",
      title: "Оферта и планиране",
      description: "Съставяме детайлна оферта и планираме монтажа или сервиза",
      icon: FaClipboardList,
    },
    {
      step: "03",
      title: "Изпълнение",
      description: "Нашият екип извършва работата професионално и в срок",
      icon: FaHandsHelping,
    },
    {
      step: "04",
      title: "Тестване и гаранция",
      description:
        "Тестваме системата и предоставяме гаранция за извършената работа",
      icon: FaCheckCircle,
    },
  ];

  return (
    <div className="min-h-screen">
      <AirConHeader />
      {/* Hero Section */}
      <HeroSection
        MainIcon={PiFanFill}
        title="Професионални услуги за климатици"
        description="Осигуряваме комфорт през цялата година! Предлагаме пълен спектър
        от услуги за климатични системи - от монтаж до сервиз и поддръжка
        с гарантирано качество."
        tagsIcons={[<FaShieldAlt />, <FaSnowflake />, <FaHandsHelping />]}
        tagsTitles={[
          "Лицензирани техници",
          "15+ години опит",
          "Професионален екип",
        ]}
      />
      {/* Services Section */}
      <ServicesSection
        description="Предлагаме пълен спектър от услуги за климатични системи, адаптирани
        към вашите потребности"
        services={services}
      />
      {/* Aircon maintenance */}
      <AirConMaintenance />
      {/* Aircon installation */}
      <AirConInstallation />
      {/* Features Section */}
      <FeaturesSection
        description="Нашите предимства, които ни правят най-добрия избор за климатични
        услуги"
        features={features}
      />
      {/* Process Section */}
      <ProcessSection
        description="Нашият процес е проектиран да осигури максимално качество и
        удовлетвореност на клиентите"
        process={process}
      />
      {/* Contact Section */}
      <ContanctSection />
    </div>
  );
};

export default AirConditioningPage;
