import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export const SavedToys = (props) => {
  console.log("Saved Toys");
  console.log(props.savedToys);
  console.log(props.getSavedToys());
  var savedToys = [...props.savedToys];

  return (
    <ListGroup variant="flush">
      {savedToys.map((toy) => (
        <ListGroup.Item>{toy}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};
