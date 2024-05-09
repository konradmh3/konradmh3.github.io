import "../../style/Extracurriculars.css";
import GetStravaStats from "../../hooks/GetStravaStats";
import { Container, Row, Col } from "react-grid-system";
import RunGraph from "../../hooks/RunGraph";

const Extracurriculars = () => {


  return (
    // <GetStravaActivities />
    <div className="extracurricularsContainerNoScroll">
      <div className="extracurricularsContainer">
        <Container>
          <Row className="titleRowExtra">
            <Col className="titleColExtra" xs={12}>
              <h1>Extracurriculars</h1>
            </Col>
          </Row>
          <Row className="descGraphRowExtra">
            <Col className="centerCol" xs={4}>
              <div className="descExtra"></div>
            </Col>
            <Col className="centerCol" xs={8}>
              <div className="graphExtra">
                {/* This is where we will put our svg graph displaying 30 days of data from 0 to 20 miles*/}
                <RunGraph />
              </div>
            </Col>
          </Row>
          <Row className="activityPicsRow">
            <Col className="centerCol" xs={12}>
              <div className="activityPicsExtra"></div>
            </Col>
          </Row>
          <Row className="lifePicsRow">
            <Col className="centerCol" xs={12}>
              <div className="lifePicsExtra"></div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Extracurriculars;
