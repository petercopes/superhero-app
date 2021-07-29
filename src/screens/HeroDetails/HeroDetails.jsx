import { CloseButton, Col, Container, Image, Row, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
const HeroDetails = () => {
  const { id } = useParams();
  const hero = useSelector((state) =>
    state.team.heroesList.find((hero) => hero.id === id)
  );

  return hero ? (
    <div className="home">
      <Card className="glassCard border-0 m-4 p-0 text-white">
        <Container className="h-100">
          <Row className="h-100">
            <Col xs={4} className="h-100 p-0">
              <Image
                src={hero.image.url}
                className="roundedLeft h-100 p-0 w-100"
              />
            </Col>
            <Col xs={8} className="h-100 p-3 heroDetails">
              <Row>
                <Col xs={7} md={10} className="p-0 border-bottom border-white">
                  <h1>{hero.name}</h1>
                </Col>
                <Col xs={5} md={2} className="p-0 mt-1">
                  <NavLink to="/home">
                    <CloseButton />
                  </NavLink>
                </Col>
              </Row>
              <Row className="mt-2">
                <h2 className="h5">
                  Alias:{" "}
                  {hero.biography.aliases.map((alias, index, aliases) =>
                    index + 1 !== aliases.length ? `${alias}, ` : `${alias}. `
                  )}
                </h2>
              </Row>
              <Row className="h-50 overflow-scroll">
                <p className="m-1">
                  <span className="fw-bold">Weight: </span>
                  {hero.appearance.weight[1]}
                </p>
                <p className="m-1">
                  <span className="fw-bold">Height: </span>
                  {hero.appearance.height[1]}
                </p>
                <p className="m-1">
                  <span className="fw-bold">Eye Color: </span>
                  {hero.appearance["eye-color"]}
                </p>
                <p className="m-1">
                  <span className="fw-bold">Hair Color: </span>
                  {hero.appearance["hair-color"]}
                </p>
                <p className="m-1">
                  <span className="fw-bold">Occupation: </span>
                  {hero.work.occupation + " - " + hero.work.base}
                </p>
              </Row>
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  ) : (
    <h1>No Hero Found</h1>
  );
};
export default HeroDetails;
