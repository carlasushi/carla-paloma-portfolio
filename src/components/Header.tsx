// src/components/Header.tsx
import React from 'react';
import SculpturesMarquee from './SculpturesMarquee';

const Header: React.FC = () => {
  return (
    <header>
      <SculpturesMarquee />
      <div className="py-10">
        <h1 className="text-4xl font-bold text-left">Carla Paloma</h1>
        <div className="mt-4"></div>
      </div>
    </header>
  );
};

export default Header;
