import { Card,Button } from "react-bootstrap";
const HeroCard = ({ hero, onClickButton,buttonText,buttons}) => {
  
  return (
    <Card style={{ width: "10rem" }}>
      <Card.Img variant="top" src={hero.image.url} />
      <Card.Body>
        <Card.Title>{hero.name}</Card.Title>
        {buttons.map(button=><Button variant='primary' onClick={button.function} >{button.text}</Button>)}
      </Card.Body>
    </Card>
  );
};
export default HeroCard;
