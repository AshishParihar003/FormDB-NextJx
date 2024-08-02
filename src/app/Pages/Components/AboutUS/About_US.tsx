"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProfileImage from "@/../../public/assets/ProfileImage.png"; 
import Image from 'next/image';
import "./Aboutus.css";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 650, // Global duration for all animations
      once: true, // Whether animation needs to be executed only once
    });

    // Add scroll event listener
    const handleScroll = () => {
      const animatedText = document.querySelectorAll('.animated-text');
      animatedText.forEach(text => {
        const textTop = text.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
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

  return (
    <div data-aos="fade-up" className="container mx-auto py-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Profile image on the left side */}
        <div className="md:col-span-1 p-10">
          <Image src={ProfileImage} alt="Profile" className="w-full h-fit  rounded-3xl" />
        </div>

        {/* About us image and text on the right side */}
        <div className="md:col-span-2">
          <h1 className=" text-6xl font-bold mb-4 underline px-4 text-center" style={{content : "center"}} data-aos="fade-left">About Us</h1>
          <br />
          <div data-aos="fade-left">
            <p className="text-xl font-sans leading-relaxed animated-text">
              <strong>Dear Students,</strong>
            </p>
            <p className="font-semibold animated-text px-4 mt-4 space-y-4 gap-4">
              It is with great pleasure that I welcome you to ForumDE - your gateway to opportunities in Information Technology. As technology evolves rapidly, the demand for skilled IT professionals is higher than ever. We provide industry-level IT training in the latest technologies like Cloud (Azure, AWS, GCP), Data Engineering, Data Science, Docker and Kubernetes, Data Visualization, Business Analysis, and Project Management. At ForumDE, we understand the importance of staying ahead, adapting, and honing skills to meet the industry`s dynamic needs.
            </p>
            <p className="font-semibold animated-text px-4 mt-2 space-y-4 gap-4">
              As you begin your journey toward a fulfilling career in IT, I encourage you to leverage the resources and opportunities at ForumDE. Whether you`re a professional aiming to advance your career or a fresh graduate eager to make your mark, our platform offers abundant resources, networking opportunities, and expert guidance to support you every step of the way. On behalf of the entire ForumDE team, I wish you the best in your pursuit of a rewarding career in Information Technology. Together, let`s shape the future of technology and create a brighter tomorrow for generations to come.
            </p>
            <p className="text-lg animated-text font-bold mt-2">
              Best Regards, <br />
              Arun Kumar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
