'use client';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation();
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-80 md:h-96 flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/swift-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Darken the background */}
      <div className="relative z-10 text-center px-4">
        <img
          src="/images/suzuki-logo.png"
          alt="Suzuki Logo"
          className="mx-auto w-24 md:w-32 mb-4"
        />
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          {t('banner.title')}
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">
          {t('banner.subtitle')}
        </p>
      </div>
    </section>
  );
};

export default Banner;
