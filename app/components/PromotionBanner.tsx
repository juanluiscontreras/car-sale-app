'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

const PromotionBanner: React.FC = () => {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '' });

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      formState,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
    ).then(
      (result) => {
        alert(t('promotion.successMessage'));
        setFormState({ name: '', email: '' });
        closeModal();
      },
      (error) => {
        alert(t('promotion.errorMessage'));
      }
    );
  };

  return (
    <section className="promotion-banner bg-yellow-500 text-white py-6 px-4 text-center rounded-lg shadow-md mt-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {t('promotion.title')}
        </h2>
        <p className="text-lg md:text-xl mb-6">
          {t('promotion.description')}
        </p>
        <button 
          onClick={openModal} 
          className="bg-white text-yellow-500 font-bold py-2 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors">
          {t('promotion.contactButton')}
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white text-black w-full max-w-md p-6 rounded-lg shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">{t('promotion.modalTitle')}</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  {t('promotion.modalName')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  {t('promotion.modalEmail')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out"
              >
                {t('promotion.modalSubmit')}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default PromotionBanner;
