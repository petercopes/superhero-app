import {
  Card,
  DropdownButton,
  Dropdown,
  ButtonGroup,
  Col,
  Row,
  Container,
} from "react-bootstrap";
import HeroStats from "./HeroStats";
const HeroCard = ({ hero, buttons, heroStats }) => {
  return (
    <Card className="heroCard bg-dark text-white m-0">
      <Card.Img  variant="top" src={hero.image.url} />
      <Card.Body className="p-1">
        <Card.Title>
          <Container className="p-0" >
            <Row className="w-100 m-0">
              <Col xs={9} className="p-0" >{hero.name} </Col>
              <Col xs={3} className="p-0" >
                <DropdownButton
                  as={ButtonGroup}
                  key={"end"}
                  id={"dropdown-button-drop-end"}
                  drop={"right"}
                  variant="dark"
                  size="sm"
                  title={""}
                >
                  {buttons.map((button, index) => (
                    <Dropdown.Item eventKey={index} onClick={button.function}>
                      {button.text}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </Col>
            </Row>
          </Container>
        </Card.Title>
        {heroStats ? <HeroStats stats={heroStats} /> : ""}
      </Card.Body>
    </Card>
  );
};
export default HeroCard;
