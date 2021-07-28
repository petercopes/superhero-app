import FoundHeroes from "./FoundHeroes";
import { useDispatch, useSelector } from "react-redux";
import SearchHero from "./SearchHero";
import { Alert } from "react-bootstrap";

import { setHeroAddStatus, setSearchStatus } from "../../store/actions";

const AddHero = () => {
  const dispatch = useDispatch();
  const heroes = useSelector((state) => state.heroes.heroesList);
  const searchStatus = useSelector((state) => state.ui.searchStatus);
  const addHeroStatus = useSelector((state) => state.ui.heroAddStatus);
  console.log(searchStatus)
  console.log(addHeroStatus);
  const closeHeroStatusAlertHandler = ()=>{
    dispatch(setHeroAddStatus({status:"initial",message:""}));
  }
  const closeSearchStatusAlertHandler = ()=>{
    dispatch(setSearchStatus({status:"initial"}));
  }
  return (
    <>
      <SearchHero />
      {searchStatus === "success" && (
        <div className='foundHeroes'>
          <FoundHeroes heroes={heroes} />
        </div>
      )}
      {searchStatus === "failed" && (
        <Alert
          show={searchStatus === "failed"}
          variant="danger"
          onClose={closeSearchStatusAlertHandler}
          dismissible
        >
          <Alert.Heading>
            The hearo you are looking for was not found!
          </Alert.Heading>
        </Alert>
      )}
      {addHeroStatus.status!== "initial" && (<Alert
          show={addHeroStatus.status !== "initial"}
          variant={addHeroStatus.status==="success"?('success'):("danger")}
          onClose={closeHeroStatusAlertHandler}
          dismissible
        >
          <Alert.Heading>
            {addHeroStatus.message}
          </Alert.Heading>
        </Alert>)
        }
    </>
  );
};
export default AddHero;
