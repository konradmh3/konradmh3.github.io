// this component will be used to display the description of the About Me page
// it will take in a subtitle and short desription as props
import React from "react";
import "../../style/AboutMe.css";
import { useInView } from "framer-motion";
import { forwardRef } from "react";


import { motion } from "framer-motion";

const AboutMeDescription = (props, ref) => {
  const isInView = useInView(ref, { once: true, amount: .1 });


  const moreInfo = () => {
    props.setMoreDetailsOpen(!props.moreDetailsOpen);
    props.setClickedIndex(props.index);
    props.setDetailBackColor(props.backColor);
  };



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

    </>
  );
};

export default forwardRef(AboutMeDescription);
