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

export default function Home() {
  return (
    <div>
      <Navbar />
      <Details />
      {/* <ImageCarousel/> */}
      <CustomMarquee />
   <ContactUsButtons/>
      <br />
      <Upcoming/>
      {/* <Explorefx /><br /> */}
      <CourseContainer /><br />
      <MyCertificate /><br />

      <Mentors /><br />
     <Companies/>
      <Logo_Marquee /><br />
      <Video /><br />
      {/* <FAQ/> */}
      <Footer />
    </div>
  );
}