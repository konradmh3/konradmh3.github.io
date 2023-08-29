// this component will be used to display the description of the About Me page
// it will take in a subtitle and short desription as props
import React from "react";
import "../../style/AboutMe.css";
import { useInView } from "framer-motion";
import { forwardRef } from "react";


import { motion } from "framer-motion";

const AboutMeDescription = (props, ref) => {
  const isInView = useInView(ref, { once: true, amount: 1 });
  
// create more info function to handle the animation of the div
  const moreInfo = () => {
    console.log("More info clicked!");
  };


  return (
    <div className="aboutMeDescriptionContainer">
      <div ref={ref} className="aboutMeDescriptionBorder">
        {/* Div to handle on click and its animations */}
        <motion.div initial={{opacity:0}} onClick={moreInfo} whileHover={{opacity:1}} transition={{duration: 1}} className="animateHoverContent"></motion.div>
        {/* Div to handle on first view blur animation */}
        <motion.div initial={{width:"100%"}} animate={{width:isInView ? "0%":"100%"}} transition={{duration: 2}}  className="animateContent"></motion.div>
        <div className="aboutMeDescriptionTitle">{props.title}</div>
        <div className="aboutMeDescriptionText">{props.text}</div>
      </div>
    </div>
  );
};

export default forwardRef(AboutMeDescription);
