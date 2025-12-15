import React from 'react';

const About = ({ isDarkMode }) => {
  return (
    <div className="min-h-screen py-12 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-5xl font-bold mb-8 text-center ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}>
          About Me
        </h2>
        <div className={`backdrop-blur-md rounded-2xl p-8 shadow-2xl border-2 transform transition-all duration-500 hover:scale-105 ${
          isDarkMode ? 'bg-white/5 border-white/30' : 'bg-black/5 border-black/30'
        }`}>
          <div className={`space-y-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <div>
              <h3 className={`text-2xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Background
              </h3>
              <p className="leading-relaxed">
                I am a motivated individual with a strong interest in learning and self-development. 
                I have gained knowledge through my education and hands-on experience, which has helped me build a solid foundation in my field.
              </p>
            </div>
            <div>
              <h3 className={`text-2xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Skills
              </h3>
              <p className="leading-relaxed">
                I have experience using different tech stacks for building web-based systems, including JavaScript, React, Firebase, and Supabase. 
                I am familiar with developing responsive and interactive applications and handling basic backend features such as authentication and data management. 
                I also have a strong understanding of UI/UX principles, focusing on clean design, usability, and user-friendly interfaces, and I am always open to learning and improving my skills.
              </p>
            </div>
            <div>
              <h3 className={`text-2xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Interests
              </h3>
              <p className="leading-relaxed">
                Beyond coding, I enjoy exploring new design trends, playing games, and staying updated 
                with the latest technological advancements. I believe in continuous learning and 
                pushing creative boundaries.
              </p>
            </div>
            <div>
              <h3 className={`text-2xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Goals
              </h3>
              <p className="leading-relaxed">
                My goal is to continue growing as a developer and to learn new skills that will help me in the future. 
                I also aim to build a career that allows me to earn a stable and high income.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;