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

const TestimonialsCards: React.FC = () => {
  const [expanded, setExpanded] = useState(Array(testimonialData.length).fill(false));

  const toggleExpand = (index: number) => {
    setExpanded(prev => prev.map((exp, i) => (i === index ? !exp : exp)));
  };

  return (
    <div className="py-3 px-4 sm:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialData.map((data, index) => (
          <div key={data.name} className="bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col items-center">
            <Image
              src={data.image}
              alt={data.name}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white/70"
              width={128}
              height={128}
            />
            <h1 className={`text-xl sm:text-2xl font-bold text-white text-center mt-4 ${montserrat.className}`}>{data.name}</h1>
            <div className="flex items-center space-x-2 mt-2">
              <h2 className={`text-lg sm:text-xl text-white font-semibold ${inter.className}`}>{data.companyname}</h2>
              <Image
                src={data.companylogo}
                alt={`${data.companyname} logo`}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                width={48}
                height={48}
              />
            </div>
            <div className="text-yellow-400 text-xl mt-2">★ ★ ★ ★ ★</div>
            <p
              className={`text-gray-300 text-base sm:text-lg mt-2 ${inter.className}`}
              style={{ lineHeight: '1.6' }}
            >
              {data.description}
            </p>
            {/* Uncomment for expand/collapse feature */}
            {/* <button
              onClick={() => toggleExpand(index)}
              className="mt-2 text-blue-400 hover:text-blue-600 transition-colors duration-300"
            >
              {expanded[index] ? 'Show Less' : 'Show More'}
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCards;
