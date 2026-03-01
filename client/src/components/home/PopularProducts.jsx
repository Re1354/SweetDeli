import { useState } from 'react';
import ProductCard from './ProductCard';

const PopularProducts = () => {
  const popularProducts = [
    {
      id: 1,
      name: 'Neque volutpat morbi.',
      description: 'Et blandit non sit ac egestas risus non.',
      price: 20,
      image: 'Mocha cake.jpeg',
    },
    {
      id: 2,
      name: 'Neque volutpat morbi.',
      description: 'Et blandit non sit ac egestas risus non.',
      price: 20,
      image: 'Blue with drip cake.jpeg',
    },
    {
      id: 3,
      name: 'Neque volutpat morbi.',
      description: 'Et blandit non sit ac egestas risus non.',
      price: 20,
      image: 'download (11).jpeg',
    },
  ];

  return (
    <section className="bg-[#FCFCFD]">
      <div className="max-w-container mx-auto px-20">
        <div className="flex items-start justify-between mb-12">
          <div className="text-center flex-1 max-w-md mx-auto">
            <p className="text-xs font-bold text-gray-800 uppercase tracking-wide mb-1">
              Most Popular
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Our Exclusive Cakes
            </h2>
          </div>
        </div>

        <div className="relative -mt-20">
          {/* Navigation Arrows */}
          <div className="flex gap-2 items-center justify-end mb-6">
            <button className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 -pt-20">
            {popularProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
