// src/components/Hobbies.tsx
"use client";

import React, { useState } from 'react';

const Hobbies: React.FC = () => {
  const [viewByCategory, setViewByCategory] = useState(true);

  const toggleView = () => {
    setViewByCategory(!viewByCategory);
  };

  return (
    <div className="bg-white border border-gray-300 p-4 mb-4">
      <h2 className="font-bold text-xl mb-2">Hobbies</h2>
      <button
        onClick={toggleView}
        className="text-blue-500 hover:underline mb-4"
      >
        {viewByCategory ? 'View by Frequency' : 'View by Category'}
      </button>

      {viewByCategory ? (
        <>
          {/* Body Care + Well Being */}
          <h3 className="font-semibold mt-4">Body Care + Well Being</h3>
          <ul className="list-disc list-inside">
            <li>Ocean swimming | daily</li>
            <li>Riding bike | daily</li>
            <li>Playing with her cat | daily</li>
            <li>Spending time with her husband | daily</li>
            <li>Preparing her own meals | daily</li>
            <li>Helping with the garden | daily</li> {/* New Entry */}
          </ul>

          {/* Spiritual */}
          <h3 className="font-semibold mt-4">Spiritual</h3>
          <ul className="list-disc list-inside">
            <li>Meditation | frequent</li>
          </ul>

          {/* Creative */}
          <h3 className="font-semibold mt-4">Creative</h3>
          <ul className="list-disc list-inside">
            <li>Ceramics | weekly</li>
            <li>Natto making | weekly</li>
          </ul>

          {/* Learning */}
          <h3 className="font-semibold mt-4">Learning</h3>
          <ul className="list-disc list-inside">
            <li>Reading books | daily</li>
            <li>Exploring the intersections of biology, politics, and holistic health | frequent</li>
            <li>learning new technologies  | often</li>
            <li>Maintaining Japanese language conversation through weekly sessions on Preply.com | weekly</li>
          </ul>
        </>
      ) : (
        <>
          {/* Organized by Frequency */}
          <h3 className="font-semibold mt-4">Daily</h3>
          <ul className="list-disc list-inside">
            <li>Ocean swimming</li>
            <li>Riding bike</li>
            <li>Playing with her cat</li>
            <li>Spending time with her husband</li>
            <li>Preparing her own meals</li>
            <li>Helping with the garden</li> {/* New Entry */}
            <li>Reading books</li>
          </ul>

          <h3 className="font-semibold mt-4">Frequent</h3>
          <ul className="list-disc list-inside">
            <li>Meditation</li>
            <li>Exploring the intersections of biology, politics, and holistic health</li>
          </ul>

          <h3 className="font-semibold mt-4">Weekly</h3>
          <ul className="list-disc list-inside">
            <li>Ceramics</li>
            <li>Natto making</li>
            <li>Maintaining Japanese language conversation through weekly sessions on Preply.com</li>
          </ul>

          <h3 className="font-semibold mt-4">Often</h3>
          <ul className="list-disc list-inside">
            <li>Learning new technologies </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Hobbies;
