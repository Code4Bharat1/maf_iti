"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const whatsappNumber = "918983508919";
  const defaultMessage = "Hello ITI! I would like to inquire about your courses.";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-green-600 rounded-full p-3 sm:p-4 shadow-lg hover:bg-green-700 transition duration-200 hover:scale-105"
      aria-label="Contact ITI via WhatsApp"
      title="Chat with ITI"
    >
      <FaWhatsapp
        className="text-white"
        size={35}         // base size
      />
      <style jsx>{`
        @media (min-width: 640px) {
          .text-white {
            font-size: 2.5rem !important; /* size=40 on sm+ */
          }
        }

        @media (min-width: 1024px) {
          .text-white {
            font-size: 3rem !important; /* size=48 on lg+ */
          }
        }
      `}</style>
    </a>
  );
};

export default WhatsAppButton;
