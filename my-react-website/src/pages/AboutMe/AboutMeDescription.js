// this component will be used to display the description of the About Me page
// it will take in a subtitle and short desription as props
import React from "react";
import "../../style/AboutMe.css";
import { useInView } from "framer-motion";
import { forwardRef } from "react";
import { useState } from "react";


import { motion } from "framer-motion";

const AboutMeDescription = (props, ref) => {
  const isInView = useInView(ref, { once: true, amount: 1 });
  const [detailHeight, setDetailHeight] = useState("0vh");
  const [detailDisplay, setDetailDisplay] = useState("none");
  const [detailsAreOpen, setDetailsAreOpen] = useState(false);
  const [xDisplay, setXDisplay]= useState("none");
  


  
// create more info function to handle the animation of the div    
// count to see how many times the div has been clicked for testing
  const moreInfo = () => {
    setXDisplay("flex");
    setDetailHeight("100vh");
    setDetailDisplay("flex");
    setDetailsAreOpen(true);
  };

  const closeInfo = () => {
    setXDisplay("none");

    setDetailHeight("0vh");
    setDetailsAreOpen(false);
    // to cause a delay before we hide the div, we can use a setTimeout function
    setTimeout(() => {
      setDetailDisplay("none");
    }
    , 1750);
    
  };

        {/* here we are going to make some new components for when a project is clicked*/}
      {/* This class will return a hidden div at bottom of screen, when a link is clicked, divs will slide up like menu but reversed and display more details on a project */}
      {/* we can make the logic for what content and colors to display within about me description component, color will be handled within component but new components will be 
      made for the actual content being displayed for each catragory on about me page will have a different style */}

      {/* <OpenDetails/> */}
      {/* The above component will be the hidden background divs like the main menu and will open or close on click as well as do the logic for what project should be displayed*/}




  return (
    <>
    <div className="aboutMeDescriptionContainer">

      {/* div to handle click spring animation */}
      <motion.div ref={ref} whileTap={{scale: .95}} onClick={moreInfo} transition={{type: "spring"}} className="aboutMeDescriptionBorder">
        
        {/* Div to handle hover and its animations */}
        <motion.div initial={{opacity:0}}style={{color: "black", display: "flex", justifyContent: "center", alignItems:"center"}} whileHover={{opacity:1}} transition={{duration: .25}} className="animateHoverContent"></motion.div>
        
        {/* Div to handle on first view blur animation */}
        <motion.div initial={{width:"100%"}} animate={{width:isInView ? "0%":"100%"}} transition={{duration: .5}}  className="animateContent"></motion.div>
        <div className="aboutMeDescriptionTitle">{props.title}</div>
        <div className="aboutMeDescriptionText">{props.text}</div>
      </motion.div>
    </div>
    <div style={{display: detailDisplay, zIndex: 2}} className="detailContainer">
      <motion.div animate={{height: detailHeight}} transition={{duration: 1, delay:0}} className="detailSection">
      </motion.div>
      <motion.div animate={{height: detailHeight}} transition={{duration: 1, delay:0.25}} className="detailSection">
      </motion.div>
      <motion.div animate={{height: detailHeight}} transition={{duration: 1, delay:0.50}} className="detailSection">
      </motion.div>
      <motion.div animate={{height: detailHeight}} transition={{duration: 1, delay:0.75}} className="detailSection">
      </motion.div>
      </div>
      <motion.div onClick={closeInfo} animate={{display: xDisplay}} transition={{delay: detailsAreOpen ? 1.75 : 0}} className="closeDetailed">
        x
      </motion.div>
    </>
  );
};

export default forwardRef(AboutMeDescription);
