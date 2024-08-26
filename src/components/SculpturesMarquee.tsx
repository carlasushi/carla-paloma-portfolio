import React from 'react';
import Image from 'next/image';

const SculpturesMarquee: React.FC = () => {
  const sculptures = [
    'edamame bear.jpg',
    'greedy bear.jpg',
    'stellar raccon vase 1.jpg',
    'vanilla cat.jpg'
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap bg-white sticky top-0 z-50">
      <div className="inline-block animate-marquee">
        {sculptures.map((sculpture, index) => (
          <Image
            key={index}
            src={`/sculptures/${sculpture}`}
            alt={sculpture.replace('.jpg', '')}
            width={50}
            height={50}
            className="inline-block mx-5 lg:mx-10 w-12 md:w-20 lg:w-28 h-auto object-contain"
          />
        ))}
      </div>
      <div className="inline-block animate-marquee2">
        {sculptures.map((sculpture, index) => (
          <Image
            key={index}
            src={`/sculptures/${sculpture}`}
            alt={sculpture.replace('.jpg', '')}
            width={50}
            height={50}
            className="inline-block mx-5 lg:mx-10 w-12 md:w-20 lg:w-28 h-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default SculpturesMarquee;
