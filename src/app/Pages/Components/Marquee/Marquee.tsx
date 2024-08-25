import React from 'react';
import FastMarquee from 'react-fast-marquee';

const CustomMarquee: React.FC = () => {
  return (
    <div className='bg-yellow-200 text-2xl' data-aos="fade-up" data-aos-delay="400">
      <FastMarquee>
        <div>
        New Batch for Azure Data Engineering is starting on 31st August 2024 *** Registrations are open for all courses!! Enroll now. New Batch for Python will be starting soon *** Registrations are open for all courses!! Enroll now. New Batch for SQL is started on 24th August 2024 *** Registrations are open for all courses!! Enroll now.

        </div>
      </FastMarquee>
    </div>
  );
}

export default CustomMarquee;
