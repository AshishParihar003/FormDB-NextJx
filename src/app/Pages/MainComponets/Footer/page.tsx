"use client";

import { useEffect } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from 'next/link';

const legalLinks = [
  { href: "/Pages/Additional/Private_Policy", text: "Privacy Policy" },
  { href: "/Pages/Additional/TermsandCondition", text: "Terms and Condition" },
  { href: "/Pages/Additional/Refund_Page", text: "Refund & Cancellation Policy" },
];

const usefulLinks = [
  { href: "https://lms.forumde.in/courses", text: "Our Courses" },
  { href: "/Pages/Additional/Underconstruction", text: "Our Selection" },
  { href: "/Pages/Additional/Underconstruction", text: "Help" }
];

const contactInfo = [
  { iconClass: "fa-home", text: "B.No 958, Pocket C Gurugram, Haryana India" },
  { iconClass: "fa-envelope", text: "forumde127@gmail.com" },
  { iconClass: "fa-phone", text: "+91 7870970617" },
  { iconClass: "fa-print", text: "+91 9801830173" }
];

export function Footer() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
    }
  }, []);

  return (
    <>
      <div className=" text-center text-lg-start bg-black/70 text-white w-80% align-bottom flex-col">
        <section className="bg-black/80 py-8 p-10" >
          <div className="container mx-auto text-center md:text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h1 className="text-2xl font-bold mt-10 text-white">ForumDE</h1>
                <h5 className="text-2xl font-semibold text-gray-300">Simplifying Technology For You.</h5>
                {/* <h6 className="mt-2 text-gray-300">
                ForumDE has transformed and simplified tech education for students and professionals. It is now a leading website and institution for quality content, guidance, and teaching in technology.
                </h6> */}
              </div>

              <div>
                <h5 className="text-lg font-bold mb-3 mt-3 text-white">LEGAL</h5>
                {legalLinks.map((link, index) => (
                  <p key={index}>
                    <a href={link.href} >
                      <a className="text-gray-300 hover:text-gray-800 font-semibold">{link.text}</a>
                    </a>
                  </p>
                ))}
              </div>

              <div>
                <h5 className="text-lg font-bold mb-4 text-white">Useful links</h5>
                {usefulLinks.map((link, index) => (
                  <p key={index}>
                    <Link href={link.href} legacyBehavior>
                      <a className="text-gray-300 hover:text-gray-800 font-semibold">{link.text}</a>
                    </Link>
                  </p>
                ))}
              </div>

              <div>
                <h5 className="text-lg font-bold mb-4 text-white">Contact</h5>
                {contactInfo.map((info, index) => (
                  <p key={index} className="text-gray-300">
                    <i className={`fas ${info.iconClass} mr-2 font-bold`}></i>{info.text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="bg-black/80 py-7">
          <div className="container mx-auto text-center">
            <h5 className="text-lg font-bold mb-7 text-white">Follow Us</h5>
            <div className="flex justify-center space-x-5">
              <a href="https://www.youtube.com/@forum_de" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube text-red-600 text-3xl"></i>
              </a>
              <a href="https://www.linkedin.com/company/forumde/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin text-blue-700 text-3xl"></i>
              </a>
              <a href="https://www.instagram.com/forum_de_team?igsh=MXBldW5uOGwxbTlkeA==" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-pink-500 text-3xl"></i>
              </a>
              <a href="https://www.facebook.com/Forum.DE.Team" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook text-blue-600 text-3xl"></i>
              </a>
              <a href="https://discord.gg/s2CjQAJVnZ" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-discord text-blue-900 text-3xl"></i>
              </a>
              <a href="https://t.me/+yvWJpw3nRrNhMmQ9" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-telegram text-blue-400 text-3xl"></i>
              </a>
            </div>
          </div>
        </section>
        <div className="bg-black/80">
          <div className="text-center py-4 text-lg text-gray-300">
            © 2024 Copyright :
            <Link href="https://forumde.in/" legacyBehavior>
              <a className="text-gray-600 hover:text-gray-800 font-bold ml-2">ForumDE</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
