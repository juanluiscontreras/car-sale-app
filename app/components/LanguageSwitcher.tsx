'use client';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed top-2 right-2 bg-white shadow-md rounded-lg p-1 z-50 max-w-[90vw]">
      <div className="flex space-x-1">
        <button
          onClick={() => changeLanguage('en')}
          className={`py-1 px-2 text-xs font-medium rounded-lg transition-colors duration-300 ${i18n.language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          aria-label="Switch to English"
        >
          English
        </button>
        <button
          onClick={() => changeLanguage('es')}
          className={`py-1 px-2 text-xs font-medium rounded-lg transition-colors duration-300 ${i18n.language === 'es' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          aria-label="Switch to Español"
        >
          Español
        </button>
        <button
          onClick={() => changeLanguage('uk')}
          className={`py-1 px-2 text-xs font-medium rounded-lg transition-colors duration-300 ${i18n.language === 'uk' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          aria-label="Switch to Українська"
        >
          Українська
        </button>
        <button
          onClick={() => changeLanguage('ru')}
          className={`py-1 px-2 text-xs font-medium rounded-lg transition-colors duration-300 ${i18n.language === 'ru' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          aria-label="Switch to Русский"
        >
          Русский
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
