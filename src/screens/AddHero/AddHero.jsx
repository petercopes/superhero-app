import FoundHeroes from "./FoundHeroes"
import {useSelector } from "react-redux";
import SearchHero from "./SearchHero"

const AddHero = () =>{
    const heroes = useSelector((state)=>state.heroes.heroesList);
    return (
        <>
            <SearchHero/>
            <div>
                <FoundHeroes heroes={heroes}/>
            </div>
            
        </>
    );
}
export default AddHero;