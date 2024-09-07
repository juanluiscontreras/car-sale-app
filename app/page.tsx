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
import Highlights from './components/Highlights';
import Price from './components/Price';

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="container mx-auto px-4 md:px-8 py-8">
      <LanguageSwitcher />

      <section className="section text-center py-8">
        <Banner />
      </section>

      <section className="section py-8">
        <Price /> {/* Add the Price component here */}
      </section>
      
      <section className="section py-8">
        <Viewer />
      </section>

      <section className="section py-8">
        <Highlights />
      </section>

      <section className="section py-8">
        <CarDetails />
      </section>

      <section className="section py-8">
        <CarSaleInfo />
      </section>

      <section className="section py-8">
        <Maintenance />
      </section>

      <section className="section py-8">
        <ImageGallery />
      </section>

      <section className="section py-8">
        <div className="text-xl font-bold mb-4">
          {t('carPrice', { price: '7500 USD' })} {/* Reiterate the price */}
        </div>
        <ContactForm />
      </section>

      <section className="section py-8">
        <WhatsAppButton />
      </section>

      <section className="section py-8">
        <PromotionBanner />
      </section>
    </main>
  );
}
