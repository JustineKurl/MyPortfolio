import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navLinks = [
  { id: 'home',         label: 'Home' },
  { id: 'about',        label: 'About' },
  { id: 'journal',      label: 'Journal' },
  { id: 'gallery',      label: 'Gallery' },
  { id: 'certificates', label: 'Certificates' },
];

const Navbar = ({ currentPage, setCurrentPage, isDarkMode, setIsDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id) => {
    setCurrentPage(id);
    setMenuOpen(false);
  };

  const base = isDarkMode
    ? 'bg-zinc-950/90 border-white/10 text-white'
    : 'bg-white/90 border-black/10 text-black';

  const activePill = isDarkMode
    ? 'bg-white/15 text-white font-semibold'
    : 'bg-black/10 text-black font-semibold';

  const inactiveLink = isDarkMode
    ? 'text-gray-400 hover:text-white hover:bg-white/10'
    : 'text-gray-500 hover:text-black hover:bg-black/5';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${base}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className={`text-base font-bold tracking-tight transition-opacity hover:opacity-70 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}
          >
            JKA<span className="text-blue-500">.</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`px-4 py-1.5 rounded-full text-sm transition-all duration-200 ${
                  currentPage === link.id ? activePill : inactiveLink
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Toggle + hamburger */}
          <div className="flex items-center gap-3">
            {/* Labeled toggle — fixes Issue #2 */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium transition-all duration-300 ${
                isDarkMode
                  ? 'border-white/20 text-gray-300 hover:border-white/40'
                  : 'border-black/20 text-gray-600 hover:border-black/40'
              }`}
              aria-label="Toggle dark and light mode"
            >
              {isDarkMode ? <Moon size={13} /> : <Sun size={13} />}
              <span>{isDarkMode ? 'Dark' : 'Light'}</span>
            </button>

            {/* Hamburger */}
            <button
              className="md:hidden p-1.5 rounded-lg"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={`md:hidden border-t px-4 py-3 space-y-1 ${
          isDarkMode ? 'border-white/10 bg-zinc-950' : 'border-black/10 bg-white'
        }`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                currentPage === link.id ? activePill : inactiveLink
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
