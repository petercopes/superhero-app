import FoundHeroes from "./FoundHeroes";
import { useDispatch, useSelector } from "react-redux";
import SearchHero from "./SearchHero";
import { Alert, Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { setHeroAddStatus, setSearchStatus } from "../../store/actions";


const AddHero = () => {
  const dispatch = useDispatch();
  const heroes = useSelector((state) => state.heroes.heroesList);
  const searchStatus = useSelector((state) => state.ui.searchStatus);
  const addHeroStatus = useSelector((state) => state.ui.heroAddStatus);
  const closeHeroStatusAlertHandler = ()=>{
    dispatch(setHeroAddStatus({status:"initial",message:""}));
  }
  const closeSearchStatusAlertHandler = ()=>{
    dispatch(setSearchStatus({status:"initial"}));
  }
  return (
    < >
      <SearchHero />
      {searchStatus === "success" && (
        
          <FoundHeroes heroes={heroes} />
        
      )}
      
      <Modal show={addHeroStatus.status!== "initial"} centered onHide={closeHeroStatusAlertHandler}>
      <Modal.Header closeButton> 
          <Modal.Title>{addHeroStatus.message}</Modal.Title>

        </Modal.Header>
      </Modal>   
      {searchStatus === "failed" && (
        
        <Alert
          show={searchStatus === "failed"}
          variant="danger"
          onClose={closeSearchStatusAlertHandler}
          dismissible
        >
          <Alert.Heading>
            The hero you are looking for was not found!
          </Alert.Heading>
        </Alert>
      )}
    </>
  );
};
export default AddHero;
