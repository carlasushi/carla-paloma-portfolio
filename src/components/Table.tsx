'use client';

import React, { useState } from 'react';

const Table: React.FC = () => {
  const [isEmbedded1, setIsEmbedded1] = useState(false);
  const [isEmbedded2, setIsEmbedded2] = useState(false);
  const [isEmbedded3, setIsEmbedded3] = useState(false);
  const [isEmbedded4, setIsEmbedded4] = useState(false);

  const toggleEmbed1 = () => {
    setIsEmbedded1(!isEmbedded1);
  };

  const toggleEmbed2 = () => {
    setIsEmbedded2(!isEmbedded2);
  };

  const toggleEmbed3 = () => {
    setIsEmbedded3(!isEmbedded3);
  };

  const toggleEmbed4 = () => {
    setIsEmbedded4(!isEmbedded4);
  };

  return (
    <div className="overflow-x-auto">
      <div className="p-4">
        {/* PAST PROJECTS Section */}
        <div className="border-b-2 border-gray-400 font-semibold py-2">
          <h2 className="text-base md:text-lg lg:text-xl">PAST PROJECTS</h2>
        </div>

        {/* N3 ART LAB Entry */}
        <div className="py-2 border-b">
          <span className="font-semibold text-sm md:text-base">N3 ART LAB, Contemporary Art Gallery, Yamaguchi, Japan.</span>
          <br />
          <span className="text-xs md:text-sm">Curator and Program Manager | 2011 - 2013</span>
          <br />
          <button
            onClick={toggleEmbed1}
            className="text-blue-500 hover:underline mt-1 text-xs md:text-sm"
          >
            {isEmbedded1 ? 'Hide' : 'More'}
          </button>
        </div>

        {isEmbedded1 && (
          <div className="mt-2">
            <iframe
              src="https://n3-art-lab.com/en/"
              width="100%"
              height="800"
              title="N3 ART LAB"
              className="border border-gray-300 rounded-lg"
            />
          </div>
        )}

        {/* Varda Artists Residency and Interview Entry */}
        <div className="py-2 border-b">
          <ul>
            <li>
              <span className="font-semibold text-sm md:text-base">Varda Artists Residency, Sausalito, California.</span>
              <br />
              <span className="text-xs md:text-sm">Founder and Program Manager | 2013 - 2021</span>
              <br />
              <a
                href="http://www.vardaartistsresidency.to/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-1 text-xs md:text-sm"
              >
                Visit the Varda Artists Residency external link website
              </a>
            </li>
            <li className="mt-4">
              <span className="font-semibold text-sm md:text-base">Artsy Interview about the residency program.</span>
              <br />
              <a
                href="https://www.artsy.net/article/artsy-editorial-houseboat-hosted-jack-kerouac-maya-angelou-artist-residency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-1 text-xs md:text-sm"
              >
                Read the interview on Artsy
              </a>
            </li>
          </ul>
        </div>

        {/* Cosmic Order Ceramics Entry */}
        <div className="py-2 border-b" id="cosmic-order-ceramics">
          <span className="font-semibold text-sm md:text-base">Cosmic Order Ceramics, Sausalito, California.</span>
          <br />
          <span className="text-xs md:text-sm">Founder | 2020 - 2024</span>
          <br />
          <button
            onClick={toggleEmbed3}
            className="text-blue-500 hover:underline mt-1 text-xs md:text-sm"
          >
            {isEmbedded3 ? 'Hide' : 'More'}
          </button>
        </div>

        {isEmbedded3 && (
          <div className="mt-2">
            <iframe
              src="https://www.cosmicorder.net/"
              width="100%"
              height="800"
              title="Cosmic Order Ceramics"
              className="border border-gray-300 rounded-lg"
            />
          </div>
        )}

        {/* PRESENT PROJECTS Section */}
        <div className="border-b-2 border-yellow-400 font-semibold py-2 mt-4">
          <h2 className="text-base md:text-lg lg:text-xl">PRESENT PROJECTS</h2>
        </div>

        {/* Pan Studio Kauai Entry */}
        <div className="py-2 border-b" id="pan-studio">
          <span className="font-semibold text-sm md:text-base">PAN STUDIO KAUAI</span>
          <br />
          <span className="text-xs md:text-sm">Founder | Ongoing</span>
          <br />
          <button
            onClick={toggleEmbed4}
            className="text-blue-500 hover:underline mt-1 text-xs md:text-sm"
          >
            {isEmbedded4 ? 'Hide' : 'More'}
          </button>
        </div>

        {isEmbedded4 && (
          <div className="mt-2">
            <iframe
              src="https://www.panstudio.to/"
              width="100%"
              height="800"
              title="Pan Studio Kauai"
              className="border border-gray-300 rounded-lg"
            />
          </div>
        )}

        {/* Biographical Manga Entry */}
        <div className="py-2 border-b">
          <span className="font-semibold text-sm md:text-base">Biographical Manga</span>
          <br />
          <span className="text-xs md:text-sm">Creating a biographical manga on Warpcast building Farcaster frames.</span>
          <br />
          <a
            href="https://warpcast.com/carlapaloma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-1 text-xs md:text-sm"
          >
            View the Warpcast profile
          </a>
          <br />
          <span className="text-xs md:text-sm">Coding with Pinata Frame Development Kit (FDK) + Farcaster | Ongoing</span>
        </div>

        {/* Lamp Design Entry */}
        <div className="py-2 border-b">
          <span className="font-semibold text-sm md:text-base">Lamp Designs Experimentation</span>
          <br />
          <span className="text-xs md:text-sm">Refining lamp designs by modeling in Blender. After finalizing the digital designs, 3D printing prototypes undergo trial and error to perfect the vision.</span>
          <br />
          <span className="text-xs md:text-sm">Production | Ongoing</span>
          <br />
          <a
            href="https://www.figma.com/design/difwxiC2BMJ0U8363aXJlx/lamps?node-id=0-1&t=65UAWAJv7tOyGZEb-0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-1 text-xs md:text-sm"
          >
            View Lamp Evolving Designs on Figma.
          </a>
        </div>

        {/* 3D Printing Prototypes Entry */}
        <div className="py-2 border-b">
          <span className="font-semibold text-sm md:text-base">3D Printing Prototypes</span>
          <br />
          <span className="text-xs md:text-sm">Plaster mold casting clay bodies.</span>
          <br />
          <span className="text-xs md:text-sm">Production | Ongoing</span>
          <br />
          <a
            href="https://www.figma.com/design/iafqeEQblhzsAckznCLcZs/Untitled?node-id=0-1&t=xfXhmKeD6LflXF01-1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-1 text-xs md:text-sm"
          >
            View GCODE screenshots of prototypes on Figma.
          </a>
        </div>

        {/* FUTURE PROJECTS Section */}
        <div className="border-b-2 border-green-400 font-semibold py-2 mt-4">
          <h2 className="text-base md:text-lg lg:text-xl">FUTURE PROJECTS</h2>
        </div>

        {/* Future Project Entries */}
        <div className="py-2 border-b">
          <span className="font-semibold text-sm md:text-base">Writing a Python script</span>
          <br />
          <span className="text-xs md:text-sm">to automate the mold-making process in Blender.</span>
        </div>
        <div className="py-2 border-b">
          <span className="font-semibold text-sm md:text-base">Creating tiles for the home.</span>
        </div>
        <div className="py-2 border-b">
          <span className="font-semibold text-sm md:text-base">Developing low- and mid-fire glazes from scratch.</span>
        </div>
        <div className="py-2 border-b">
          <span className="font-semibold text-sm md:text-base">Finding wild clay and formulating a custom recipe for low-fire ceramics.</span>
        </div>
        <div className="py-2 border-b">
          <span className="font-semibold text-sm md:text-base">Designing and sewing tropical clothing</span>
          <br />
          <span className="text-xs md:text-sm">using AI-powered CLO3D CAD software for pattern making.</span>
        </div>
      </div>
    </div>
  );
};

export default Table;
