import React from 'react';
import FastMarquee from 'react-fast-marquee';

const CustomMarquee: React.FC = () => {
  return (
    <div className='bg-yellow-200' data-aos="fade-up" data-aos-delay="700">
      <FastMarquee>
        <div>
        New Batch for Azure Data Engineering is starting on 25th August 2024 *** Registrations are open for all courses!! Enroll now. New Batch for Python is starting on 31st August 2024 *** Registrations are open for all courses!! Enroll now. New Batch for SQL is starting on 23rd August 2024 *** Registrations are open for all courses!! Enroll now.

        </div>
      </FastMarquee>
    </div>
  );
}

export default CustomMarquee;
