import { Container, Row, Col } from "react-grid-system";
import FirstScene from "../../scenes/FirstScene";
import { useEffect } from "react";

import "../../style/Stick.css";

const Stick = () => {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);
  return (
    <div className="stickContainerNoScroll">
      <div className="stickContainer">
        <Container>
          <Row className="titleRowStick">
            <Col xs={12} className="titleColStick">Stick</Col>
          </Row>
          <Row className="videoRowStick">
            <Col xs={12} className="videoColStick">
                <div className="videoContainerStick"></div>
            </Col>
          </Row>
          <Row className="frameWorksRowStick">
            <Col xs={3} className="frameWorksColStick">
                <FirstScene />
            </Col>
            <Col xs={3} className="frameWorksColStick">
            <FirstScene />
            </Col>
            <Col xs={3} className="frameWorksColStick">
            <FirstScene />
            </Col>
            <Col xs={3} className="frameWorksColStick">
            <FirstScene />
            </Col>
          </Row>
          <Row className="descriptionRowStick">
            <Col xs={12} className="descriptionColStick">
                <div className="descriptionContainerStick"></div>
            </Col>
          </Row>
          <Row className="buttonRowStick">
            <Col xs={6} className="githubColStick">
                <div className="downloadContainerStick">
                </div>
            </Col>
            <Col xs={6} className="downloadColStick">
                <div className="downloadContainerStick">

                </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Stick;
