import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ordersAPI } from '../services/api';

const Orders = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    const fetchOrders = async () => {
      try {
        const data = await ordersAPI.getMyOrders();
        setOrders(data.orders);
      } catch (err) {
        setError(err || 'Failed to load orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [isAuthenticated, navigate]);

  const getStatusColor = status => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      processing: 'bg-blue-100 text-blue-800',
      shipped: 'bg-purple-100 text-purple-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FCFCFD] py-12 md:py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="text-center">
            <p className="text-gray-600">Loading orders...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#FCFCFD] py-12 md:py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 md:px-6 py-3 md:py-4 rounded-lg text-sm md:text-base">
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FCFCFD] py-12 md:py-16">
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
          My Orders
        </h1>

        {orders.length === 0 ? (
          <div className="bg-white rounded-lg border border-gray-200 p-8 md:p-12 text-center">
            <svg
              className="w-12 h-12 md:w-16 md:h-16 mx-auto text-gray-300 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
              No orders yet
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
              Start shopping to create your first order!
            </p>
            <button
              onClick={() => navigate('/')}
              className="inline-block bg-black text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-medium hover:bg-gray-800 transition-colors text-sm md:text-base"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-4 md:space-y-6">
            {orders.map(order => (
              <div
                key={order._id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                {/* Order Header */}
                <div className="bg-gray-50 px-4 md:px-6 py-3 md:py-4 border-b border-gray-200">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                    <div>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Order placed on{' '}
                        {new Date(order.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                      <p className="text-xs text-gray-500 mt-1 truncate max-w-[200px] sm:max-w-none">
                        Order ID: {order._id}
                      </p>
                    </div>
                    <div className="text-left sm:text-right flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2">
                      <p className="text-base md:text-lg font-bold text-gray-900">
                        ${order.totalAmount.toFixed(2)}
                      </p>
                      <span
                        className={`inline-block px-2.5 md:px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                          order.status,
                        )}`}
                      >
                        {order.status.charAt(0).toUpperCase() +
                          order.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="p-4 md:p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">
                    Order Items
                  </h3>
                  <div className="space-y-3 md:space-y-4">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex gap-3 md:gap-4">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-100 rounded flex-shrink-0 overflow-hidden">
                          {item.image ? (
                            <img
                              src={
                                new URL(
                                  `../images/${item.image}`,
                                  import.meta.url,
                                ).href
                              }
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <svg
                                className="w-8 h-8 text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <rect
                                  x="3"
                                  y="3"
                                  width="18"
                                  height="18"
                                  rx="2"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <path d="M3 15l5-5 4 4 5-5 4 4v6H3z" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 text-sm md:text-base truncate">
                            {item.name}
                          </h4>
                          <p className="text-xs md:text-sm text-gray-600">
                            Quantity: {item.quantity} × ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="font-semibold text-gray-900 text-sm md:text-base">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Shipping Address */}
                  {order.shippingAddress && (
                    <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                        Shipping Address
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600">
                        {order.shippingAddress.fullName}
                        <br />
                        {order.shippingAddress.address}
                        <br />
                        {order.shippingAddress.city},{' '}
                        {order.shippingAddress.postalCode}
                        <br />
                        Phone: {order.shippingAddress.phone}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
