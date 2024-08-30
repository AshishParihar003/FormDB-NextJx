"use client";

// Importing necessary assets and libraries
import selection from "@/../../public/assets/lottie/selection.json";
import React from 'react';
import { Montserrat, Noto_Serif } from 'next/font/google';
import Navbar from "../../MainComponets/Header/pages";
import Lottie from "lottie-react";
import Companies from "../../Additional/Companies/pages";
import TestimonialsCards from "./StudentCard/Testrimonials";
import { Footer } from "../../MainComponets/Footer/footerpage";
//import testimonialData from "@/../../src/app/Pages/Data/testimonialsdata"
// Importing logo images

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
      <div className="relative h-screen bg-black/90 text-white flex flex-col lg:flex-row items-center lg:pt-44 lg:items-start justify-center lg:justify-between p-5 mt-12 lg:p-10">
        <div className="flex-1 flex flex-col items-start justify-center lg:px-10 space-y-2 lg:space-y-3 text-left z-10">
          <div className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl pt-20 font-medium ${montserrat.className}`}>
            Welcome,
          </div>
          <div className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ${montserrat.className}`}>
            To The Achievers Wall
          </div>
          <h2 className={`text-base sm:text-lg md:text-xl lg:text-3xl font-normal ${inter.className}`}>
            Celebrate the exceptional individuals who have made outstanding contributions to our community. Our Hall of Fame honors those whose achievements, leadership, and dedication have significantly advanced the field. Discover their stories and recognize their impact.
          </h2>
        </div>
        <br />
        <br /><br />
        <div className="flex-1 flex items-center justify-center lg:justify-end px-5 lg:px-5">
          <Lottie {...defaultOptions} className="w-full p-5" />
        </div>
      </div>

      {/* Companies Section */}
      <div className="p-5 sm:p-8 lg:p-20 bg-black/90">
        <div className="bg-slate-900 px-4 sm:px-6 py-6 sm:py-10 rounded-2xl border-4 border-gray-700">
          <div className="max-w-screen-lg mx-auto px-4">
            <div className="text-center text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold mb-6 sm:mb-8">
              Where our Achievers are...
            </div>
            <div className="flex justify-center">
              <Companies />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial cards container */}
      <div className="p-5 sm:p-8 lg:p-20 bg-black/90">
        <div className="px-4 sm:px-6 py-6 sm:py-10 rounded-2xl border-4 border-gray-700">
          <div className="text-center text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold mb-6 sm:mb-8">
            Our Achievers...
          </div>
          <div className="py-4 sm:py-6 px-4 sm:px-6">
            <TestimonialsCards />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Testimonials;
