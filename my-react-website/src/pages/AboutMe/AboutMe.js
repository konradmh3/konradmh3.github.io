import "../../style/Page.css";
// to import an exponent, from this path: my-react-website/src/pages/AboutMeContent.js
import AboutMeContent from "./AboutMeContent.js";
import Header from "../Templates/Header.js";
import AboutMeSkills from "./AboutMeSkills.js";
const AboutMe = () => {
    return (
    <>
      <Header page = "About Me!"/>
      <h1>About Me!</h1>
      <AboutMeContent />
      <h1>My Skills</h1>
      <AboutMeSkills />
    </>
    );
  };
  
export default AboutMe;
  