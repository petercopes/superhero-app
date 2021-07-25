import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import HeroCard from "../../components/HeroCard/HeroCard";
import {addHero} from "../../store/actions"
const FoundHeroes = ({ heroes }) => {
  const dispatch = useDispatch();
  const teamHeroes = useSelector((state)=>state.team.heroesList);
  const HeroOrientationAvailability = (hero) =>{
    let sameOrientationHeroes = 0;
    for (const teamHero of teamHeroes) {
      if (hero.biography.alignment===teamHero.biography.alignment) sameOrientationHeroes++
    }
    return sameOrientationHeroes < 3;
  } 
  const addHeroHandler = (hero) =>{
    
    if(HeroOrientationAvailability(hero) && teamHeroes.length<6) dispatch(addHero(hero))
    
  }

  return heroes.length > 0 ? (
    <Container fluid>
      <Row>
        {heroes.map((hero) => (
          <Col key={hero.id}>
            <HeroCard hero={hero} key={hero.id} buttons={[{function:(()=>addHeroHandler(hero)),text:'Add Hero'}]}/>
          </Col>
        ))}
      </Row>
    </Container>
  ) : (
    <p>No Heroes Found!</p>
  );
};
export default FoundHeroes;
