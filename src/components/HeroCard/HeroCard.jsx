import {
  Card,
  DropdownButton,
  Dropdown,
  ButtonGroup,
  Col,
  Row,
  Container,
} from "react-bootstrap";
import {transformStatsToArray} from "../../utils/utils"
import HeroStats from "./HeroStats";
const HeroCard = ({ hero, buttons, heroStats }) => {
  const stats = heroStats? transformStatsToArray(heroStats) : [];
  return (
    <Card className="w-100 heroCard bg-dark text-white m-0">
      <Card.Img  variant="top" src={hero.image.url} />
      <Card.Body className="p-1">
        <Card.Title>
          <Container className="p-0" >
            <Row className="w-100 m-0">
              <Col xs={9} lg={10} xl={11} className="p-0" >{hero.name} </Col>
              <Col xs={3} lg={2} xl={1} className="p-0" >
                <DropdownButton
                  as={ButtonGroup}
                  key={"end"}
                  id={"dropdown-item-drop-end"}
                  drop={"down"}
                  variant="dark"
                  size="sm"
                  title={""}
                >
                  {buttons.map((button, index) => (
                    <Dropdown.Item eventKey={index} key={index} onClick={button.function}>
                      {button.text}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </Col>
            </Row>
          </Container>
        </Card.Title>
        {stats ? <HeroStats stats={stats} /> : ""}
      </Card.Body>
    </Card>
  );
};
export default HeroCard;
