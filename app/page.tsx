'use client';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import Viewer from './components/Viewer';
import ContactForm from './components/ContactForm';
import ImageGallery from './components/ImageGallery';
import './globals.css'; // Import the global styles
import CarDetails from './components/CarDetails';

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="container">
      <LanguageSwitcher />

      <section className="section text-center">
        <h1 className="text-5xl font-bold">{t('title')}</h1>
        <p className="text-lg mt-4">{t('description')}</p>
      </section>

      <section className="section">
        <Viewer />
      </section>

      <section className="section">
      <CarDetails />
      </section>

      <section className="section">
        <h2 className="text-3xl font-bold text-center">{t('historyTitle')}</h2>
        <p className="text-center mt-4">{t('history')}</p>
      </section>

      <section className="section">
        <ImageGallery />
      </section>

      <section className="section">
        <ContactForm />
      </section>
    </main>
  );
}
