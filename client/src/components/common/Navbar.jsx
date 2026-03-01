import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { AiOutlineUser } from 'react-icons/ai';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();
  const { getCartCount } = useCart();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    if (showUserMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showUserMenu]);

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    navigate('/');
  };

  const handleLogin = () => {
    setShowUserMenu(false);
    navigate('/login');
  };

  const handleRegister = () => {
    setShowUserMenu(false);
    navigate('/register');
  };

  return (
    <nav className="bg-[#FCFCFD] border-b border-gray-200">
      <div className="max-w-container mx-auto px-20">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo + Divider */}
          <div className="flex items-center gap-6">
            {/* Logo pill */}
            <div className="px-4 py-1.5 rounded-full bg-gray-100 text-sm font-medium text-gray-800 flex items-center gap-2">
              LOGO
            </div>

            {/* Divider */}
            <div className="h-[24px] w-[2px] bg-gray-300" />

            {/* Navigation */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#777E90]">
              <Link to="/" className="hover:text-gray-900">
                Home
              </Link>
              <Link to="/discover" className="hover:text-gray-900">
                Discover
              </Link>
              <Link to="/blog" className="hover:text-gray-900">
                Blog
              </Link>
              <Link to="/about" className="hover:text-gray-900">
                About Us
              </Link>
              <Link to="/contact" className="hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-5">
            {/* Shopping Cart */}
            <button
              onClick={() => navigate('/cart')}
              className="relative text-[#777E90] hover:text-gray-900"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.4 5M17 13l1.4 5M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>

              {/* Cart badge */}
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-black text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* User */}
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="text-[#777E90] hover:text-gray-900"
              >
                <AiOutlineUser className="w-6 h-6" />
              </button>

              {/* Dropdown Menu */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {isAuthenticated ? (
                    <>
                      {user && (
                        <div className="px-4 py-2 border-b border-gray-200">
                          <p className="text-sm font-semibold text-gray-900">
                            {user.name}
                          </p>
                          <p className="text-xs text-gray-500">{user.email}</p>
                        </div>
                      )}
                      <button
                        onClick={() => {
                          setShowUserMenu(false);
                          navigate('/orders');
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        My Orders
                      </button>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Log Out
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={handleLogin}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Log In
                      </button>
                      <button
                        onClick={handleRegister}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Register
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
