"use client";

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
        <div className="border-b-2 border-gray-400 font-bold py-2">
          <h2>PAST PROJECTS</h2>
        </div>

        {/* N3 ART LAB Entry */}
        <div className="py-2 border-b">
          <span className="font-bold">N3 ART LAB, Contemporary Art Gallery, Yamaguchi, Japan.</span>
          <br />
          Curator and Program Manager | 2011 - 2013
          <br />
          <button
            onClick={toggleEmbed1}
            className="text-blue-500 hover:underline mt-2"
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
              <span className="font-bold">Varda Artists Residency, Sausalito, California.</span>
              <br />
              Founder and Program Manager | 2013 - 2021
              <br />
              <a
                href="http://www.vardaartistsresidency.to/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2"
              >
                Visit the Varda Artists Residency external link website
              </a>
            </li>
            <li className="mt-4">
              <span className="font-bold">Artsy Interview about the residency program.</span>
              <br />
              <a
                href="https://www.artsy.net/article/artsy-editorial-houseboat-hosted-jack-kerouac-maya-angelou-artist-residency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2"
              >
                Read the interview on Artsy
              </a>
            </li>
          </ul>
        </div>

        {/* Cosmic Order Ceramics Entry */}
        <div className="py-2 border-b" id="cosmic-order-ceramics">
          <span className="font-bold">Cosmic Order Ceramics, Sausalito, California.</span>
          <br />
          Founder | 2020 - 2024
          <br />
          <button
            onClick={toggleEmbed3}
            className="text-blue-500 hover:underline mt-2"
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
        <div className="border-b-2 border-yellow-400 font-bold py-2 mt-4">
          <h2>PRESENT PROJECTS</h2>
        </div>

        {/* Pan Studio Kauai Entry */}
        <div className="py-2 border-b" id="pan-studio">
          <span className="font-bold">PAN STUDIO KAUAI</span>
          <br />
          Founder | Ongoing
          <br />
          <button
            onClick={toggleEmbed4}
            className="text-blue-500 hover:underline mt-2"
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
          <span className="font-bold">Biographical Manga</span>
          <br />
          Creating a biographical manga on Warpcast building Farcaster frames.
          <br />
          <a
            href="https://warpcast.com/carlapaloma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2"
          >
            View the Warpcast profile
          </a>
          <br />
          Coding with Pinata Frame Development Kit (FDK) + Farcaster | Ongoing
          <br />
        </div>

        {/* Lamp Design Entry */}
        <div className="py-2 border-b">
          <span className="font-bold">Lamp Designs Experimentation</span>
          <br />
          Refining lamp designs by modeling in Blender. After finalizing the digital designs, 3D printing prototypes undergo trial and error to perfect the vision.
          <br />
          Production | Ongoing
          <br />
          <a
            href="https://www.figma.com/design/difwxiC2BMJ0U8363aXJlx/lamps?node-id=0-1&t=65UAWAJv7tOyGZEb-0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2"
          >
            View Lamp Evolving Designs on Figma.
          </a>
        </div>

        {/* 3D Printing Prototypes Entry */}
        <div className="py-2 border-b">
          <span className="font-bold">3D Printing Prototypes</span>
          <br />
          Plaster mold casting clay bodies.
          <br />
          Production | Ongoing
          <br />
          <a
            href="https://www.figma.com/design/iafqeEQblhzsAckznCLcZs/Untitled?node-id=0-1&t=xfXhmKeD6LflXF01-1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2"
          >
            View GCODE screenshots of prototypes on Figma.
          </a>
        </div>

        {/* FUTURE PROJECTS Section */}
        <div className="border-b-2 border-green-400 font-bold py-2 mt-4">
          <h2>FUTURE PROJECTS</h2>
        </div>

        {/* Future Project Entries */}
        <div className="py-2 border-b">
          <span className="font-bold">Writing a Python script</span>
          <br />
          to automate the mold-making process in Blender.
        </div>
        <div className="py-2 border-b">
          <span className="font-bold">Creating tiles for the home.</span>
        </div>
        <div className="py-2 border-b">
          <span className="font-bold">Developing low- and mid-fire glazes from scratch.</span>
        </div>
        <div className="py-2 border-b">
          <span className="font-bold">Finding wild clay and formulating a custom recipe for low-fire ceramics.</span>
        </div>
        <div className="py-2 border-b">
          <span className="font-bold">Designing and sewing tropical clothing</span>
          <br />
          using AI-powered CLO3D CAD software for pattern making.
        </div>
      </div>
    </div>
  );
};

export default Table;
