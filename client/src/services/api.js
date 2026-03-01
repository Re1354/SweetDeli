import axios from 'axios';

// Create axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Handle responses and errors
api.interceptors.response.use(
  response => response.data,
  error => {
    const message = error.response?.data?.message || 'Something went wrong';
    return Promise.reject(message);
  },
);

// Auth API
export const authAPI = {
  register: userData => api.post('/auth/register', userData),
  login: credentials => api.post('/auth/login', credentials),
  getMe: () => api.get('/auth/me'),
};

// Products API
export const productsAPI = {
  getAll: params => api.get('/products', { params }),
  getById: id => api.get(`/products/${id}`),
  create: productData => api.post('/products', productData),
  update: (id, productData) => api.put(`/products/${id}`, productData),
  delete: id => api.delete(`/products/${id}`),
};

// Newsletter API
export const newsletterAPI = {
  subscribe: email => api.post('/newsletter/subscribe', { email }),
  unsubscribe: email => api.delete(`/newsletter/unsubscribe/${email}`),
  getSubscribers: () => api.get('/newsletter/subscribers'),
};

// Orders API
export const ordersAPI = {
  create: orderData => api.post('/orders', orderData),
  getMyOrders: () => api.get('/orders/my-orders'),
  getById: id => api.get(`/orders/${id}`),
};

export default api;
