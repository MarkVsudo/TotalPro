import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import FooterLogo from "../../assets/nav-logo.png";

const services = [
  { name: "Климатици", href: "/air-conditioning" },
  { name: "Ел. инсталации", href: "/electric-installations" },
  { name: "Хамалски услуги", href: "/moving-services" },
  { name: "Гипсокартон", href: "/drywall" },
  { name: "СОТ", href: "/security-alarm-equipment" },
  { name: "ВиК", href: "/plumbing-services" },
  { name: "Плочкаджии", href: "/tiling-services" },
  { name: "Мебели", href: "/furniture" },
];

const Footer = () => {
  return (
    <footer className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto gap-3 sm:gap-4">
        {/* Logo */}
        <Link to="/" aria-label="Начало">
          <img alt="Footer logo" src={FooterLogo} className="h-10 w-auto" />
        </Link>

        {/* Services + Navigation */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 sm:gap-x-6 sm:gap-y-3 text-center">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              {service.name}
            </Link>
          ))}

          <span className="hidden sm:inline text-gray-300">·</span>

          <HashLink
            to="/#services"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
          >
            Услуги
          </HashLink>
          <HashLink
            to="/#projects"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
          >
            Проекти
          </HashLink>
          <HashLink
            to="/#about-us"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
          >
            За нас
          </HashLink>
          <HashLink
            to="/#contact"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
          >
            Контакти
          </HashLink>
        </div>

        {/* Legal links */}
        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-3 sm:gap-x-6 sm:gap-y-3 text-xs text-gray-500">
          <Link to="/terms" className="hover:text-gray-700 transition-colors">
            Общи условия
          </Link>

          <span className="text-gray-300">·</span>

          <Link to="/privacy" className="hover:text-gray-700 transition-colors">
            Политика за поверителност
          </Link>

          <span className="text-gray-300">·</span>

          <Link to="/cookies" className="hover:text-gray-700 transition-colors">
            Политика за бисквитки
          </Link>
        </div>

        {/* Bottom text */}
        <div className="flex flex-col sm:flex-row items-center justify-center text-center text-gray-500 text-xs gap-2 sm:gap-3">
          <p>© 2026 TotalPro ЕООД. Всички права са запазени.</p>

          <span className="hidden sm:inline text-gray-300">·</span>

          <a
            href="https://github.com/MarkVsudo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition-colors"
          >
            Разработено от{" "}
            <span className="text-[#002B5B] font-medium">Марк Весков</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
