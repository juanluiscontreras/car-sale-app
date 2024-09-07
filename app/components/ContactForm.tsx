'use client'; // Add this line at the top
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        'service_j05kt6s', // Replace with your EmailJS service ID
        'template_j4odjin', // Replace with your EmailJS template ID
        formState,
        'iIiSAOKwQLTGi67kc' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          setSuccessMessage(t('contactForm.successMessage'));
          setErrorMessage('');
          setFormState({ name: '', email: '', message: '' });
        },
        (error) => {
          setErrorMessage(t('contactForm.errorMessage'));
          setSuccessMessage('');
        }
      );
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
          {t('contactForm.title')}
        </h2>
        <form onSubmit={sendEmail} className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700">
              {t('contactForm.nameLabel')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">
              {t('contactForm.emailLabel')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700">
              {t('contactForm.messageLabel')}
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            {t('contactForm.submitButton')}
          </button>
          {successMessage && <p className="mt-4 text-green-600">{successMessage}</p>}
          {errorMessage && <p className="mt-4 text-red-600">{errorMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;