import { Container, Row, Col } from "react-grid-system";
import FirstScene from "../../scenes/FirstScene";

import "../../style/Stick.css";

const Stick = () => {
  return (
    <div className="stickContainerNoScroll">
      <div className="stickContainer">
        <Container>
          <Row className="titleRow">
            <Col xs={12} className="titleCol">Stick</Col>
          </Row>
          <Row className="videoRow">
            <Col xs={12} className="videoCol">
                <div className="videoContainerStick"></div>
            </Col>
          </Row>
          <Row className="frameWorksRow">
            <Col xs={3} className="frameWorksCol">
                <FirstScene />
            </Col>
            <Col xs={3} className="frameWorksCol">
            <FirstScene />
            </Col>
            <Col xs={3} className="frameWorksCol">
            <FirstScene />
            </Col>
            <Col xs={3} className="frameWorksCol">
            <FirstScene />
            </Col>
          </Row>
          <Row className="descriptionRow">
            <Col xs={12} className="descriptionCol">
                <div className="descriptionContainerStick"></div>
            </Col>
          </Row>
          <Row className="buttonRow">
            <Col xs={6} className="githubCol">
                <div className="downloadContainer">
                </div>
            </Col>
            <Col xs={6} className="downloadCol">
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
