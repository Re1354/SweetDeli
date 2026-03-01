import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-300 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Product Image Placeholder */}
      <div className="relative h-48 bg-[#A0A7B3] flex items-center justify-center">
        {product.image ? (
          <img
            src={new URL(`../../images/${product.image}`, import.meta.url).href}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="bg-white rounded-lg p-5 shadow-md">
            <svg
              className="w-10 h-10 text-[#A0A7B3]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5 ">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-bold text-base text-gray-900 flex-1">
            {product.name || 'Neque volutpat morbi.'}
          </h3>
          <div className="flex-shrink-0 border border-gray-900 rounded-md px-2 py-1">
            <p className="text-sm font-bold text-gray-900">
              ${product.price || '20'}
            </p>
          </div>
        </div>

        <p className="text-xs  font-semibold text-gray-800 leading-relaxed">
          {product.description || 'Et blandit non sit ac egestas risus non.'}
        </p>

        <button
          onClick={handleAddToCart}
          className="bg-black text-white px-6 py-2 mt-4 rounded-full hover:bg-gray-800 transition-colors text-xs font-semibold"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
