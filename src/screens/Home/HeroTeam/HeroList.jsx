import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import HeroCard from "../../../components/HeroCard/HeroCard";
import { deleteHero } from "../../../store/actions";
const HeroList = ({ heroes }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const deleteHeroHandler = (hero) => {
    dispatch(deleteHero(hero));
  };
  const redirectToDetails = (hero) => {
    history.push("/hero-details/" + hero.id);
  };

  return heroes.length > 0 && (
    <Container className="heroList h-100 p-0">
      <Row className="h-100 overflow-scroll  p-0">
        {heroes.map((hero) => (
          <Col key={hero.id} xs={10} md={6} lg={4} className=" p-1">
            <HeroCard
              hero={hero}
              key={hero.id}
              heroStats = {hero.powerstats}
              buttonText="Remove Hero"
              buttons={[
                {
                  function: () => deleteHeroHandler(hero),
                  text: "Remove Hero",
                },
                { function: (() => redirectToDetails(hero)), text: "More Details" },
              ]}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
};
export default HeroList;
