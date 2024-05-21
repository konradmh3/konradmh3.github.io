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
            <Col xs={12} className="titleColStick">
              Stick
            </Col>
          </Row>
          <Row className="videoRowStick">
            <Col xs={12} className="videoColStick">
              <div className="videoContainerStick">
                <iframe
                  className="ytplayer"
                  type="text/html"
                  title="stickPlayThroughClip"
                  width="100%"
                  src="https://www.youtube.com/embed/Ls3ZGHq0C3c?autoplay=1&controls=1&loop=5&color=white&playlist=Ls3ZGHq0C3c"
                  frameborder="0"
                  allowfullscreen
                  allow="autoplay"
                ></iframe>
              </div>
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
              <div className="descriptionContainerStick">
                <b>Technology:</b> Unity Engine, C#, Spine, Blender<br></br>
                <b>Description:</b> 2D Platformer. Play through different levels with the goal of
                getting to the door in each level before time runs out and
                without dying. Inspiration from Mario and N Flash game.<br></br>
                <b>Implementation:</b> Designed and implemented core gameplay
                mechanics, including player movement, collision detection, and
                scoring system. Integrated Spine for character animations,
                enhancing visual appeal and interactivity.
              </div>
            </Col>
          </Row>
          <Row className="buttonRowStick">
            <Col xs={6} className="githubColStick">
              <div className="downloadContainerStick"></div>
            </Col>
            <Col xs={6} className="downloadColStick">
              <div className="downloadContainerStick"></div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Stick;
