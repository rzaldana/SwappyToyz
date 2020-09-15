import React, { useState } from "react";
import toy1 from "../img/toy1.png";
import toy2 from "../img/toy2.png";
import toy3 from "../img/toy3.png";
import "../css/main.css";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck, faClock } from "@fortawesome/free-solid-svg-icons";
import Badge from "react-bootstrap/Badge";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Spinner from "react-bootstrap/Spinner";
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const toyImages = importAll(
  require.context("./../img/random_toys", false, /\.(png|jpe?g|svg)$/)
);
var banner = ""; //<h1 className="banner">Hiya</h1>;
var bannerUserName = "";
var bannerUserPic = "";

var bannerToyPic = "";
export const Main = (props) => {
  const [showBanner, setShowBanner] = useState(false);
  const handleClose = () => setShowBanner(false);
  const handleShow = () => {
    console.log("HELLO");
    console.log(bannerToyPic);
    setShowBanner(true);
  };

  const [showAlert, setShowAlert] = useState(false);

  const [ownerPicLoading, ownerPicLoaded] = useState(true);

  const currentToy = props.toy;

  console.log("current saved toys");
  console.log(props.getSavedToys());

  const redTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      No, thanks
    </Tooltip>
  );

  const blueTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Save for later
    </Tooltip>
  );

  const greenTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Yes, Please
    </Tooltip>
  );

  return (
    <React.Fragment>
      <div className="container-fluid w-100" style={{ marginTop: "2em" }}>
        {banner}
        <div className="row w-100">
          <div className="col-sm-2">
            <h5>Recommended</h5>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
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

                <div className="col-12">
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

                <div className="col-12">
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
          <div className="col-sm-7">
            <Card>
              <div className="img-container-card">
                <img src={currentToy.image} className="content" />
              </div>
              <Card.Body>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-4">
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 100, hide: 200 }}
                        overlay={redTooltip}
                      >
                        <Button
                          onClick={() => {
                            props.getNextToy(props.user.id);
                          }}
                          variant="light"
                        >
                          <FontAwesomeIcon
                            icon={faTimes}
                            size="3x"
                            color="#FF0000"
                          />
                        </Button>
                      </OverlayTrigger>
                    </div>
                    <div className="col-sm-4">
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 100, hide: 200 }}
                        overlay={blueTooltip}
                      >
                        <Button
                          onClick={() => {
                            setShowAlert(true);
                            console.log(currentToy.id);

                            props.addToSavedToys(currentToy.id);
                            console.log("current state: ");
                            console.log(props.getSavedToys());
                            props.getNextToy(props.user.id);
                          }}
                          variant="light"
                        >
                          <FontAwesomeIcon
                            icon={faClock}
                            size="3x"
                            color="#00A7FF"
                          />
                        </Button>
                      </OverlayTrigger>
                    </div>
                    <div className="col-sm-4">
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 100, hide: 200 }}
                        overlay={greenTooltip}
                      >
                        <Button
                          onClick={() => {
                            bannerUserName = props.getUserName(
                              currentToy.ownerId
                            );

                            bannerToyPic = currentToy.image;
                            bannerUserPic = props.getUserPic(
                              currentToy.ownerId
                            );
                            if (props.userMatch(currentToy.ownerId)) {
                              handleShow();
                            }

                            props.getNextToy(props.user.id);
                          }}
                          variant="light"
                        >
                          <FontAwesomeIcon
                            icon={faCheck}
                            size="3x"
                            color="#1BAB08"
                          />
                        </Button>
                      </OverlayTrigger>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-3">
            <h5>{currentToy.name}</h5>
            {currentToy.tags.map((tag) => {
              return (
                <Badge key="tag" className="m-1" variant="primary">
                  {tag}
                </Badge>
              );
            })}
            <hr />
            <div className="container">
              <div className="row">
                <div className="col-sm-8 text-sm-left mt-3">
                  <p className="mb-0">Uploaded by</p>
                  <h5>{props.getUserName(currentToy.ownerId)}</h5>
                </div>
                <div className="col-sm-4 p-0">
                  <div style={{ display: ownerPicLoading ? "block" : "none" }}>
                    <Spinner animation="border" role="status">
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                  </div>
                  <div className="owner-pic">
                    <img
                      src={props.getUserPic(currentToy.ownerId)}
                      className="content-owner-pic"
                      onLoad={() => ownerPicLoaded(false)}
                    />
                  </div>
                </div>
                <div className="col-sm-12 text-left">
                  <p>{currentToy.description}</p>
                </div>

                <div className="col-sm-12 text-left">
                  <h6>Looking For:</h6>
                  {props.getUserWishList(currentToy.ownerId).map((wish) => (
                    <p key={wish}>{wish}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        ;
      </div>

      <Modal show={showBanner} onHide={handleClose} className="text-center">
        <Modal.Body>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 mt-3">
                <FontAwesomeIcon
                  className="m-auto"
                  icon={faCheck}
                  size="3x"
                  color="#1BAB08"
                />
              </div>
            </div>
            <div className="row mt-3 mb-4">
              <div className="col-12">
                {bannerUserName} also liked one of your toys!
              </div>
            </div>

            <div className="row">
              <div className="col-4 img-container-card p-2">
                <img src={bannerToyPic} className="content" />
              </div>
              <div className="col-4 img-container-card">
                <img src={bannerUserPic} className="content-owner-pic" />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Button variant="primary" onClick={handleClose}>
                  Start a Conversation
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};
