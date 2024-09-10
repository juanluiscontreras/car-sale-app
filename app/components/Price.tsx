'use client';
import { useTranslation } from 'react-i18next';
import { FaTag } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Price = () => {
  const { t } = useTranslation();

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
      <p className="text-2xl font-semibold">
        {t('price.carPrice')}
      </p>
      <p className="text-sm mt-2">
        {t('price.note')}
      </p>
    </motion.div>
  );
};

export default Price;
