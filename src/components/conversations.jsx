import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "../css/conversations.css";

export const Conversations = (props) => {
  var conversations = [...props.conversations];

  return (
    <div className="container m-3">
      <div className="row">
        <div className="col-8">
          <ListGroup>
            {conversations.map((userId) => {
              const user = props.getUser(userId);

              return (
                <ListGroup.Item>
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-3 p-0">
                        <div className="container">
                          <div className="row">
                            <div className="col-12">
                              <div className="owner-pic-conv">
                                <img
                                  src={user.picture}
                                  className="content-owner-pic-conv"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <p>{user.name}</p>
                            </div>
                          </div>

                          <div className="row"></div>
                        </div>
                      </div>

                      <div className="col-9">
                        <h6>Start a chat with {user.name.split(" ")[0]}!</h6>
                      </div>
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
