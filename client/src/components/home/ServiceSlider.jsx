const ServiceSlider = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FCFCFD]">
      <div className="max-w-container mx-auto px-20">
        {/* Service Card */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16 mb-8">
          {/* Left - Image Placeholder */}
          <div className="w-full lg:w-[372px] h-[372px] flex-shrink-0">
            <img
              src={
                new URL(
                  '../../images/sera-iZgQKxuMRHc-unsplash.jpg',
                  import.meta.url,
                ).href
              }
              alt="Service"
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="flex-1 lg:max-w-[591px] space-y-4 pr-10 pl-16">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Nibh in dolor bibendum.
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              est felis, sagittis viverra nulla mattis scelerisque. Eget cras
              sas sad .
            </p>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 pt-6">
          <button className="w-2 h-2 rounded-full bg-black"></button>
          <button className="w-2 h-2 rounded-full bg-gray-300"></button>
          <button className="w-2 h-2 rounded-full bg-gray-300"></button>
          <button className="w-2 h-2 rounded-full bg-gray-300"></button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSlider;
