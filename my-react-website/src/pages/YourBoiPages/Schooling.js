import "../../style/Schooling.css";
import { Container, Row, Col } from "react-grid-system";
import csulbLogo from "../../assets/logoCSULB.png";
import { useEffect } from "react";

const Schooling = () => {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);
  return (
    <div className="schoolingContainerNoScroll">
      <div className="schoolingContainer">
        <Container>
          <Row className="titleRowSchool">
            <Col className="titleColSchool" xs={12}>
                <img className="csulbLogo" src={csulbLogo} alt="CSULB" />
            </Col>
          </Row>
          <Row className="contentRowSchool">
            <Col xs={4}>
              <Row className="coursesRowSchool">
                <Col className="centerCol" xs={12}>
                    <div className="coursesSchool"></div>
                </Col>
              </Row>
            </Col>
            <Col xs={8}>
              <Row className="descriptionRowSchool">
                <Col className="centerCol" xs={12}>
                    <div className="descriptionSchool"></div>
                </Col>
              </Row>
              <Row className="clubsWorkRowSchool">
                <Col className="centerCol" xs={12}>
                    <div className="clubsWorkSchool"></div>
                </Col>
              </Row>
              <Row className="challangesRowSchool">
                <Col className="centerCol" xs={12}>
                    <div className="challangesSchool"></div>
                </Col>
              </Row>
              <Row className="buttonsRowSchool">
                <Col className="centerCol" xs={6}>
                    <div className="buttonSchool"></div>
                </Col>
                <Col className="centerCol" xs={6}>
                    <div className="buttonSchool"></div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Schooling;
