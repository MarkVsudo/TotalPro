import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import FooterLogo from "../../assets/nav-logo.png";

const services = [
  {
    name: "Климатици",
    href: "/air-conditioning",
  },
  {
    name: "Ел. инсталации",
    href: "/electric-installations",
  },
  {
    name: "Хамалски услуги",
    href: "/moving-services",
  },
  {
    name: "Гипсокартон",
    href: "/drywall",
  },
  {
    name: "СОТ",
    href: "/security-alarm-equipment",
  },
  {
    name: "ВиК",
    href: "/plumbing-services",
  },
  {
    name: "Плочкаджии",
    href: "/tiling-services",
  },
  {
    name: "Мебели",
    href: "/furniture",
  },
];

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto gap-6">
        <Link to="/">
          <img alt="Footer logo" src={FooterLogo} className="h-10 w-auto" />
        </Link>
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              {service.name}
            </Link>
          ))}
          <span className="text-gray-400">·</span>
          <HashLink
            to="/#services"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            Услуги
          </HashLink>
          <HashLink
            to="/#projects"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            Проекти
          </HashLink>
          <HashLink
            to="/#about-us"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            За нас
          </HashLink>
          <HashLink
            to="/#contact"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            Контакти
          </HashLink>
        </div>
        <div className="flex flex-col text-center text-gray-500 text-xs gap-2">
          <p>© 2025 TotalPro ЕООД. Всички права са запазени.</p>
          <a href="https://github.com/MarkVsudo" target="_blank">
            Developed by <span className="text-[#002B5B]">Mark Veskov</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
