import React from 'react';
import { X } from 'lucide-react';

const ImageModal = ({ isOpen, imageSrc, imageAlt, onClose, isDarkMode }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 hover:scale-110 border-2 z-50 ${
          isDarkMode 
            ? 'bg-white text-black border-white hover:bg-gray-200' 
            : 'bg-black text-white border-black hover:bg-gray-800'
        }`}
      >
        <X size={24} />
      </button>
      
      <div 
        className="relative flex items-center justify-center w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default ImageModal;