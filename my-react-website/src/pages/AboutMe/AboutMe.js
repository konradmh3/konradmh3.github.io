import "../../style/Page.css";
import "../../style/AboutMe.css";
import TextAnimation from "./TextAnimation";
import React from "react";
import NewTextAnimation from "./NewTextAnimation";
// to import an exponent, from this path: my-react-website/src/pages/AboutMeContent.js
// import Header from "../Templates/Header.js";
import ProjectsNew from "../Projects/ProjectsNew";

const AboutMe = () => {
    return (
    <>
      {/* <ProjectsNew backgroundColor="black" /> */}
      <div className="aboutMeTextContainer">
      {/* <TextAnimation text="Hello! My name is Konrad Hernandez and I am currently a computer science major, math minor, in my last year at California State University of Long Beach. The intricacies of game development began to lure my eye and after starting to develop my first game through Unity, the passion began. This new passion introduced me to not only creating an environment completely out of my own imagination using code, but also by showing me animation, level design, and working with different types of UIs. I now work as a web developer for Associated Students Inc., where I manage four websites including ASIRecreation, ASICorporate, 22WEST and the StudentGovernment site. Through managing these sites I have not only gained experience in web development, but also in working with a team and becoming acustom to a professional work environment. " /> */}
        <NewTextAnimation text="Hello! This is a test!" />
      </div>
    </>
    );
  };
  
export default AboutMe;
  