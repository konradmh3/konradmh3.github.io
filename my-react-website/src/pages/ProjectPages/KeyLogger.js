import "../../style/KeyLogger.css";
import { useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import FirstScene from "../../scenes/FirstScene";

const KeyLogger = () => {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <div className="keyLoggerContainerNoScroll">
      <div className="keyLoggerContainer">
        <Container>
          <Row className="titleRowKeyLogger">
            <Col xs={12} className="titleColKeyLogger">
              Keylogger
            </Col>
          </Row>
          <Row className="videoRowKeyLogger">
            <Col xs={12} className="videoColKeyLogger">
              <div className="videoContainerKeyLogger"></div>
            </Col>
          </Row>
          <Row className="frameWorksRowKeyLogger">
            <Col xs={3} className="frameWorksColKeyLogger">
              <FirstScene />
            </Col>
            <Col xs={3} className="frameWorksColKeyLogger">
              <FirstScene />
            </Col>
            <Col xs={3} className="frameWorksColKeyLogger">
              <FirstScene />
            </Col>
            <Col xs={3} className="frameWorksColKeyLogger">
              <FirstScene />
            </Col>
          </Row>
          <Row className="descriptionRowKeyLogger">
            <Col xs={12} className="descriptionColKeyLogger">
              <div className="descriptionContainerKeyLogger"></div>
            </Col>
          </Row>
          <Row className="buttonRowKeyLogger">
            <Col xs={6} className="githubColKeyLogger">
              <div className="downloadContainerKeyLogger"></div>
            </Col>
            <Col xs={6} className="downloadColKeyLogger">
              <div className="downloadContainerKeyLogger"></div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default KeyLogger;
