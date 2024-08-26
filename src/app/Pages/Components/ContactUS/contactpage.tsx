"use client";
import React, { useState } from 'react';

const ContactButtonsData = [
  {
    id: 1,
    name: "Student fndjksfndsk",
    Phonenumber: "+91 9801830173"
  },
  {
    id: 2,
    name: "Student Counselling number",
    Phonenumber: "+91 7870970617"
  },
  {
    id: 3,
    name: "Student Support number",
    Phonenumber: "+91 76439 69853 "
  }
];

const ContactUsButtons = () => {
  const [copiedNumber, setCopiedNumber] = useState(null);

  const handleCopy = (number) => {
    navigator.clipboard.writeText(number);
    setCopiedNumber(number);
    alert(`Phone number ${number} copied to clipboard!`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 text-center">
      {ContactButtonsData.map((contact) => (
        <div 
          key={contact.id} 
          className="bg-white border hover:bg-green-300  border-gray-300 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
          onClick={() => handleCopy(contact.Phonenumber)}
        >
          <p className="text-xl font-semibold mb-2 text-gray-800">{contact.name}</p>
          <p 
            className={`text-lg font-medium ${copiedNumber === contact.Phonenumber ? 'text-blue-600' : 'text-gray-600'} transition-colors hover:scale-100 hover:text-red-600`}
          >
            {contact.Phonenumber}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ContactUsButtons;


// transition-transform transform hover:scale-105 hover:shadow-xl
