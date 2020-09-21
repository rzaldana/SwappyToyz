import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "../css/conversation.css";
import ReactImageAppear from "react-image-appear";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ScrollToBottom from "react-scroll-to-bottom";

export const Conversation = (props) => {
  let { id } = useParams();
  let userId = id; //props.getCounterpart(id);

  const [messages, setMessages] = useState(props.getMessages(0));

  return (
    <div className="container mt-3">
      <div className="row align-items-center">
        <div className="col-sm-8 col-12">
          <Card>
            <Card.Header>
              <div className="container p-0 m-0">
                <div className="row p-0 m-0">
                  <div className="col-2 p-0 m-0">
                    <div className="convo-pic">
                      <ReactImageAppear
                        src={props.getUserPic(userId)}
                        className="content-convo-pic"
                        placeholderClass="content-convo-pic"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-0 m-0 align-self-center">
                    <p className="m-0">{props.getUserName(userId)}</p>
                  </div>
                </div>
              </div>
            </Card.Header>
            <Card.Body className="p-1">
              <ScrollToBottom>
                <div className="chatbox">
                  {messages.map((message) => (
                    <div
                      className={
                        message.otherUser ? "other-user-bubble" : "own-bubble"
                      }
                    >
                      <text> {message.message}</text>
                    </div>
                  ))}
                </div>
              </ScrollToBottom>

              <InputGroup>
                <FormControl
                  placeholder="Enter your message..."
                  aria-label="Enter your message..."
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary">Send</Button>
                </InputGroup.Append>
              </InputGroup>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
