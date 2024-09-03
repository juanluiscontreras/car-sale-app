import { useEffect } from 'react';

const WhatsAppButton = () => {
  useEffect(() => {
    const button = document.createElement('a');
    button.href = 'https://wa.me/5491130282508?text=I%20am%20interested%20in%20your%20car';
    button.target = '_blank';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.backgroundColor = '#25D366';
    button.style.color = 'white';
    button.style.borderRadius = '50%';
    button.style.padding = '15px';
    button.style.fontSize = '20px';
    button.style.textAlign = 'center';
    button.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    button.style.zIndex = '1000';
    button.innerHTML = '<i class="fa fa-whatsapp"></i>'; // FontAwesome WhatsApp icon
    document.body.appendChild(button);

    return () => {
      document.body.removeChild(button);
    };
  }, []);

  return null;
};

export default WhatsAppButton;
