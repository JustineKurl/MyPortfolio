import React, { useState } from 'react';
import ImageModal from './ImageModal';

const Certificates = ({ isDarkMode }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Update this path to match your certificate in public/images/certificates/
  const certificateImage = '/images/certificates/C1.jpeg';

  const openImageModal = (imageSrc) => {
    setSelectedImage({ src: imageSrc, alt: 'Certificate' });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen py-12 animate-fadeIn flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className={`text-5xl font-bold mb-12 text-center ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}>
          Certificate
        </h2>
        <div className="flex justify-center">
          <div className={`backdrop-blur-md rounded-2xl p-6 shadow-2xl border-2 transform transition-all duration-500 hover:scale-105 ${
            isDarkMode ? 'bg-white/5 border-white/30' : 'bg-black/5 border-black/30'
          }`}>
            <img
              src={certificateImage}
              alt="Certificate"
              onClick={() => openImageModal(certificateImage)}
              className="rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105 max-w-full h-auto cursor-pointer"
            />
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

export default Certificates;