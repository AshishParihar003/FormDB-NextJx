import React from 'react';
import Image from 'next/image';

import tcs from '@../../../public/assets/working_logo/tcs.png';
import accenture from '@/../../public/assets/working_logo/accenture.png';
import wns from '@/../../public/assets/working_logo/WNS.png';
import publicis from '@/../../public/assets/working_logo/publicis.png';
import ait from '@/../../public/assets/working_logo/ait.png';
import saama from '@/../../public/assets/working_logo/saama.png';
import axa from '@../../../public/assets/working_logo/axa.png';
import cognizant from '@../../../public/assets/working_logo/cognizant.png';
import pwc from '@../../../public/assets/working_logo/pwc.png';
import capegemini from '@../../../public/assets/working_logo/capegemini.png';
import genpact from '@../../../public/assets/working_logo/genpact.png';
import circlek from '@../../../public/assets/working_logo/Circlek.png';
import kpmg from '@../../../public/assets/working_logo/kpmg.png';
import ncs from '@../../../public/assets/working_logo/ncs.png';
import inxite from '@../../../public/assets/working_logo/inxiteout.png';

const logos = [
  { src: tcs, alt: 'TCS' },
  { src: accenture, alt: 'Accenture' },
  { src: wns, alt: 'WNS' },
  { src: publicis, alt: 'Publicis' },
  { src: ait, alt: 'AIT' },
  { src: saama, alt: 'Saama' },
  { src: axa, alt: 'AXA' },
  { src: cognizant, alt: 'Cognizant' },
  { src: pwc, alt: 'PwC' },
  { src: capegemini, alt: 'Capgemini' },
  { src: genpact, alt: 'Genpact' },
  { src: circlek, alt: 'Circle K' },
  { src: kpmg, alt: 'KPMG' },
  { src: ncs, alt: 'NCS' },
  { src: inxite, alt: 'Inxite' },
];

const Companies = () => {
  return (
    <div className="py-8 px-4 bg-gray-300 rounded-lg">
      {/* <div className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
        Where Our Achievers Are
      </div> */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
            <Image
              src={logo.src}
              alt={logo.alt}
              className="object-contain"
              width={150} // Adjust width as needed
              height={100} // Adjust height as needed
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
