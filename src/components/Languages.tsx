// src/components/Languages.tsx
"use client";

import React from 'react';

const Languages: React.FC = () => {
  return (
    <div className="bg-white border border-gray-300 p-4 mb-4">
      <h2 className="font-bold text-xl mb-2">Languages</h2>
      <ul className="list-disc list-inside">
        <li>Spanish (native)</li>
        <li>English (fluent)</li>
        <li>Japanese (N3 conversational)</li>
      </ul>
    </div>
  );
};

export default Languages;
