// src/components/Footer.tsx
"use client";

import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="my-2 py-3">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center mb-4">
          <p className="text-gray-700 text-center">&copy; {currentYear} Carla Paloma</p>
          <div className="flex flex-col items-center mt-2">
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
        <Image
          src="/sculptures/tapir.jpg"
          alt="Tapir sculpture"
          layout=''
          quality={100}
          width={300} // Set to the original width of the image
          height={300} // Set to the original height of the image
          className="mt-4 w-40 h-auto lg:w-1/3"
        />
      </div>
    </footer>
  );
};

export default Footer;
