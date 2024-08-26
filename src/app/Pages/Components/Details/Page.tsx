/* eslint-disable @next/next/no-img-element */
"use client";

import Lottie from 'lottie-react';
import React from 'react';
import animation01 from '@/../../public/assets/Top_ImageSlider/01.json';
import download from '@/../../public/assets/Top_ImageSlider/download.json';
import call from '@/../../public/assets/Logo/call.json';
import gif from '@/../../public/assets/gif/azure 2.gif';
import { Montserrat, Noto_Serif } from 'next/font/google';
import FlashMessage from '../Flash_component/page';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const inter = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Details = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation01,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const downloadOptions = {
    loop: true,
    autoplay: true,
    animationData: download,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const callOptions = {
    loop: true,
    autoplay: true,
    animationData: call,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="pt-20 lg:mt-10 flex flex-col lg:flex-row relative p-5 min-h-[9%] w-full bg-orange-100">
      <div className="w-full lg:w-2/3 p-1 mx-4">
        <h1 className={`font-bold pb-1 text-3xl lg:text-4xl text-gray-800 ${montserrat.className}`}>
          FREE!! 100-Day Self-Study Plan to Learn Data Engineering
        </h1>
        <br />
        <div className="w-full">
          <p className={`text-2xl py-1  text-gray-800 ${inter.className}`}>
          We have developed a 100-day self-study plan for students aspiring to become Azure Data Engineers. Based on our interactions with many learners, we`ve noticed a lack of clear direction on what and how to study. Our plan sets daily targets to guide students effectively towards their goal.
          </p>
          <h2 className={`pt-2 text-2xl  text-gray-800 ${inter.className}`}>
            Do follow the plan and make yourself ready to crack the Azure Data Engineering Interview.
          </h2>
          <br />
          <p className={`text-2xl py-1 pt-1  text-gray-700 ${inter.className}`}>
            Use the below <b>Download</b> button to download the plan.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center space-y-4 lg:space-y-0 lg:space-x-4 mt-6 w-full">
          
        <a href="/assets/Pdf/Plan.pdf" download="100-Day-Data-Engineering-Plan">
            <button className="flex items-center justify-center px-7 py-1 rounded-xl bg-red-400 border-2 border-black text-white text-2xl lg:text-2xl w-auto lg:w-auto">
              Download
              <Lottie {...downloadOptions} className="ml-2" style={{ height: '50px', width: '50px' }} />
            </button>
          </a>
          
       
        </div>
         
        <button></button>
      </div>
      <div className="w-full lg:w-2/5 justify-center items-center">   <FlashMessage/>
        <img src={gif.src} alt="Logo GIF" className="rounded-lg h-fit w-fit " />
      </div>
    </div>
  );
};

export default Details;
