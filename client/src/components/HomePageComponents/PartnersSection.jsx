import React from "react";
import DomatNaMechtiteImg from "../../assets/domat_na_mechtite.png";
import MrPizzaImg from "../../assets/mr-pizza.png";
const PartnersSection = () => {
  return (
    //
    <div className="my-24 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl mb-8 font-bold text-[#002B5B]">
        Фирми, които ни се довериха
      </h2>
      <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <img
          alt="Fantastico"
          src="https://www.fantastico.bg/images/fantastico_do_teb_logo_red.svg"
          width={158}
          height={48}
          className="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
        />
        <img
          alt="Billa"
          src="https://mallofsofia.bg/wp-content/uploads/2022/03/mall-of-sofia-logo-billa.webp"
          width={158}
          height={48}
          className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
        />
        <img
          alt="CampusX"
          src="https://assets.jobs.bg/assets/logo/2019-01-16/b_9a32ac7e1d897ff6a1b5f179add2e8c6.png"
          width={158}
          height={48}
          className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
        />
        <img
          alt="PWC"
          src="https://filearchive.cnews.ru/img/cnews/2021/10/19/logos/19/1960977de43234afdf05f34cff2b42bf.png"
          width={158}
          height={48}
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        />
        <img
          alt="Eko"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoAbvH8k1XIt8yrRSro1p5wYxtmSdJDUBgA&s"
          width={158}
          height={48}
          className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
        />
        <img
          alt="Mr.Pizza"
          src={MrPizzaImg}
          width={158}
          height={48}
          className="col-span-2 max-h-20 w-100 object-contain lg:col-span-1"
        />
        <img
          alt="Domat na mechtite"
          src={DomatNaMechtiteImg}
          width={158}
          height={48}
          className="col-span-2 max-h-20 w-100 object-contain lg:col-span-1 invisible"
        />
        <img
          alt="Domat na mechtite"
          src={DomatNaMechtiteImg}
          width={158}
          height={48}
          className="col-span-2 max-h-25 w-100 object-contain lg:col-span-1"
        />
        <img
          alt="Domat na mechtite"
          src={DomatNaMechtiteImg}
          width={158}
          height={48}
          className="col-span-2 max-h-20 w-100 object-contain lg:col-span-1 invisible"
        />
      </div>
    </div>
  );
};

export default PartnersSection;
