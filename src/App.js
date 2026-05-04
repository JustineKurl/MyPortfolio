import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Journal from './components/Journal';
import Gallery from './components/Gallery';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDarkMode ? 'bg-zinc-950 text-white' : 'bg-gray-50 text-black'
    }`}>
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {currentPage === 'home'         && <Home         isDarkMode={isDarkMode} />}
        {currentPage === 'about'        && <About        isDarkMode={isDarkMode} />}
        {currentPage === 'journal'      && <Journal      isDarkMode={isDarkMode} />}
        {currentPage === 'gallery'      && <Gallery      isDarkMode={isDarkMode} />}
        {currentPage === 'certificates' && <Certificates isDarkMode={isDarkMode} />}
      </div>

      <Footer isDarkMode={isDarkMode} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
