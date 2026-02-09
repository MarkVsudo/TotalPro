const FeaturesSection = ({ description, features }) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Responsive */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#002B5B] mb-4 sm:mb-6">
            Защо да ни изберете
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            {description}
          </p>
        </div>

        {/* Features Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              {/* Icon Container - Responsive sizing */}
              <div className="bg-white p-5 sm:p-6 rounded-full border border-[#002B5B] w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                <div className="text-2xl sm:text-3xl">{feature.icon}</div>
              </div>

              {/* Title - Responsive sizing */}
              <h3 className="text-lg sm:text-xl font-bold text-[#002B5B] mb-2 sm:mb-3 px-2">
                {feature.title}
              </h3>

              {/* Description - Responsive sizing */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-4 sm:px-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
