'use client'; // Add this line at the top

import React from 'react';

const ImageGallery = () => {
  const images = [
    '/images/car-front.jpg',
    '/images/car-side.jpg',
    '/images/car-interior.jpg',
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Car image ${index + 1}`} className="w-full h-auto rounded-lg shadow-lg" />
      ))}
    </div>
  );
};

export default ImageGallery;
