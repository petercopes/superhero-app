
import {useSelector } from "react-redux";
import HeroTeam from "./HeroTeam/HeroTeam"


const Home = () =>{
    /* const dispatch = useDispatch();

     useEffect(()=>{
        dispatch(fetchHeroes());
    },[dispatch]);  */
    const heroes = useSelector((state)=>state.team.heroesList);
    const teamName = useSelector((state)=>state.team.teamName);
    
    return (
        <div>
            <h1>{teamName}</h1>
            <HeroTeam  heroes={heroes}/> 
        </div>
    );
}
export default Home;