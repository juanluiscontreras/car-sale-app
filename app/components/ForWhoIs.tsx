'use client';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ForWhoIs = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1200, // You can adjust the duration to fit your needs
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <ul className="space-y-6">
      <li
        data-aos="fade-right"
        data-aos-delay="100"
        className="p-4 bg-white shadow-lg rounded-lg border border-gray-200 transform transition-transform duration-500 ease-in-out hover:scale-105"
      >
        <p className="text-lg font-medium">{t('carSaleInfo.ideal.city')}</p>
      </li>
      <li
        data-aos="fade-left"
        data-aos-delay="300"
        className="p-4 bg-white shadow-lg rounded-lg border border-gray-200 transform transition-transform duration-500 ease-in-out hover:scale-105"
      >
        <p className="text-lg font-medium">{t('carSaleInfo.ideal.kids')}</p>
      </li>
      <li
        data-aos="fade-right"
        data-aos-delay="500"
        className="p-4 bg-white shadow-lg rounded-lg border border-gray-200 transform transition-transform duration-500 ease-in-out hover:scale-105"
      >
        <p className="text-lg font-medium">{t('carSaleInfo.ideal.firstCar')}</p>
      </li>
      <li
        data-aos="fade-left"
        data-aos-delay="700"
        className="p-4 bg-white shadow-lg rounded-lg border border-gray-200 transform transition-transform duration-500 ease-in-out hover:scale-105"
      >
        <p className="text-lg font-medium">{t('carSaleInfo.ideal.travel')}</p>
      </li>
    </ul>
  );
};

export default ForWhoIs;
