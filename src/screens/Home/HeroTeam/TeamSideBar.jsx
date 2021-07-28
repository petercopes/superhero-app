import { useSelector } from "react-redux";
import HeroStats from "../../../components/HeroCard/HeroStats";

const TeamSideBar = () =>{
    const teamStats = useSelector((state)=>state.team.powerstats);
    console.log(teamStats)

    return (
        <HeroStats stats={teamStats} style={{}} />
    )
};
export default TeamSideBar;