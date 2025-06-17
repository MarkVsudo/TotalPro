import FooterLogo from "../assets/nav-logo.png";

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto gap-6">
        <a href="/">
          <img alt="Footer logo" src={FooterLogo} className="h-10 w-auto" />
        </a>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            Климатици
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            Ел. инсталации
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            Хамалски услуги
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            Гипсокартон
          </a>
          <span className="text-gray-400">·</span>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            За нас
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            Проекти
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            Контакти
          </a>
        </div>
        <div className="text-center text-gray-500 text-xs">
          © 2025 TotalPro ЕООД. Всички права са запазени.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
