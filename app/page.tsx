'use client';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import Viewer from './components/Viewer';
import ContactForm from './components/ContactForm';
import ImageGallery from './components/ImageGallery';
import './globals.css'; // Import the global styles
import CarDetails from './components/CarDetails';
import WhatsAppButton from './components/WhatsappButton';
import CarSaleInfo from './components/CarSaleInfo';
import Maintenance from './components/Mainteinance';
import Banner from './components/Banner';
import PromotionBanner from './components/PromotionBanner';

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="container">
      <LanguageSwitcher />

      <section className="section text-center">
        <Banner/>
      </section>

      <section className="section">
        <Viewer />
      </section>

      <section className="section">
      <CarDetails />
      </section>

      <section className="section">
        <CarSaleInfo/>
      </section>

      <section className="section">
        <Maintenance/>
      </section>

      <section className="section">
        <ImageGallery />
      </section>

      <section className="section">
        <ContactForm />
      </section>

      <section className="section">
        <WhatsAppButton />
      </section>

      <section className="section">
        <PromotionBanner /> {/* Add this here */}
      </section>
    </main>
  );
}
