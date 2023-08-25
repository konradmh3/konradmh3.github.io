import "../../style/Page.css";
import "../../style/AboutMe.css";
import TextAnimation from "./TextAnimation";
import React from "react";
import NewTextAnimation from "./NewTextAnimation";
// to import an exponent, from this path: my-react-website/src/pages/AboutMeContent.js
// import Header from "../Templates/Header.js";
import ProjectsNew from "../Projects/ProjectsNew";
import AboutMeDescription from "./AboutMeDescription";
import CodeSubtitles from "./CodeSubtitles";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect } from "react";

const AboutMe = () => {
  const aboutMeRefs = [useRef(), useRef(), useRef()];

    return (
    <>
      {/* <ProjectsNew backgroundColor="black" /> */}
      <div className="aboutMeTitleContainer">
      {/* <TextAnimation text="Hello! My name is Konrad Hernandez and I am currently a computer science major, math minor, in my last year at California State University of Long Beach. The intricacies of game development began to lure my eye and after starting to develop my first game through Unity, the passion began. This new passion introduced me to not only creating an environment completely out of my own imagination using code, but also by showing me animation, level design, and working with different types of UIs. I now work as a web developer for Associated Students Inc., where I manage four websites including ASIRecreation, ASICorporate, 22WEST and the StudentGovernment site. Through managing these sites I have not only gained experience in web development, but also in working with a team and becoming acustom to a professional work environment. " /> */}
        <NewTextAnimation text="Hello! My name is KONRAD!" />
      </div>
      <CodeSubtitles subtitle='<AboutMe yeah="YourBoi">' />
      <AboutMeDescription ref={aboutMeRefs[0]} title="Home Town" text="My home town is Long Beach, California! I was born here and have lived here for 23 years now!" />
      <AboutMeDescription ref={aboutMeRefs[1]} title="Schooling" text="I went to school at Long Beach State to recieve my Bachelors in Computer Science as well as a minor in Mathematics." />
      <AboutMeDescription ref={aboutMeRefs[2]} title="Extra Curriculars" text="I like doing things and other things and boom! More things!" />
      <CodeSubtitles subtitle='</AboutMe>' />

    </>
    );
  };
  
export default AboutMe;
  