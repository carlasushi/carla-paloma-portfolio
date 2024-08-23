// components/Table.tsx
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
      <div className="bg-white border border-gray-300 p-4 rounded-lg">
        {/* PAST PROJECTS Section */}
        <div className="border-b font-bold py-2">
          <h2>PAST PROJECTS</h2>
        </div>

        {/* N3 ART LAB Entry */}
        <div className="py-2 border-b">
          N3 ART LAB, Contemporary Art Gallery, Yamaguchi, Japan.
          <br />
          <span className="font-semibold">Curator and Program Manager | 2011 - 2013</span>
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
              height="400"
              title="N3 ART LAB"
              className="border border-gray-300 rounded-lg"
            />
          </div>
        )}

        {/* Varda Artists Residency Entry */}
        <div className="py-2 border-b">
          Varda Artists Residency, Sausalito, California.
          <br />
          <span className="font-semibold">Founder and Program Manager | 2013 - 2021</span>
          <br />
          <button
            onClick={toggleEmbed2}
            className="text-blue-500 hover:underline mt-2"
          >
            {isEmbedded2 ? 'Hide' : 'More'}
          </button>
        </div>

        {isEmbedded2 && (
          <div className="mt-2">
            <iframe
              src="http://www.vardaartistsresidency.to/"
              width="100%"
              height="400"
              title="Varda Artists Residency"
              className="border border-gray-300 rounded-lg"
            />
          </div>
        )}

        {/* Cosmic Order Ceramics Entry */}
        <div className="py-2 border-b">
          Cosmic Order Ceramics, Sausalito, California.
          <br />
          <span className="font-semibold">Founder | 2020 - 2024</span>
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
              height="400"
              title="Cosmic Order Ceramics"
              className="border border-gray-300 rounded-lg"
            />
          </div>
        )}

        {/* PRESENT PROJECTS Section */}
        <div className="border-b font-bold py-2 mt-4">
          <h2>PRESENT PROJECTS</h2>
        </div>

        {/* Pan Studio Kauai Entry */}
        <div className="py-2 border-b">
          Pan Studio Kauai.
          <br />
          <span className="font-semibold">Founder | Ongoing</span>
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
              height="400"
              title="Pan Studio Kauai"
              className="border border-gray-300 rounded-lg"
            />
          </div>
        )}

        {/* Lamp Design Entry */}
        <div className="py-2 border-b">
          Lamp Designs Experimentation:
          Carla is actively refining her lamp designs, modeling the bodies in Blender. After completing the digital designs, she 3D prints the prototypes, which undergo a process of trial and error to perfect them and bring her vision to life.
          <br />
          <span className="font-semibold">Production | Ongoing</span>
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
          3D Printing Prototypes - Current Phase: Plaster Mold Casting Clay Bodies.
          <br />
          <span className="font-semibold">Current Project</span>
          <br />
          <a
            href="https://www.figma.com/design/iafqeEQblhzsAckznCLcZs/Untitled?node-id=0-1&t=xfXhmKeD6LflXF01-1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2"
          >
            View 3D printing prototypes of ceramic pieces on Figma.
          </a>
        </div>

        {/* FUTURE PROJECTS Section */}
        <div className="border-b font-bold py-2 mt-4">
          <h2>FUTURE PROJECTS</h2>
        </div>

        {/* Future Project Entry */}
        <div className="py-2 border-b">
          Developing a Python script to automate the mold-making process in Blender.
          <br />
          {/* <span className="font-semibold">Future Development</span> */}
        </div>
      </div>
    </div>
  );
};

export default Table;
