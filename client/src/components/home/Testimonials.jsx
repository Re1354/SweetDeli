import { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Cha Ji-Hun',
      role: 'Amet phasellus interdum.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique enim nec enim laoreet.',
    },
    {
      id: 2,
      name: 'Cha Ji-Hun',
      role: 'Amet phasellus interdum.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique enim nec enim laoreet.',
    },
    {
      id: 3,
      name: 'Cha Ji-Hun',
      role: 'Amet phasellus interdum.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique enim nec enim laoreet.',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-4 bg-[#FCFCFD]">
      <div className="max-w-container mx-auto px-20">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-black uppercase tracking-wide mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What's our customer says?
          </h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-8 shadow-md"
              >
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-900"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>

            <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
