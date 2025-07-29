import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
const ContanctSection = () => {
  return (
    <section
      className="py-16 md:py-20 lg:py-24 text-white"
      style={{
        background:
          "linear-gradient(135deg, #002B5B 0%, #003d7a 50%, #002B5B 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Готови за нов проект?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Свържете се с нас днес за безплатна консултация и оферта без скрити
          такси. Нашият екип е готов да превърне вашите идеи в реалност.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <FaPhoneAlt className="mb-4 text-white/80" size={48} />
            <h3 className="text-xl font-bold mb-2">Телефон</h3>
            <p className="text-white/80">
              <a href="tel:+359889303334">+359 88 930 3334</a>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaEnvelope className="mb-4 text-white/80" size={48} />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-white/80">
              <a href="mailto:total.pro@mail.bg">total.pro@mail.bg</a>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="mb-4 text-white/80" size={48} />
            <h3 className="text-xl font-bold mb-2">Адрес</h3>
            <p className="text-white/80">София, България</p>
          </div>
        </div>

        <HashLink
          to="/#contact"
          className="bg-white text-white px-10 py-5 w-max rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3 mx-auto group mb-4"
          style={{ color: "#002B5B" }}
        >
          <FaPhoneAlt className="group-hover:animate-pulse" />
          Получете безплатна оценка
        </HashLink>

        <p className="text-sm opacity-75">
          Свържете се с нас днес за персонализирана оферта
        </p>
      </div>
    </section>
  );
};

export default ContanctSection;
