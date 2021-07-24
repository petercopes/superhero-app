import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import HeroCard from "../../../components/HeroCard/HeroCard";
import {deleteHero} from "../../../store/actions"
const HeroList = ({ heroes }) => {
  const dispatch = useDispatch();
  const deleteHeroHandler = (hero) =>{
    dispatch(deleteHero(hero))
  }

  return heroes.length > 0 ? (
    <Container fluid>
      <Row>
        {heroes.map((hero) => (
          <Col key={hero.id}>
            <HeroCard hero={hero} key={hero.id} buttonText="Remove Hero" onClickButton={()=>deleteHeroHandler(hero)}/>
          </Col>
        ))}
      </Row>
    </Container>
  ) : (
    <p>No Heroes Found!</p>
  );
};
export default HeroList;
