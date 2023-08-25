// i will pass a subtitle into this component as a prop and display it in the div

import React from "react";
import "../../style/AboutMe.css";

const CodeSubtitles = (props) => {
    return (
        <div className="aboutMeSubtitles">
            {props.subtitle}
        </div>
    );

};

export default CodeSubtitles;