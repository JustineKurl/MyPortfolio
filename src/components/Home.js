import React from 'react';

const Home = ({ isDarkMode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center animate-fadeIn">
      <div className="max-w-3xl w-full">
        <div className={`flex flex-col sm:flex-row items-center sm:items-start gap-8 backdrop-blur-md rounded-2xl p-8 shadow-2xl border-2 ${
          isDarkMode ? 'bg-white/5 border-white/30' : 'bg-black/5 border-black/30'
        }`}>
          
          {/* Avatar */}
          <div className="flex-shrink-0">
            <img
              src="images/home/profile.jpeg"
              alt="Profile"
              className={`w-36 h-36 rounded-2xl border-2 shadow-2xl object-cover ${
                isDarkMode ? 'border-white/40' : 'border-black/30'
              }`}
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center sm:text-left">
            
            {/* Metadata line */}
            <p className={`text-xs font-semibold tracking-widest uppercase mb-2 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              BSIT 3 &nbsp;·&nbsp; Holy Cross of Davao College &nbsp;·&nbsp; 2026
            </p>

            {/* Name */}
            <h1 className={`text-4xl font-bold mb-3 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>
              Justine Kurl T. Abadia
            </h1>

            {/* Short intro */}
            <p className={`text-base leading-relaxed mb-5 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Educational Tour Portfolio — documenting experiences and learnings from 4 company visits across Davao City as part of my BSIT journey.
            </p>

            {/* Skill chips */}
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {['React', 'JavaScript', 'UI / UX', 'Firebase', 'Supabase', 'Software Dev'].map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    isDarkMode
                      ? 'border-white/25 text-gray-300 bg-white/5'
                      : 'border-black/20 text-gray-600 bg-black/5'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
