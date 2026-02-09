const ServicesSection = ({ description, services }) => {
  const remainderLg = services.length % 3;

  return (
    <section className="py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002B5B] mb-4 sm:mb-6">
            Нашите услуги
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            // Optional: center last row on lg if it has 1 or 2 items
            const isLastRowStart =
              remainderLg !== 0 && index === services.length - remainderLg;

            const centerLg =
              remainderLg === 1 && isLastRowStart
                ? "lg:col-start-2"
                : remainderLg === 2 && isLastRowStart
                  ? "lg:col-start-2"
                  : "";

            return (
              <div
                key={index}
                className={`p-6 sm:p-7 border border-[#002B5B] rounded-2xl shadow-md bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group h-full ${centerLg}`}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#002B5B] mb-2 sm:mb-3">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
