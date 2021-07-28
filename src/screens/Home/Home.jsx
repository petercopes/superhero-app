import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import HeroTeam from "./HeroTeam/HeroTeam";
import styles from "./Home.module.css";

const Home = () => {
  /* const dispatch = useDispatch();

     useEffect(()=>{
        dispatch(fetchHeroes());
    },[dispatch]);  */
  const heroes = useSelector((state) => state.team.heroesList);
  const teamName = useSelector((state) => state.team.teamName);

  return (
    <div className="home">
      <Card className="glassCard border-0 m-4 p-0">
        
        <HeroTeam heroes={heroes} />
      </Card>
    </div>
  );
};
export default Home;
