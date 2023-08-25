// this component will be used to display the description of the About Me page
// it will take in a subtitle and short desription as props
import React, { useEffect } from "react";
import "../../style/AboutMe.css";
import { useInView } from "framer-motion";
import { forwardRef } from "react";

const AboutMeDescription = (props, ref) => {
    const isInView = useInView(ref);
    useEffect(() => {
        console.log(isInView);
    }, [isInView]);

// the above will return true to console if the component is in view
  return (
    <div className="aboutMeDescriptionContainer">
      <div ref={ref} className="aboutMeDescriptionBorder">
        <div className="aboutMeDescriptionTitle">{props.title}</div>
        <div className="aboutMeDescriptionText">{props.text}</div>
      </div>
    </div>
  );
};

export default forwardRef(AboutMeDescription);
