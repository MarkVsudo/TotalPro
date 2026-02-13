import { HashLink } from "react-router-hash-link";
import TbiBankLogo from "../../assets/tbi-bank.png";
import { Link } from "react-router-dom";
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
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #002B5B 0%, #003d7a 50%, #002B5B 100%)",
      }}
    >
      {/* Soft decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:gap-14 lg:grid-cols-2">
          {/* Left content */}
          <div className="py-16 sm:py-20 lg:py-28">
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Всички услуги за дома и офиса – на едно място
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              При нас ще намерите всичко на едно място – от монтаж на климатици,
              електро и ВиК услуги, до гипсокартон, хамалски услуги, плочкаджии,
              мебели, СОТ и още. <br className="hidden sm:block" />
              Един екип, едно обаждане – и всичко е свършено.{" "}
              <br className="hidden sm:block" />
              Бързо, качествено и без излишно главоболие.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:gap-4 w-fit">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <HashLink
                  to="/#services"
                  className="inline-flex flex-1 justify-center rounded-lg bg-white px-5 py-3 font-semibold text-[#002B5B] shadow-lg shadow-black/10 transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/60"
                >
                  Виж услугите
                </HashLink>

                <HashLink
                  to="/#contact"
                  className="inline-flex flex-1 justify-center rounded-lg bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/25 backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/60"
                >
                  Контакт
                </HashLink>
              </div>
              <Link
                to="/air-conditioning"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#FF6600] px-5 py-3 text-white font-semibold shadow-md hover:brightness-95 transition text-center leading-tight flex-wrap sm:flex-nowrap"
              >
                <span className="whitespace-nowrap">Купи климатик с</span>

                <img
                  src={TbiBankLogo}
                  alt="tbi bank"
                  loading="lazy"
                  className="h-6 sm:h-6 w-auto shrink-0"
                />

                <span className="whitespace-nowrap">на изплащане</span>
              </Link>
            </div>

            {/* Mobile/Tablet image strip (shows when the big grid is hidden) */}
            {/* <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-4 lg:hidden">
              {images.slice(0, 4).map((img, i) => (
                <div
                  key={`m-${i}`}
                  className="overflow-hidden rounded-2xl ring-1 ring-white/15"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-28 w-full object-cover sm:h-32"
                    loading="lazy"
                  />
                </div>
              ))}
            </div> */}
          </div>

          {/* Right visual: contained grid (no absolute overlap) */}
          <div className="relative hidden lg:block">
            {/* Frame */}
            <div className="relative ml-auto h-[520px] w-[520px] xl:h-[560px] xl:w-[560px]">
              {/* Glass panel background */}
              <div className="absolute inset-0 rounded-[28px] bg-white/5 ring-1 ring-white/15 backdrop-blur" />

              {/* Gradient fade top/bottom */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 rounded-t-[28px] bg-gradient-to-b from-[#002B5B]/70 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 rounded-b-[28px] bg-gradient-to-t from-[#002B5B]/70 to-transparent" />

              {/* Scrolling columns */}
              <div className="relative z-0 flex h-full gap-4 overflow-hidden p-4">
                {/* Left column (scroll up) */}
                <div className="flex w-1/2 flex-col gap-4">
                  <div className="flex flex-col gap-4 animate-scroll-up motion-reduce:animate-none">
                    {leftImages.concat(leftImages).map((img, i) => (
                      <img
                        key={`left-${i}`}
                        src={img.src}
                        alt={img.alt}
                        className="h-44 w-full rounded-2xl object-cover shadow-lg shadow-black/15 ring-1 ring-white/10"
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>

                {/* Right column (scroll down) */}
                <div className="flex w-1/2 flex-col gap-4">
                  <div className="flex flex-col gap-4 animate-scroll-down motion-reduce:animate-none">
                    {rightImages.concat(rightImages).map((img, i) => (
                      <img
                        key={`right-${i}`}
                        src={img.src}
                        alt={img.alt}
                        className="h-44 w-full rounded-2xl object-cover shadow-lg shadow-black/15 ring-1 ring-white/10"
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Subtle border highlight */}
              <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
