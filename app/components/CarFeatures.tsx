'use client'; // Add this line at the top
import { useTranslation } from 'react-i18next';
import { FaCarSide, FaCogs, FaShieldAlt, FaLightbulb, FaWifi, FaLock, FaWrench, FaCheck, FaBluetooth, FaLuggageCart, FaSuitcase, FaSuitcaseRolling, FaGasPump, FaMoneyBill } from 'react-icons/fa';

const CarFeatures = () => {
  const { t } = useTranslation();

  const features = [
    { icon: <FaCarSide />, text: t('features.spareWheel') },
    { icon: <FaShieldAlt />, text: t('features.security') },
    { icon: <FaLightbulb />, text: t('features.antifog') },
    { icon: <FaLock />, text: t('features.electricWindows') },
    { icon: <FaSuitcaseRolling />, text: t('features.foldableSeats') },
    { icon: <FaBluetooth />, text: t('features.bluetoothRadio') },
    { icon: <FaWrench />, text: t('features.chainEngine') },
    { icon: <FaGasPump />, text: t('features.point1') },
    { icon: <FaMoneyBill />, text: t('features.point2') },
    { icon: <FaCheck />, text: t('features.point3') },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
        {t('features.title')}
      </h1>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-blue-100 text-center p-4 rounded-lg shadow-md flex flex-col items-center justify-center min-h-32"
          >
            <div className="text-xl text-blue-600 mb-2">{feature.icon}</div>
            <p className="text-gray-800 text-xs text-center">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarFeatures;
