import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: require('../public/locales/en.json') },
    es: { translation: require('../public/locales/es.json') },
    ru: { translation: require('../public/locales/ru.json') },
    uk: { translation: require('../public/locales/uk.json') },
  },
  lng: 'es', // Default language
  fallbackLng: 'es', // Fallback language if user's language is not available
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
