import "../../style/HomeTown.css";
import { Container, Row, Col } from "react-grid-system";
import lbLogo from "../../assets/lbLogoPink.png";


const HomeTown = () => {
  return (
    <div className="homeTownContainerNoScroll">
      <div className="homeTownContainer">
        <Container>
          <Row className="homeFatherRow">
            <Col sm={9}>
              <Row className="titleRowHome">
                <Col className="titleHomeCol" sm={12}>
                    <img className="lbLogo" src={lbLogo} alt="Long Beach" />
                </Col>
              </Row>
              <Row className="lifeInLongBeachRow">
                <Col className="centerCol" sm={12}>
                  <div className="lifeInLongBeach">
                  </div>
                </Col>
              </Row>
              <Row className="favoriteEventsRow">
                <Col className="centerCol" sm={12}>
                <div className="favoriteEvents">
                  </div>
                </Col>
              </Row>
              <Row className="favoriteThingsRow">
                <Col className="centerCol" sm={12}>
                  <div className="favoriteThings">
                  </div>
                </Col>
              </Row>
              <Row className="todosRow">
                <Col className="centerCol" sm={12}>
                  <div className="todos">
                  </div>
                </Col>
              </Row>
            </Col>
            <Col sm={3}>
              <Row className="linksForActivitiesRow">
                <Col className="centerCol" sm={12}>
                  <div className="linksForActivities">
                  </div>
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
