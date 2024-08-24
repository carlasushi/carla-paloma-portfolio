// src/components/Education.tsx
"use client";

import React from 'react';

const Education: React.FC = () => {
  return (
    <div className="bg-white border border-gray-300 p-4 mb-4">
      <h2 className="font-bold text-xl mb-2">Education</h2>
      <ul className="list-disc list-inside">
        <li>Full Stack Software Development Bootcamp, Le Wagon, Denmark (Oct/Dec 2019)</li>
        <li>BSc Post-graduate Diploma, Psychology, Victoria University of Wellington, New Zealand (2014)</li>
        <li>BA Applied Linguistics: 2nd Language Education, Victoria University of Wellington, New Zealand (2011)</li>
        <li>BSc Molecular Biology, University of Buenos Aires, Argentina (2000-2003)</li>
      </ul>
    </div>
  );
};

export default Education;
