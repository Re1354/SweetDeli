const HeroSection = () => {
  return (
    <section className="relative bg-[#F4F5F6] py-12 md:py-16 lg:py-24">
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Bibendum et
                <br />
                sit aliquam!
              </h1>
              <p className="text-base md:text-lg text-black max-w-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div>
              <button className="bg-gray-900 text-white px-6 md:px-8 py-2 md:py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors text-sm md:text-base">
                Discover Menu
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-8 lg:mt-0">
            <img
              src={
                new URL(
                  '../../images/jonathan-borba-5G9uIkAXLSc-unsplash.jpg',
                  import.meta.url,
                ).href
              }
              alt="Hero"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
