"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProfileImage from "@/../../public/assets/ProfileImage.png"; 
import Image from 'next/image';
import { Montserrat, Noto_Serif } from 'next/font/google';
import Navbar from '../../MainComponets/Header/pages';
import { WhyUs } from '../Why_Us/Why_us';
import mission from '@/../../public/assets/lottie/mission.json';
import Lottie from 'lottie-react';
import Nandini from '@../../../public/assets/team_detail/saurav.jpg';
import Saurav from '@../../../public/assets/team_detail/saurav.jpg';
import Shubhangi from '@../../../public/assets/team_detail/shubhangi.jpg';
import Ashish from '@../../../public/assets/team_detail/shubhangi.jpg';
import Sonu from '@../../../public/assets/team_detail/shubhangi.jpg';
import Nitin from '@../../../public/assets/team_detail/shubhangi.jpg';

const TeamsData =[
  {
    id : 1,
    name: "Saurav Ranjan",
    team: "Marketing Team",
    description : "dsajkfnsdajnidsajnfsdfunsduifndsuinfuidsnfuidsnffedkslfm sdklf dsklf dslkindsabufdsjfnuisdn",
    img : Saurav
  },
  {
    id : 2,
    name: "Shubhangi Jha",
    team: "Sales Team",
    description : "dsajkfnsdajnidsajnfsdfunsduifndsuinfuidsnfuidsnfindsabufdsjfnuisdn",
    img : Shubhangi
  },
  {
    id : 3,
    name: "Nandini",
    team: "Tech Team",
    description : "dsajkfnsdajnidsajnfsdfunsduifndsuinfuidsnfuidsnfindsabufdsjfnuisdn",
    img : Nandini
  },
  {
    id : 4,
    name: "Ashish Parihar",
    team: "Tech Team",
    description : "dsajkfnsdajnidsajnfsdfunsduifndsuinfuidsnfuidsnfindsabufdsjfnuisdn",
    img : Ashish
  },
  {
    id : 5,
    name: "Sonu Singh",
    team: "Tech Team",
    description : "dsajkfnsdajnidsajnfsdfunsduifndsuinfuidsnfuidsnfindsabufdsjfnuisdn",
    img : Sonu
  },
  {
    id : 6,
    name: "Nitin",
    team: "Tech Team",
    description : "dsajkfnsdajnidsajnfsdfunsduifndsuinfuidsnfuidsnfindsabufdsjfnuisdn",
    img : Nitin
  }
]

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const inter = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function AboutUs() {
  const missionAnimation = {
    loop: true,
    autoplay: true,
    animationData: mission,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    AOS.init({
      duration: 650,
      once: true,
    });

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
    <>
      <Navbar />
    
      <div data-aos="fade-up" className="container mx-auto px-4 md:px-8 py-6 md:py-10 mt-10">
        {/* Introduction Section */}
        <section className="bg-orange-300 rounded-xl shadow-xl p-6 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Image src={ProfileImage} alt="Profile" className="w-full h-auto rounded-3xl shadow-2xl shadow-orange-400" />
            </div>
            <div className="md:col-span-2 flex flex-col justify-center">
              <p className={`text-4xl md:text-5xl leading-relaxed ${montserrat.className}`}>
                <strong>Dear Students,</strong>
              </p>
              <p className={`mt-4 text-lg ${inter.className}`}>
                It is with great pleasure that I welcome you to ForumDE - your gateway to opportunities in Information Technology. As technology evolves rapidly, the demand for skilled IT professionals is higher than ever. We provide industry-level IT training in the latest technologies like Cloud (Azure, AWS, GCP), Data Engineering, Data Science, Docker and Kubernetes, Data Visualization, Business Analysis, and Project Management. At ForumDE, we understand the importance of staying ahead, adapting, and honing skills to meet the industry’s dynamic needs.
              </p>
              <p className={`mt-4 text-lg ${inter.className}`}>
                As you begin your journey toward a fulfilling career in IT, I encourage you to leverage the resources and opportunities at ForumDE. Whether you’re a professional aiming to advance your career or a fresh graduate eager to make your mark, our platform offers abundant resources, networking opportunities, and expert guidance to support you every step of the way. On behalf of the entire ForumDE team, I wish you the best in your pursuit of a rewarding career in Information Technology. Together, let’s shape the future of technology and create a brighter tomorrow for generations to come.
              </p>
              <p className={`mt-4 text-lg font-bold ${montserrat.className}`}>
                Best Regards, <br />
                <strong>Arun Kumar</strong><br />
                Founder, ForumDE
              </p>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <WhyUs />

        {/* Mission Section */}
        <section className="mt-10">
          <h1 className={`text-center text-4xl md:text-6xl font-bold underline ${montserrat.className}`}>Our Mission</h1>
          <div className="flex flex-wrap mt-8 items-center">
            <div className={`w-full md:w-2/3 lg:w-1/2 text-lg p-6 ${inter.className}`}>
              <p>At ForumDE, our mission is to empower and support students in mastering data engineering by providing a collaborative platform for learning, sharing knowledge, and solving real-world challenges. We aim to foster a community where aspiring data engineers can gain practical insights, access valuable resources, and connect with peers and industry experts to build the skills necessary for a successful career in data engineering.</p>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/2">
              <Lottie {...missionAnimation} className="w-full h-full" />
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mt-10">
          <h1 className={`text-center text-4xl md:text-6xl font-bold underline ${montserrat.className}`}>Our Vision</h1>
          <div className="flex flex-wrap mt-8 items-center">
            <div className={`w-full md:w-2/3 lg:w-1/2 text-lg p-6 ${inter.className}`}>
              <p>Our vision is to help students achieve the highest career growth with the support of industry-led mentors. This includes creating personalized learning paths, ensuring industry-relevant skills, tracking performance, and aligning with market trends to prepare students for a successful career in data engineering.</p>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/2">
              <Lottie {...missionAnimation} className="w-full h-full" />
            </div>
          </div>
        </section>

        {/* Teams Section */}
        <section className="mt-10">
          <h1 className="text-center text-4xl md:text-6xl font-bold underline">Meet Our Team</h1>
          <div className="mt-8 flex flex-col md:flex-row gap-6">
            {TeamsData.map((data) => (
              <div key={data.id} className='flex flex-col border border-gray-200 rounded-lg overflow-hidden shadow-md'>
                <Image src={data.img} alt={data.name} className='w-full h-64 object-cover' />
                <div className='p-4'>
                  <h2 className='text-lg font-bold'>{data.name}</h2>
                  <h3 className='text-md font-semibold text-gray-600'>{data.team}</h3>
                  <p className='mt-2 text-gray-700'>{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
