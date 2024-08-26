import Image from 'next/image';
import { Noto_Serif } from 'next/font/google';
import { TeamsData } from '@/data/teams';  // Assuming data is in a separate file

const inter = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function TeamSection() {
  return (
    <div className="mt-10">
      <h1 className="text-center text-4xl md:text-6xl font-bold underline">Meet Our Team</h1>
      <div className={`mt-8 flex flex-wrap text-2xl font-semibold ${inter.className}`}>
        <p className={`w-full text-2xl font-normal pt-2 ${inter.className}`}>
          Our diverse and talented team is the backbone of ForumDE. Each member brings unique skills and expertise to ensure we deliver exceptional services and innovative solutions.
        </p>
      </div>
      <div className='p-5 grid grid-cols-3 gap-4'>
        {TeamsData.map((data) => (
          <div key={data.id} className='flex flex-col border-2 rounded-lg md:w-fit h-fit w-fit'>
            <div className='w-full'>
              <Image src={data.img} alt={data.name} className='object-cover rounded-t-lg w-2/3 h-40' />
            </div>
            <div className='p-4'>
              <h1 className='text-lg font-bold'>{data.name}</h1>
              <h2 className='text-md font-semibold text-gray-600'>{data.team}</h2>
              <p className='mt-2 text-sm'>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
