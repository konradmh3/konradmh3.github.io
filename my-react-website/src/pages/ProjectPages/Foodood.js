import "../../style/Foodood.css";
import BurgerCanvas from "../../scenes/BurgerScene";

import { useEffect } from "react";
import { createBrowserHistory } from "history";
import { Container, Row, Col, Visible, Hidden } from "react-grid-system";
import doodLogo from "../../assets/fooDoodTitle.png";

const Foodood = () => {
  return (
    <div className="foodoodContainer">
      <Container>
        <Row className="fatherRow">
          <Col className="fatherCol1" md={4}>
            <Row className="titleRow">
              <Col className="titleCol" lg={12}>
                <img className="doodLogo" src={doodLogo} alt="foodood" />
              </Col>
            </Row>

            <Row className="imgRow">
              <Col className="imgCol" lg={12}>
                <div className="imgsContainer"></div>
              </Col>
            </Row>
          </Col>

          <Col className="fatherCol2" md={8}>
            <Row className="descriptionRow">
              <Col className="descriptionCol" lg={12}>
                <div className="descriptionContainer"></div>
              </Col>
            </Row>

            <Row className="frameworks">
              <Col className="frameworksCol" md={2}>
                <BurgerCanvas />
              </Col>
              <Col className="frameworksCol" md={2}>
                <BurgerCanvas />
              </Col>
              <Col className="frameworksCol" md={2}>
                <BurgerCanvas />
              </Col>
              <Col className="frameworksCol" md={2}>
                <BurgerCanvas />
              </Col>
              <Col className="frameworksCol" md={2}>
                <BurgerCanvas />
              </Col>
              <Col className="frameworksCol" md={2}>
                <BurgerCanvas />
              </Col>
            </Row>

            <Row className="hamburgers">
              <Col className="burgerCol" md={2}>
                <BurgerCanvas />
              </Col>
              <Col className="burgerCol" md={2}>
                <BurgerCanvas />
              </Col>
              <Col className="burgerCol" md={2}>
                <BurgerCanvas />
              </Col>
              <Col className="burgerCol" md={2}>
                <BurgerCanvas />
              </Col>
              <Col className="burgerCol" md={2}>
                <BurgerCanvas />
              </Col>
              <Col className="burgerCol" md={2}>
                <BurgerCanvas />
              </Col>
            </Row>

            <Row className="projLinks">
              <Col className="projLinkCol" md={6}>
                <div className="projLinkContainer"></div>
              </Col>
              <Col className="projLinkCol" md={6}>
                <div className="projLinkContainer"></div>
              </Col>
            </Row>

            <Row className="roleRow">
              <Col className="roleCol" lg={12}>
                <div className="roleContainer"></div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Foodood;
