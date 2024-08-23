// src/components/Bio.tsx
'use client';
// app/components/Bio.tsx
import React, { useState } from 'react';

const Bio: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
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
          <p>
            More about Carla
          </p>
          <iframe
            src="https://cosmicorder.net/about/"
            width="100%"
            height="400"
            title="About Carla Paloma"
            className="border border-gray-300 rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Bio;
