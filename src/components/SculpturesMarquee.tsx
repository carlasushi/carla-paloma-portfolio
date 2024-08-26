import React from 'react';
import Image from 'next/image';

const SculpturesMarquee: React.FC = () => {
  const sculptures = [
    'edamame bear.jpg',
    'vanilla cat.jpg',
    'greedy bear.jpg',
    'stellar raccon vase 1.jpg',
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
            className="inline-block mx-8"
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
            className="inline-block mx-8"
          />
        ))}
      </div>
    </div>
  );
};

export default SculpturesMarquee;
