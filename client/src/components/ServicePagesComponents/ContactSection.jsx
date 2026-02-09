import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const ContactSection = () => {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24 text-white"
      style={{
        background:
          "linear-gradient(135deg, #002B5B 0%, #003d7a 50%, #002B5B 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title - Responsive sizing */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
          Готови за нов проект?
        </h2>

        {/* Description - Responsive sizing */}
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
          Свържете се с нас днес за безплатна консултация и оферта без скрити
          такси. Нашият екип е готов да превърне вашите идеи в реалност.
        </p>

        {/* Contact Cards - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          <div className="flex flex-col items-center">
            <FaPhoneAlt className="mb-3 sm:mb-4 text-white/80" size={40} />
            <h3 className="text-lg sm:text-xl font-bold mb-2">Телефон</h3>
            <p className="text-white/80 text-sm sm:text-base">
              <a
                href="tel:+359889303334"
                className="hover:text-white transition-colors"
              >
                +359 88 930 3334
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaEnvelope className="mb-3 sm:mb-4 text-white/80" size={40} />
            <h3 className="text-lg sm:text-xl font-bold mb-2">Email</h3>
            <p className="text-white/80 text-sm sm:text-base break-all sm:break-normal px-2 sm:px-0">
              <a
                href="mailto:totalproltd@gmail.com"
                className="hover:text-white transition-colors"
              >
                totalproltd@gmail.com
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="mb-3 sm:mb-4 text-white/80" size={40} />
            <h3 className="text-lg sm:text-xl font-bold mb-2">Адрес</h3>
            <p className="text-white/80 text-sm sm:text-base">
              София, България
            </p>
          </div>
        </div>

        {/* CTA Button - Responsive sizing, по-кратък */}
        <HashLink
          to="/#contact"
          className="bg-white text-white inline-flex w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl items-center gap-2 sm:gap-3 group mb-3 sm:mb-4"
          style={{ color: "#002B5B" }}
        >
          <FaPhoneAlt className="group-hover:animate-pulse" />
          <span>Получете безплатна оценка</span>
        </HashLink>

        {/* Footer text - Responsive sizing */}
        <p className="text-xs sm:text-sm opacity-75 px-4">
          Свържете се с нас днес за персонализирана оферта
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
