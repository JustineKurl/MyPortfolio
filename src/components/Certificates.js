import React, { useState } from 'react';
import ImageModal from './ImageModal';

const Certificates = ({ isDarkMode }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const certificateImage = '/images/certificates/C1.jpeg';

  return (
    <div className="min-h-screen py-16 animate-fadeIn">
      <div className="max-w-3xl mx-auto">

        <div className="mb-10">
          <p className={`text-xs font-semibold tracking-widest uppercase mb-2 ${
            isDarkMode ? 'text-gray-500' : 'text-gray-400'
          }`}>
            Achievement
          </p>
          <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Certificate
          </h2>
        </div>

        <div className={`rounded-2xl border overflow-hidden transition-colors duration-300 ${
          isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-black/8 shadow-sm'
        }`}>
          {/* Certificate image */}
          <div
            className="cursor-pointer overflow-hidden"
            onClick={() => setSelectedImage({ src: certificateImage, alt: 'Certificate' })}
          >
            <img
              src={certificateImage}
              alt="Certificate of Completion"
              className="w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Caption — fixes Issue #8 */}
          <div className={`px-6 py-5 border-t ${
            isDarkMode ? 'border-white/8' : 'border-black/6'
          }`}>
            <h3 className={`text-base font-semibold mb-1 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>
              Educational Tour Certificate
            </h3>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Issued in recognition of completing the BSIT Educational Tour — Holy Cross of Davao College, 2026.
              Click the image to view in full size.
            </p>
          </div>
        </div>
      </div>

      <ImageModal
        isOpen={selectedImage !== null}
        imageSrc={selectedImage?.src}
        imageAlt={selectedImage?.alt}
        onClose={() => setSelectedImage(null)}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default Certificates;
