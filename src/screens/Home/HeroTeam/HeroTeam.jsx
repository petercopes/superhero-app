import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeroList from "./HeroList";
import TeamSideBar from "./TeamSideBar";

const HeroTeam = ({ heroes }) => {
  return (
    /* //<Container className="m-0 p-0">
      {/* <Row>
        <Col xs={4} className=" bg-dark text-white">
          
        </Col>
        <Col xs={8}>
          {heroes.length > 0 ? (
            <HeroList  heroes={heroes} />
          ) : (
            <p>There are no Team Heroes</p>
          )}
        </Col>
      </Row>  */
      <Container className="h-100 w-100 m-0 p-0 text-white" fluid>
        <Row className="w-100 m-0 h-100" >
          <Col xs={4} lg={2} className="p-0 bg-dark roundedLeft sideBar">
            <h1 className="teamName p-1">Alkemy Team</h1>
            {heroes.length > 0 ? <TeamSideBar /> : <p className="p-2">No Stats available</p>}
          </Col>
          <Col xs={8} lg={10} className="p-3 h-100">
            {heroes.length > 0 ? (
              <HeroList heroes={heroes} />
            ) : (
              <p className="text-center">There are no Team Heroes</p>
            )}
          </Col>
        </Row>
    </Container>
  );
};
export default HeroTeam;
