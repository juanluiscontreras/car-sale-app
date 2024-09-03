'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

const CarSaleInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center">🚗 {t('carSaleInfo.history.title')} 🚗</h1>
      <p className="mb-6">
        {t('carSaleInfo.history.description1')}
      </p>
      <p className="mb-6">
        {t('carSaleInfo.history.description2')}
      </p>

      <h2 className="text-2xl font-bold mb-4 text-center">❓ {t('carSaleInfo.whySell.title')} ❓</h2>
      <p className="mb-6">
        {t('carSaleInfo.whySell.description')}
      </p>

      <h2 className="text-2xl font-bold mb-4 text-center">💡 {t('carSaleInfo.whyBuy.title')} 💡</h2>
      <p className="mb-6">
        {t('carSaleInfo.whyBuy.description')}
      </p>

      <h2 className="text-2xl font-bold mb-4 text-center">💬 {t('carSaleInfo.doubts.title')}</h2>
      <p className="mb-6">
        {t('carSaleInfo.doubts.description')}
      </p>

      <h2 className="text-2xl font-bold mb-4 text-center">🎯 {t('carSaleInfo.ideal.title')} 🎯</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>{t('carSaleInfo.ideal.city')}</li>
        <li>{t('carSaleInfo.ideal.kids')}</li>
        <li>{t('carSaleInfo.ideal.firstCar')}</li>
        <li>{t('carSaleInfo.ideal.travel')}</li>
      </ul>

      <p className="text-center">
        {t('carSaleInfo.interested')} <strong>{t('carSaleInfo.contact')}</strong> 🚗💨
      </p>
    </div>
  );
};

export default CarSaleInfo;
