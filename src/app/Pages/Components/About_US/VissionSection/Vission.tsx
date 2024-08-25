import Lottie from 'lottie-react';
import mission from '@/assets/mission.json';
import { Noto_Serif } from 'next/font/google';

const inter = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const visionAnimation = {
  loop: true,
  autoplay: true,
  animationData: mission,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function VisionSection() {
  return (
    <div className="mt-10">
      <h1 className={`text-center text-4xl md:text-6xl font-bold underline ${inter.className}`}>Our Vision</h1>
      <div className="flex flex-wrap mt-8 items-center">
        <div className={`w-full md:min-w-[60%] lg:w-[35%] text-2xl p-10 mt-14 ${inter.className}`}>
          <p>Our vision is to support students in achieving unparalleled career growth through industry-led mentorship and personalized learning paths. By aligning our curriculum with industry standards and tracking student progress, we ensure our learners are well-prepared for the future job market.</p>
        </div>
        <div className="w-full md:min-w-[40%] lg:w-[30%]">
          <Lottie {...visionAnimation} className="pt-18 p-5" />
        </div>
      </div>
    </div>
  );
}
