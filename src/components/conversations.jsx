import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "../css/conversations.css";
import ReactImageAppear from "react-image-appear";
import { Link } from "react-router-dom";

export const Conversations = (props) => {
  var conversations = [...props.conversations];

  return (
    <div className="container m-3">
      <div className="row">
        <div className="col-8">
          {conversations.length == 0 ? <p>No conversations yet!</p> : ""}
          <ListGroup>
            {conversations.map((convo) => {
              const user = props.getUser(convo);

              return (
                <ListGroup.Item>
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-3 p-0">
                        <div className="container">
                          <div className="row align-items-center justify-content-center">
                            <div className="col-12 ">
                              <div className="owner-pic-conv">
                                <ReactImageAppear
                                  src={user.picture}
                                  className="content-owner-pic-conv"
                                  placeholderClass="content-owner-pic-conv"
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
                        <Link to={`/conversation/${user.id}`}>
                          <h6>Start a chat with {user.name.split(" ")[0]}!</h6>
                        </Link>
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
