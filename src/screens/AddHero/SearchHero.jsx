import { Form, Button, Container, Row, Col, Spinner } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { fetchHeroes } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

const schema = yup.object().shape({
  heroName: yup.string().required(),
});
const SearchHero = () => {
  const requestStatus = useSelector((state) => state.ui.searchStatus);
  const dispatch = useDispatch();
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
            <Row>
              <Col xs={10}>
                <Form.Control
                  type="text"
                  placeholder="Enter the Hero's name"
                  name="heroName"
                  value={values.heroName}
                  onChange={handleChange}
                  isValid={!errors.heroName}
                />
              </Col>
              <Col xs={2}>
                <Button variant="dark" type="submit" disabled={!isValid}>
                {requestStatus === "pending" ? (
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              ): <p>Search</p>}        
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
