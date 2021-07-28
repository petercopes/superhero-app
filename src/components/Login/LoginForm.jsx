import { Form, Button, Container, Spinner } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../store/actions";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
const LoginForm = () => {
  const dispatch = useDispatch();
  const requestStatus = useSelector((state) => state.ui.loginStatus);
  const loginHandler = (values) => {
    dispatch(logIn({ email: values.email, password: values.password }));
  };
  return (
    <Formik
      validationSchema={schema}
      validateOnMount={true}
      onSubmit={(values) => {
        loginHandler(values);
      }}
      initialValues={{
        email: "",
        password: "",
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        isValid,
        errors,
        touched,
      }) => (
        <Container className="container p-2 h-100 w-100">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-1 " controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={!errors.email}
              />
              {errors.email && <ErrorMessage name="password" />}
            </Form.Group>
            <Form.Group className="mb-1 " controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={!errors.password}
              />
              {errors.password && <ErrorMessage name="password" />}
            </Form.Group>
            {requestStatus === "failed" && (
            <p>Invalid Email - Password combination. Please try again!</p>
          )}
            <Button variant="dark" type="submit" className="mt-1" disabled={!isValid}>
              {requestStatus === "pending" ? (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              ): <p className="m-0">Log in</p>}             
            </Button>
          </Form>
        </Container>
      )}
    </Formik>
  );
};
export default LoginForm;
