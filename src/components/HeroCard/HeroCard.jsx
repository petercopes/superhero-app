import { Card, DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";
import HeroStats from "./HeroStats";
const HeroCard = ({ hero, buttons ,heroStats}) => {

  return (
    <Card className="heroCard bg-dark text-white " >
      
      <Card.Img variant="top" src={hero.image.url} />
      <Card.Body >
      <Card.Title>
          {hero.name}{" "}
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
        </Card.Title>
        {heroStats? <HeroStats stats={heroStats} /> : <p></p>}

      </Card.Body>
    </Card>
  );
};
export default HeroCard;
