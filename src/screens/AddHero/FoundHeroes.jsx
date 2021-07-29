import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import HeroCard from "../../components/HeroCard/HeroCard";
import { addHero, setHeroAddStatus } from "../../store/actions";
import { HeroOrientationAvailability } from "../../utils/utils";

const FoundHeroes = ({ heroes }) => {
  const dispatch = useDispatch();
  const teamHeroes = useSelector((state) => state.team.heroesList);
  
  const addHeroHandler = (hero) => {
    if (!teamHeroes.some((currentHero) => currentHero.id === hero.id)) {
      const orientationAvailable = HeroOrientationAvailability(hero,teamHeroes);

      if (orientationAvailable && teamHeroes.length < 6) {
        dispatch(addHero(hero));
      } else {
        if (!teamHeroes.length < 6)
          dispatch(
            setHeroAddStatus({
              status: "failed",
              message: "You can't have more than six team members",
            })
          );
        if (!orientationAvailable)
          dispatch(
            setHeroAddStatus({
              status: "failed",
              message:
                "You cant have any more heroes with a " +
                hero.biography.alignment +
                " alignment!",
            })
          );
      }
    } else {
      dispatch(
        setHeroAddStatus({
          status: "failed",
          message: "That hero is already on your team!",
        })
      );
    }
  };

  return (
    heroes.length > 0 && (
      <Container className="heroList w-100 p-0">
        <Row className="h-100 overflow-scroll w-100 m-0 p-0">
          {heroes.map((hero) => (
            <Col key={hero.id} xs={6} md={4} lg={3} className="p-2">
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
