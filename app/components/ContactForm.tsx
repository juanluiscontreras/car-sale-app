'use client'; // Add this line at the top

import React from 'react';

const ContactForm = () => {
  return (
    <form className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Contact Me</h3>
      <label className="block mb-2">Name</label>
      <input type="text" className="w-full p-2 mb-4 border rounded" placeholder="Your Name" />
      
      <label className="block mb-2">Email</label>
      <input type="email" className="w-full p-2 mb-4 border rounded" placeholder="Your Email" />
      
      <label className="block mb-2">Message</label>
      <textarea className="w-full p-2 mb-4 border rounded" placeholder="Your Message"></textarea>
      
      <button type="submit" className="w-full p-2 bg-primary text-white rounded">Send</button>
    </form>
  );
};

export default ContactForm;
