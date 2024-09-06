'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const Maintenance = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">{t('maintenance.title')}</h1>
        <p className="mb-6 text-lg">{t('maintenance.description')}</p>
        
        <ul className="list-disc pl-8 space-y-4 text-left">
          <li><strong>{t('maintenance.dec2023.title')}:</strong> {t('maintenance.dec2023.details')}</li>
          <li><strong>{t('maintenance.jan2024.title')}:</strong> {t('maintenance.jan2024.details')}</li>
          <li><strong>{t('maintenance.feb2024.title')}:</strong> {t('maintenance.feb2024.details')}</li>
          <li><strong>{t('maintenance.aug2024.title')}:</strong> {t('maintenance.aug2024.details')}</li>
        </ul>

        <p className="mt-8 text-lg font-semibold">{t('maintenance.vtv')}</p>
      </div>
    </section>
  );
};

export default Maintenance;
