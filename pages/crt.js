import React from 'react';
import Squares from '../components/Squares'; // Adjust path if needed

export default function Crt() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      {/* Grid Background */}
      <div className="absolute inset-0 z-10">
        {/* You can tweak these props for different animations/colors */}
        <Squares
          direction="down"
          speed={1}
          borderColor="#999"
          squareSize={80}
          hoverFillColor="#222"
        />
      </div>

      {/* Hero Content */}
      <div className=" z-20 relative flex flex-col items-center justify-center h-screen px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4 ">
          {/* Yellow dot from the design */}
          <div className="w-5 h-5 rounded-full bg-yellow-400"></div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Creator Startup
          </h1>
        </div>
        <p className="text-lg md:text-xl max-w-xl mb-4">
          Knowledge, tools, and skills &mdash; designed specifically for the professional creator.
        </p>
        <p className="text-sm md:text-base max-w-xl mb-8">
          You&apos;ll spend the rest of your life making videos, make sure they make an impact.
        </p>
        <button className="inline-block px-6 py-3 text-black font-semibold bg-yellow-400 rounded-full hover:bg-yellow-500 transition duration-300">
          Jump In
        </button>
      </div>
    </div>
  );
}
