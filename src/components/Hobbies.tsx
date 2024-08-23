// src/components/Hobbies.tsx
"use client";

import React, { useState } from 'react';

const Hobbies: React.FC = () => {
  const [viewByCategory, setViewByCategory] = useState(true);

  const toggleView = () => {
    setViewByCategory(!viewByCategory);
  };

  return (
    <div className="bg-white border border-gray-300 p-4 rounded-lg mb-4">
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
            <li>Biology learning | frequent</li>
            <li>Computer learning | monthly</li>
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
            <li>Reading books</li>
          </ul>

          <h3 className="font-semibold mt-4">Frequent</h3>
          <ul className="list-disc list-inside">
            <li>Meditation</li>
            <li>Biology learning</li>
          </ul>

          <h3 className="font-semibold mt-4">Weekly</h3>
          <ul className="list-disc list-inside">
            <li>Ceramics</li>
            <li>Natto making</li>
          </ul>

          <h3 className="font-semibold mt-4">Monthly</h3>
          <ul className="list-disc list-inside">
            <li>Computer learning</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Hobbies;
