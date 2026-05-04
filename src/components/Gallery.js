import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ImageModal from './ImageModal';
import { galleryData } from '../data/journalData';

const Gallery = ({ isDarkMode }) => {
  const [selectedCompany, setSelectedCompany] = useState(0);
  const [currentImage, setCurrentImage]       = useState(0);
  const [selectedImage, setSelectedImage]     = useState(null);

  const currentCompanyImages = galleryData[selectedCompany].images;

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % currentCompanyImages.length);
  }, [currentCompanyImages.length]);

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + currentCompanyImages.length) % currentCompanyImages.length);
  }, [currentCompanyImages.length]);

  // Keyboard navigation — fixes Issue #4
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft')  prevImage();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [nextImage, prevImage]);

  const changeCompany = (index) => {
    setSelectedCompany(index);
    setCurrentImage(0);
  };

  const openImageModal = (src) => {
    setSelectedImage({ src, alt: `${galleryData[selectedCompany].company} - Image ${currentImage + 1}` });
  };

  return (
    <div className="min-h-screen py-16 animate-fadeIn">
      <div className="max-w-4xl mx-auto">

        <div className="mb-10">
          <p className={`text-xs font-semibold tracking-widest uppercase mb-2 ${
            isDarkMode ? 'text-gray-500' : 'text-gray-400'
          }`}>
            Educational Tour
          </p>
          <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Gallery
          </h2>
        </div>

        {/* Company tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {galleryData.map((company, index) => (
            <button
              key={company.id}
              onClick={() => changeCompany(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                selectedCompany === index
                  ? isDarkMode
                    ? 'bg-white text-black border-white'
                    : 'bg-black text-white border-black'
                  : isDarkMode
                    ? 'bg-transparent text-gray-400 border-white/20 hover:border-white/50 hover:text-white'
                    : 'bg-transparent text-gray-500 border-black/15 hover:border-black/40 hover:text-black'
              }`}
            >
              {company.company}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div className={`relative rounded-2xl border overflow-hidden ${
          isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-black/8 shadow-sm'
        }`}>
          {/* Image area */}
          <div
            className="relative overflow-hidden cursor-pointer bg-black/5"
            style={{ height: '480px' }}
            onClick={() => openImageModal(currentCompanyImages[currentImage])}
          >
            <img
              src={currentCompanyImages[currentImage]}
              alt={`${galleryData[selectedCompany].company} ${currentImage + 1}`}
              className="w-full h-full object-contain transition-all duration-500"
            />

            {/* Prev button */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              aria-label="Previous image"
              className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full border backdrop-blur-sm transition-all duration-200 hover:scale-105 ${
                isDarkMode
                  ? 'bg-black/60 border-white/20 text-white hover:bg-black/80'
                  : 'bg-white/80 border-black/10 text-black hover:bg-white'
              }`}
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              aria-label="Next image"
              className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full border backdrop-blur-sm transition-all duration-200 hover:scale-105 ${
                isDarkMode
                  ? 'bg-black/60 border-white/20 text-white hover:bg-black/80'
                  : 'bg-white/80 border-black/10 text-black hover:bg-white'
              }`}
            >
              <ChevronRight size={22} />
            </button>

            {/* Counter badge */}
            <div className={`absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${
              isDarkMode
                ? 'bg-black/60 border-white/20 text-white'
                : 'bg-white/80 border-black/10 text-black'
            }`}>
              {currentImage + 1} / {currentCompanyImages.length}
            </div>
          </div>

          {/* Dot indicators — redundant label removed (Issue #9 fix) */}
          <div className={`flex justify-center items-center gap-2 py-4 border-t ${
            isDarkMode ? 'border-white/8' : 'border-black/6'
          }`}>
            {currentCompanyImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                aria-label={`Go to image ${index + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  index === currentImage
                    ? isDarkMode
                      ? 'bg-white w-6 h-2'
                      : 'bg-black w-6 h-2'
                    : isDarkMode
                      ? 'bg-white/25 w-2 h-2 hover:bg-white/50'
                      : 'bg-black/20 w-2 h-2 hover:bg-black/40'
                }`}
              />
            ))}
          </div>
        </div>

        <p className={`text-center text-xs mt-3 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>
          Use ← → arrow keys to navigate · Click image to expand
        </p>
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

export default Gallery;
