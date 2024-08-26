"use client";

// Importing necessary assets and libraries
import selection from "@/../../public/assets/lottie/selection.json";
import React from 'react';
import { Montserrat, Noto_Serif } from 'next/font/google';
import Navbar from "../../MainComponets/Header/pages";
import Lottie from "lottie-react";
import Companies from "../../Additional/Companies/pages";
import TestimonialsCards from "./StudentCard/Testrimonials";

// Initializing custom fonts
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], 
});

const inter = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'], 
});

const Testimonials = () => {
  // Lottie animation configuration
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: selection,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/* Full-page Hero Section */}
      <div className="relative h-screen bg-black/90 text-white flex">

  <div className="flex-1 flex flex-col items-start justify-center lg:py-10  px-10 gap-4 space-y-2 text-left z-10 p-10">
    <div className={`text-4xl sm:text-5xl md:text-4xl font-medium pt-20 ${montserrat.className}`}>
      Welcome,
    </div>
    <div className={`text-7xl py-4 sm:text-6xl md:text-5xl lg:text-7xl font-bold ${montserrat.className}`}>
      To Achievers Wall
    </div>
    <h2 className={`mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal  ${inter.className}`}>
      Celebrate the exceptional individuals who have made outstanding contributions to our community. Our Hall of Fame honors those whose achievements, leadership, and dedication have significantly advanced the field. Discover their stories and recognize their impact.
    </h2>
  </div>


  <div className="flex-1 flex items-center justify-end px-5 z-0">
    <Lottie {...defaultOptions} className="w-fit px-3 max-w-lg lg:w-auto lg:max-w-xl" />
  </div>
</div>


      {/* Companies Section */}
      <div className="p-20 bg-black/90">
  <div className="bg-slate-900 px-10 py-12 rounded-2xl border-4 border-gray-700">
    <div className="max-w-screen-lg mx-auto px-4">
      <div className="text-center p-5 text-5xl sm:text-5xl lg:text-5xl text-white font-extrabold mb-8">
        Where our Achievers are...
      </div>
      <div className="flex justify-center" >
        <Companies />
      </div>
    </div>
  </div>
</div>


      {/* Testimonial cards container */}
      <div className="py-16 px-8 bg-black/90">
        <TestimonialsCards />
      </div>
    </>
  );
};

export default Testimonials;
