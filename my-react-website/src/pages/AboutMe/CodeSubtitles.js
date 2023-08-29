// i will pass a subtitle into this component as a prop and display it in the div

import React from "react";
import "../../style/AboutMe.css";

const CodeSubtitles = (props) => {
    //set const variable if props.state === 1, then subtitle = with js conditional operator ?

    if (props.state === "1") {
        return (
            <div className="aboutMeSubtitles">
                <span style={{color:"grey"}}>&lt;</span>
                <span style={{color: "rgb(21, 110, 173)"}}>{props.titleClass} </span>
                <span style={{color: "rgb(110, 188, 230)"}}>{props.prop1}</span>
                =
                <span style={{color: "rgb(179, 127, 82)"}}>{props.propText}</span>
                <span style={{color:"grey"}}>&gt;</span>
            </div>
        );
    }else{
        return (
            <div className="aboutMeSubtitles">
                <span style={{color:"grey"}}>&lt;/</span>
                <span style={{color: "rgb(21, 110, 173)"}}>{props.titleClass}</span>
                <span style={{color:"grey"}}>&gt;</span>
            </div>
        );
    }

};

export default CodeSubtitles;