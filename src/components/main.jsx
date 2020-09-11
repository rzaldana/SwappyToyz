import React from "react";
import toy1 from "../img/toy1.png";
import toy2 from "../img/toy2.png";
import toy3 from "../img/toy3.png";
import toy4 from "../img/toy4.png";
import mike from "../img/mike-toyman.png";
import "../css/main.css";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck, faClock } from "@fortawesome/free-solid-svg-icons";
import Badge from "react-bootstrap/Badge";

export const Main = (props) => {
  const currentToyOwner = {
    name: "Mike Toymane",
    lookingFor: ["Toys for 11-13 year old boy"],
    picture: mike,
  };
  const currentToy = {
    image: toy4,
    name: "Set of 8 toy cars",
    tags: ["cars", "5-12 years old"],
    owner: currentToyOwner,
    description:
      "These are cars that my son used to play with. They are in very good condition. Since we are moving, we have decided to get rid of some toys he doesn't play with anymore",
  };

  return (
    <div class="container-fluid w-100">
      <div class="row w-100">
        <div class="col-sm-2">
          <h5>Recommended</h5>
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div className="img-container">
                  <img
                    src={toy1}
                    style={{
                      objectFit: "cover",
                    }}
                    className="content"
                  />
                </div>
              </div>

              <div class="col-12">
                <div className="img-container">
                  <img
                    src={toy2}
                    style={{
                      objectFit: "cover",
                    }}
                    className="content"
                  />
                </div>
              </div>

              <div class="col-12">
                <div className="img-container">
                  <img
                    src={toy3}
                    style={{
                      objectFit: "cover",
                    }}
                    className="content"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-7">
          <Card>
            <Card.Img variant="top" src={toy4} />
            <Card.Body>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-4">
                    <FontAwesomeIcon icon={faTimes} size="3x" color="#FF0000" />
                  </div>

                  <div className="col-sm-4">
                    <FontAwesomeIcon icon={faClock} size="3x" color="#00A7FF" />
                  </div>

                  <div className="col-sm-4">
                    <FontAwesomeIcon icon={faCheck} size="3x" color="#1BAB08" />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div class="col-sm-3">
          <h5>{currentToy.name}</h5>
          {currentToy.tags.map((tag) => {
            return (
              <Badge className="m-1" variant="primary">
                {tag}
              </Badge>
            );
          })}
        </div>
      </div>
    </div>
  );
};
