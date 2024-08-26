"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';
import certificateimg from "@/../../public/assets/certificate.jpeg";
import certificate from "@/../../public/assets/Top_ImageSlider/certficate.json";
import { Montserrat, Noto_Serif} from 'next/font/google';


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], 
});
const inter= Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'], 
});


export default function MyCertificate() {
  useEffect(() => {
    const handleScroll = () => {
      const animatedText = document.querySelectorAll('.animated-text');
      const windowHeight = window.innerHeight;
      animatedText.forEach(text => {
        const textTop = text.getBoundingClientRect().top;
        if (textTop < windowHeight * 0.8) {
          text.classList.add('fade-in-up');
        } else {
          text.classList.remove('fade-in-up');
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: certificate,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div data-aos="fade-down" data-aos-delay="700" className="container mx-auto my-5 p-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4">
          <p data-aos="fade-down" data-aos-delay="700" className={`animated-text text-4xl sm:text-5xl md:text-6xl italic font-extrabold underline mb-4 sm:mb-6 md:mb-14 ${montserrat.className}`}>
            Certificate of Achievement
          </p>
          <p data-aos="fade-down" data-aos-delay="700" className={`animated-text text-base sm:text-lg md:text-2xl font-medium mt-2 ${inter.className}`}>
            Congratulations on completing the Azure Data Constellation: Engineering the Future course! A course completion certificate will be given to students on completion of 60% of the course. This certificate will enhance your LinkedIn Profile and help you in grabbing a good job. Best wishes for your future endeavors.
          </p>
          <p data-aos="fade-down" data-aos-delay="700" className={`animated-text text-lg sm:text-2xl md:text-2xl mt-5 font-semibold ${inter.className}`}>
            Best Regards, <br />
            Arun Kumar
          </p>
          <Lottie
            {...defaultOptions}
            className="mt-5"
            style={{ height: '200px', width: '200px' }}
          />
        </div>
        <div className="md:w-1/2 flex justify-center px-4">
          <Image src={certificateimg} data-aos="fade-down" data-aos-delay="700" className="w-full h-fit max-w-xs md:max-w-lg" alt="Certificate" />
        </div>
      </div>
    </div>
  );
}
