/* eslint-disable @next/next/no-img-element */
"use client";

import Lottie from 'lottie-react';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
  useEffect(() => {
    AOS.init();
  }, []);

  const downloadOptions = {
    loop: true,
    autoplay: true,
    animationData: download,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="pt-20 lg:mt-10 flex flex-col lg:flex-row relative p-5 min-h-[12%] w-full bg-orange-100">
      <div className="w-full lg:w-2/3 p-1 mx-4" data-aos="fade-up" data-aos-delay="500">
        <h1
          className={`font-extrabold pb-1 text-4xl lg:text-6xl text-gray-800 ${montserrat.className}`}
        >
          FREE!! 100-Day Self-Study Plan to Learn Data Engineering
        </h1>
        <br />
        <div className="w-full">
          <p className={`text-3xl py-3 text-gray-800 ${inter.className}`}>
            We have developed a 100-day self-study plan for students aspiring to become Azure Data
            Engineers. Based on our interactions with many learners, we`ve noticed a lack of clear
            direction on what and how to study. Our plan sets daily targets to guide students
            effectively towards their goal.
          </p>
          <h2 className={`pt-3 text-3xl text-gray-800 ${inter.className}`}>
            Follow the plan and prepare yourself to crack the Azure Data Engineering Interview.
          </h2>
          <br />
          <p className={`text-3xl py-1 pt-1 text-gray-700 ${inter.className}`}>
            Use the <b>Download</b> button below to get the plan.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center space-y-4 lg:space-y-0 lg:space-x-4 mt-6 w-full">
          <a
            href="/assets/Pdf/Plan.pdf"
            download="100-Day-Data-Engineering-Plan"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <button className="flex items-center justify-center px-10 py-5 rounded-xl bg-red-400 border-3 border-black text-white text-3xl lg:text-4xl">
              Download
              <Lottie
                {...downloadOptions}
                className="ml-2"
                style={{ height: '80px', width: '90px' }}
              />
            </button>
          </a>
        </div>
      </div>
      <div
        className="w-full lg:w-2/5 justify-center items-center"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <FlashMessage />
        <img src={gif.src} alt="Azure Data Engineering GIF" className="rounded-lg h-fit w-fit" />
      </div>
    </div>
  );
};

export default Details;
