import React, { useContext } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import { Context } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";

const NavbarComponent = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/login">SHIZ</Navbar.Brand>
        <Nav className="">
          {user ? (
            <Button variant="outline-light" onClick={() => auth.signOut()}>Log out</Button>
          ) : (
            <Link to={LOGIN_ROUTE}>
              <Button variant="outline-light">Sign in</Button>
            </Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
