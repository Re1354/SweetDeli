import seraImage from '../../images/sera-iZgQKxuMRHc-unsplash.jpg';

const ServiceSlider = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[#FCFCFD]">
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Service Card */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 md:gap-8 lg:gap-16 mb-6 md:mb-8">
          {/* Left - Image Placeholder */}
          <div className="w-full lg:w-[372px] h-64 sm:h-80 md:h-96 lg:h-[372px] flex-shrink-0 bg-gray-200">
            <img
              src={seraImage}
              alt="Service"
              className="w-full h-full rounded-2xl object-cover"
              onError={e => {
                console.error('Image failed to load:', e);
                e.target.style.display = 'none';
              }}
            />
          </div>

          {/* Right - Content */}
          <div className="flex-1 lg:max-w-[591px] space-y-3 md:space-y-4 lg:pr-10 lg:pl-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Nibh in dolor bibendum.
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
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
