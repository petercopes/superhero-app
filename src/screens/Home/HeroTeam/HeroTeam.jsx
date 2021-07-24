import React from "react";
import HeroList from "./HeroList"
import TeamSideBar from "./TeamSideBar";

const HeroTeam = ({heroes}) =>{
    
    return (
        <>
           <TeamSideBar/> 
           <HeroList heroes={heroes} />
        </>
    )
};
export default HeroTeam;