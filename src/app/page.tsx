import CustomMarquee from "./Pages/Components/Marquee/Marquee";
import CourseContainer from "./Pages/Components/Course/Course";
import MyCertificate from "./Pages/Components/Certificate/Certificate";
import Mentors from "./Pages/Components/Mentor/Mentors";
import Video from "./Pages/Components/Video/Video";
import Logo_Marquee from "./Pages/Components/Logo_Marquee/Logo_Marquee";
import Details from "./Pages/Components/Details/Page";
import { Footer } from "./Pages/MainComponets/Footer/page";
import Navbar from "./Pages/MainComponets/Header/pages";
import Upcoming from "./Pages/Components/Upcoming_Course/pages";
import Companies from "./Pages/Additional/Companies/pages";
import ContactUsButtons from "./Pages/Components/ContactUS/contactpage"
import FAQ from "./Pages/Components/FAQ/faqpage";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Details />
      <CustomMarquee />
   <ContactUsButtons/>
      <br />
      <Upcoming/>
    
      <CourseContainer /><br />
      <MyCertificate /><br />

      <Mentors /><br />
      <br /><br />
      <h1 className=" text-center text-6xl font-bold py-10 underline"cdata-aos="fade-up" data-aos-delay="500">Our Achivers Are Working In</h1>
      <div className="p-10">
     <Companies/></div>
      <Logo_Marquee /><br />
      <Video /><br />
      <FAQ/>
      <Footer />
    </div>
  );
}