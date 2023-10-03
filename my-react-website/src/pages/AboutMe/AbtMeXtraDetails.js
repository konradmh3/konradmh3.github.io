// imports 
import React from 'react';


const AbtMeXtraDetails = (props) => {

    const closeMoreDetails = () => {
        props.setMoreDetailsOpen(false);
        document.body.style.overflow = "auto";  
      }

    
    switch(props.index){
        case 0:
            return (
                <>
                <div className="extraDetails">
                    {props.index}
                    <button onClick={closeMoreDetails}>X</button>
                    <p>My home town is Long Beach, California! I was born here and have lived here for 23 years now!</p>
                </div>
                </>
            )
        case 1:
            return (
                <>
                <div className="extraDetails">
                    {props.index}
                    <button onClick={closeMoreDetails}>X</button>
                    <p>I went to school at Long Beach State to recieve my Bachelors in Computer Science as well as a minor in Mathematics.</p>
                </div>
                </>
            )
        case 2:
            return (
                <>
                <div className="extraDetails">
                    {props.index}
                    <button onClick={closeMoreDetails}>X</button>
                    <p>I like doing things and other things and boom! More things!</p>
                </div>
                </>
            )
        case 3:
            return (
                <>
                <div className="extraDetails">
                    {props.index}
                    <button onClick={closeMoreDetails}>X</button>
                    <p>FooDood is a mobile app built with react native to help local businesses grow and consumers eat!</p>
                </div>
                </>
            )
        case 4:
            return (
                <>
                <div className="extraDetails">
                    {props.index}
                    <button onClick={closeMoreDetails}>X</button>
                    <p>My personal website is built with react, framer motion for animation!</p>
                </div>
                </>
            )
        case 5:
            return (
                <>
                <div className="extraDetails">
                    {props.index}
                    <button onClick={closeMoreDetails}>X</button>
                    <p>Stick is a 2D platformer built with unity!</p>
                </div>
                </>
            )
        case 6:
            return (
                <>
                <div className="extraDetails">
                    {props.index}
                    <button onClick={closeMoreDetails}>X</button>
                    <p>Associated Students Inc. for one year.</p>
                </div>
                </>
            )
        default:
            return null;
    }


};

export default AbtMeXtraDetails;
