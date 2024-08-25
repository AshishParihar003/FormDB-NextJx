/* eslint-disable jsx-a11y/alt-text */

import React, { useState } from 'react';
import Image from 'next/image';
import testimonialData from '../Student_Data/data';
import { Montserrat, Noto_Serif } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const inter = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const TestimonialsCards = () => {
  const [expanded, setExpanded] = useState(Array(testimonialData.length).fill(false));

  const toggleExpand = (index: number) => {
    setExpanded(prev => prev.map((exp, i) => (i === index ? !exp : exp)));
  };

  return (
    <div className="bg-black/90 py-12 px-8 rounded-lg" >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 sm:p-10">
        {testimonialData.map((data, index) => (
          <div key={data.name} className="bg-black/80 shadow-sm shadow-white p-3 rounded-lg  max-w-md mx-auto">
            <div className="flex flex-col items-center space-y-4 py-5 px-3 rounded-lg bg-gray-900">
              <Image
                src={data.image}
                alt={data.name}
                className="w-32 h-32 rounded-full border-4 border-white/70 "
               
              />
              <h1 className={`text-2xl font-bold text-white text-center${montserrat.className}`}>{data.name}</h1>
              <div className="flex items-center space-x-2">
                <h2 className={`text-xl text-white font-semibold ${inter.className}`}>{data.companyname}</h2>
                <Image
                  src={data.companylogo}
                  alt={`${data.companyname} logo`}
                  className="w-12 h-12 rounded-full"
                  width={48}
                  height={48}
                />
              </div>
              <div className="text-yellow-400 text-xl">★ ★ ★ ★ ★</div>
              <p
                className={`text-gray-300 text-lg font-normal ${inter.className} ${expanded[index] ? 'text-base' : 'text-lg'}`}
              >
                {data.description}
                {/* {expanded[index] ? data.description : `${data.description.substring(0, 100)}...`} */}
              </p>
              {/* <button
                onClick={() => toggleExpand(index)}
                className="mt-2 text-blue-400 hover:text-blue-600 transition-colors duration-300"
              >
                {expanded[index] ? 'Show Less' : 'Show More'}
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCards;
