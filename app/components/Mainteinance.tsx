'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const Maintenance = () => {
  const { t } = useTranslation();

  return (
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">{t('maintenance.title')}</h1>
        <p className="mb-6 text-lg">{t('maintenance.description')}</p>
        
        <ul className="list-disc pl-8 space-y-4 text-left">
          <li><strong>{t('maintenance.dec2023.title')}</strong> {t('maintenance.dec2023.details')}</li>
          <li><strong>{t('maintenance.jan2024.title')}</strong> {t('maintenance.jan2024.details')}</li>
          <li><strong>{t('maintenance.feb2024.title')}</strong> {t('maintenance.feb2024.details')}</li>
          <li><strong>{t('maintenance.aug2024.title')}</strong> {t('maintenance.aug2024.details')}</li>
        </ul>

        <p className="mt-8 text-lg font-semibold">{t('maintenance.vtv')}</p>
      </div>
  );
};

export default Maintenance;
