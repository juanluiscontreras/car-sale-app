'use client';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5491130282508?text=I%20am%20interested%20in%20your%20car"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white rounded-full p-4 text-2xl shadow-lg z-50 flex items-center justify-center transition-transform transform hover:scale-105 will-change-transform sm:p-3 sm:text-xl"
    >

      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
