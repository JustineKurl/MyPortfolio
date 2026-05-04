import React from 'react';

const sections = [
  {
    title: 'Background',
    text: 'I am a motivated individual with a strong interest in learning and self-development. I have gained knowledge through my education and hands-on experience, which has helped me build a solid foundation in my field.',
  },
  {
    title: 'Skills',
    text: 'I have experience using different tech stacks for building web-based systems, including JavaScript, React, Firebase, and Supabase. I am familiar with developing responsive and interactive applications and handling basic backend features such as authentication and data management. I also have a strong understanding of UI/UX principles, focusing on clean design, usability, and user-friendly interfaces.',
  },
  {
    title: 'Interests',
    text: 'Beyond coding, I enjoy exploring new design trends, playing games, and staying updated with the latest technological advancements. I believe in continuous learning and pushing creative boundaries.',
  },
  {
    title: 'Goals',
    text: 'My goal is to continue growing as a developer and to learn new skills that will help me in the future. I also aim to build a career that allows me to earn a stable and high income.',
  },
];

const About = ({ isDarkMode }) => {
  return (
    <div className="min-h-screen py-16 animate-fadeIn">
      <div className="max-w-3xl mx-auto">

        <div className="mb-10">
          <p className={`text-xs font-semibold tracking-widest uppercase mb-2 ${
            isDarkMode ? 'text-gray-500' : 'text-gray-400'
          }`}>
            Portfolio
          </p>
          <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
            About Me
          </h2>
        </div>

        <div className="space-y-4">
          {sections.map((s) => (
            <div
              key={s.title}
              className={`rounded-2xl p-6 border transition-colors duration-300 ${
                isDarkMode
                  ? 'bg-white/5 border-white/10 hover:bg-white/8'
                  : 'bg-white border-black/8 shadow-sm hover:shadow-md'
              }`}
            >
              <h3 className={`text-sm font-semibold tracking-wider uppercase mb-3 ${
                isDarkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {s.title}
              </h3>
              <p className={`text-sm leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
