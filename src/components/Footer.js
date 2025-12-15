import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const Footer = ({ isDarkMode }) => {
  const footerBg = isDarkMode ? 'border-white/20 bg-black/50' : 'border-black/20 bg-white/50';
  const titleColor = isDarkMode ? 'text-white' : 'text-black';
  const textColor = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const linkHover = isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black';
  const iconBorder = isDarkMode ? 'border-white/30 hover:bg-white hover:text-black' : 'border-black/30 hover:bg-black hover:text-white';
  const borderColor = isDarkMode ? 'border-white/20 text-gray-400' : 'border-black/20 text-gray-600';

  return (
    <footer className={`mt-20 border-t-2 transition-colors duration-500 ${footerBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Quick Links Section */}
          <div className="md:col-span-1">
            <h3 className={`text-2xl font-bold mb-6 ${titleColor}`}>Quick Links</h3>
            <div className="space-y-3">
              <a href="#home" className={`block transition-all duration-300 hover:translate-x-2 text-lg ${linkHover}`}>
                → Home
              </a>
              <a href="#about" className={`block transition-all duration-300 hover:translate-x-2 text-lg ${linkHover}`}>
                → About
              </a>
              <a href="#journal" className={`block transition-all duration-300 hover:translate-x-2 text-lg ${linkHover}`}>
                → Journal
              </a>
              <a href="#gallery" className={`block transition-all duration-300 hover:translate-x-2 text-lg ${linkHover}`}>
                → Gallery
              </a>
              <a href="#certificates" className={`block transition-all duration-300 hover:translate-x-2 text-lg ${linkHover}`}>
                → Certificates
              </a>
            </div>
          </div>

          {/* Empty Space for Better Layout */}
          <div className="hidden md:block"></div>

          {/* Contact Info Section */}
          <div className="md:col-span-1">
            <h3 className={`text-2xl font-bold mb-6 ${titleColor}`}>Contact Info</h3>
            
            {/* Phone Number */}
            <div className={`flex items-center gap-3 mb-6 text-lg ${textColor}`}>
              <Phone size={22} />
              <span>+63 995-443-7863</span>
            </div>

            {/* Social Links */}
            <h4 className={`text-lg font-semibold mb-4 ${titleColor}`}>Connect With Me</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/share/1BjzyXfJj5/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-3 rounded-full border-2 transition-all duration-300 hover:scale-110 ${iconBorder}`} 
                title="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a 
                href="discordapp.com/users/1215863022871117916" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-3 rounded-full border-2 transition-all duration-300 hover:scale-110 ${iconBorder}`} 
                title="Discord"
              >
                <MessageCircle size={24} />
              </a>

              <a 
                href="mailto:justinekurl.abadia@hcdc.edu.ph" 
                className={`p-3 rounded-full border-2 transition-all duration-300 hover:scale-110 ${iconBorder}`} 
                title="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-12 pt-8 border-t text-center ${borderColor}`}>
          <p className="text-base">&copy; 2024 Justine Kurl T. Abadia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
