"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

import arun from '@/../../public/assets/Mentor_image/1.jpg'; 
import akshay from '@/../../public/assets/Mentor_image/4.jpeg';
import dinesh from '@/../../public/assets/Mentor_image/2.jpg';
import Azure from '@/../../public/assets/Upcoming_Course_Logo/azure.jpg';
import python from '@/../../public/assets/Upcoming_Course_Logo/python.jpg';
import SQL from '@/../../public/assets/Upcoming_Course_Logo/sql-server.jpg';

const upcomingdetails = [
    {
        id: 1,
        name: "Azure",
        date: "2024-08-31",
        time: "10:00 AM",
        tutor: arun,
        course: Azure,
        mentor: "Arun Kumar"
    },
    {
        id: 3,
        name: "Python",
        date: "Upcoming",
        time: "10:00 AM",
        tutor: dinesh,
        course: python,
        mentor: "Dinesh Kumar"
    },
    {
        id: 2,
        name: "SQL",
        date: "2024-08-24",
        time: "10:00 AM",
        tutor: akshay,
        course: SQL,
        mentor: "Akshay Kaushal"
    },
];

const calculateDaysLeft = (date: string | number | Date) => {
    const eventDate = new Date(date);
    const today = new Date();
    const timeDiff = eventDate - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysLeft > 0 ? `${daysLeft}` : "0";
};

const Upcoming = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const flashStyle = {
        animation: 'flash 2.5s infinite',
    };

    return (
        <div className="w-full md:w-1/2 mx-auto px-4">
            <h1 className='text-4xl md:text-6xl text-center font-bold p-6 underline' data-aos="fade-up" data-aos-delay="800">
                Upcoming Events
            </h1>
            {upcomingdetails.map((data) => (
                <div key={data.id} className='flex flex-col md:flex-row items-center justify-center text-center w-full my-4' data-aos="fade-up" data-aos-delay="500">
                    <div className='p-4 w-full'>
                        <div className='rounded-xl p-4 md:p-6 w-full flex flex-col md:flex-row items-center justify-between border-2 border-black shadow-xl'>
                            {/* Course Image and Name */}
                            <div className='px-4 md:px-6 flex flex-col items-center md:items-start'>
                                <Image
                                    src={data.course}
                                    alt={`${data.name} Course`}
                                    className='w-24 md:w-32 p-4'
                                />
                                <h2 className='text-xl md:text-2xl mt-3'>{data.name}</h2>
                            </div>

                            {/* Event Date */}
                            <div className='px-4 md:px-6 flex flex-col items-center md:items-center'>
                                <h1 className='text-lg md:text-xl font-semibold'>New Batch From</h1>
                                <h2 className='text-2xl md:text-4xl'>{data.date}</h2>
                            </div>

                            {/* Days Left */}
                            <div className='w-full md:w-auto h-fit p-4 rounded-xl border-2 border-green-900 flex flex-col items-center'>
                                <p className='text-2xl md:text-3xl text-red-500 font-bold' style={flashStyle}>
                                    {calculateDaysLeft(data.date)}
                                </p>
                                <h6 className='text-lg md:text-xl'>Days to go</h6>
                            </div>

                            {/* Tutor Image and Mentor Name */}
                            <div className='px-4 md:px-6 flex flex-col items-center md:items-end'>
                                <Image
                                    src={data.tutor}
                                    alt={`${data.name} Tutor`}
                                    className='rounded-full w-24 md:w-36 h-24 md:h-36 object-cover'
                                />
                                <div className='flex flex-col md:flex-row items-center mt-3'>
                                    <h1 className='text-lg md:text-xl font-semibold'>By,</h1>
                                    <h2 className='text-lg md:text-xl font-semibold ml-2'>{data.mentor}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Upcoming;
