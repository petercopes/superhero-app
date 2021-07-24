import { Card,Button } from "react-bootstrap";
const HeroCard = ({ hero, onClickButton,buttonText}) => {
  return (
    <Card style={{ width: "10rem" }}>
      <Card.Img variant="top" src={hero.image.url} />
      <Card.Body>
        <Card.Title>{hero.name}</Card.Title>
        
        <Button variant="primary" onClick={onClickButton}>{buttonText}</Button>
      </Card.Body>
    </Card>
  );
};
export default HeroCard;
