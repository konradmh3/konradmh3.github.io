import "../../style/Foodood.css";
import BurgerCanvas from "../../scenes/BurgerScene";
import { useEffect } from "react";
import { createBrowserHistory } from "history";
import { Container, Row, Col, Visible, Hidden } from "react-grid-system";
import doodLogo from "../../assets/fooDoodTitle.png";
import { useState } from "react";
import { motion } from "framer-motion";

const Foodood = () => {
  
  return (
    <div className = "foodoodContainerNoScroll">
    <div className="foodoodContainer">
      {/* <motion.div initial={{display:"block"}} animate={{display:"none"}} transition={{delay:3, duration:0}}> */}
      <motion.div initial={{opacity:0}} animate={{opacity:[0, 100, 75, 50, 25, 0]}} transition={{delay:1, duration:2}}  className="initLogo">
        <img style={{height: "auto", width: "100%", maxHeight:"100vh", maxWidth:"1500px"}} className="doodLogoInit" src={doodLogo} alt="foodood" />
      </motion.div>
      {/* </motion.div> */}


      <Container>      

        {/* Just going to completely hide the content between these commentss for simplicity for xxs to s */}                

        <Hidden xxs xs sm>        

          <Row className="fatherRow">
            <Col className="fatherCol1" md={4}>
              <Row className="titleRow">
                <Col className="titleCol" lg={12}>
        <motion.div initial={{opacity:0}} animate={{opacity:100}} transition={{delay: 3, duration: 2}}>

                  <img className="doodLogo" src={doodLogo} alt="foodood" />
        </motion.div>
                </Col>
              </Row>

              <Row className="imgRow">
                <Col className="imgCol" lg={12}>
                  <motion.div initial={{opacity:0}} animate={{opacity:100}} transition={{delay: 3, duration: 2}} className="imgsContainer"></motion.div>
                </Col>
              </Row>
            </Col>

            <Col className="fatherCol2" md={8}>
              <Row className="descriptionRow">
                <Col className="descriptionCol" lg={12}>
                  <motion.div initial={{opacity:0}} animate={{opacity:100}} transition={{delay: 3, duration: 2}} className="descriptionContainer"></motion.div>
                </Col>
              </Row>

              <motion.div initial={{opacity:0}} animate={{opacity:100}} transition={{delay: 3, duration: 2}}>
                <Row className="frameworks">
                
                <Col className="frameworksCol" md={2}>
                  <BurgerCanvas />
                </Col>
                <Col className="frameworksCol" md={2}>
                  <BurgerCanvas />
                </Col>
                <Col className="frameworksCol" md={2}>
                  <BurgerCanvas />
                </Col>
                <Col className="frameworksCol" md={2}>
                  <BurgerCanvas />
                </Col>
                <Col className="frameworksCol" md={2}>
                  <BurgerCanvas />
                </Col>
                <Col className="frameworksCol" md={2}>
                  <BurgerCanvas />
                </Col>
              </Row>
              </motion.div>
              <motion.div initial={{opacity:0}} animate={{opacity:100}} transition={{delay: 3, duration: 2}}>

              <Row className="hamburgers">
                <Col className="burgerCol" md={2}>
                  <BurgerCanvas />
                </Col>
                <Col className="burgerCol" md={2}>
                  <BurgerCanvas />
                </Col>
                <Col className="burgerCol" md={2}>
                  <BurgerCanvas />
                </Col>
                <Col className="burgerCol" md={2}>
                  <BurgerCanvas />
                </Col>
                <Col className="burgerCol" md={2}>
                  <BurgerCanvas />
                </Col>
                <Col className="burgerCol" md={2}>
                  <BurgerCanvas />
                </Col>
              </Row>
              </motion.div>

              <Row className="projLinks">
                <Col className="projLinkCol" md={6}>
                  <motion.div initial={{opacity:0}} animate={{opacity:100}} transition={{delay: 3, duration: 2}} className="projLinkContainer"></motion.div>
                </Col>
                <Col className="projLinkCol" md={6}>
                  <motion.div initial={{opacity:0}} animate={{opacity:100}} transition={{delay: 3, duration: 2}} className="projLinkContainer"></motion.div>
                </Col>
              </Row>

              <Row className="roleRow">
                <Col className="roleCol" lg={12}>
                  <motion.div initial={{opacity:0}} animate={{opacity:100}} transition={{delay: 3, duration: 2}} className="roleContainer"></motion.div>
                </Col>
              </Row>
            </Col>
          </Row>        

        </Hidden>                

        {/* Just going to completely hide the content between these commentss for simplicity for xxs to s */}
        {/* BELOW IS MOBILE/SMALL SCREEN VIEW */}
        <Hidden md lg xxl>
          <Row className="mobileTitleRow">
            <Col className="centerColBurger" xs={2}>
              <BurgerCanvas />
            </Col>
            <Col className="centerCol" xs={8}>
              <img className="doodLogoMobile" src={doodLogo} alt="foodood" />
            </Col>
            <Col className="centerColBurger" xs={2}>
              <BurgerCanvas />
            </Col>
          </Row>
          <Row className="descRow">
            <Col className="centerCol" xs={6}>
              <div className="descriptionMobile"></div>
            </Col>
            <Col className="centerCol" xs={6}>
              <div className="roleMobile"></div>
            </Col>
          </Row>
          <Row className="picRow">
            <Col className="centerCol" xs={12}>
              <div className="picsMobile"></div>
            </Col>
          </Row>
          <Row className="frameworksTitleRow">
            <Col className="centerColFW" xs={12}>
              <div className="frameworksMobileTitle">Frameworks</div>
            </Col>
          </Row>
          <Row className="frameworksMobileRow">
            <Col className="centerColBurger" xs={3}>
              <BurgerCanvas />
            </Col>
            <Col className="centerColBurger" xs={3}>
              <BurgerCanvas />
            </Col>
            <Col className="centerColBurger" xs={3}>
              <BurgerCanvas />
            </Col>
            <Col className="centerColBurger" xs={3}>
              <BurgerCanvas />
            </Col>
          </Row>
          <Row className="buttonRow">
            <Col className="centerCol" xs={6}>
              <div className="githubLink"></div>
            </Col>
            <Col className="centerCol" xs={6}>
              <div className="websiteLink"></div>
            </Col>
          </Row>
        </Hidden>
        {/* ABOVE IS MOBILE/SMALL SCREEN VIEW */}      

      </Container>
    </div>
    </div>
  );
};

export default Foodood;
