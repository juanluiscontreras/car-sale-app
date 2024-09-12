'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ForWhoIs from './ForWhoIs';

const CarSaleInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-8">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
        {t('carSaleInfo.history.title')}
      </h2>
      <p className="text-lg text-center">
        {t('carSaleInfo.history.description1')}
      </p>
      <p className="text-lg text-center">
        {t('carSaleInfo.history.description2')}
      </p>

      <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
        {t('carSaleInfo.whySell.title')} </h2>
      <p className="text-lg text-center">
        {t('carSaleInfo.whySell.description')}
      </p>

      <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
        {t('carSaleInfo.whyBuy.title')}
      </h2>
      <p className="text-lg text-center">
        {t('carSaleInfo.whyBuy.description')}
      </p>

      <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
        {t('carSaleInfo.doubts.title')}
      </h2>
      <p className="text-lg text-center">
        {t('carSaleInfo.doubts.description')}
      </p>

      <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
        {t('carSaleInfo.ideal.title')} </h2>
      <ForWhoIs />

      <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
        {t('carSaleInfo.interested')} <strong>{t('carSaleInfo.contact')}</strong>
      </h2>
    </div>
  );
};

export default CarSaleInfo;
