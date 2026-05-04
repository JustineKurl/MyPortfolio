import React from 'react';

const skills = ['React', 'JavaScript', 'UI / UX', 'Firebase', 'Supabase', 'Software Dev'];

const Home = ({ isDarkMode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center animate-fadeIn py-16">
      <div className="max-w-3xl w-full">
        <div className={`flex flex-col sm:flex-row items-center sm:items-start gap-8 rounded-2xl p-8 border transition-colors duration-300 ${
          isDarkMode
            ? 'bg-white/5 border-white/10'
            : 'bg-white border-black/10 shadow-sm'
        }`}>

          {/* Avatar */}
          <div className="flex-shrink-0">
            <img
              src="images/home/profile.jpeg"
              alt="Justine Kurl T. Abadia"
              className={`w-36 h-36 rounded-2xl object-cover border-2 shadow-lg ${
                isDarkMode ? 'border-white/20' : 'border-black/10'
              }`}
            />
          </div>

          {/* Text */}
          <div className="flex-1 text-center sm:text-left">

            {/* Metadata — fixes Issue #3 */}
            <p className={`text-xs font-semibold tracking-widest uppercase mb-2 ${
              isDarkMode ? 'text-gray-500' : 'text-gray-400'
            }`}>
              BSIT 3 &nbsp;·&nbsp; Holy Cross of Davao College &nbsp;·&nbsp; 2026
            </p>

            {/* Name */}
            <h1 className={`text-3xl sm:text-4xl font-bold mb-3 leading-tight ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>
              Justine Kurl T. Abadia
            </h1>

            {/* Short intro */}
            <p className={`text-sm sm:text-base leading-relaxed mb-5 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Educational Tour Portfolio — documenting experiences and learnings
              from 4 company visits across Davao City as part of my BSIT journey.
            </p>

            {/* Skill chips */}
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    isDarkMode
                      ? 'border-white/15 text-gray-400 bg-white/5'
                      : 'border-black/10 text-gray-500 bg-black/3'
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
