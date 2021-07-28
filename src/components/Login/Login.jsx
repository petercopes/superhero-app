import { Col, Container, Image, Modal, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import loginHeroes from "./loginHeros.jpeg";

const Login = () => {
  const isLogged = useSelector((state) => state.login.loggedIn);

  return (
    <>
      <Modal
        size="lg"
        show={!isLogged}
        backdrop="static"
        keyboard={false}
        centered={true}
        contentClassName="loginModal"
      >
        <Container className="p-0"  >
          <Row>
            <Col xs={5}>
              <Image
                src={loginHeroes}
                className=" h-100 w-100 roundedLeft"
                
              />
            </Col>
            <Col xs={7}>
              <Modal.Header>
                <Modal.Title bsPrefix="text-center">Welcome Back!</Modal.Title>
              </Modal.Header>
              <Modal.Body className="p-0">
                <LoginForm />
              </Modal.Body>
            </Col>
          </Row>
        </Container>
      </Modal>
    </>
  );
};
export default Login;
