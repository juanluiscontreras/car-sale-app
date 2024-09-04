'use client'; // Add this line at the top

import React from 'react';
import { useTranslation } from 'react-i18next';

const ImageGallery = () => {
  const { t } = useTranslation();

  const images = [
    '/images/car-front.jpg',
    '/images/car-side.jpg',
    '/images/car-interior.jpg',
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <h1 className="text-3xl font-bold mb-4 text-center">🔍  {t('imageGallery.title')} 🔍 </h1>
      <p className="mb-6">
        {t('imageGallery.description')}
      </p>
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Car image ${index + 1}`} className="w-full h-auto rounded-lg shadow-lg" />
      ))}
    </div>
  );
};

export default ImageGallery;
