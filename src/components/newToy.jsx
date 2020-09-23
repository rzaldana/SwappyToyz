import React from "react";
import "../css/newToy.css";
import { Recommended } from "./recommended";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const NewToy = (props) => {
  return (
    <div className="container-fluid w-100" style={{ marginTop: "2em" }}>
      <div className="row w-100">
        <Recommended
          getToyPic={props.getToyPic}
          recommended={props.recommended}
          goToToy={props.goToToy}
        ></Recommended>
        <div className="col-8 text-align-left">
          <Form style={{ textAlign: "left" }}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Toy name" />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label> Description </Form.Label>
              <Form.Control as="textarea" rows="3"></Form.Control>
            </Form.Group>

            <Form.Group controlId="formAgeRange">
              <Form.Label>Intended Age Range</Form.Label>
              <Form.Control as="select">
                <option>0-3 years old</option>
                <option>3-5 years old</option>
                <option>5-8 years old</option>
                <option>8-12 years old</option>
                <option>13+ years old</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.File id="formPictureUpload" label="Picture" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
