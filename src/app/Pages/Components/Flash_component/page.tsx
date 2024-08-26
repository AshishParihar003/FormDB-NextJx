"use client";

import React from 'react';

const FlashMessage = () => {
  const flashStyle = {
    animation: 'flash 2s infinite',
  };

  const keyframesStyle = `
    @keyframes flash {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  `;

  return (
   <div
      className=" p-3 justify-center align-self-center rounded-lg w-fit shadow-xl bg-orange-400 mx-auto my-5 md:mx-10"
      style={{
        margin: '0 auto',
        display: 'flex',
        // add this to center vertically
      }}
    >
        <style>{keyframesStyle}</style> {/* Inline keyframes definition */}
        <div className=" space-y-1  md:space-y-0 md:space-x-4 text-center items-center">
    <h2 className='font-normal text-l sm:text-l'>We Provide Best</h2>
          <h1 className="px-3 text-2xl md:text-2xl lg:text-2xl font-bold " style={flashStyle}>
           Job Assistance 
          </h1>
        </div>

      </div>
      
  );
};

export default FlashMessage;