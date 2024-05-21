import "../../style/ReactProjects.css";
import { useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import FirstScene from "../../scenes/FirstScene";
import { motion } from "framer-motion";

const ReactProjects = () => {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);
  return (
    <div className="reactContainerNoScroll">
      <div className="reactProjectsContainer">
          <Container>
            <Row className="titleRowReact">
              <Col xs={12} className="titleColReact">
                React Projects
              </Col>
            </Row>
            <Row className="videoRowReact">
              <Col xs={12} className="videoColReact">
                <div className="videoContainerReact"></div>
              </Col>
            </Row>
            <Row className="frameWorksRowReact">
              <Col xs={3} className="frameWorksColReact">
                <FirstScene />
              </Col>
              <Col xs={3} className="frameWorksColReact">
                <FirstScene />
              </Col>
              <Col xs={3} className="frameWorksColReact">
                <FirstScene />
              </Col>
              <Col xs={3} className="frameWorksColReact">
                <FirstScene />
              </Col>
            </Row>
            <Row className="descriptionRowReact">
              <Col xs={12} className="descriptionColReact">
                <div className="descriptionContainerReact">
                <b>Technology:</b> React, HTML, CSS, JavaScript, Framer, Bootstrap, API, SVG, JSON, Git, GitHub pages
                <br></br>
                <b>Description:</b> Designed and implemented a REACT website
                portfolio to showcase my projects, skills, and experience, with
                a responsive design, animated components, and a dynamic layout
                to engage users and provide a seamless experience for potential recruiters or interested parties.
                </div>
              </Col>
            </Row>
            <Row className="buttonRowReact">
              <Col xs={6} className="githubColReact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} className="downloadContainerReact">Source Code</motion.button>
              </Col>
              <Col xs={6} className="downloadColReact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} className="downloadContainerReact">Learn React!</motion.button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
  );
};

export default ReactProjects;
