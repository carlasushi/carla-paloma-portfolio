// src/components/Header.tsx
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="text-center py-10">
      <h1 className="text-4xl font-bold">Carla Paloma</h1>
      {/* <Image
        src="/profile.jpg" //
        alt="Carla Paloma"
        width={150}
        height={150}
        className="rounded-full"
      /> */}
      <p className="mt-2 text-lg">Contemporary Ceramic Artist</p>
    </header>
  );
};

export default Header;
