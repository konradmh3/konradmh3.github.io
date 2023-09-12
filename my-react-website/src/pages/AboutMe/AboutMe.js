import "../../style/Page.css";
import "../../style/AboutMe.css";
import React, { useEffect } from "react";
import NewTextAnimation from "./NewTextAnimation";
import AboutMeDescription from "./AboutMeDescription";
import CodeSubtitles from "./CodeSubtitles";
import AbtMeXtraDetails from "./AbtMeXtraDetails";
import { useRef } from "react";
import { useState } from "react";
import { motion } from "framer-motion";


const AboutMe = () => {
  const aboutMeRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const [moreDetailsOpen, setMoreDetailsOpen] = useState(false);
  // here we will add the state that will hold the index of the aboutMeRefs array that is clicked
  // this will be passed to the new component that will handle the rendering of the details
  const [clickedIndex, setClickedIndex] = useState(null);


  // TO ASSIGN THE CLICKED INDEX TO THE STATE WE WILL NEED TO PASS A FUNCTION TO THE ABOUTMEDESCRIPTION COMPONENT THAT WILL SET THE STATE
  // THIS FUNCTION WILL BE CALLED WHEN THE ABOUTMEDESCRIPTION COMPONENT IS CLICKED
  useEffect(() => {
    console.log(clickedIndex);
    document.body.style.overflow = "hidden";
  }
  , [clickedIndex]);


  const closeMoreDetails = () => {
    setMoreDetailsOpen(false);
    document.body.style.overflow = "auto";  
  }

  


  
    return (
    <>
      <div className="aboutMeTitleContainer">
        <NewTextAnimation lttag1={<span style={{color:"grey"}}>&lt;</span>} sth1tag={<span style={{color: "rgb(21, 110, 173)"}}>h1</span>} gttag1={<span style={{color:"grey"}}>&gt;</span>} text="Hello! My name is Konrad!" lttag2={<span style={{color:"grey"}}>&lt;/</span>} endh1tag={<span style={{color: "rgb(21, 110, 173)"}}>h1</span>} gttag2={<span style={{color:"grey"}}>&gt;</span>} />
      </div>
      
      <CodeSubtitles titleClass="AboutMe"  prop1="yeah" propText='"YourBoi"' state="1" />
      <AboutMeDescription setClickedIndex={setClickedIndex} setMoreDetailsOpen={setMoreDetailsOpen} index={0} ref={aboutMeRefs[0]} title="Home Town" text="My home town is Long Beach, California! I was born here and have lived here for 23 years now!" />
      <AboutMeDescription setClickedIndex={setClickedIndex} setMoreDetailsOpen={setMoreDetailsOpen} index={1} ref={aboutMeRefs[1]} title="Schooling" text="I went to school at Long Beach State to recieve my Bachelors in Computer Science as well as a minor in Mathematics." />
      <AboutMeDescription setClickedIndex={setClickedIndex} setMoreDetailsOpen={setMoreDetailsOpen} index={2} ref={aboutMeRefs[2]} title="Extracurriculars" text="I like doing things and other things and boom! More things!" />
      <CodeSubtitles titleClass="AboutMe" state="0" />


      <CodeSubtitles titleClass="Grind"  prop1="projects" propText='"Mid"' state="1" />
      <AboutMeDescription setClickedIndex={setClickedIndex} setMoreDetailsOpen={setMoreDetailsOpen} index={3} ref={aboutMeRefs[3]} title="FoodDood" text="FooDood is a mobile app built with react native to help local businesses grow and consumers eat!"/>
      <AboutMeDescription setClickedIndex={setClickedIndex} setMoreDetailsOpen={setMoreDetailsOpen} index={4} ref={aboutMeRefs[4]} title="This Website!" text="My personal website is built with react, framer motion for animation!" />
      <AboutMeDescription setClickedIndex={setClickedIndex} setMoreDetailsOpen={setMoreDetailsOpen} index={5} ref={aboutMeRefs[5]} title="Stick" text="Stick is a 2D platformer built with unity!" />
      <CodeSubtitles titleClass="Grind" state="0" />


      <CodeSubtitles titleClass="Grind"  prop1="work" propText='"Experience"' state="1" />
      <AboutMeDescription setClickedIndex={setClickedIndex} setMoreDetailsOpen={setMoreDetailsOpen} index={6} ref={aboutMeRefs[6]} title="ASI" text="Associated Students Inc. for one year."/>
      <CodeSubtitles titleClass="Grind" state="0" />



      <motion.div style={{ zIndex: 4}} animate={{display: moreDetailsOpen ? "flex":"none"}} transition={{delay: moreDetailsOpen? 0:1.75}} className="detailContainer">
      <motion.div style={{left: "0%", }} animate={{height: moreDetailsOpen ? "100%": "0%"}} transition={{duration: 1, delay:0}} className="detailSection"></motion.div>
      <motion.div style={{left: "25%", }} animate={{height: moreDetailsOpen ? "100%": "0%"}}   transition={{duration: 1, delay:0.25}} className="detailSection"><motion.button onClick={closeMoreDetails} className="closeButton">X</motion.button></motion.div>
      <motion.div style={{left: "50%", }} animate={{height: moreDetailsOpen ? "100%": "0%"}}  transition={{duration: 1, delay:0.50}} className="detailSection"></motion.div>
      <motion.div style={{left: "75%", }} animate={{height: moreDetailsOpen ? "100%": "0%"}}  transition={{duration: 1, delay:0.75}} className="detailSection"></motion.div>
      </motion.div>

      {/* i could also insert a new component here that will handle the rendering of the details depending on which one is clicked, the tricky part is how to know which one is clicked
      to do this i could have a state that is set to the index of the aboutMeRefs array that is clicked, then i can pass that state to the new component and have it render the details
       */}
       {/* now that we have a state that holds the index of the clicked aboutMeDescription component we can pass that state to the new component that will handle the rendering of the details
        */}

      <motion.div animate={{display: moreDetailsOpen ? "block":"none"}} transition={{delay: moreDetailsOpen? 1.75:0}}>
        <AbtMeXtraDetails index={clickedIndex} />
      </motion.div>



    </>
    );
  };
  
export default AboutMe;
  