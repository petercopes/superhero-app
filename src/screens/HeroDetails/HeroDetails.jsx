import {CloseButton, Container,Image} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
const HeroDetails = () =>{
    const {id} = useParams();
    const hero = useSelector((state)=> state.team.heroesList.find((hero)=>hero.id===id));
    
    return hero ? (
        <Container>
            
                <NavLink to="/home"><CloseButton/></NavLink>
            <h1>
                {hero.name}
            </h1>
            <Image src={hero.image.url} rounded />
            <h2>
               Alias: {hero.biography.aliases.map(alias=><p>{alias}</p>)}
            </h2>
            <p>Weight: {hero.appearance.weight[1]}</p>
            <p>Height: {hero.appearance.height[1]}</p>
            <p>Eye Color: {hero.appearance["eye-color"]}</p>
            <p>Hair Color: {hero.appearance["hair-color"]}</p>
            <p>Occupation: {hero.work.occupation+" "+hero.work.base}</p>
        </Container>
    ) : <p>No Hero Found</p>

}
export default HeroDetails;