'use client';

import { useEffect } from 'react';
import i18n from '../i18n';
const useDetectLanguage = () => {
  useEffect(() => {
    const getInitialLanguage = () => {
      const browserLang = navigator.language.split('-')[0];
      const supportedLanguages = ['en', 'es', 'ru', 'uk'];
      return supportedLanguages.includes(browserLang) ? browserLang : 'en';
    };

    const initialLanguage = getInitialLanguage();
    i18n.changeLanguage(initialLanguage);
  }, []);
};

export default useDetectLanguage;
