"use client";

import React, { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

type Props = {
    IsAccordingOpen: boolean;
    question: string;
    answer: string;
};

const Accordion: React.FC<Props> = ({ IsAccordingOpen, question, answer }) => {
    const [animationParent] = useAutoAnimate();
    const [isAccordionOpen, setAccordion] = useState(IsAccordingOpen || false);

    const toggleAccordion = () => {
        setAccordion(!isAccordionOpen);
    };

    return (
        <div ref={animationParent} className="border-b pt-4 border-gray-500">
            <div
                onClick={toggleAccordion}
                className="flex justify-between items-center p-5 cursor-pointer hover:bg-blue-400 transition-colors"
            >
                <span className="text-2xl font-semibold">{question}</span>
                {isAccordionOpen ? (
                    <FaChevronUp className="text-gray-600" />
                ) : (
                    <FaChevronDown className="text-gray-600" />
                )}
            </div>
            {isAccordionOpen && (
                <div className="p-4 bg-gray-200">
                    <p className="text-gray-700">{answer}</p>
                </div>
            )}
        </div>
    );
};

export default Accordion;
