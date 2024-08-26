"use client"

import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // FontAwesome icons for expand/collapse
import Accordion from './Accordion';
import { data } from './data';

const FAQ = () => {
    return (
        <div className="w-full min-h-screen  flex items-center justify-center">
            <section className=" p-12 rounded-lg max-w-7xl w-full mx-auto shadow-xl border-2 bg-orange-200">
                <h1 className="text-6xl font-bold text-center text-black mb-6">
                Frequently Asked Questions
                </h1>
                <div className="space-y-4">
                    {data.map((d, i) => (
                        <Accordion
                            answer={d.answer}
                            question={d.question}
                            IsAccordingOpen={d.IsAccordionOpen}
                            key={i}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default FAQ;
