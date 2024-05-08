import { Container, Row, Col } from "react-grid-system";
import FirstScene from "../../scenes/FirstScene";

import "../../style/Stick.css";

const Stick = () => {
  return (
    <div className="stickContainerNoScroll">
      <div className="stickContainer">
        <Container>
          <Row className="titleRow">
            <Col md={12} className="titleCol">Stick</Col>
          </Row>
          <Row className="videoRow">
            <Col md={12} className="videoCol">
                <div className="videoContainerStick"></div>
            </Col>
          </Row>
          <Row className="frameWorksRow">
            <Col md={3} className="frameWorksCol">
                <FirstScene />
            </Col>
            <Col md={3} className="frameWorksCol">
            <FirstScene />
            </Col>
            <Col md={3} className="frameWorksCol">
            <FirstScene />
            </Col>
            <Col md={3} className="frameWorksCol">
            <FirstScene />
            </Col>
          </Row>
          <Row className="descriptionRow">
            <Col md={12} className="descriptionCol">
                <div className="descriptionContainerStick"></div>
            </Col>
          </Row>
          <Row className="buttonRow">
            <Col md={6} className="githubCol">
                <div className="downloadContainer">
                </div>
            </Col>
            <Col md={6} className="downloadCol">
                <div className="downloadContainer">

                </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Stick;
