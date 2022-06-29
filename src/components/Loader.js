import React from "react";
import { Container } from "react-bootstrap";

const Loader = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 50 }}
    >
      <div className="lds-hourglass"></div>
    </Container>
  );
};

export default Loader;
