import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeroList from "./HeroList";
import TeamSideBar from "./TeamSideBar";

const HeroTeam = ({ heroes }) => {
  return (
    <Container className="h-100" >
      <Row className="h-100" >
        <Col xs={3} className="sideBar bg-dark text-white">
          <h1 className="teamName">Alkemy Team</h1>
          {heroes.length > 0 ? <TeamSideBar /> : <p>No Stats available</p>}
        </Col>
        <Col xs={9}>
          {heroes.length > 0 ? (
            <HeroList  heroes={heroes} />
          ) : (
            <p>There are no Team Heroes</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default HeroTeam;
