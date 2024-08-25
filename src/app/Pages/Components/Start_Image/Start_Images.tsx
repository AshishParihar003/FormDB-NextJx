// "use client";

// import { useEffect } from 'react';
// import 'aos/dist/aos.css';
// import AOS from 'aos';
// import Image from 'next/image';
// import StartImage from '../../../../../public/assets/Top_ImageSlider/Start_01.png';

// export function ImageCarousel() {
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       AOS.init({
//         duration: 650,
//         once: true,
//       });
//     }
//   }, []);

//   return (
//     <>
//       <div className="pt-5 max-h-fit w-full lg:mt-10" data-aos="fade-zoom" data-aos-delay="700">
//         <Image src={StartImage} data-aos="fade-zoom" data-aos-delay="700" className="h-auto w-full" alt="Sliding Image" />
//       </div>
//       <div className="mt-10">
//         <div className="flex flex-col lg:flex-row w-full h-auto">
//           <div className="p-10 flex-1">
//             <h1 className="font-bold text-4xl lg:text-5xl text-gray-800">
//               Stay Ahead Of The Curve With Our Courses
//             </h1>
//             <p className="mt-4 text-lg text-gray-700">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis temporibus unde molestias dicta suscipit atque?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia impedit tenetur adipisci. Maxime sed adipisci corporis non iure fuga incidunt, magni ratione a consequatur quisquam, velit minima blanditiis! Ullam accusantium sint hic suscipit molestiae, ad consequatur cupiditate quam ab, voluptatem incidunt veritatis recusandae aspernatur. Accusamus rerum qui pariatur vero soluta.
//             </p>
//             <ul className="mt-4 list-disc list-inside text-lg text-gray-700">
//               <li>One-on-One Mentorship</li>
//               <li>Interactive Learning Sessions</li>
//               <li>Real-Time Project Experience</li>
//               <li>Demo Classes Available</li>
//               <li>Career Guidance and Support</li>
//             </ul>
//           </div>
//           <div className="flex-1 p-10 flex items-center justify-center">
//             {/* Placeholder for future content like images, animations, or a call-to-action */}
//             <div className="bg-white shadow-lg rounded-lg p-8">
//               <h2 className="font-semibold text-2xl text-gray-800 mb-4">Enhance Your Skills</h2>
//               <p className="text-gray-600">
//                 Join us to gain practical experience and enhance your skills with our comprehensive courses.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
