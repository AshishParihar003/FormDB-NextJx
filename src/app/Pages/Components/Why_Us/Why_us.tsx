import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonChalkboard, faLaptopCode, faHandshake, faBook, faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons';
import { Montserrat, Noto_Serif} from 'next/font/google';


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], 
});
const inter= Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'], 
});


const skillData = [
  {
    name: "Live Classes",
    icon: (<FontAwesomeIcon icon={faPersonChalkboard} className="text-5xl text-black group-hover:text-white/50 duration-300"/>),
    link: "#",
    aosDelay: "400"
  },
  {
    name: "Real-Time Projects",
    icon: (<FontAwesomeIcon icon={faLaptopCode} className="text-5xl text-black group-hover:text-white/50 duration-300"/>),
    link: "#",
    aosDelay: "500"
  },
  {
    name: "Support",
    icon: (<FontAwesomeIcon icon={faHandshake} className="text-5xl text-black group-hover:text-white/50 duration-300"/>),
    link: "#",
    aosDelay: "600"
  },
  {
    name: "Assessments",
    icon: (<FontAwesomeIcon icon={faBook} className="text-5xl text-black group-hover:text-white/50 duration-300"/>),
    link: "#",
    aosDelay: "700"
  },
  {
    name: "Recordings",
    icon: (<FontAwesomeIcon icon={faHeadphonesSimple} className="text-5xl text-black group-hover:text-white/50 duration-300"/>),
    link: "#",
    description: "Access recorded sessions anytime. Review and revisit class content at your convenience to reinforce your understanding.",
    aosDelay: "800"
  },
];

export const WhyUs = () => {
  return (
    <div className="sm:min-h-[500px] sm:grid sm:place-items-center text-black my-6">
      <div>
        <h1 className={`text-4xl font-extrabold text-center underline sm:text-6xl pt-6 ${montserrat.className}`}>Why Choose Us</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 py-10">
        {skillData.map((skill) => (
          <div 
            key={skill.name} 
            data-aos="fade-up" 
            data-aos-delay={skill.aosDelay} 
            className="card text-center py-6 hover:bg-orange-300 duration-300 rounded-lg shadow-md px-6"
          >
            <div className="grid place-items-center py-4">
              {skill.icon}
            </div>
            <h1 className={`text-lg font-semibold py-2 ${inter.className}`}>{skill.name}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}
