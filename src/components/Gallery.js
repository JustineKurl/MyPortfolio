import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ImageModal from './ImageModal';
import { galleryData } from '../data/journalData';

const Gallery = ({ isDarkMode }) => {
  const [selectedCompany, setSelectedCompany] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const currentCompanyImages = galleryData[selectedCompany].images;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % currentCompanyImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + currentCompanyImages.length) % currentCompanyImages.length);
  };

  const changeCompany = (index) => {
    setSelectedCompany(index);
    setCurrentImage(0);
  };

  const openImageModal = (imageSrc) => {
    setSelectedImage({ 
      src: imageSrc, 
      alt: `${galleryData[selectedCompany].company} - Image ${currentImage + 1}` 
    });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen py-12 animate-fadeIn">
      <h2 className={`text-5xl font-bold mb-12 text-center ${
        isDarkMode ? 'text-white' : 'text-black'
      }`}>
        Gallery
      </h2>

      {/* Company Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {galleryData.map((company, index) => (
          <button
            key={company.id}
            onClick={() => changeCompany(index)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border-2 ${
              selectedCompany === index
                ? isDarkMode
                  ? 'bg-white text-black border-white'
                  : 'bg-black text-white border-black'
                : isDarkMode
                  ? 'bg-transparent text-white border-white hover:bg-white/10'
                  : 'bg-transparent text-black border-black hover:bg-black/10'
            }`}
          >
            {company.company}
          </button>
        ))}
      </div>

      {/* Image Slider */}
      <div className="max-w-4xl mx-auto">
        <div className={`relative backdrop-blur-md rounded-2xl p-4 shadow-2xl border-2 ${
          isDarkMode ? 'bg-white/5 border-white/30' : 'bg-black/5 border-black/30'
        }`}>
          <div 
            className="relative overflow-hidden rounded-xl cursor-pointer bg-black/5" 
            style={{ height: '500px' }}
            onClick={() => openImageModal(currentCompanyImages[currentImage])}
          >
            <img
              src={currentCompanyImages[currentImage]}
              alt={`${galleryData[selectedCompany].company} ${currentImage + 1}`}
              className="w-full h-full object-contain transition-all duration-500 hover:scale-105"
            />
          </div>
          
          <button
            onClick={prevImage}
            className={`absolute left-8 top-1/2 -translate-y-1/2 p-4 rounded-full transform transition-all duration-300 hover:scale-110 border-2 ${
              isDarkMode 
                ? 'bg-black/70 hover:bg-white hover:text-black border-white' 
                : 'bg-white/70 hover:bg-black hover:text-white border-black'
            }`}
          >
            <ChevronLeft size={32} />
          </button>
          
          <button
            onClick={nextImage}
            className={`absolute right-8 top-1/2 -translate-y-1/2 p-4 rounded-full transform transition-all duration-300 hover:scale-110 border-2 ${
              isDarkMode 
                ? 'bg-black/70 hover:bg-white hover:text-black border-white' 
                : 'bg-white/70 hover:bg-black hover:text-white border-black'
            }`}
          >
            <ChevronRight size={32} />
          </button>
          
          <div className="flex justify-center gap-2 mt-6">
            {currentCompanyImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`h-3 rounded-full transition-all duration-300 border ${
                  index === currentImage
                    ? isDarkMode
                      ? 'bg-white w-8 border-white'
                      : 'bg-black w-8 border-black'
                    : isDarkMode
                      ? 'bg-transparent w-3 border-white hover:bg-white/50'
                      : 'bg-transparent w-3 border-black hover:bg-black/50'
                }`}
              />
            ))}
          </div>

          {/* Company Name Display */}
          <div className={`text-center mt-4 text-xl font-semibold ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>
            {galleryData[selectedCompany].company}
          </div>
        </div>
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

export default Gallery;