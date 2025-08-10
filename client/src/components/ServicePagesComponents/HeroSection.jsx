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
      className="text-white py-12 md:py-16 lg:py-20 relative"
      style={{
        background:
          "linear-gradient(135deg, #002B5B 0%, #003d7a 50%, #002B5B 100%)",
      }}
    >
      <div className="arrow-container absolute flex flex-col items-center justify-center top-40 left-70">
        <IoIosArrowDown size={64} className="arrow-1 absolute top-0" />
        <IoIosArrowDown size={80} className="arrow-2 absolute top-10" />
        <IoIosArrowDown size={94} className="arrow-3 absolute top-20" />
      </div>
      <div className="arrow-container absolute flex flex-col items-center justify-center top-40 right-70">
        <IoIosArrowDown size={64} className="arrow-1 absolute top-0" />
        <IoIosArrowDown size={80} className="arrow-2 absolute top-10" />
        <IoIosArrowDown size={94} className="arrow-3 absolute top-20" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <MainIcon className="text-6xl mx-auto mb-6 text-white/80" />
          <h1 className="text-5xl font-bold mb-6 leading-tight">{title}</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              {tagsIcons[0]}
              <span>{tagsTitles[0]}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              {tagsIcons[1]}
              <span>{tagsTitles[1]}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              {tagsIcons[2]}
              <span>{tagsTitles[2]}</span>
            </div>
          </div>
          <HashLink
            to="/#contact"
            className="bg-white text-white w-max px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3 mx-auto group mb-4"
            style={{ color: "#002B5B" }}
          >
            <FaPhoneAlt className="group-hover:animate-pulse" />
            Получете безплатна оценка
          </HashLink>

          <p className="text-sm opacity-75">
            Свържете се с нас днес за персонализирана оферта
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
