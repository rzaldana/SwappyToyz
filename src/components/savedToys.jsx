import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export const SavedToys = (props) => {
  var savedToys = [...props.savedToys];

  return (
    <div className="container m-3">
      <div className="row">
        <div className="col-8">
          <ListGroup>
            {savedToys.map((toyId) => {
              const toy = props.getToy(toyId);
              return <ListGroup.Item>{toy.name}</ListGroup.Item>;
            })}
          </ListGroup>
        </div>
      </div>
    </div>
  );
};
