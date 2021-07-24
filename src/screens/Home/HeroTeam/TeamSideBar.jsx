import { useSelector } from "react-redux";

const TeamSideBar = () =>{
    const {intelligence,strength,combat,speed,durability,power} = useSelector((state)=>state.team.powerstats);
    return (
        <div>
            <ul>
                <li>{intelligence}</li>
                <li>{strength}</li>
                <li>{durability}</li>
                <li>{power}</li>
                <li>{combat}</li>
                <li>{speed}</li>
            </ul>
        </div>
    )
};
export default TeamSideBar;