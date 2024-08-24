// src/components/MoreAboutCarla.tsx
'use client';
import React, { useState } from 'react';
import WorkExperience from './WorkExperience';
import Languages from './Languages';
import Education from './Education';
import Hobbies from './Hobbies';

const MoreAboutCarla: React.FC = () => {
  const [isWorkExperienceExpanded, setIsWorkExperienceExpanded] = useState(false);
  const [isLanguagesExpanded, setIsLanguagesExpanded] = useState(false);
  const [isEducationExpanded, setIsEducationExpanded] = useState(false);
  const [isHobbiesExpanded, setIsHobbiesExpanded] = useState(false);

  const toggleWorkExperienceExpand = () => {
    setIsWorkExperienceExpanded(!isWorkExperienceExpanded);
  };

  const toggleLanguagesExpand = () => {
    setIsLanguagesExpanded(!isLanguagesExpanded);
  };

  const toggleEducationExpand = () => {
    setIsEducationExpanded(!isEducationExpanded);
  };

  const toggleHobbiesExpand = () => {
    setIsHobbiesExpanded(!isHobbiesExpanded);
  };

  return (
    <div className="p-4 my-4">
      <div className="border-b font-bold py-2">
        <h2>MORE ABOUT CARLA</h2>
      </div>

      <div className="mt-4">
        {/* Personal Statement */}
        <div className="mt-4">
          <p>
          Carla lives a life free from alcohol, substances, tobacco, sugar, gluten, fluoride, and social media, but she does not oppose these choices for others.          </p>
        </div>

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

        {/* Education Section */}
        <div className="mt-4">
          <button onClick={toggleEducationExpand} className="text-blue-500 hover:underline">
            {isEducationExpanded ? 'Hide Education' : 'Education'}
          </button>
          {isEducationExpanded && (
            <div className="mt-2">
              <Education />
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
    </div>
  );
};

export default MoreAboutCarla;
