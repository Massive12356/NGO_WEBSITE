import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import logo from '../images/logo1.png'
import { HashLink } from 'react-router-hash-link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navigationItems = [
    // { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Our Projects', path: '/our-projects' },
    { name: 'Our Impact', path: '/our-impact' },
    { name: 'Get Involved', path: '/get-involved' },
    // { name: 'News & Events', path: '/news-events' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white dark:bg-neutral-950 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 p-2"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2"
            aria-label="Twelve In Twelve LBG Home"
          >
            <img
              src={logo}
              alt="Twelve In Twelve LBG Logo"
              className="w-50 h-20 object-contain"
            />
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                  isActive(item.path)
                    ? "text-[#987543] font-extrabold dark:text-primary-40"
                    : "text-gray-700 font-bold dark:text-gray-200 hover:text-[#987543] dark:hover:text-[#987543]"
                }`}
                aria-label={`Navigate to ${item.name}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <HashLink to={"/get-involved#giving"}>
            <button
              className="hidden md:block border-white dark:bg-white dark:text-black dark:hover:text-white bg-[#987543] hover:bg-white text-white  shadow-md hover:from-black hover:to-[#987543] 
      hover:text-white hover:bg-gradient-to-r hover:shadow-lg py-3 px-6 rounded-lg"
              aria-label="Contact us about volunteering"
            >
              Donate
            </button>
          </HashLink>
          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
              } mode`}
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              aria-label={`${isMenuOpen ? "Close" : "Open"} main menu`}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute  right-2 rounded-lg flex flex-col items-center w-[70%] bg-white dark:bg-black p-4 lg:hidden border-t border-gray-200 dark:border-gray-700"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 ">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                      isActive(item.path)
                        ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    aria-label={`Navigate to ${item.name}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <HashLink
                to={"/get-involved#giving"}
                className="flex w-full items-center justify-center"
                onClick={()=>setIsMenuOpen(false)}
              >
                <button
                  className="flex md:hidden border-white dark:bg-white dark:text-black dark:hover:text-white bg-[#987543] hover:bg-white text-white  shadow-md hover:from-black hover:to-[#987543] 
      hover:text-white hover:bg-gradient-to-r hover:shadow-lg py-2 px-10 rounded-lg"
                  aria-label="Contact us about volunteering"
                >
                  Donate
                </button>
              </HashLink>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;