import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import HeroCard from "../../components/HeroCard/HeroCard";
import {addHero} from "../../store/actions"
const FoundHeroes = ({ heroes }) => {
  const dispatch = useDispatch();
  const addHeroHandler = (hero) =>{
    dispatch(addHero(hero))
  }

  return heroes.length > 0 ? (
    <Container fluid>
      <Row>
        {heroes.map((hero) => (
          <Col key={hero.id}>
            <HeroCard hero={hero} key={hero.id} buttonText="Add Hero" onClickButton={()=>addHeroHandler(hero)}/>
          </Col>
        ))}
      </Row>
    </Container>
  ) : (
    <p>No Heroes Found!</p>
  );
};
export default FoundHeroes;
