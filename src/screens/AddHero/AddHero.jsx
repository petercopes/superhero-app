import FoundHeroes from "./FoundHeroes";
import { useDispatch, useSelector } from "react-redux";
import SearchHero from "./SearchHero";
import { Alert, Button, CloseButton, Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <div className="h-100">
      <SearchHero />
      {searchStatus === "success" && (
        <div className='foundHeroes'>
          <FoundHeroes heroes={heroes} />
        </div>
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
            The hearo you are looking for was not found!
          </Alert.Heading>
        </Alert>
      )}
    </div>
  );
};
export default AddHero;
