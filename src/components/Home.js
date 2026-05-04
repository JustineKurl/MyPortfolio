import React from 'react';

const Home = ({ isDarkMode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center animate-fadeIn">
      <div className="text-center">
        <div className="mb-8 inline-block">
          <img
            src="images/home/profile.jpeg"
            alt="Profile"
            className={`w-48 h-48 rounded-full border-4 shadow-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-6 object-cover ${
              isDarkMode ? 'border-white' : 'border-black'
            }`}
          />
        </div>
        <h1 className={`text-6xl font-bold mb-4 animate-pulse ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}>
          Justine Kurl T. Abadia
        </h1>
        <p className={`text-xl max-w-2xl mx-auto leading-relaxed ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Welcome to my Educational Tour Portfolio! I am a third-year BSIT student at Holy Cross of Davao College (HCDC), 
          and I aspire to become a professional software developer in the future. Through this portfolio, I showcase my 
          journey, experiences, and learnings from various companies and organizations.
        </p>
      </div>
    </div>
  );
};

export default Home;
