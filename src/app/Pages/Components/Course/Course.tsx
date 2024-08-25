"use client";

import React, { useRef, RefObject } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image, { StaticImageData } from 'next/image';
import Azure from "@/../../public/assets/courses/Azure.jpg";
import Python from "@/../../public/assets/courses/Python.jpg";
import SQL from "@/../../public/assets/courses/SQL.jpg";
import DataScience from "@/../../public/assets/courses/Data Science.jpg";
import 'aos/dist/aos.css';
import AOS from 'aos';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Button } from "@nextui-org/button";
import { Montserrat, Noto_Serif } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const inter = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
});

AOS.init();

interface Course {
  id: number;
  image: string | StaticImageData;
  title: string;
  description: string;
  duration: string;
  fee: string;
  startDate: string;
  registration: string;
  paymentLink: string;
  explore: string;
}

const courses: Course[] = [
  {
    id: 1,
    image: Azure,
    title: "Azure Data Engineering **BEST SELLING**",
    description: "Job Assistance || Real-Time Projects || Assignments || Live classes || Recordings",
    duration: "3 Months",
    fee: "Rs 19,999/-",
    startDate: "Starts from 25th August 2024",
    registration: "Registrations Open",
    paymentLink: "/assets/Pdf/azure aug s.pdf",
    explore: "https://lms.forumde.in/courses/azure-data-enginnering"
  },
  {
    id: 2,
    image: Python,
    title: "Python Programming **BEST SELLING**",
    description: "Python from zero to hero course || Hands-On Training || Assignments || Recordings",
    duration: "2 Months",
    fee: "Rs 4,999/-",
    startDate: "Starts from 31th August 2024",
    registration: "Registration Open",
    paymentLink: "/assets/Pdf/python.pdf",
    explore: "https://lms.forumde.in/courses/python-programming-mr-dinesh-kumar"
  },
  {
    id: 3,
    image: SQL,
    title: "Master In SQL",
    description: "Explore the Power of SQL || Ticket to fast-track growth in data science || Recordings",
    duration: "2 Months",
    fee: "Rs 3,999/-",
    startDate: "Starts from 23th August 2024",
    registration: "Registration Open",
    paymentLink: "/assets/Pdf/SQL.pdf",
    explore: "/Pages/Components/Course/Explore"
  },
  {
    id: 4,
    image: DataScience,
    title: "Data Science Program",
    description: "Job Assistance || Ticket to fast-track growth in data science || Recordings",
    duration: "3 Months",
    fee: "Rs 19,999/-",
    startDate: "New Batch starting soon",
    registration: "Registration Open",
    paymentLink: "",
    explore: "/Pages/Components/Course/Explore"
  }
];

interface CustomButtonGroupProps {
  next: () => void;
  previous: () => void;
}

const CustomButtonGroup: React.FC<CustomButtonGroupProps> = ({ next, previous }) => {
  return (
    <div className="flex justify-center items-center py-5 space-x-4">
      <button onClick={previous} className="bg-orange-400 hover:bg-orange-200 text-black font-bold py-3 px-3 shadow-md rounded-full">
        <i className="fas fa-chevron-left"></i> Previous
      </button>
      <button onClick={next} className="bg-orange-400 hover:bg-orange-200 text-black font-bold py-3 px-6 shadow-md rounded-full">
        Next <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default function CourseContainer() {
  const carouselRef: RefObject<any> = useRef(null);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className={`px-7 mx-auto text-center underline text-6xl font-bold py-8 ${montserrat.className}`}>Courses</h1>

      <Carousel
        responsive={{
          superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
          desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
          tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
          mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
        }}
        transitionDuration={2000}
        containerClass="carousel-container relative"
        autoPlaySpeed={5000}
        draggable={true}
        centerMode={false}
        autoPlay={true}
        infinite={true}
        swipeable={true}
        ref={carouselRef}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<CustomButtonGroup next={handleNext} previous={handlePrev} />}
        itemClass="px-4"
      >
        {courses.map((course) => (
          <div key={course.id} className="bg-white text-black rounded-lg border border-gray-300 shadow-xl px-4 pb-4 pt-2 relative">
            <Image className="rounded-lg w-full h-50 object-cover mb-2" src={course.image as StaticImageData} alt={course.title} />
            <div className="p-4 space-y-3">
              <h6 className={`text-lg font-bold ${montserrat.className}`}>{course.title}</h6>
              <p className={`text-sm ${inter.className}`}>{course.description}</p>
              <p className={`text-sm ${inter.className}`}><strong>Duration:</strong> {course.duration}</p>
              <p className={`text-sm ${inter.className}`}><strong>Fees:</strong> {course.fee}</p>
              <p className={`text-sm font-semibold ${inter.className}`}>{course.startDate}</p>
              <p className={`text-sm font-bold ${inter.className}`}>{course.registration}</p>
              <div className="flex justify-between items-center mt-4 ">
                <a href={course.explore}>
                  <Button className="bg-blue-500 hover:bg-blue-300 items-center text-white rounded px-3 py-3 w-fit text-2xl mx-1">Explore</Button>
                </a>
                <a href={course.paymentLink}>
                  <Button className="bg-green-600 hover:bg-green-400 text-white rounded px-2 w-fit py-2 text-sm">Download Syllabus</Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
