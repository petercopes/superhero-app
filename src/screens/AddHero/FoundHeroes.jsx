import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import HeroCard from "../../components/HeroCard/HeroCard";
import { addHero, setHeroAddStatus } from "../../store/actions";




const FoundHeroes = ({ heroes }) => {
  
  const dispatch = useDispatch();
  const teamHeroes = useSelector((state) => state.team.heroesList);
  const HeroOrientationAvailability = (hero) => {
    let sameOrientationHeroes = 0;
    
    for (const teamHero of teamHeroes) {
      if (hero.biography.alignment === teamHero.biography.alignment)
        sameOrientationHeroes++;
    }
    return sameOrientationHeroes < 3;
  };
  const addHeroHandler = (hero) => {
    if(!teamHeroes.some(currentHero=>currentHero.id===hero.id)){
      const orientationAvailable = HeroOrientationAvailability(hero);

    if (orientationAvailable && teamHeroes.length < 6) {
      dispatch(addHero(hero));
    }
    else{
      if(!teamHeroes.length<6) dispatch(setHeroAddStatus({status:"failed",message:"You can't have more than six team members"}));
      if(!orientationAvailable) dispatch(setHeroAddStatus({status:"failed",message:"You cant have any more heroes with a "+hero.biography.alignment+" alignment!"}));
      
    }
    }
    else{
      dispatch(setHeroAddStatus({status:"failed",message:"That hero is already on your team!"}));
    }
    
  };

  return (
    heroes.length > 0 && (
      <Container fluid>
        <Row>
          {heroes.map((hero) => (
            <Col key={hero.id}>
              <HeroCard
                hero={hero}
                key={hero.id}
                buttons={[
                  { function: () => addHeroHandler(hero), text: "Add Hero" },
                ]}
              />
            </Col>
          ))}
        </Row>
      </Container>
    )
  );
};
export default FoundHeroes;
