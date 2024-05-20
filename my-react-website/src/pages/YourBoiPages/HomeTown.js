import "../../style/HomeTown.css";
import { Container, Row, Col } from "react-grid-system";
import lbLogo from "../../assets/lbLogoPink.png";
import { useEffect } from "react";

const HomeTown = () => {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);
  return (
    <div className="homeTownContainerNoScroll">
      <div className="homeTownContainer">
        <Container>
          <Row className="titleRowHomeTown">
            <Col className="titleColHomeTown" xs={12}>
                <img className="lbLogo" src={lbLogo} alt="lbLogo" />
            </Col>
          </Row>
          <Row className="contentRowHomeTown">
            <Col xs={4}>
              <Row className="coursesRowHomeTown">
                <Col className="centerCol" xs={12}>
                    <div className="coursesHomeTown"></div>
                </Col>
              </Row>
            </Col>
            <Col xs={8}>
              <Row className="descriptionRowHomeTown">
                <Col className="centerCol" xs={12}>
                    <div className="descriptionHomeTown"></div>
                </Col>
              </Row>
              <Row className="clubsWorkRowHomeTown">
                <Col className="centerCol" xs={12}>
                    <div className="clubsWorkHomeTown"></div>
                </Col>
              </Row>
              <Row className="challangesRowHomeTown">
                <Col className="centerCol" xs={12}>
                    <div className="challangesHomeTown"></div>
                </Col>
              </Row>
              <Row className="buttonsRowHomeTown">
                <Col className="centerCol" xs={6}>
                    <div className="buttonHomeTown"></div>
                </Col>
                <Col className="centerCol" xs={6}>
                    <div className="buttonHomeTown"></div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomeTown;
