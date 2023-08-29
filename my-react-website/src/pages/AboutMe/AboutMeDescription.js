// this component will be used to display the description of the About Me page
// it will take in a subtitle and short desription as props
import React from "react";
import "../../style/AboutMe.css";
import { useInView } from "framer-motion";
import { forwardRef } from "react";


import { motion } from "framer-motion";

const AboutMeDescription = (props, ref) => {
  const isInView = useInView(ref, { once: true, amount: 1 });
  
  var count = 0;


  
// create more info function to handle the animation of the div    
// count to see how many times the div has been clicked for testing
  const moreInfo = () => {
    count++;
    console.log("This button clicked", count, "times!");
  };




  return (
    <div className="aboutMeDescriptionContainer">

      {/* div to handle click spring animation */}
      <motion.div ref={ref} whileTap={{scale: .95}} onClick={moreInfo} transition={{type: "spring"}} className="aboutMeDescriptionBorder">
        
        {/* Div to handle on click and its animations */}
        <motion.div initial={{opacity:0}} whileHover={{opacity:1}} transition={{duration: 1}} className="animateHoverContent"></motion.div>
        
        {/* Div to handle on first view blur animation */}
        <motion.div initial={{width:"100%"}} animate={{width:isInView ? "0%":"100%"}} transition={{duration: 2}}  className="animateContent"></motion.div>
        <div className="aboutMeDescriptionTitle">{props.title}</div>
        <div className="aboutMeDescriptionText">{props.text}</div>
      </motion.div>
    </div>
  );
};

export default forwardRef(AboutMeDescription);
