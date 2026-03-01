const VideoSection = () => {
  return (
    <section className="py-12 md:py-16 bg-[#FCFCFD]">
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            The reasons
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Us?
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-[1120px] aspect-video rounded-xl md:rounded-[20px] overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/m0ko3pKYPHA?si=u5TfJd_YvLRmn-WR"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
