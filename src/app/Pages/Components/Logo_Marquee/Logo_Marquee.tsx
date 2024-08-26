import Marquee from 'react-fast-marquee';
import AzureLab from '@/../../public/assets/Logo/Azure lab.jpg';
import Azure from '@/../../public/assets/Logo/Azure.jpg';
import Python from '@/../../public/assets/Logo/Python.jpg';
import AzureScience from '@/../../public/assets/Logo/AzureScience.jpg';
import DataScience from '@/../../public/assets/Logo/DataScience.jpg';
import Databrick from '@/../../public/assets/Logo/Databriks.jpg';
import MySql from '@/../../public/assets/Logo/MySql.jpg';
import PySpark from '@/../../public/assets/Logo/PySpark.jpg';
import Spark from '@/../../public/assets/Logo/Spark.jpg';
import Image from 'next/image';

const Logo_Marquee = () => {
  return (
    <div className='text-center py-6'>
      <h1 className='font-extrabold underline p-3 text-4xl md:text-5xl lg:text-6xl' data-aos="fade-up" data-aos-delay="1200">
        Our Technology
      </h1>
      <div data-aos="fade-up" data-aos-delay="1000" className='py-4 rounded-xl w-full h-full'>
        <Marquee speed={100}>
          <div className='flex items-center mx-4'>
            <Image src={AzureLab} alt="Azure Lab" className='h-32 w-auto' />
          </div>
          <div className='flex items-center mx-4'>
            <Image src={AzureScience} alt="Azure Science" className='h-32 w-auto' />
          </div>
          <div className='flex items-center mx-4'>
            <Image src={Databrick} alt="Databrick" className='h-32 w-auto' />
          </div>
          <div className='flex items-center mx-4'>
            <Image src={DataScience} alt="Data Science" className='h-32 w-auto' />
          </div>
          <div className='flex items-center mx-4'>
            <Image src={Azure} alt="Azure" className='h-32 w-auto' />
          </div>
          <div className='flex items-center mx-4'>
            <Image src={MySql} alt="MySQL" className='h-32 w-auto' />
          </div>
          <div className='flex items-center mx-4'>
            <Image src={Spark} alt="Spark" className='h-32 w-auto' />
          </div>
          <div className='flex items-center mx-4'>
            <Image src={PySpark} alt="PySpark" className='h-32 w-auto' />
          </div>
          <div className='flex items-center mx-4'>
            <Image src={Python} alt="Python" className='h-32 w-auto' />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Logo_Marquee;
