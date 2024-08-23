// src/components/Hobbies.tsx
"use client";

import React from 'react';

const Hobbies: React.FC = () => {
  return (
    <div className="bg-white border border-gray-300 p-4 rounded-lg mb-4">
      <h2 className="font-bold text-xl mb-2">Hobbies</h2>

      {/* Body Care + Well being */}
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
    </div>
  );
};

export default Hobbies;
