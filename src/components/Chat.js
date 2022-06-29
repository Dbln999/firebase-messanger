import React, { useContext, useState } from "react";
import { Context } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  Container,
  Row,
  Button,
  Form,
  InputGroup,
  Col,
  Image,
} from "react-bootstrap";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase/compat/app";

const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");

  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );

  const sendMessage = async () => {
    firestore.collection("messages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue("");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ height: window.innerHeight - 50, background: "#181616" }}
    >
      <Col
        style={{
          width: "100%",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {messages.map((message) => {
          return (
            <div
              className="d-flex mx-3 my-2 w-50 d-flex align-items-center p-3"
              style={{
                borderRadius: "10px",
                backgroundColor:
                  user.uid === message.uid ? "#008549" : "#495057",
                height: "140px",
                alignSelf:
                  user.uid === message.uid ? "end" : "start",
              }}
            >
              <Image
                src={message.photoURL}
                style={{ width: "40px", height: "40px", borderRadius: "20px" }}
                className="align-self-center mx-2"
              />
              <Col className="d-flex flex-column mx-2 justify-content-around">
                <span className="text-light h6">{message.displayName}</span>

                <span className="text-light fs-6">{message.text}</span>

              </Col>
            </div>
          );
        })}
      </Col>
      <Row className="d-flex my-3 w-100">
        <InputGroup className="mb">
          <Form.Control
            placeholder="Message"
            aria-label="Message"
            aria-describedby="basic-addon2"
            className="border-2"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <Button variant="success" id="button-addon2" onClick={sendMessage}>
            Send
          </Button>
        </InputGroup>
      </Row>
    </div>
  );
};

export default Chat;
