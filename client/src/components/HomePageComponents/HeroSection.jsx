import React from "react";

const HeroSection = () => {
  return (
    <div className="py-20" style={{ backgroundColor: "var(--blue)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Професионални услуги за вашите нужди
          </h1>
          <p className="mt-6 text-lg text-gray-200 leading-relaxed">
            Предлагаме пълен набор от услуги – от продажба, монтаж и поддръжка
            на климатици, през професионални електроинсталации, до хамалски
            услуги и изграждане на конструкции от гипсокартон. Разчитайте на нас
            за бързо, надеждно и достъпно обслужване.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="text-[#002B5B] bg-white px-5 py-3 rounded-md font-medium shadow-md cursor-pointer">
              Виж услугите
            </button>
            {/* <button className="text-gray-900 font-medium hover:underline">
              Live demo →
            </button> */}
          </div>
        </div>

        {/* Right Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img
              src="https://www.alliancecc.com.au/wp-content/uploads/2020/02/multi-split-1.jpg"
              className="rounded-xl shadow-md "
              alt="Team"
            />
            <img
              src="https://www.spectrumelectricinc.com/blog/admin/uploads/2022/electrical_panel_2_1668762979.jpg"
              className="rounded-xl shadow-md"
              alt="Collaboration"
            />
          </div>
          <div className="space-y-4 pt-10">
            <img
              src="https://cbx-prod.b-cdn.net/COLOURBOX63278022.jpg?width=800&height=800&quality=70"
              className="rounded-xl shadow-md"
              alt="Working"
            />
            <img
              src="https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-hang-drywall-step-4.jpg"
              className="rounded-xl shadow-md"
              alt="Team Meeting"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
