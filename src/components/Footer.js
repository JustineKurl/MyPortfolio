import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const navLinks = [
  { id: 'home',         label: 'Home' },
  { id: 'about',        label: 'About' },
  { id: 'journal',      label: 'Journal' },
  { id: 'gallery',      label: 'Gallery' },
  { id: 'certificates', label: 'Certificates' },
];

const Footer = ({ isDarkMode, setCurrentPage }) => {
  const border  = isDarkMode ? 'border-white/10' : 'border-black/8';
  const title   = isDarkMode ? 'text-white'      : 'text-black';
  const muted   = isDarkMode ? 'text-gray-500'   : 'text-gray-400';
  const link    = isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black';
  const iconBtn = isDarkMode
    ? 'border-white/15 text-gray-400 hover:bg-white hover:text-black hover:border-white'
    : 'border-black/15 text-gray-500 hover:bg-black hover:text-white hover:border-black';

  return (
    <footer className={`mt-24 border-t transition-colors duration-300 ${border} ${
      isDarkMode ? 'bg-zinc-950' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <p className={`text-xl font-bold mb-3 ${title}`}>
              JKA<span className="text-blue-500">.</span>
            </p>
            <p className={`text-sm leading-relaxed ${muted}`}>
              Personal Educational Tour Portfolio — BSIT 3, Holy Cross of Davao College.
            </p>
          </div>

          {/* Quick Links — now uses setCurrentPage (fixes Issue #5) */}
          <div>
            <h3 className={`text-sm font-semibold tracking-widest uppercase mb-5 ${muted}`}>
              Quick Links
            </h3>
            <div className="space-y-2">
              {navLinks.map((l) => (
                <button
                  key={l.id}
                  onClick={() => setCurrentPage(l.id)}
                  className={`block text-sm transition-all duration-200 hover:translate-x-1 ${link}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className={`text-sm font-semibold tracking-widest uppercase mb-5 ${muted}`}>
              Contact
            </h3>

            <div className={`flex items-center gap-2 mb-5 text-sm ${muted}`}>
              <Phone size={15} />
              <span>+63 995-443-7863</span>
            </div>

            <div className="flex gap-3">
              
                href="https://www.facebook.com/share/1BjzyXfJj5/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-full border transition-all duration-200 hover:scale-110 ${iconBtn}`}
                title="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              
                href="https://discordapp.com/users/1215863022871117916"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-full border transition-all duration-200 hover:scale-110 ${iconBtn}`}
                title="Discord"
              >
                <MessageCircle size={18} />
              </a>

              
                href="mailto:justinekurl.abadia@hcdc.edu.ph"
                className={`p-2.5 rounded-full border transition-all duration-200 hover:scale-110 ${iconBtn}`}
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-12 pt-8 border-t text-center text-xs ${border} ${muted}`}>
          &copy; 2026 Justine Kurl T. Abadia. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
