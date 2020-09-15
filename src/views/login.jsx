import React from "react";
import auth from "../auth";
import "../css/login.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export const Login = (props) => {
  return (
    <div>
      <div className="background-img d-flex justify-content-center">
        <Card
          style={{ width: "30vw", overflow: "auto" }}
          className="align-self-center text-left"
        >
          <Card.Body>
            <Card.Title>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="username" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
                <Button
                  variant="primary"
                  onClick={() => {
                    props.setAuth(true);
                    props.history.push("/go");
                  }}
                  style={{ width: "100%" }}
                >
                  Log in
                </Button>

                <Button
                  variant="primary"
                  onClick={() => {
                    props.setAuth(true);
                    props.history.push("/app");
                  }}
                  style={{ width: "100%", marginTop: "1em" }}
                >
                  Register
                </Button>
              </Form>
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
