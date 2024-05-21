import "../../style/Page.css";
import "../../style/AboutMe.css";
import React, { useEffect } from "react";
import NewTextAnimation from "./NewTextAnimation";
import AboutMeDescription from "./AboutMeDescription";
import CodeSubtitles from "./CodeSubtitles";
// import AbtMeXtraDetails from "./AbtMeXtraDetails";
import { useRef } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AboutMe = () => {
  const aboutMeRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];
  const [moreDetailsOpen, setMoreDetailsOpen] = useState(false);
  // here we will add the state that will hold the index of the aboutMeRefs array that is clicked
  // this will be passed to the new component that will handle the rendering of the details
  const [clickedIndex, setClickedIndex] = useState(null);
  const [detailBackColor, setDetailBackColor] = useState(null);
  const navigate = useNavigate();

  // TO ASSIGN THE CLICKED INDEX TO THE STATE WE WILL NEED TO PASS A FUNCTION TO THE ABOUTMEDESCRIPTION COMPONENT THAT WILL SET THE STATE
  // THIS FUNCTION WILL BE CALLED WHEN THE ABOUTMEDESCRIPTION COMPONENT IS CLICKED
  useEffect(() => {
    console.log(clickedIndex);

    // document.body.style.overflow = "hidden";

    // lets do a case statement to deetermine which route to go to depending on the clicked index
    switch (clickedIndex) {
      case 0:
        setTimeout(() => {
          navigate("/hometown");
        }, 1750);
        break;
      case 1:
        setTimeout(() => {
          navigate("/schooling");
        }, 1750);
        break;
      case 2:
        setTimeout(() => {
          navigate("/hobbies");
        }, 1750);
        break;
      case 3:
        setTimeout(() => {
          navigate("/foodood");
        }, 1750);
        break;
      case 4:
        setTimeout(() => {
          navigate("/reactProjects");
        }, 1750);
        break;
      case 5:
        setTimeout(() => {
          navigate("/stick");
        }, 1750);
        break;
      case 6:
        setTimeout(() => {
          navigate("/keylogger");
        }, 1750);
        break;
      case 7:
        setTimeout(() => {
          navigate("/asi");
        }, 1750);
        break;
      case 8:
        setTimeout(() => {
          navigate("/microcenter");
        }, 1750);
      break;
      case 9:
        setTimeout(() => {
          navigate("/essentia");
        }, 1750);
      break;
      case 10:
        setTimeout(() => {
          navigate("/jarvis");
        }, 1750);
      break;
      default:
        break;
    }
  }, [clickedIndex, navigate]);


  return (
    <>
      <div className="aboutMeTitleContainer">
        <NewTextAnimation
          lttag1={<span style={{ color: "grey" }}>&lt;</span>}
          sth1tag={<span style={{ color: "rgb(21, 110, 173)" }}>h1</span>}
          gttag1={<span style={{ color: "grey" }}>&gt;</span>}
          text="Hello! My name is Konrad!...This website is a work in progress. Please ignore any unfinished sections or mispelled words :)...Scroll down to see more!"
          lttag2={<span style={{ color: "grey" }}>&lt;/</span>}
          endh1tag={<span style={{ color: "rgb(21, 110, 173)" }}>h1</span>}
          gttag2={<span style={{ color: "grey" }}>&gt;</span>}
        />
      </div>

      <CodeSubtitles
        titleClass="AboutMe"
        prop1="yeah"
        propText='"YourBoi"'
        state="1"
      />
      <AboutMeDescription
        setDetailBackColor={setDetailBackColor}
        backColor={"#6DBAE3"}
        setClickedIndex={setClickedIndex}
        setMoreDetailsOpen={setMoreDetailsOpen}
        index={0}
        ref={aboutMeRefs[0]}
        title="Home Town"
        text="I live in Long Beach, California! I was born here and have lived here for 24 years now! Click me to explore things to do in Long Beach!"
      />
      <AboutMeDescription
        setDetailBackColor={setDetailBackColor}
        backColor={"#ECAA1E"}
        setClickedIndex={setClickedIndex}
        setMoreDetailsOpen={setMoreDetailsOpen}
        index={1}
        ref={aboutMeRefs[1]}
        title="Schooling"
        text="I went to school at Long Beach State to recieve my Bachelors in Computer Science as well as a minor in Mathematics."
      />
      <AboutMeDescription
        setDetailBackColor={setDetailBackColor}
        backColor={"rgb(252,98,24)"}
        setClickedIndex={setClickedIndex}
        setMoreDetailsOpen={setMoreDetailsOpen}
        index={2}
        ref={aboutMeRefs[2]}
        title="Hobbies"
        text="I like doing things and other things and boom! More things!"
      />
      <CodeSubtitles titleClass="AboutMe" state="0" />

      <CodeSubtitles
        titleClass="Grind"
        prop1="projects"
        propText='"Mid"'
        state="1"
      />
      <AboutMeDescription
        setDetailBackColor={setDetailBackColor}
        backColor={"#346234"}
        setClickedIndex={setClickedIndex}
        setMoreDetailsOpen={setMoreDetailsOpen}
        index={4}
        ref={aboutMeRefs[4]}
        title="This Website!"
        text="My personal website is built with react, framer motion for animation!"
      />
      <AboutMeDescription
        setDetailBackColor={setDetailBackColor}
        backColor={"rgb(163,116,76)"}
        setClickedIndex={setClickedIndex}
        setMoreDetailsOpen={setMoreDetailsOpen}
        index={10}
        ref={aboutMeRefs[10]}
        title="Jarvis"
        text="Home automation project!"
      />
      <AboutMeDescription
        setDetailBackColor={setDetailBackColor}
        backColor={"#E0C7A4"}
        setClickedIndex={setClickedIndex}
        setMoreDetailsOpen={setMoreDetailsOpen}
        index={3}
        ref={aboutMeRefs[3]}
        title="FoodDood"
        text="FooDood is a mobile app built with react native to help local businesses grow and consumers eat!"
      />
      <AboutMeDescription
        setDetailBackColor={setDetailBackColor}
        backColor={"#346258"}
        setClickedIndex={setClickedIndex}
        setMoreDetailsOpen={setMoreDetailsOpen}
        index={6}
        ref={aboutMeRefs[6]}
        title="Keylogger"
        text="Keylogger concept!"
      />
      
      
      
      <AboutMeDescription
        setDetailBackColor={setDetailBackColor}
        backColor={"#516234"}
        setClickedIndex={setClickedIndex}
        setMoreDetailsOpen={setMoreDetailsOpen}
        index={5}
        ref={aboutMeRefs[5]}
        title="Stick"
        text="Stick is a 2D platformer built with unity!"
      />
      <CodeSubtitles titleClass="Grind" state="0" />

      <CodeSubtitles
        titleClass="Grind"
        prop1="work"
        propText='"Experience"'
        state="1"
      />
      <AboutMeDescription
        setDetailBackColor={setDetailBackColor}
        backColor={"#98A09E"}
        setClickedIndex={setClickedIndex}
        setMoreDetailsOpen={setMoreDetailsOpen}
        index={7}
        ref={aboutMeRefs[7]}
        title="Web Developer"
        text="Web developer at Associated Students Inc. for one year from May 2022 to May 2023."
      />
      <AboutMeDescription
        setDetailBackColor={setDetailBackColor}
        backColor={"#3C7261"}
        setClickedIndex={setClickedIndex}
        setMoreDetailsOpen={setMoreDetailsOpen}
        index={9}
        ref={aboutMeRefs[9]}
        title="Sales Associate"
        text="Sales associate intern at Essentia Water from May 2023 to August 2023."
      />
      <AboutMeDescription
        setDetailBackColor={setDetailBackColor}
        backColor={"#156EAD"}
        setClickedIndex={setClickedIndex}
        setMoreDetailsOpen={setMoreDetailsOpen}
        index={8}
        ref={aboutMeRefs[8]}
        title="Sales Associate"
        text="Sales associate at a Micro Center from November 2023 to Present."
      />
      
      
      <CodeSubtitles titleClass="Grind" state="0" />

      <motion.div
        style={{ zIndex: 4 }}
        initial={{ display: "none" }}
        animate={{ display: moreDetailsOpen ? "flex" : "none" }}
        transition={{ delay: moreDetailsOpen ? 0 : 1.75 }}
        className="detailContainer"
      >
        <motion.div
          style={{ left: "0%", backgroundColor: detailBackColor }}
          animate={{ height: moreDetailsOpen ? "100%" : "0%" }}
          transition={{ duration: 1, delay: 0 }}
          className="detailSection"
        ></motion.div>
        <motion.div
          style={{ left: "25%", backgroundColor: detailBackColor }}
          animate={{ height: moreDetailsOpen ? "100%" : "0%" }}
          transition={{ duration: 1, delay: 0.25 }}
          className="detailSection"
        ></motion.div>
        <motion.div
          style={{ left: "50%", backgroundColor: detailBackColor }}
          animate={{ height: moreDetailsOpen ? "100%" : "0%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="detailSection"
        ></motion.div>
        <motion.div
          style={{ left: "75%", backgroundColor: detailBackColor }}
          animate={{ height: moreDetailsOpen ? "100%" : "0%" }}
          transition={{ duration: 1, delay: 0.75 }}
          className="detailSection"
        ></motion.div>
      </motion.div>

      {/* i could also insert a new component here that will handle the rendering of the details depending on which one is clicked, the tricky part is how to know which one is clicked
      to do this i could have a state that is set to the index of the aboutMeRefs array that is clicked, then i can pass that state to the new component and have it render the details
       */}
      {/* now that we have a state that holds the index of the clicked aboutMeDescription component we can pass that state to the new component that will handle the rendering of the details
       */}

      {/* <motion.div animate={{display: moreDetailsOpen ? "block":"none"}} transition={{delay: moreDetailsOpen? 1.75:0}}> */}
      {/* <AbtMeXtraDetails setMoreDetailsOpen={setMoreDetailsOpen} index={clickedIndex} /> */}
      {/* </motion.div> */}
    </>
  );
};

export default AboutMe;
