'use client';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';
import ContactForm from './components/ContactForm';
import CarDetailsForFixGallery from './components/CarDetailsForFixGallery';
import './globals.css'; // Import the global styles
import CarSpecs from './components/CarSpecs';
import WhatsAppButton from './components/WhatsappButton';
import CarSaleInfo from './components/CarSaleInfo';
import Maintenance from './components/Mainteinance';
import Banner from './components/Banner';
import PromotionBanner from './components/PromotionBanner';
import Price from './components/Price';
import PanoramicGallery from './components/PanoramicGallery';
import CarImageCarousel from './components/CarImageCarousel';
import CarFeatures from './components/CarFeatures';
import MakeAnOffer from './components/MakeAnOffer';
import CarVideos from './components/CarVideos';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      {/* Reserve space for floating elements */}
      <div className="fixed top-0 right-0 z-50">
        <LanguageSwitcher />
      </div>
      <div className="fixed bottom-0 right-0 z-50">
        <WhatsAppButton />
      </div>

      <main className="container mx-auto px-4 md:px-8 py-8 overflow-x-hidden">
        <section className="section text-center py-8">
          <Banner />
        </section>

        <section className="section py-8">
          <Price />
        </section>

        <section className="section py-8">
          <PanoramicGallery />
        </section>

        <section className="section py-8">
          <CarImageCarousel />
        </section>

        <section className="section py-8">
          <CarFeatures />
        </section>

        <section className="section py-8">
          <CarSpecs />
        </section>

        <section className="section py-8">
          <CarSaleInfo />
        </section>

        <section className="section py-8">
          <Maintenance />
        </section>

        <section className="section py-8">
          <CarDetailsForFixGallery />
        </section>

        <section className="section py-8">
          <CarVideos />
        </section>

        <section className="section py-8">
          <ContactForm />
        </section>
        
        <section className="section py-8">
          <PromotionBanner />
        </section>


      </main>
    </>
  );
}
