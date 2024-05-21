import "../../style/Jarvis.css";
import { useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import FirstScene from "../../scenes/FirstScene";

const Jarvis = () => {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);
  return (
    <div className="JarvisContainer">
      <div className="jarvisContainerNoScroll">
        <Container>
          <Row className="titleRowJarvis">
            <Col xs={12} className="titleColJarvis">
              Jarvis
            </Col>
          </Row>
          <Row className="videoRowJarvis">
            <Col xs={12} className="videoColJarvis">
              <div className="videoContainerJarvis"></div>
            </Col>
          </Row>
          <Row className="frameWorksRowJarvis">
            <Col xs={3} className="frameWorksColJarvis">
              <FirstScene />
            </Col>
            <Col xs={3} className="frameWorksColJarvis">
              <FirstScene />
            </Col>
            <Col xs={3} className="frameWorksColJarvis">
              <FirstScene />
            </Col>
            <Col xs={3} className="frameWorksColJarvis">
              <FirstScene />
            </Col>
          </Row>
          <Row className="descriptionRowJarvis">
            <Col xs={12} className="descriptionColJarvis">
              <div className="descriptionContainerJarvis">
                <b>Technology:</b> C++, Python, REST API <br></br>
                <b>Description:</b> Jarvis is
                a voice-controlled Home System and server, similar to Alexa,
                engineered to control third-party and custom-made IOT devices
                around my room and coded in python. <br></br>
                <b>Implementation:</b> Designed and
                implemented the speech recognition module and server to send
                commands and interpret voice commands using a Python server,
                allowing seamless interaction with the system. Used the esp32
                module to create a low cost api server to send data and receive
                commands for custom iot devices.
              </div>
            </Col>
          </Row>
          <Row className="buttonRowJarvis">
            <Col xs={6} className="githubColJarvis">
              <div className="downloadContainerJarvis"></div>
            </Col>
            <Col xs={6} className="downloadColJarvis">
              <div className="downloadContainerJarvis"></div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Jarvis;
