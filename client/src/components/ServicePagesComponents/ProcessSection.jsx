const ProcessSection = ({ description, process }) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Responsive */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#002B5B] mb-4 sm:mb-6">
            Как работим
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            {description}
          </p>
        </div>

        {/* Process Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8">
          {process.map((item, index) => (
            <div key={index} className="text-center group">
              {/* Icon Container with Step Badge - Responsive */}
              <div className="relative mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#002B5B] shadow-lg rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="text-white" size={28} />
                </div>

                {/* Step Badge - Responsive positioning */}
                <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-7 h-7 sm:w-8 sm:h-8 bg-[#002B5B] rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-md">
                  {item.step}
                </div>
              </div>

              {/* Title - Responsive sizing */}
              <h3 className="text-lg sm:text-xl font-bold text-[#002B5B] mb-2 sm:mb-3 px-2">
                {item.title}
              </h3>

              {/* Description - Responsive sizing */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-4 sm:px-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
