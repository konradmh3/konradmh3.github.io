// imports 
import "../../style/xtraDetails.css";
import doodLogo from "../../assets/fooDoodTitle.png";
import React from 'react';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import FirstCanvas from "../../scenes/FirstScene";



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
                    <Container>
                        <Row className="titleRow">
                            <Col lg={2} className="titleCol">
                                <Hidden xs sm md>
                                    <FirstCanvas />
                                </Hidden>
                            </Col>
                            <Col xs={12} lg={8} className="titleCol">
                                <img src={doodLogo} alt="foodood" className="doodImage"/>
                            </Col>
                            <Col xs={12} lg={2} className="titleCol">
                                <Hidden xs sm md>
                                    <FirstCanvas />
                                </Hidden>
                            </Col>
                        </Row>
                        
                    </Container>

                    <Visible xs sm md>
                            <FirstCanvas />
                    </Visible>

                           
                    {/* <FirstCanvas /> */}

                    <p>FooDood is a mobile app built with react native to help local businesses grow and consumers eat!</p>
                    <button className='closeDetails' onClick={closeMoreDetails}>Done</button>
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
                // CODE BELOW FOR STICK GAME
                <>
                <div className="extraDetails">

                    {/* {props.index} */}
                    
                    <p>Stick is a 2D platformer built with unity!</p>
                    {/* 
                    lets insert a LOCAL video clip here of me playing https://youtu.be/Ls3ZGHq0C3c
                    and lets also make sure its compatible with all browsers:
                    */}
                    <iframe style={{height:"40vh"}} src="https://www.youtube.com/embed/Ls3ZGHq0C3c?si=4O_JOzaibWULeWYv&amp;autoplay=1&loop=10&modestbranding=1&showinfo=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    {/* lets fix the above line's styling so the styling is compatible with react syntax: */}
                    <button className='closeDetails' onClick={closeMoreDetails}>Done</button>
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
