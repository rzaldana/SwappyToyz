import React, { useState } from "react";
import toy1 from "../img/toy1.png";
import toy2 from "../img/toy2.png";
import toy3 from "../img/toy3.png";
import "../css/main.css";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faCheck,
  faClock,
  faGift,
} from "@fortawesome/free-solid-svg-icons";
import Badge from "react-bootstrap/Badge";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import ReactImageAppear from "react-image-appear";
import { noAuto } from "@fortawesome/fontawesome-svg-core";

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
var bannerUserId;
var bannerUserName = "";
var bannerUserPic = "";
var alertToyName = "";

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

  const onShowAlert = () => {
    window.setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const [ownerPicLoaded, setOwnerPicLoaded] = useState(true);
  const [toyPicLoaded, setToyPicLoaded] = useState(false);
  const [allPicsLoaded, setAllPicsLoaded] = useState(false);

  const currentToy = props.toy;

  console.log("GiftStatus: ");
  console.log(currentToy.gift);

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

  const giftTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      This item is available for gifting
    </Tooltip>
  );

  return (
    <React.Fragment>
      <div
        className="container"
        style={{
          position: "fixed",
          top: "10px",
          maxWidth: "100%",
          marginRight: "auto",
        }}
      >
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6 align-self-end">
            <Alert show={showAlert} style={{ right: "auto" }} variant="success">
              <p>"{alertToyName}" was added to saved toys</p>
            </Alert>
          </div>
        </div>
      </div>

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
            <Card className="shadow">
              <div className="toy-img-container">
                {
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 100, hide: 200 }}
                    overlay={giftTooltip}
                  >
                    <div
                      className="gift-container"
                      style={{ opacity: currentToy.gift ? 1 : 0 }}
                    >
                      <FontAwesomeIcon className="gift-icon" icon={faGift} />
                    </div>
                  </OverlayTrigger>
                }
                <div
                  style={{
                    opacity: toyPicLoaded ? "0" : "1",
                    position: "relative",
                    top: "100%",
                    right: "100%",
                  }}
                >
                  <Spinner
                    animation="border"
                    role="status"
                    style={{ position: "absolute" }}
                  >
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </div>

                <ReactImageAppear
                  src={currentToy.image}
                  className="toy-img"
                  key={currentToy.image}
                />
                <img />
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
                            alertToyName = currentToy.name;
                            onShowAlert();
                            props.addToSavedToys(currentToy.id);
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
                            bannerUserId = currentToy.ownerId;

                            bannerUserName = props.getUserName(
                              currentToy.ownerId
                            );

                            bannerToyPic = currentToy.image;
                            bannerUserPic = props.getUserPic(
                              currentToy.ownerId
                            );
                            if (props.userMatch(currentToy.ownerId)) {
                              props.addToConversations(currentToy.ownerId);
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
          <div className="col-sm-3 mt-5">
            <h5>{currentToy.name}</h5>
            {currentToy.tags.map((tag) => {
              return (
                <Badge key="tag" className="m-1" variant="primary">
                  {tag}
                </Badge>
              );
            })}
            <hr />

            <div
              style={{
                opacity: ownerPicLoaded ? "0" : "1",
                position: "relative",
              }}
            >
              <Spinner
                animation="border"
                role="status"
                style={{ position: "absolute" }}
              >
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
            <div
              style={{
                opacity: ownerPicLoaded ? "1" : "0",
                position: "relative",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-sm-8 text-sm-left mt-3">
                    <p className="mb-0">Uploaded by</p>
                    <h5>{props.getUserName(currentToy.ownerId)}</h5>
                  </div>
                  <div className="col-sm-4 p-0">
                    <div className="owner-pic-side">
                      <ReactImageAppear
                        src={props.getUserPic(currentToy.ownerId)}
                        className="content-owner-pic-side"
                        onLoad={() => setOwnerPicLoaded(true)}
                        key={props.getUserPic(currentToy.ownerId)}
                        placeholderClass="content-owner-pic-side"
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
        </div>
        ;
      </div>
      <div style={{ position: "relative" }}>
        <Modal
          show={showBanner}
          onHide={handleClose}
          className="text-center"
          style={{ position: "absolute" }}
        >
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
                  <Button
                    variant="primary"
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    <Link className="router-link" to="/conversations">
                      Start a Conversation
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </React.Fragment>
  );
};
