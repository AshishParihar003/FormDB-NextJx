import React from 'react';
import Image from 'next/image';
import arun from '@/../../public/assets/Mentor_image/1.jpg'; 
import akshay from '@../../../public/assets/Mentor_image/4.jpeg';
import dinesh from '@../../../public/assets/Mentor_image/3.jpg';
import datascience from '@/../../public/assets/Logo/Azure.jpg';
import python from '@../../../public/assets/Logo/Python.jpg';
import SQL from '@../../../public/assets/courses/sql.png';

// Array holding upcoming event details
const upcomingdetails = [
    {
        id: 1,
        name: "Azure",
        date: "2024-08-25",
        time: "10:00 AM",
        tutor: arun,
        course: datascience,
        mentor: "Arun Kumar"
    },
    {
        id: 2,
        name: "Python",
        date: "2024-09-01",
        time: "10:00 AM",
        tutor: akshay,
        course: python,
        mentor: "Dinesh Kumar"
    },
    {
        id: 3,
        name: "SQL",
        date: "2024-09-10",
        time: "10:00 AM",
        tutor: dinesh,
        course: SQL,
        mentor: "Akshay Kaushal"
    },
];

// Function to calculate days left until an event
const calculateDaysLeft = (date: string | number | Date) => {
    const eventDate = new Date(date);
    const today = new Date();
    const timeDiff = eventDate - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysLeft > 0 ? `${daysLeft}` : "0";
};

  
const Upcoming = () => {
    const flashStyle = {
    animation: 'flash 2.5s infinite',
  };
    return (
        <div>
            <h1 className='text-5xl text-center font-bold p-5 underline'>Upcoming Events</h1>
            {upcomingdetails.map((data) => {
                return (
                    <div key={data.id} className='flex items-center justify-center text-center w-full'>
                        <div className='p-1 items-center w-fit'>
                            <div className='tables rounded-xl p-1 w-full h-auto flex items-center justify-center text-center border-2 border-black shadow-xl'>
                                <div className='px-8'>
                                    <Image
                                        src={data.course}
                                        alt={`${data.name} Tutor`}
                                        className='rounded-full w-36 p-1' />
                                    <h2 className='text-center'>{data.name}</h2>
                                </div>
                                <div className='px-8'>
                                    <h1 className='font-semibold'>New Batch From</h1>
                                    <h2 className='text-3xl '>{data.date}</h2>
                                    {/* Countdown */}
                                </div>
                                <div className='w-fit h-fit  p-4 rounded-xl border-2 border-green-900 '>
                                    <p className='text-4xl text-red-500 font-bold ' style={flashStyle}>{calculateDaysLeft(data.date)}</p>
                                    <h6 className=' text-lg'>Days to go</h6>
                                </div>
                                <div className='px-8'>
                                    <Image
                                        src={data.tutor}
                                        alt={`${data.name} Tutor`}
                                        className='rounded-full w-32' />                                       
                                    <div className='flex space-x-1'>
                                        <h1 className='text-center font-semibold'>By, </h1>
                                        <h2 className='text-center font-semibold'>{data.mentor}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Upcoming;
