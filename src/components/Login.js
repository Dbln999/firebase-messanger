import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { Context } from "../index";
import firebase from "firebase/compat/app";

const Login = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const user = await auth.signInWithPopup(provider);
    console.log(user);
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 50 }}
    >
      <Button variant="outline-dark h-25 w-50" onClick={login}>
        Continue with Google
      </Button>
    </Container>
  );
};

export default Login;
