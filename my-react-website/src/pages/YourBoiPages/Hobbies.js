import "../../style/Extracurriculars.css";
import { Container, Row, Col } from "react-grid-system";
import RunGraph from "../../hooks/RunGraph";
import { useEffect, useState } from "react";

const Hobbies = () => {
  const [selectedRun, setSelectedRun] = useState(null);

  useEffect(() => {
    console.log(selectedRun);
  }
  , [selectedRun]);

  return (
    // <GetStravaActivities />
    <div className="extracurricularsContainerNoScroll">
      <div className="extracurricularsContainer">
        <Container>
          <Row className="titleRowExtra">
            <Col className="titleColExtra" xs={12}>
              Hobbies
            </Col>
          </Row>
          <Row className="descGraphRowExtra">
            {/* <Col className="centerCol" xs={4}>
              <div className="descExtra"></div>
            </Col> */}
            <Col className="centerCol" xs={12}>
              <div className="runningExtra">
                {/* This is where we will put our svg graph displaying 30 days of data from 0 to 20 miles*/}
                <div className="graphExtra">
                  <RunGraph setSelectedRun={setSelectedRun} />
                  </div>
                <div className="statsExtra">
                  <p className="runningText">
                    Running is a hobby I have picked up these past couple months!
                    I have been running 5 days a week and have been tracking my progress.
                    Running is a great way to stay in shape and keep your mind focused and clear of distractions.
                    The graph uses the Strava API to pull my last 30 days of running data and display it. Check it out to see my progress!
                  </p>
                  <div className="selected">{selectedRun ? selectedRun.name : "None"}</div>
                  <div className="distance">Distance: {selectedRun ? selectedRun.distance.toFixed(2) + " miles" : "None"}</div>
                  <div className="date">Date: {selectedRun ? selectedRun.date.split("T")[0].split("-")[1]+"/"+selectedRun.date.split("T")[0].split("-")[2]+"/"+selectedRun.date.split("T")[0].split("-")[0] : "None"}</div>
                </div>
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

export default Hobbies;
