import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";

const Login = () => {
  const isLogged = useSelector((state) => state.login.loggedIn);
  
  return (
    <>
      <Modal
        size="xl"
        show={!isLogged}
        backdrop="static"
        keyboard={false}
        centered={true}
      >
        <Modal.Header>
          <Modal.Title bsPrefix="text-center">Welcome Back!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please log in to continue.
          <LoginForm />
        </Modal.Body>
        
      </Modal>
    </>
  );
};
export default Login;
