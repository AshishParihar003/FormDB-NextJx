"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/../../public/assets/Header_LOGO.png'

const Navbar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const handleNavbarToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLinkClick = () => {
    setIsCollapsed(true);
  };

  const courses = [
    { name: "Python", link: "https://lms.forumde.in/courses/python-programming-mr-dinesh-kumar" },
    { name: "SQL", link: "/Pages/Additional/Underconstruction" },
    { name: "Docker", link: "/Pages/Additional/Underconstruction" },
    { name: "Kubernetes", link: "/Pages/Additional/Underconstruction" },
    { name: "Upcoming", link: "/Pages/Additional/Underconstruction", disabled: true },
    { name: "Baap Course", link: "/Pages/Additional/Underconstruction", disabled: true }
  ];

  return (
    <div className="bg-yellow-100 mb-5">
      <div className="container mx-auto">
        <nav className="bg-orange-100 border-b border-black fixed top-0 left-0 right-0 z-50">
          <div className="flex items-center justify-between p-4">
            <Link href="/" legacyBehavior>
              <a className="flex items-center">
                <Image className="w-48" src={Logo} alt="Brand Logo" />
              </a>
            </Link>
            <button
              className="text-black focus:outline-none md:hidden"
              type="button"
              onClick={handleNavbarToggle}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            <div className={`absolute top-14 left-0 right-0 bg-gray-100 md:relative md:top-0 md:bg-transparent md:flex md:flex-row md:items-center md:justify-center w-full md:w-auto ${isCollapsed ? 'hidden' : 'flex'} md:space-y-0 space-y-2 md:space-x-8 font-bold`}>
              <ul className="flex flex-col md:flex-row md:items-center md:justify-center w-full md:w-auto space-y-2 md:space-y-0 md:space-x-4 font-bold">
                <li className="nav-item">
                  <Link href="/" legacyBehavior>
                    <a className="nav-link px-2 py-2 text-xl text-black" onClick={handleLinkClick}>Home</a>
                  </Link>
                </li>
                <li className="nav-item relative group">
                  
                  <button className="nav-link px-2 py-2 text-xl text-black flex items-center">
                    Courses
                    <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                  </button>
                  <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg hidden group-hover:block">
                    {courses.map((course, index) => (
                      <li key={index}>
                        <Link href={course.link} legacyBehavior>
                          <a
                            className={`block px-4 py-2 text-black ${course.disabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-200'}`}
                            onClick={handleLinkClick}
                          >
                            {course.name}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="nav-item">
                  <Link href="/Pages/Additional/Underconstruction" legacyBehavior>
                    <a className="nav-link px-2 py-2 text-xl text-black" onClick={handleLinkClick}>Our Selection</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="https://lms.forumde.in/support" legacyBehavior>
                    <a className="nav-link px-2 py-2 text-xl text-black" onClick={handleLinkClick}>Support</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="https://lms.forumde.in/blog" legacyBehavior>
                    <a className="nav-link px-2 py-2 text-xl text-black" onClick={handleLinkClick}>Blogs</a>
                  </Link>
                </li>
              </ul>
              <a href="https://lms.forumde.in/" className="block md:hidden mt-4">
                <button className="Signbtn rounded-full text-xl bg-orange-500 text-white px-5 py-3 hover:bg-orange-300">Dashboard</button>
              </a>
            </div>
            <a href="https://lms.forumde.in/" className="hidden md:block">
              <button className="Signbtn rounded-full text-xl bg-orange-500 text-white px-5 py-3 hover:bg-orange-300">Dashboard</button>
              
            </a>
            
          </div>
        </nav>
      </div>
      <hr className="border-t border-black m-0" />
    </div>
  );
}

export default Navbar;
