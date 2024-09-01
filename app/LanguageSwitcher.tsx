'use client';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
      <button onClick={() => changeLanguage('uk')}>Українська</button>
      <button onClick={() => changeLanguage('ru')}>Русский</button>
    </div>
  );
};

export default LanguageSwitcher;
