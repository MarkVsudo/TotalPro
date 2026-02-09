import { HashLink } from "react-router-hash-link";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const HeroSection = ({
  MainIcon,
  title,
  description,
  tagsIcons,
  tagsTitles,
}) => {
  return (
    <div
      className="text-white py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #002B5B 0%, #003d7a 50%, #002B5B 100%)",
      }}
    >
      {/* Left Arrow Container - Hidden on mobile */}
      <div className="arrow-container absolute hidden lg:flex flex-col items-center justify-center top-32 xl:top-40 left-12 xl:left-20 2xl:left-40">
        <IoIosArrowDown size={64} className="arrow-1 absolute top-0" />
        <IoIosArrowDown size={80} className="arrow-2 absolute top-10" />
        <IoIosArrowDown size={94} className="arrow-3 absolute top-20" />
      </div>

      {/* Right Arrow Container - Hidden on mobile */}
      <div className="arrow-container absolute hidden lg:flex flex-col items-center justify-center top-32 xl:top-40 right-12 xl:right-20 2xl:right-40">
        <IoIosArrowDown size={64} className="arrow-1 absolute top-0" />
        <IoIosArrowDown size={80} className="arrow-2 absolute top-10" />
        <IoIosArrowDown size={94} className="arrow-3 absolute top-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Icon - Responsive sizing */}
          <MainIcon className="text-5xl sm:text-6xl mx-auto mb-4 sm:mb-6 text-white/80" />

          {/* Title - Responsive sizing */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            {title}
          </h1>

          {/* Description - Responsive sizing */}
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            {description}
          </p>

          {/* Tags - Responsive layout */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm mb-6 sm:mb-8 px-2">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              <span className="text-base sm:text-lg">{tagsIcons[0]}</span>
              <span className="whitespace-nowrap">{tagsTitles[0]}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              <span className="text-base sm:text-lg">{tagsIcons[1]}</span>
              <span className="whitespace-nowrap">{tagsTitles[1]}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              <span className="text-base sm:text-lg">{tagsIcons[2]}</span>
              <span className="whitespace-nowrap">{tagsTitles[2]}</span>
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
      </div>
    </div>
  );
};

export default HeroSection;
