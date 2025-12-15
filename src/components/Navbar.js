import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage, isDarkMode, setIsDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-500 ${
      isDarkMode ? 'bg-black/80 border-white/20' : 'bg-white/80 border-black/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Portfolio
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {['home', 'about', 'journal', 'gallery', 'certificates'].map((item) => (
              <button
                key={item}
                onClick={() => navigateTo(item)}
                className={`capitalize transition-all duration-300 hover:scale-110 ${
                  currentPage === item 
                    ? isDarkMode 
                      ? 'text-white font-bold underline' 
                      : 'text-black font-bold underline'
                    : isDarkMode 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-black'
                }`}
              >
                {item}
              </button>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 border-2 ${
                isDarkMode 
                  ? 'bg-white text-black border-white hover:bg-gray-200' 
                  : 'bg-black text-white border-black hover:bg-gray-800'
              }`}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full transition-all duration-300 border-2 ${
                isDarkMode ? 'bg-white text-black border-white' : 'bg-black text-white border-black'
              }`}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden backdrop-blur-md ${isDarkMode ? 'bg-black/90' : 'bg-white/90'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['home', 'about', 'journal', 'gallery', 'certificates'].map((item) => (
              <button
                key={item}
                onClick={() => navigateTo(item)}
                className={`block w-full text-left px-3 py-2 capitalize transition-all duration-300 rounded ${
                  currentPage === item 
                    ? isDarkMode 
                      ? 'text-white bg-white/20 font-bold' 
                      : 'text-black bg-black/10 font-bold'
                    : isDarkMode
                      ? 'text-gray-400 hover:bg-white/10 hover:text-white'
                      : 'text-gray-600 hover:bg-black/5 hover:text-black'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;