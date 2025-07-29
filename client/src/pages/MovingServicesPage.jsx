import React from "react";
import {
  FaTruck,
  FaShieldAlt,
  FaClock,
  FaTools,
  FaHome,
  FaBuilding,
  FaWarehouse,
  FaCheckCircle,
  FaCouch,
  FaDolly,
  FaBroom,
  FaPhone,
  FaHandsHelping,
  FaBoxOpen,
  FaClipboardList,
  FaPeopleCarry,
} from "react-icons/fa";
import HeroSection from "../components/ServicePagesComponents/HeroSection";
import ServicesSection from "../components/ServicePagesComponents/ServicesSection";
import FeaturesSection from "../components/ServicePagesComponents/FeaturesSection";
import ProcessSection from "../components/ServicePagesComponents/ProcessSection";
import ContanctSection from "../components/ServicePagesComponents/ContanctSection";

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
      <HeroSection
        MainIcon={FaPeopleCarry}
        title="Професионални хамалски услуги"
        description="Вашето преместване е в сигурни ръце! Предлагаме комплексни
        хамалски услуги с гарантирано качество и професионализъм във всеки
        етап от процеса."
        tagsIcons={[<FaShieldAlt />, <FaTruck />, <FaHandsHelping />]}
        tagsTitles={[
          "Лицензирани и застраховани",
          "12+ години опит",
          "Обучен екип",
        ]}
      />

      {/* Services Section */}
      <ServicesSection
        description="Предлагаме широка гама от хамалски услуги, адаптирани към вашите специфични нужди"
        services={services}
      />

      {/* Features Section */}
      <FeaturesSection
        description="Нашите предимства, които ни правят най-добрия избор"
        features={features}
      />

      {/* Process Section */}
      <ProcessSection
        description="Нашият процес е проектиран да осигури максимално качество и удовлетвореност на клиентите"
        process={process}
      />

      {/* Contact Section */}
      <ContanctSection />
    </div>
  );
};

export default MovingServicesPage;
