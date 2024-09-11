'use client'; // Add this line at the top

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const CarDetailsForFixGallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // State for the selected image

  const images = Array.from({ length: 5 }, (_, i) => `/images/details${i + 1}.jpeg`);

  const handleImageClick = (src: string) => {
    setSelectedImage(src); // Set the selected image to be displayed in the modal
  };

  const handleCloseModal = () => {
    setSelectedImage(null); // Close the modal by setting the selected image to null
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800">
          {t('carDetailsForFixGallery.title')}
        </h1>
        <p className="text-center mb-8 text-lg text-gray-600">
          {t('carDetailsForFixGallery.description')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(src)}
              className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105 cursor-pointer"
            >
              <img
                src={src}
                alt={`Car image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for zoomed-in image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={handleCloseModal} // Close modal when background is clicked
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Zoomed Car"
              className="max-w-full max-h-screen object-contain"
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 bg-white text-black rounded-full p-2 text-xl focus:outline-none"
            >
              &times; {/* Close button */}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CarDetailsForFixGallery;
