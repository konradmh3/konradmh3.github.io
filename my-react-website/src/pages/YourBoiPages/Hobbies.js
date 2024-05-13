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
              <h1>Hobbies</h1>
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
                  <h1>Stats</h1>
                  <h2>Selected Run: {selectedRun ? selectedRun.name : "None"}</h2>
                  <h2>Distance: {selectedRun ? selectedRun.distance.toFixed(2) : "None"} miles</h2>
                  <h2>Date: {selectedRun ? selectedRun.date.split("T")[0].split("-")[1]+"/"+selectedRun.date.split("T")[0].split("-")[2]+"/"+selectedRun.date.split("T")[0].split("-")[0] : "None"}</h2>
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
