'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

const PromotionBanner: React.FC = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setMessage('');
    setFormData({ name: '', email: '' });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_name: process.env.DESTINATION_EMAIL!,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );

      setMessage(t('contactForm.successMessage'));
    } catch (error) {
      setMessage(t('contactForm.errorMessage'));
    } finally {
      setIsSending(false);
    }
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
          className="bg-white text-yellow-500 font-bold py-2 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
        >
          {t('promotion.contactButton')}
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-6 h-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
            <h3 className="text-lg font-bold mb-4">{t('contactForm.title')}</h3>
            <form onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {t('contactForm.nameLabel')}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {t('contactForm.emailLabel')}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <button 
                type="submit"
                disabled={isSending}
                className="bg-yellow-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-yellow-600 transition-colors"
              >
                {isSending ? t('contactForm.sending') : t('contactForm.submitButton')}
              </button>
              {message && <p className="text-sm mt-2">{message}</p>}
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default PromotionBanner;
