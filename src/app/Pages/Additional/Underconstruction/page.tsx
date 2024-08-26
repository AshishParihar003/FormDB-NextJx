"use client"

import React from 'react';
import animation01 from '@/../../public/assets/lottie/Animation - 1722623312901.json';
import Lottie from 'lottie-react';
import Navbar from '../../MainComponets/Header/pages';

const Page = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation01,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <><Navbar /><div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <Lottie {...defaultOptions} className="h-96 w-96 mx-auto" />
        <h1 className="text-6xl font-bold underline">Site Under Construction</h1>
      </div>
    </div></>
  );
}

export default Page;
