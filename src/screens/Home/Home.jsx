import { Card } from "react-bootstrap";
import { useSelector} from "react-redux";
import HeroTeam from "./HeroTeam/HeroTeam";

const Home = () => {
  const heroes = useSelector((state) => state.team.heroesList);
  return (
    <div className="home">
      <Card className="glassCard border-0 m-4 p-0">
        
        <HeroTeam heroes={heroes} />
      </Card>
    </div>
  );
};
export default Home;
