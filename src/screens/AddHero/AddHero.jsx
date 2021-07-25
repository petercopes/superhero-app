import FoundHeroes from "./FoundHeroes";
import { useSelector } from "react-redux";
import SearchHero from "./SearchHero";
import { useState } from "react";

const AddHero = () => {
  const [showHeroes, setShowHeroes] = useState(false);
  const heroes = useSelector((state) => state.heroes.heroesList);
  return (
    <>
      <SearchHero setShowHeroes={setShowHeroes}/>
      {showHeroes && (
        <div>
          <FoundHeroes heroes={heroes} />
        </div>
      )}
    </>
  );
};
export default AddHero;
