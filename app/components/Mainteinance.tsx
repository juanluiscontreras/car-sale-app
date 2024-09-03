'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const Maintenance = () => {
  const { t } = useTranslation();

  return (
    <section className="maintenance-section">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{t('maintenance.title')}</h1>
        <p>{t('maintenance.description')}</p>
        <ul>
          <li><strong>{t('maintenance.dec2023.title')}</strong> {t('maintenance.dec2023.details')}</li>
          <li><strong>{t('maintenance.jan2024.title')}</strong> {t('maintenance.jan2024.details')}</li>
          <li><strong>{t('maintenance.feb2024.title')}</strong> {t('maintenance.feb2024.details')}</li>
          <li><strong>{t('maintenance.aug2024.title')}</strong> {t('maintenance.aug2024.details')}</li>
        </ul>
        <p>{t('maintenance.vtv')}</p>
      </div>
    </section>
  );
};

export default Maintenance;
