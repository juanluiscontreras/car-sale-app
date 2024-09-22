'use client'; // for Next.js client-side component
import { useState, ChangeEvent } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const MakeAnOffer = () => {
  const { t } = useTranslation();

  // Default offer amount of 8000 USD
  const [offer, setOffer] = useState(8000);

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOffer(Number(e.target.value));
  };

  // Function to calculate the gradient color based on the offer value
  const calculateGradient = (value: number) => {
    if (value <= 7000) {
      const red = 255;
      const green = Math.floor((value / 7000) * 255); // Gradual change from red to yellow
      return `rgb(${red}, ${green}, 0)`;
    } else {
      const green = 255;
      const red = Math.floor(255 - ((value - 7000) / 2000) * 255); // Gradual change from yellow to green
      return `rgb(${red}, ${green}, 0)`;
    }
  };

  const openWhatsApp = () => {
    const message = t('offer.whatsappMessage', { offer });
    const whatsappNumber = '1234567890'; // Replace with your WhatsApp number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto my-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">{t('offer.title')}</h2>

      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2 text-center">
          {t('offer.yourOffer')}: <span className="text-blue-600">${offer}</span>
        </label>
        <input
          type="range"
          min="1000"
          max="9000"
          step="100"
          value={offer}
          onChange={handleSliderChange}
          className="w-full h-6 appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, ${calculateGradient(offer)} ${(offer - 1000) / 8000 * 100}%, #e2e8f0 ${(offer - 1000) / 8000 * 100}%, #e2e8f0 100%)`
          }}
        />
        <style jsx>{`
          input[type='range']::-webkit-slider-thumb {
            width: 36px;
            height: 36px;
            background-color: ${calculateGradient(offer)};
            border-radius: 50%;
            border: 3px solid #fff;
            cursor: pointer;
          }
          input[type='range']::-moz-range-thumb {
            width: 36px;
            height: 36px;
            background-color: ${calculateGradient(offer)};
            border-radius: 50%;
            border: 3px solid #fff;
            cursor: pointer;
          }
        `}</style>
      </div>

      <button
        onClick={openWhatsApp}
        className="bg-green-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md flex items-center justify-center hover:bg-green-600 transition-all w-full"
      >
        <FaWhatsapp className="mr-2" /> {t('offer.sendOffer')}
      </button>
    </section>
  );
};

export default MakeAnOffer;
