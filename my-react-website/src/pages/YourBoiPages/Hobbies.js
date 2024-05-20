import "../../style/Extracurriculars.css";
import { Container, Row, Col } from "react-grid-system";
import RunGraph from "../../hooks/RunGraph";
import { useEffect, useState } from "react";
// import EmbedActivity from "../../hooks/EmbedActivity";

const Hobbies = () => {
  const [selectedRun, setSelectedRun] = useState(null);

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
                  <div className="selected">{selectedRun ? selectedRun.name : "Hover over the graph see run details!"}</div>
                  <div className="distance"> {selectedRun ? <><b>Distance:</b> {selectedRun.distance.toFixed(2)} mi</>: ""}</div>
                  <div className="date"> {selectedRun ? <><b>Date:</b>{selectedRun.date.split("T")[0].split("-")[1]}/{selectedRun.date.split("T")[0].split("-")[2]}/{selectedRun.date.split("T")[0].split("-")[0]} </>: ""}</div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="activityPicsRow">
            <Col className="centerCol" xs={8}>
              <div className="activityTextExtra">
                Running has become one of my favorite hobbies. I started running in March 2024 and have been running consistently since. I have ran almost every day since then and I am training for the Long Beach Marathon in October 2024.
              </div>
            </Col>
            <Col className="centerCol" xs={4}>
              <div className="activityPicsExtra">
                {/* <EmbedActivity activityId="11408724867" />
                <EmbedActivity activityId="11400755334" />
                <EmbedActivity activityId="11397899532" /> */}

              </div>
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
