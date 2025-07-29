import { HashLink } from "react-router-hash-link";
const images = [
  {
    src: "https://www.socool.sg/wp-content/uploads/2023/12/aircon-installation-cost-and-services-in-singapore.webp",
    alt: "Услуги климатици",
  },
  {
    src: "https://i0.wp.com/rbtautomate.com/wp-content/uploads/2023/02/Benefits-of-Commercial-Electrical-Services-for-Businesses--scaled.jpg?fit=2560%2C1707&ssl=1",
    alt: "Ел. услуги",
  },
  {
    src: "https://www.shutterstock.com/image-photo/two-professional-relocation-service-workers-600nw-2135966153.jpg",
    alt: "Хамалски услуги",
  },
  {
    src: "https://imperialdrywall.com/wp-content/uploads/2022/03/Drywall-Installation-Contractors.webp",
    alt: "Гипсокартон",
  },
  {
    src: "https://5.imimg.com/data5/SELLER/Default/2023/12/366371685/FP/IG/DF/151613646/cctv-camera-installation-services.jpeg",
    alt: "СОТ",
  },
  {
    src: "https://img.freepik.com/free-photo/worker-repairing-water-heater_23-2149334230.jpg",
    alt: "ВиК",
  },
  {
    src: "https://www.rubi.com/us/blog/wp-content/uploads/2022/05/tile-bathroom.jpg",
    alt: "Плочкаджии",
  },
  {
    src: "https://www.shutterstock.com/image-photo/serious-furniture-designer-carefully-sanding-600nw-382064236.jpg",
    alt: "Мебели",
  },
];

const leftImages = images.slice(0, 4);
const rightImages = images.slice(4, 8);

const HeroSection = () => {
  return (
    <div
      className="overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #002B5B 0%, #003d7a 50%, #002B5B 100%)",
      }}
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="py-24">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Всички услуги за дома и офиса – на едно място
          </h1>
          <p className="mt-6 text-lg text-gray-200 leading-relaxed">
            При нас ще намерите всичко на едно място – от монтаж на климатици,
            електро и ВиК услуги, до гипсокартон, хамалски услуги, плочкаджии,
            мебели, СОТ и още. <br /> Един екип, едно обаждане – и всичко е
            свършено. <br />
            Бързо, качествено и без излишно главоболие.
          </p>

          <div className="mt-8 flex gap-4">
            <HashLink
              to="/#services"
              className="text-[#002B5B] bg-white px-5 py-3 rounded-md font-medium shadow-md cursor-pointer hover:bg-gray-50 transition-colors"
            >
              Виж услугите
            </HashLink>
          </div>
        </div>

        {/* Right Image Grid */}
        <div className="absolute right-0 top-0 h-full overflow-hidden hidden md:block">
          <div className="flex gap-4 h-full">
            {/* Left Column (scrolling up) */}
            <div className="flex flex-col gap-4 h-full">
              <div className="flex flex-col gap-4 animate-scroll-up">
                {leftImages.map((img, i) => (
                  <img
                    key={`left-1-${i}`}
                    src={img.src}
                    alt={img.alt}
                    className="w-64 h-48 object-cover rounded-xl shadow-md flex-shrink-0"
                  />
                ))}
                {leftImages.map((img, i) => (
                  <img
                    key={`left-2-${i}`}
                    src={img.src}
                    alt={img.alt}
                    className="w-64 h-48 object-cover rounded-xl shadow-md flex-shrink-0"
                  />
                ))}
              </div>
            </div>

            {/* Right Column (scrolling down) */}
            <div className="flex flex-col gap-4 h-full">
              <div className="flex flex-col gap-4 animate-scroll-down">
                {rightImages.map((img, i) => (
                  <img
                    key={`right-1-${i}`}
                    src={img.src}
                    alt={img.alt}
                    className="w-64 h-48 object-cover rounded-xl shadow-md flex-shrink-0"
                  />
                ))}
                {rightImages.map((img, i) => (
                  <img
                    key={`right-2-${i}`}
                    src={img.src}
                    alt={img.alt}
                    className="w-64 h-48 object-cover rounded-xl shadow-md flex-shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
