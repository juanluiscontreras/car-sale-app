'use client';
import { useTranslation } from 'react-i18next';
import { FaTag } from 'react-icons/fa'; // Importing an icon for the price tag
import { motion } from 'framer-motion'; // Importing framer-motion for animations

const Price = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="text-center py-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="flex justify-center items-center mb-4">
        <FaTag className="text-4xl mr-2" />
        <h2 className="text-4xl font-bold">{t('price.label')}</h2>
      </div>
      <p className="text-2xl font-semibold">
        $7,500 USD
      </p>
      <p className="text-sm mt-2">
        {t('price.note')} {/* Optional additional text, e.g., "Negotiable" */}
      </p>
    </motion.div>
  );
};

export default Price;
