// src/components/Header.tsx
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="py-10">
      <h1 className="text-4xl font-bold text-left">Carla Paloma</h1> {/* Aligned to the left */}
      <div className="mt-4"></div>
      {/* Removed the "Contemporary Ceramic Artist" text */}
    </header>
  );
};

export default Header;
