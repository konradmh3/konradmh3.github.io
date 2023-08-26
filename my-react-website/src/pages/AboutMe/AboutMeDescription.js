// this component will be used to display the description of the About Me page
// it will take in a subtitle and short desription as props
import React, { useEffect } from "react";
import "../../style/AboutMe.css";
import { useInView } from "framer-motion";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const AboutMeDescription = (props, ref) => {
  // lets create a useState for the animation so that we can change the width of the div when it is in view
  const isInView = useInView(ref);

  return (
    <div className="aboutMeDescriptionContainer">
      <div ref={ref} className="aboutMeDescriptionBorder">
        <motion.div initial={{width:"100%"}} animate={{width:isInView ? "0%":"100%"}} transition={{duration: 2}}  className="animateContent"></motion.div>
        <div className="aboutMeDescriptionTitle">{props.title}</div>
        <div className="aboutMeDescriptionText">{props.text}</div>
        
      </div>
    </div>
  );
};

export default forwardRef(AboutMeDescription);
