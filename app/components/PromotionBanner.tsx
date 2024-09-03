'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

const PromotionBanner: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="promotion-banner bg-yellow-500 text-white py-6 px-4 text-center rounded-lg shadow-md mt-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {t('promotion.title')}
        </h2>
        <p className="text-lg md:text-xl mb-6">
          {t('promotion.description')}
        </p>
        <button className="bg-white text-yellow-500 font-bold py-2 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors">
          {t('promotion.contactButton')}
        </button>
      </div>
    </section>
  );
};

export default PromotionBanner;
