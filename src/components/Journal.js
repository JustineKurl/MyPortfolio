import React, { useState } from 'react';
import { journalEntries } from '../data/journalData';
import ImageModal from './ImageModal';

const Journal = ({ isDarkMode }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (imageSrc, imageAlt) => {
    setSelectedImage({ src: imageSrc, alt: imageAlt });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen py-12 animate-fadeIn">
      <h2 className={`text-5xl font-bold mb-12 text-center ${
        isDarkMode ? 'text-white' : 'text-black'
      }`}>
        Journal
      </h2>
      <div className="space-y-8">
        {journalEntries.map((entry) => (
          <div
            key={entry.id}
            className={`backdrop-blur-md rounded-2xl p-8 shadow-2xl border-2 transform transition-all duration-500 hover:scale-105 ${
              isDarkMode 
                ? 'bg-white/5 border-white/30 hover:bg-white/10' 
                : 'bg-black/5 border-black/30 hover:bg-black/10'
            }`}
          >
            {/* Layout: Image Left, Text Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Side - Image */}
              <div className="flex items-center justify-center">
                {entry.image && (
                  <div 
                    className={`w-full h-full min-h-[400px] rounded-xl overflow-hidden border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                      isDarkMode ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
                    }`}
                    onClick={() => openImageModal(entry.image, entry.company)}
                  >
                    <img
                      src={entry.image}
                      alt={entry.company}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                )}
              </div>

              {/* Right Side - Text Content */}
              <div className="flex flex-col justify-center">
                <h3 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  {entry.company}
                </h3>
                <div className={`space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div>
                    <h4 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Company Description
                    </h4>
                    <p className="leading-relaxed">{entry.description}</p>
                  </div>
                  <div>
                    <h4 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Observations
                    </h4>
                    <p className="leading-relaxed">{entry.observations}</p>
                  </div>
                  <div>
                    <h4 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Learnings
                    </h4>
                    <p className="leading-relaxed">{entry.learnings}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={selectedImage !== null}
        imageSrc={selectedImage?.src}
        imageAlt={selectedImage?.alt}
        onClose={closeImageModal}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default Journal;