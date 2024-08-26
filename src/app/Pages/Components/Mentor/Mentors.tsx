import React from 'react';
import Image, { StaticImageData } from 'next/image';

import testimonial from "@/../../public/assets/testimonial.jpg";
import mentor from "@/../../public/assets/mentors (1).png";
import img1 from "@/../../public/assets/Mentor_image/1.jpg";
import img2 from "@/../../public/assets/Mentor_image/2.jpg";
import img3 from "@/../../public/assets/Mentor_image/3.jpg";
import img4 from "@/../../public/assets/Mentor_image/4.jpeg";
import { Montserrat, Noto_Serif} from 'next/font/google';


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], 
});
const inter= Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'], 
});

const Mentors: React.FC = () => {
  interface ImageProps {
    mytech: string;
    src: string | StaticImageData;
    alt: string;
    name: string;
    detail: string;
    detail2: string;
    facebook: string;
    twitter: string;
    linkedin: string;
  }

  const images: ImageProps[] = [
    { src: img1, alt: 'Description of image 1', name: "Arun Kumar", detail: "Ex- TCS || Ex-Tredence || Ex-Harman || Ex-WNS", detail2: "9+ Years of Industry Experience", mytech: "Experties in Azure Data Enginering", facebook: 'https://www.facebook.com/Forum.DE.Team', twitter: '', linkedin: 'https://www.linkedin.com/in/arun-kumar-19283775/' },
    { src: img2, alt: 'Description of image 1', name: "Dinesh Kumar", detail: "Ex- TCS || Ex-Persistent Systems || Ex-Cavisson Systems", detail2: "9+ Years of Industry Experience", mytech: "Experties in Python", facebook: 'https://www.facebook.com/Forum.DE.Team', twitter: '', linkedin: 'https://www.linkedin.com/in/dinesh-kumar-2a714574/' },
    { src: img3, alt: 'Description of image 1', name: "Sudhir Kumar Singh", detail: "B.Tech(IIT Kharagpur), Phd(IIT Kharagpur)", detail2: "5+ Years of Research and Industry Experience in IIT Kharagpur", mytech: "Experties in Data Science", facebook: 'https://www.facebook.com/Forum.DE.Team', twitter: '', linkedin: 'https://www.linkedin.com/in/sudhir-kumar-singh-36b7b59a/' },
    { src: img4, alt: 'Description of image 1', name: "Akshay Kaushal", detail: "Ex- TCS", detail2: "5+ Years of Industry Experience", mytech: "Experties in SQL", facebook: 'https://www.facebook.com/Forum.DE.Team', twitter: '', linkedin: 'https://www.linkedin.com/in/akshay-kaushal-584116109/' },
  ];

  return (
    <>
      <div data-aos="fade-up" data-aos-delay="500" className="w-fit h-fit mx-auto mb-10" />
      <h1 data-aos="fade-up" data-aos-delay="500" className={`w-fit h-fit mx-auto mb-10 mt-5 text-center text-6xl font-bold underline ${montserrat.className}`} > Mentors </h1>
      <div data-aos="fade-up" data-aos-delay="500" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-4">
        {images.map((image, index) => (
          <div key={index} className="relative flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
            <Image data-aos="fade-up" data-aos-delay="500" src={image.src} alt={image.alt} className="w-full h-full object-cover rounded-lg mb-4 border-2 border-gray-300" />
            <div data-aos="fade-up" data-aos-delay="500" className={`text-2xl font-bold text-3xl mb-2 ${montserrat.className}`}>{image.name}</div>
            <div data-aos="fade-up" data-aos-delay="500" className={`text-gray-700 mb-2 ${inter.className}`}>{image.detail}</div>
            <div data-aos="fade-up" data-aos-delay="500" className={`text-gray-700 mb-4 ${inter.className}`}>{image.detail2}</div>
            <div data-aos="fade-up" data-aos-delay="500" className={`text-gray-700 mb-4 font-bold ${inter.className}`}>{image.mytech}</div>
            <div data-aos="fade-up" data-aos-delay="500" className="flex space-x-4">
              <a data-aos="fade-up" data-aos-delay="500" href={image.facebook} rel="noopener noreferrer" className="text-blue-600 text-2xl">
                <i data-aos="fade-up" data-aos-delay="500" className="fab fa-facebook"></i>
              </a>
              <a data-aos="fade-up" data-aos-delay="500" href={image.twitter} rel="noopener noreferrer" className="text-pink-500 text-2xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a data-aos="fade-up" data-aos-delay="500" href={image.linkedin} rel="noopener noreferrer" className="text-blue-700 text-2xl">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
     
    </>
  );
};

export default Mentors;
