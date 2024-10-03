'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram } from 'react-icons/fa';

const Maintenance = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-8">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
        {t('maintenance.title')}
      </h1>
      <p className="mb-6 text-lg">{t('maintenance.description')}</p>

      <ul className="list-disc pl-8 space-y-4 text-left">
        <li><strong>{t('maintenance.dec2023.title')}</strong> {t('maintenance.dec2023.details')}</li>
        <li><strong>{t('maintenance.jan2024.title')}</strong> {t('maintenance.jan2024.details')}</li>
        <li><strong>{t('maintenance.feb2024.title')}</strong> {t('maintenance.feb2024.details')}</li>
        <li><strong>{t('maintenance.aug2024.title')}</strong> {t('maintenance.aug2024.details')}</li>
        <li><strong>{t('maintenance.sept2024.title')}</strong> {t('maintenance.sept2024.details')}</li>
      </ul>

      {/* Instagram Links */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 justify-center text-center">
        <div>
          <a href="https://www.instagram.com/fgcarsservice/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <FaInstagram className="text-4xl text-pink-600 hover:text-pink-800 transition duration-300" />
            <span className="mt-2 text-lg font-semibold text-gray-700 hover:text-gray-900">FgCarsService</span>
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/autozenargentina" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <FaInstagram className="text-4xl text-pink-600 hover:text-pink-800 transition duration-300" />
            <span className="mt-2 text-lg font-semibold text-gray-700 hover:text-gray-900">Autozen</span>
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/creative.soundd" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <FaInstagram className="text-4xl text-pink-600 hover:text-pink-800 transition duration-300" />
            <span className="mt-2 text-lg font-semibold text-gray-700 hover:text-gray-900">Creative Sound</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
