// src/components/Bio.tsx
'use client';
import React, { useState } from 'react';
import WorkExperience from './WorkExperience';
import Languages from './Languages';
import Certifications from './Certifications';
import Hobbies from './Hobbies';

const Bio: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isWorkExperienceExpanded, setIsWorkExperienceExpanded] = useState(false);
  const [isLanguagesExpanded, setIsLanguagesExpanded] = useState(false);
  const [isCertificationsExpanded, setIsCertificationsExpanded] = useState(false);
  const [isHobbiesExpanded, setIsHobbiesExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

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
    <div className="border border-gray-300 p-4 rounded-lg mb-4">
      <h2 className="text-xl font-bold mb-2">BIO</h2>
      <p className="mb-2">
        Carla Paloma is a ceramicist from Buenos Aires, Argentina, now living in Kauai, Hawaii. She discovered her passion for pottery in Japan and has since founded Cosmic Order Ceramics and PAN STUDIO, where she creates ceramic prototypes using Blender. Carla shares her artistic vision with the local community by selling her work in shops.
      </p>
      <button onClick={toggleExpand} className="text-blue-500 hover:underline">
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
      {isExpanded && (
        <div className="mt-2">
          <p>More about Carla</p>
          <iframe
            src="https://cosmicorder.net/about/"
            width="100%"
            height="400"
            title="About Carla Paloma"
            className="border border-gray-300 rounded-lg"
          />
        </div>
      )}

      {/* Work Experience Section */}
      <div className="mt-4">
        <button onClick={toggleWorkExperienceExpand} className="text-blue-500 hover:underline">
          {isWorkExperienceExpanded ? 'Hide Work Experience' : 'Work Experience'}
        </button>
        {isWorkExperienceExpanded && (
          <div className="mt-2">
            <WorkExperience />
          </div>
        )}
      </div>

      {/* Languages Section */}
      <div className="mt-4">
        <button onClick={toggleLanguagesExpand} className="text-blue-500 hover:underline">
          {isLanguagesExpanded ? 'Hide Languages' : 'Languages'}
        </button>
        {isLanguagesExpanded && (
          <div className="mt-2">
            <Languages />
          </div>
        )}
      </div>

      {/* Certifications Section */}
      <div className="mt-4">
        <button onClick={toggleCertificationsExpand} className="text-blue-500 hover:underline">
          {isCertificationsExpanded ? 'Hide Certifications' : 'Certifications'}
        </button>
        {isCertificationsExpanded && (
          <div className="mt-2">
            <Certifications />
          </div>
        )}
      </div>

      {/* Hobbies Section */}
      <div className="mt-4">
        <button onClick={toggleHobbiesExpand} className="text-blue-500 hover:underline">
          {isHobbiesExpanded ? 'Hide Hobbies' : 'Hobbies'}
        </button>
        {isHobbiesExpanded && (
          <div className="mt-2">
            <Hobbies />
          </div>
        )}
      </div>
    </div>
  );
};

export default Bio;
