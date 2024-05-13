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

  // lets scroll to bottom of page
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);


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
            <Col className="centerCol" xs={12}>
              <div className="runningExtra">
                <div className="graphExtra">
                  <RunGraph setSelectedRun={setSelectedRun} />
                  </div>
                <div className="statsExtra">
                  <div className="selected">{selectedRun ? selectedRun.name : "None"}</div>
                  <div className="distance">Distance: {selectedRun ? selectedRun.distance.toFixed(2) + " miles" : "None"}</div>
                  <div className="date">Date: {selectedRun ? selectedRun.date.split("T")[0].split("-")[1]+"/"+selectedRun.date.split("T")[0].split("-")[2]+"/"+selectedRun.date.split("T")[0].split("-")[0] : "None"}</div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="activityPicsRow">
            <Col className="centerCol" xs={8}>
              <div className="activityPicsExtra"></div>
            </Col>
            <Col className="centerCol" xs={4}>
              <div className="activityPicsExtra"></div>
            </Col>
          </Row>
          <Row className="lifePicsRow">
            <Col className="centerCol" xs={4}>
              <div className="lifePicsExtra"></div>
            </Col>
            <Col className="centerCol" xs={8}>
              <div className="lifePicsExtra"></div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Hobbies;
