import "../../style/ReactProjects.css";
import { useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import FirstScene from "../../scenes/FirstScene";

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
                <div className="downloadContainerReact"></div>
              </Col>
              <Col xs={6} className="downloadColReact">
                <div className="downloadContainerReact"></div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
  );
};

export default ReactProjects;
