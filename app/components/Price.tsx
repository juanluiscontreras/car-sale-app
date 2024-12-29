'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaTag } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fetchMEPDollar = async (): Promise<number> => {
  try {
    const response = await fetch('https://mercados.ambito.com//dolarrava/mep/variacion', {
      method: 'GET',
    });
    const data = await response.json();
    return parseFloat(data.compra); // Extracting the "compra" value
  } catch (error) {
    console.error('Failed to fetch MEP Dollar value:', error);
    return 0; // Fallback to 0 if fetch fails
  }
};

const Price = () => {
  const { t } = useTranslation();
  const [priceInARS, setPriceInARS] = useState<number | null>(null);

  useEffect(() => {
    const calculatePriceInARS = async () => {
      const mepDollar = await fetchMEPDollar();
      const usdPrice = parseFloat(t('price.carPriceValueUSD')); // Assumes carPriceValueUSD is in translation files
      if (mepDollar && usdPrice) {
        setPriceInARS(usdPrice * mepDollar);
      }
    };

    calculatePriceInARS();
  }, [t]);

  return (
    <motion.div
      className="text-center py-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
    >
      <div className="flex justify-center items-center mb-4">
        <FaTag className="text-4xl mr-2" />
        <h2 className="text-4xl font-bold">{t('price.label')}</h2>
      </div>
      <p className="text-2xl font-semibold">{t('price.carPrice')}</p>
      {priceInARS !== null && (
        <p className="text-lg font-semibold mt-2">
          ≈ {priceInARS.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })} ARS
        </p>
      )}
      <p className="text-sm mt-2">{t('price.note')}</p>
    </motion.div>
  );
};

export default Price;
