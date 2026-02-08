import React from "react";
import DomatNaMechtiteImg from "../../assets/domat_na_mechtite.png";
import MrPizzaImg from "../../assets/mr-pizza.png";

const partners = [
  {
    name: "Fantastico",
    src: "https://www.fantastico.bg/images/fantastico_do_teb_logo_red.svg",
  },
  {
    name: "Billa",
    src: "https://mallofsofia.bg/wp-content/uploads/2022/03/mall-of-sofia-logo-billa.webp",
  },
  {
    name: "CampusX",
    src: "https://assets.jobs.bg/assets/logo/2019-01-16/b_9a32ac7e1d897ff6a1b5f179add2e8c6.png",
  },
  {
    name: "PWC",
    src: "https://filearchive.cnews.ru/img/cnews/2021/10/19/logos/19/1960977de43234afdf05f34cff2b42bf.png",
  },
  {
    name: "Eko",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoAbvH8k1XIt8yrRSro1p5wYxtmSdJDUBgA&s",
  },
  { name: "Mr. Pizza", src: MrPizzaImg },
  { name: "Домът на мечтите", src: DomatNaMechtiteImg },
];

const PartnersSection = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-[#002B5B]/5" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002B5B]">
            Фирми, които ни се довериха
          </h2>
          <p className="mt-4 text-slate-600">
            Работим с утвърдени компании и дългосрочни партньори.
          </p>
        </div>

        {/* base: 2 cols | sm+: 6 cols (so we can center last row cleanly) */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-6 gap-6 sm:gap-8 items-center">
          {partners.map((partner, index) => {
            const total = partners.length;

            // Per breakpoint: how many "cards per row"
            const perRowBase = 2; // grid-cols-2
            const perRowSm = 3; // simulated by sm:grid-cols-6 with col-span-2

            // Helper to detect last row and the index within it
            const baseRemainder = total % perRowBase;
            const smRemainder = total % perRowSm;

            // BASE (2 cols): if 1 item in last row => span both columns to center
            const isBaseSingleLast = baseRemainder === 1 && index === total - 1;

            // SM+ (3 per row): if 1 item => start at col 3 (center), if 2 items => start at col 2 and 4
            const isSmSingleLast = smRemainder === 1 && index === total - 1;
            const isSmSecondLast = smRemainder === 2 && index === total - 2;
            const isSmLast = smRemainder === 2 && index === total - 1;

            let col = "col-span-1 sm:col-span-2"; // base each item takes 1 of 2 cols; sm+ each takes 2 of 6 cols

            if (isBaseSingleLast) col = "col-span-2 sm:col-span-2"; // take full row on mobile -> centered

            // Centering rules for sm+ (6 columns)
            if (isSmSingleLast) col += " sm:col-start-3"; // centered (cols: 3-4)
            if (isSmSecondLast) col += " sm:col-start-2"; // first of two centered (cols: 2-3)
            if (isSmLast) col += " sm:col-start-4"; // second of two centered (cols: 4-5)

            return (
              <div
                key={index}
                className={`flex items-center justify-center ${col}`}
              >
                <div className="group w-full h-24 sm:h-28 flex items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-md transition-all duration-300 p-4">
                  <img
                    src={partner.src}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain grayscale opacity-80 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
