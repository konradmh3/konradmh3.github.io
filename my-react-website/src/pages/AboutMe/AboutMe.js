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
  const aboutMeRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

    return (
    <>
      <div className="aboutMeTitleContainer">
        <NewTextAnimation text="Hello! My name is KONRAD!" />
      </div>


      <CodeSubtitles subtitle='<AboutMe yeah="YourBoi">' />
      <AboutMeDescription ref={aboutMeRefs[0]} title="Home Town" text="My home town is Long Beach, California! I was born here and have lived here for 23 years now!" />
      <AboutMeDescription ref={aboutMeRefs[1]} title="Schooling" text="I went to school at Long Beach State to recieve my Bachelors in Computer Science as well as a minor in Mathematics." />
      <AboutMeDescription ref={aboutMeRefs[2]} title="Extra Curriculars" text="I like doing things and other things and boom! More things!" />
      <CodeSubtitles subtitle='</AboutMe>' />

      {/* Next section on about me should be about */}
      <CodeSubtitles subtitle='<Grind projects="Mid">' />      
      <AboutMeDescription ref={aboutMeRefs[3]} title="FoodDood" text="FooDood is a mobile app built with react native to help local businesses grow and consumers eat!"/>
      <AboutMeDescription ref={aboutMeRefs[4]} title="This Website!" text="My personal website is built with react, framer motion for animation!" />
      <AboutMeDescription ref={aboutMeRefs[5]} title="Stick" text="Stick is a 2D platformer built with unity!" />
      <CodeSubtitles subtitle='</Grind>' />


    </>
    );
  };
  
export default AboutMe;
  