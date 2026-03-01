import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');

    try {
      setLoading(true);
      await register(formData);
      navigate('/');
    } catch (err) {
      setError(err || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Dark */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#353945] px-12 xl:px-20 py-12 flex-col">
        {/* Logo */}
        <div className="mb-auto">
          <div className="px-6 py-2.5 rounded-full bg-white text-sm font-medium text-gray-900 flex items-center gap-2 w-fit">
            <span>LOGO</span>
          </div>
        </div>

        {/* Main Content - Centered */}
        <div className="flex-1 flex flex-col justify-center text-white space-y-4">
          <h1 className="text-4xl font-bold leading-tight">
            Welcome to Sweetdeli!
          </h1>
          <p className="text-white/90 text-base leading-relaxed max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
            ut laoreet velit ma.
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="mt-auto">
          <div className="w-full h-48 bg-[#4A4F5C] rounded-2xl flex items-center justify-center">
            <svg
              className="w-20 h-20 text-[#5A5F6C]"
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
        </div>
      </div>

      {/* Right Panel - White Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center py-8 px-6 sm:px-8 md:px-12 bg-white">
        <div className="w-full max-w-sm space-y-2">
          <div className="mb-8 md:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#27272E]">
              Create your account
            </h2>
            <p className="text-[#27272E] text-sm">It's free and easy</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#425466] mb-1.5"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-[#E8EDF2] text-gray-900 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 placeholder:text-gray-400 text-sm"
                placeholder="Type your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#425466] mb-1.5"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-[#E8EDF2] text-gray-900 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 placeholder:text-gray-400 text-sm"
                placeholder="Type your email address"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#425466] mb-1.5"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-[#E8EDF2] text-gray-900 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 placeholder:text-gray-400 text-sm"
                placeholder="Type your password"
              />
              <div className="flex items-center justify-end mt-1.5">
                <Link
                  to="/forgot-password"
                  className="text-xs text-gray-400 hover:text-gray-900"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div className="flex items-start pt-2">
              <input
                type="checkbox"
                required
                className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900 mt-0.5"
              />
              <span className="ml-2.5 text-xs text-gray-600 leading-relaxed">
                By creating an account means you agree to the{' '}
                <Link
                  to="/terms"
                  className="text-gray-900 font-bold hover:underline"
                >
                  Terms and Conditions
                </Link>
                , and our{' '}
                <Link
                  to="/privacy"
                  className="text-gray-900 font-bold hover:underline"
                >
                  Privacy Policy
                </Link>
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-2.5 px-4 rounded-full font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          {/* Social Login */}
          <div className="space-y-3">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-4 bg-white text-gray-400">
                  or do it via other accounts
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6">
              {/* Google */}
              <button className="hover:opacity-70 transition-opacity border border-gray-300 rounded-full p-2">
                <svg
                  className="w-6 h-6 text-gray-700"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </button>

              {/* Apple */}
              <button className="hover:opacity-70 transition-opacity border border-gray-300 rounded-full p-2">
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09z" />
                  <path d="M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
              </button>

              {/* Facebook */}
              <button className="hover:opacity-70 transition-opacity border border-gray-300 rounded-full p-2">
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z" />
                </svg>
              </button>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="font-bold text-gray-900 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
