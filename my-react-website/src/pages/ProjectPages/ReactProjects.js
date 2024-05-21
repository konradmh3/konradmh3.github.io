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
                React Web Development Projects
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
                <div className="descriptionContainerReact"></div>
              </Col>
            </Row>
            <Row className="buttonRowReact">
              <Col xs={6} className="githubColReact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} className="downloadContainerReact"></motion.button>
              </Col>
              <Col xs={6} className="downloadColReact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} className="downloadContainerReact"></motion.button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
  );
};

export default ReactProjects;
