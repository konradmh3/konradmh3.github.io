import "../../style/Page.css";
import "../../style/AboutMe.css";
import React from "react";
import NewTextAnimation from "./NewTextAnimation";
import AboutMeDescription from "./AboutMeDescription";
import CodeSubtitles from "./CodeSubtitles";
import { useRef } from "react";


const AboutMe = () => {
  const aboutMeRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

  
    return (
    <>
      <div className="aboutMeTitleContainer">
        <NewTextAnimation lttag1={<span style={{color:"grey"}}>&lt;</span>} sth1tag={<span style={{color: "rgb(21, 110, 173)"}}>h1</span>} gttag1={<span style={{color:"grey"}}>&gt;</span>} text="Hello! My name is Konrad!" lttag2={<span style={{color:"grey"}}>&lt;/</span>} endh1tag={<span style={{color: "rgb(21, 110, 173)"}}>h1</span>} gttag2={<span style={{color:"grey"}}>&gt;</span>} />
      </div>
      
      <CodeSubtitles titleClass="AboutMe"  prop1="yeah" propText='"YourBoi"' state="1" />
      <AboutMeDescription ref={aboutMeRefs[0]} title="Home Town" text="My home town is Long Beach, California! I was born here and have lived here for 23 years now!" />
      <AboutMeDescription ref={aboutMeRefs[1]} title="Schooling" text="I went to school at Long Beach State to recieve my Bachelors in Computer Science as well as a minor in Mathematics." />
      <AboutMeDescription ref={aboutMeRefs[2]} title="Extracurriculars" text="I like doing things and other things and boom! More things!" />
      <CodeSubtitles titleClass="AboutMe" state="0" />


      <CodeSubtitles titleClass="Grind"  prop1="projects" propText='"Mid"' state="1" />
      <AboutMeDescription ref={aboutMeRefs[3]} title="FoodDood" text="FooDood is a mobile app built with react native to help local businesses grow and consumers eat!"/>
      <AboutMeDescription ref={aboutMeRefs[4]} title="This Website!" text="My personal website is built with react, framer motion for animation!" />
      <AboutMeDescription ref={aboutMeRefs[5]} title="Stick" text="Stick is a 2D platformer built with unity!" />
      <CodeSubtitles titleClass="Grind" state="0" />


      <CodeSubtitles titleClass="Grind"  prop1="work" propText='"Experience"' state="1" />
      <AboutMeDescription ref={aboutMeRefs[6]} title="ASI" text="Associated Students Inc. for one year."/>
      <CodeSubtitles titleClass="Grind" state="0" />

    </>
    );
  };
  
export default AboutMe;
  