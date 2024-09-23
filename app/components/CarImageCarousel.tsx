'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import React from 'react';

const CarImageCarousel = () => {
  const images = Array.from({ length: 13 }, (_, i) => `/images/car${i + 1}.jpg`);

  return (
      <div className="max-w-6xl mx-auto px-6">
        <Swiper
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          effect="fade"
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full h-[400px] md:h-[500px] lg:h-[600px]"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full flex items-center justify-center bg-black">
              <img
                  src={src}
                  alt={`Car image ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  );
};

export default CarImageCarousel;
