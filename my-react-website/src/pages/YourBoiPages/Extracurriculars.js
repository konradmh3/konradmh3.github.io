import "../../style/Extracurriculars.css";
import GetStravaStats from "../../hooks/GetStravaStats";
import { Container, Row, Col } from "react-grid-system";
import RunGraph from "../../hooks/RunGraph";

const Extracurriculars = () => {
//   const miles = GetStravaStats().Miles;
//   const totalRuns = GetStravaStats().TotalRuns;
//   const activities = GetStravaStats().Activities;
    // UNCOMMENT THE ABOVE LINES WHEN THE DONE DEVING HOOK IS FINISHED
//  GETTING TO MANY REQ ERROR ALSO FIGURE OUT A WAY TO JUST CALL THIS ONCE AND STORE THE DATA IN A VARIABLE
// THEN SEPERATE THE DATA INTO MILES, TOTALRUNS, AND ACTIVITIES

//   console.log(activities);
  // all activities are stored in the activities array, each activity is an object with name, distance, and date
  // we can now use this for our svg graph

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
