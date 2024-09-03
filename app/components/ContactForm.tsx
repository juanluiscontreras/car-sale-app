'use client'; // Add this line at the top
import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
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
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formState,
        'YOUR_USER_ID' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          setSuccessMessage('Message sent successfully!');
          setErrorMessage('');
          setFormState({ name: '', email: '', message: '' });
        },
        (error) => {
          setErrorMessage('Failed to send the message. Please try again later.');
          setSuccessMessage('');
        }
      );
  };

  return (
    <form onSubmit={sendEmail}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formState.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formState.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Message:</label>
        <textarea name="message" value={formState.message} onChange={handleChange} required />
      </div>
      <button type="submit">Send</button>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
};

export default ContactForm;
