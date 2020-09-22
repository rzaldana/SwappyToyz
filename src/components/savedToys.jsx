import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ReactImageAppear from "react-image-appear";
import "../css/savedToys.css";

export const SavedToys = (props) => {
  var savedToys = [...props.savedToys];

  return (
    <div className="container m-3">
      <div className="row">
        <div className="col-8">
          {savedToys.length == 0 ? "You haven't saved any toys yet!" : ""}
          <ListGroup>
            {savedToys.map((toyId) => {
              const toy = props.getToy(toyId);
              return (
                <ListGroup.Item>
                  <div className="container">
                    <div className="row">
                      <div className="col-3 saved-toys-col">
                        <div className="saved-toys-img-container">
                          <ReactImageAppear
                            src={toy.image}
                            style={{
                              objectFit: "cover",
                            }}
                            className="saved-toys-content recommended"
                            onClick={() => props.goToToy(toyId)}
                          />
                        </div>
                      </div>
                      <div className="col-9">{toy.name}</div>
                    </div>
                  </div>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
      </div>
    </div>
  );
};
