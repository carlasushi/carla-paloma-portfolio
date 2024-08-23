// src/components/Bio.tsx
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import WorkExperience from './WorkExperience';
import Languages from './Languages';
import Certifications from './Certifications';
import Hobbies from './Hobbies';

const Bio: React.FC = () => {
  const [isWorkExperienceExpanded, setIsWorkExperienceExpanded] = useState(false);
  const [isLanguagesExpanded, setIsLanguagesExpanded] = useState(false);
  const [isCertificationsExpanded, setIsCertificationsExpanded] = useState(false);
  const [isHobbiesExpanded, setIsHobbiesExpanded] = useState(false);

  const toggleWorkExperienceExpand = () => {
    setIsWorkExperienceExpanded(!isWorkExperienceExpanded);
  };

  const toggleLanguagesExpand = () => {
    setIsLanguagesExpanded(!isLanguagesExpanded);
  };

  const toggleCertificationsExpand = () => {
    setIsCertificationsExpanded(!isCertificationsExpanded);
  };

  const toggleHobbiesExpand = () => {
    setIsHobbiesExpanded(!isHobbiesExpanded);
  };

  return (
    <div className="p-4 mb-4 border border-gray-300 rounded-lg bio-section"> {/* Added bio-section class */}
      <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-2">BIO</h2>
      <div className="flex flex-col md:flex-row items-center mb-4">
        <p className="text-base md:text-xl lg:text-3xl mb-4 md:mb-0 md:mr-4 md:w-1/2">
          Carla Paloma is a ceramicist from Buenos Aires, Argentina, now living in Kauai, Hawaii. She discovered her passion for pottery in Japan and has since founded Cosmic Order Ceramics and PAN STUDIO, where she creates ceramic prototypes using Blender. Carla shares her artistic vision with the local community by selling her work in shops and collaborating with other artists.
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
