'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ForWhoIs from './ForWhoIs';

const CarSaleInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-8">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center">🚗 {t('carSaleInfo.history.title')} 🚗</h1>
      <p className="text-lg">
        {t('carSaleInfo.history.description1')}
      </p>
      <p className="text-lg">
        {t('carSaleInfo.history.description2')}
      </p>

      <h2 className="text-2xl md:text-3xl font-bold text-center mt-8">❓ {t('carSaleInfo.whySell.title')} ❓</h2>
      <p className="text-lg">
        {t('carSaleInfo.whySell.description')}
      </p>

      <h2 className="text-2xl md:text-3xl font-bold text-center mt-8">💡 {t('carSaleInfo.whyBuy.title')} 💡</h2>
      <p className="text-lg">
        {t('carSaleInfo.whyBuy.description')}
      </p>

      <h2 className="text-2xl md:text-3xl font-bold text-center mt-8">💬 {t('carSaleInfo.doubts.title')}</h2>
      <p className="text-lg">
        {t('carSaleInfo.doubts.description')}
      </p>

      <h2 className="text-2xl md:text-3xl font-bold text-center mt-8">🎯 {t('carSaleInfo.ideal.title')} 🎯</h2>
      <ForWhoIs />

      <p className="text-lg text-center">
        {t('carSaleInfo.interested')} <strong>{t('carSaleInfo.contact')}</strong> 🚗💨
      </p>
    </div>
  );
};

export default CarSaleInfo;
