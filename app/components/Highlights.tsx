'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Highlights = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white text-gray-800 p-6 md:p-8 rounded-lg shadow-lg mt-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
          {t('highlights.title')}
        </h2>
        <ul className="list-disc pl-6 space-y-4">
          <li className="text-lg md:text-xl">{t('highlights.point1')}</li>
          <li className="text-lg md:text-xl">{t('highlights.point2')}</li>
          <li className="text-lg md:text-xl">{t('highlights.point3')}</li>
        </ul>
      </div>
    </section>
  );
};

export default Highlights;
