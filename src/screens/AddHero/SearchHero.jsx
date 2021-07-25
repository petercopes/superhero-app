import { Form, Button, Container, Row, Col } from "react-bootstrap";
import {Formik} from "formik";
import * as yup from 'yup';
import {fetchHeroes} from "../../store/actions"
import { useDispatch } from "react-redux";
const schema = yup.object().shape({
  heroName: yup.string().required(),
});
const SearchHero = ({setShowHeroes}) => {
    const dispatch = useDispatch();
    const searchHandler = (values) =>{
        dispatch(fetchHeroes(values.heroName));
        setShowHeroes(true);

    }
  return (
    <Formik
      validationSchema={schema}
      validateOnMount={true}
      onSubmit={(values) => {
        searchHandler(values);
      }}
      initialValues={{
        heroName: ''
      }}
    >
      {({ handleSubmit, handleChange, values, isValid, errors ,touched}) => (
        <Container>
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
                <Button variant="primary" type="submit" disabled={!isValid}>
                  Search
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
