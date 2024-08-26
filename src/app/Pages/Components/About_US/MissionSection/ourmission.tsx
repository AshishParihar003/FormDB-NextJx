import Lottie from 'lottie-react';
import mission from '@/assets/mission.json';
import { Noto_Serif } from 'next/font/google';

const inter = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const missionAnimation = {
  loop: true,
  autoplay: true,
  animationData: mission,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function MissionSection() {
  return (
    <div className="mt-10">
      <h1 className={`text-center text-4xl md:text-6xl font-bold underline ${inter.className}`}>Our Mission</h1>
      <div className="flex flex-wrap mt-8 items-center">
        <div className={`w-full md:min-w-[60%] lg:w-[35%] text-2xl p-10 mt-14 ${inter.className}`}>
          <p>At ForumDE, our mission is to empower and support students in mastering data engineering through a collaborative platform. We are committed to providing valuable resources, fostering community engagement, and connecting students with industry experts to build the skills necessary for a successful career.</p>
        </div>
        <div className="w-full md:min-w-[40%] lg:w-[30%]">
          <Lottie {...missionAnimation} className="pt-18 p-5" />
        </div>
      </div>
    </div>
  );
}
