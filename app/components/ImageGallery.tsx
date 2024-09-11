'use client'; // Add this line at the top

import React from 'react';
import { useTranslation } from 'react-i18next';

const ImageGallery = () => {
  const { t } = useTranslation();

  const images = Array.from({ length: 5 }, (_, i) => `/images/details${i + 1}.jpeg`);


  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800">
           {t('imageGallery.title')} 
        </h1>
        <p className="text-center mb-8 text-lg text-gray-600">
          {t('imageGallery.description')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="w-full h-auto bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img src={src} alt={`Car image ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
