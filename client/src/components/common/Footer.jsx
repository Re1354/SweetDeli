import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#F7F8FA] text-[#353945] pt-8 px-4 sm:px-6 md:px-10 lg:px-24">
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 pt-0 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Sweetdeli</h3>
            <div className="space-y-2 text-sm text-[#363940]">
              <h4 className="text-sm font-semibold mb-4">Contact us</h4>
              <p>sweetdeli@gmail.com</p>
              <p>+1-2345-6789</p>
              <p>123 Ave, New York, USA</p>
              <div className="flex items-center gap-3 md:gap-4">
                <a
                  href="#"
                  className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center hover:bg-gray-400 transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center hover:bg-gray-400 transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center hover:bg-gray-400 transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center hover:bg-gray-400 transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold mb-4 pt-0 lg:pt-11">
              Products
            </h4>
            <ul className="space-y-1.5 text-sm text-[#363940]">
              <li>
                <Link to="#" className="hover:text-gray-900 transition-colors">
                  Egestas vitae.
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900 transition-colors">
                  Viverra lorem ac.
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900 transition-colors">
                  Eget ar tellus.
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900 transition-colors">
                  Elit evals.
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900 transition-colors">
                  Vulputate proin.
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm font-semibold mb-4 pt-0 lg:pt-11">About</h4>
            <ul className="space-y-1.5 text-sm text-[#363940]">
              <li>
                <Link to="#" className="hover:text-gray-900 transition-colors">
                  Egestas vitae.
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900 transition-colors">
                  Viverra lorem ac.
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900 transition-colors">
                  Eget ar tellus.
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900 transition-colors">
                  Elit evals.
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900 transition-colors">
                  Vulputate proin.
                </Link>
              </li>
            </ul>
          </div>

          {/* Get the app */}
          <div>
            <h4 className="text-sm font-semibold mb-4 pt-0 lg:pt-11">
              Get the app
            </h4>
            <div className="space-y-2">
              <a
                href="#"
                className="flex items-center gap-2 bg-black text-white px-4 py-1 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="text-xs">
                  Download on the
                  <br />
                  <strong className="text-sm">App Store</strong>
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-black text-white px-4 py-1 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <span className="text-xs">
                  GET IT ON
                  <br />
                  <strong className="text-sm">Google Play</strong>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-10 gap-4 border-gray-300">
          <select className="px-3 py-1 bg-white border border-gray-300 rounded text-sm text-[#95A1BB] w-full sm:w-auto">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>

          <div className="text-xs text-[#95A1BB] text-center">
            Copyright © 2026 All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
