// src/components/Bio.tsx
'use client';
import React from 'react';
import Image from 'next/image';

const Bio: React.FC = () => {
  return (
    <div className="p-4 mb-4 border border-gray-300 rounded-lg bio-section">
      <div className="flex flex-col md:flex-row items-center mb-4">
        <p className="text-base md:text-xl lg:text-3xl mb-4 md:mb-0 md:mr-4 md:w-1/2">
          Carla Paloma is a ceramicist from Buenos Aires, Argentina, currently residing in Kauai, Hawaii. She founded <a href="#pan-studio" className="text-blue-500 hover:underline">PAN STUDIO</a>, where she integrates her artistic vision with modern tools.
          Carla specializes in wheel-throwing and handbuilding techniques. Using Blender, a 3D modeling software, she creates digital prototypes that are 3D printed and transformed into unique ceramic pieces.
        </p>
        <div className="flex justify-center md:w-1/2">
          <Image
            src="/CP_profile.jpeg"
            alt="Carla Paloma"
            width={400}
            height={400}
            className="md:max-w-full image-hover-effect"
          />
        </div>
      </div>
    </div>
  );
};

export default Bio;
