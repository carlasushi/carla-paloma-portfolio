// src/components/Footer.tsx
"use client";

import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="my-2 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-gray-700">&copy; {currentYear} Carla Paloma</p>
        <div>
          <a
            href="https://github.com/carlasushi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 mr-4"
          >
            GitHub
          </a>
          <a
            href="mailto:carlapaloma@pm.me"
            className="text-blue-500 hover:text-blue-700"
          >
            carlapaloma@pm.me
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
