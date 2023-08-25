// this component will be used to display the description of the About Me page
// it will take in a subtitle and short desription as props
import React from "react";
import "../../style/AboutMe.css";

const AboutMeDescription = (props) => {
  return (
    <div className="aboutMeDescriptionContainer">
      <div className="aboutMeDescriptionBorder">
        <div className="aboutMeDescriptionTitle">{props.title}</div>
        <div className="aboutMeDescriptionText">{props.text}</div>
      </div>
    </div>
  );
};

export default AboutMeDescription;
