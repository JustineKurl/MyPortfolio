import React, { useState } from 'react';
import { journalEntries } from '../data/journalData';
import { ChevronDown, ChevronUp } from 'lucide-react';

const companyEmoji = ['🏢', '📡', '🖥️', '🚨'];

const Journal = ({ isDarkMode }) => {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => setExpanded(expanded === id ? null : id);

  return (
    <div className="min-h-screen py-16 animate-fadeIn">
      <div className="max-w-3xl mx-auto">

        <div className="mb-10">
          <p className={`text-xs font-semibold tracking-widest uppercase mb-2 ${
            isDarkMode ? 'text-gray-500' : 'text-gray-400'
          }`}>
            Educational Tour
          </p>
          <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Journal
          </h2>
        </div>

        <div className="space-y-4">
          {journalEntries.map((entry, i) => {
            const isOpen = expanded === entry.id;
            return (
              <div
                key={entry.id}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-white/5 border-white/10'
                    : 'bg-white border-black/8 shadow-sm'
                }`}
              >
                {/* Card header — always visible */}
                <button
                  onClick={() => toggle(entry.id)}
                  className="w-full text-left px-6 py-5 flex items-center gap-4 group"
                  aria-expanded={isOpen}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${
                    isDarkMode ? 'bg-white/8' : 'bg-gray-100'
                  }`}>
                    {companyEmoji[i]}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className={`text-xs font-semibold tracking-widest uppercase mb-0.5 ${
                      isDarkMode ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                      Company {i + 1}
                    </p>
                    <h3 className={`text-base font-bold truncate ${
                      isDarkMode ? 'text-white' : 'text-black'
                    }`}>
                      {entry.company}
                    </h3>
                  </div>

                  <div className={`flex-shrink-0 transition-transform duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                {/* Expanded content */}
                {isOpen && (
                  <div className={`px-6 pb-6 border-t ${
                    isDarkMode ? 'border-white/8' : 'border-black/6'
                  }`}>
                    {/* Image */}
                    <div className="mt-5 mb-5 rounded-xl overflow-hidden">
                      <img
                        src={entry.image}
                        alt={entry.company}
                        className="w-full h-56 object-cover"
                      />
                    </div>

                    {/* Description */}
                    <div className="mb-5">
                      <h4 className={`text-xs font-semibold tracking-widest uppercase mb-2 ${
                        isDarkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        About the Company
                      </h4>
                      <p className={`text-sm leading-relaxed ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {entry.description}
                      </p>
                    </div>

                    {/* Observations */}
                    <div className="mb-5">
                      <h4 className={`text-xs font-semibold tracking-widest uppercase mb-2 ${
                        isDarkMode ? 'text-emerald-400' : 'text-emerald-600'
                      }`}>
                        Observations
                      </h4>
                      <p className={`text-sm leading-relaxed ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {entry.observations}
                      </p>
                    </div>

                    {/* Learnings */}
                    <div>
                      <h4 className={`text-xs font-semibold tracking-widest uppercase mb-2 ${
                        isDarkMode ? 'text-amber-400' : 'text-amber-600'
                      }`}>
                        Learnings
                      </h4>
                      <p className={`text-sm leading-relaxed ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {entry.learnings}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Journal;
