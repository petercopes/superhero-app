import { Form, Button, Container, Row, Col, Spinner } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { clearSearch, fetchHeroes } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const schema = yup.object().shape({
  heroName: yup.string().required(),
});
const SearchHero = () => {

  const requestStatus = useSelector((state) => state.ui.searchStatus);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(clearSearch());
  },[dispatch])
  const searchHandler = (values) => {
    dispatch(fetchHeroes(values.heroName));

  };
  
  return (
    <Formik
      validationSchema={schema}
      validateOnMount={true}
      onSubmit={(values) => {
        searchHandler(values);
      }}
      initialValues={{
        heroName: "",
      }}
      
    >
      {({ handleSubmit, handleChange, values, isValid, errors, touched }) => (
        <Container >
          <Form onSubmit={handleSubmit}>
            <Row className="m-5">
              <Col xs={9} md={10} className="p-0">
                <Form.Control
                  type="text"
                  placeholder="Enter the Hero's name"
                  name="heroName"
                  value={values.heroName}
                  onChange={handleChange}
                  isValid={!errors.heroName}
                />
              </Col>
              <Col xs={3} md={2} className="px-1" >
                <Button variant="dark" type="submit"className="border border-white" disabled={!isValid}>
                {requestStatus === "pending" ? (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              ): <p className="m-0">Search</p>}        
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      )}
    </Formik>
  );
};
export default SearchHero;
