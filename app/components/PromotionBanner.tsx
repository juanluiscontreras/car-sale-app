'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

const PromotionBanner: React.FC = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Open the modal
  const openModal = () => setShowModal(true);
  
  // Close the modal
  const closeModal = () => setShowModal(false);

  // Handle form changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  // Send email
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Set the email template params
    const templateParams = {
      name: formState.name,
      email: formState.email,
      message: `I want a page like this\n\nName: ${formState.name}\nEmail: ${formState.email}`, // Email body
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // EmailJS Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // EmailJS Template ID
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID! // EmailJS User ID
      )
      .then(
        (result) => {
          setSuccessMessage(t('promotion.successMessage'));
          setErrorMessage('');
          setFormState({ name: '', email: '' });
          closeModal();
        },
        (error) => {
          setErrorMessage(t('promotion.errorMessage'));
          setSuccessMessage('');
        }
      );
  };

  return (
    <>
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
      </section>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md mx-auto p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              {t('promotion.modalTitle')}
            </h2>
            <form onSubmit={sendEmail}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  {t('promotion.modalName')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  {t('promotion.modalEmail')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg transition-colors hover:bg-yellow-600"
              >
                {t('promotion.modalSubmit')}
              </button>
              {successMessage && <p className="mt-4 text-green-600">{successMessage}</p>}
              {errorMessage && <p className="mt-4 text-red-600">{errorMessage}</p>}
            </form>
            <button onClick={closeModal} className="mt-4 text-blue-500">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PromotionBanner;
