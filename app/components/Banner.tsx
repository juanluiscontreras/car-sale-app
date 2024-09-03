'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-blue-600 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {t('banner.title')}
        </h1>
        <p className="text-xl md:text-2xl font-medium">
          {t('banner.subtitle')}
        </p>
      </div>
    </section>
  );
};

export default Banner;
