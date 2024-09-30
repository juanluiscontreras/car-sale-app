'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Navigation, Pagination } from 'swiper/modules';

const CarImageCarousel = () => {
  const images = Array.from({ length: 15 }, (_, i) => `/images/car${i + 1}.jpg`);

  // State to track the image being zoomed
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-[400px] md:h-[500px] lg:h-[600px]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full flex items-center justify-center bg-black"
              onClick={() => setSelectedImage(src)} // Click to open zoom modal
              style={{ cursor: 'zoom-in' }} // Indicate that image is clickable
            >
              <img
                src={src}
                alt={`Car image ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Zoom Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50"
          onClick={() => setSelectedImage(null)} // Close modal when clicking outside image
        >
          <TransformWrapper>
            <TransformComponent>
              <img
                src={selectedImage}
                alt="Zoomed Car"
                className="max-w-full max-h-[90vh] object-contain" // Limit height to 90% of viewport
                onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking on image
              />
            </TransformComponent>
          </TransformWrapper>
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white text-black rounded-full p-2 shadow-md z-60"
          >
            &#10005; {/* Close icon */}
          </button>
        </div>
      )}
    </div>
  );
};

export default CarImageCarousel;
