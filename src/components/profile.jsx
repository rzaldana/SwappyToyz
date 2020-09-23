import React, { useState } from "react";
import toy1 from "../img/toy1.png";
import toy2 from "../img/toy2.png";
import toy3 from "../img/toy3.png";
import "../css/main.css";
import { useParams } from "react-router-dom";
import ReactImageAppear from "react-image-appear";
import "../css/profile.css";
import { Link } from "react-router-dom";
import { Recommended } from "./recommended";
import { Button } from "react-bootstrap";
import Rating from "@material-ui/lab/Rating";

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

export const Profile = (props) => {
  let { id } = useParams();

  props.goToProfile(id);

  let isCurrentUser = props.isCurrentUser(id);

  let user = props.currentProfile;

  let userToys = props.getUserToys(id);

  let noOfToys = userToys.length;

  let noOfFriends = user.friends.length;
  let friendsDisplay = 0;

  if (noOfFriends > 0) {
    if (noOfFriends > 4) {
      friendsDisplay = 4;
    } else {
      friendsDisplay = noOfFriends;
    }
  }

  return (
    <React.Fragment>
      <div className="container-fluid w-100" style={{ marginTop: "2em" }}>
        <div className="row w-100">
          <Recommended
            recommended={props.recommended}
            getToyPic={props.getToyPic}
            goToToy={props.goToToy}
          ></Recommended>

          {/* Profile pic and toys */}
          <div className="col-sm-4 mt-5 text-left">
            <div className="f-container">
              <div className="row">
                <div className="col-12">
                  <div className="profile-pic">
                    <ReactImageAppear
                      src={user.picture}
                      className="content-profile-pic"
                      placeholderClass="content-profile-pic"
                      key={user.picture}
                    />
                  </div>
                </div>
                <div className="col-8 align-self-center">
                  <h5>Toys ({noOfToys})</h5>
                </div>
                <div className="col-4 align-self-center">
                  {isCurrentUser ? (
                    <Link to="/newtoy">
                      <Button className="btn-sm">Add Toy</Button>
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-12">
                  <div className="container m-0 p-0">
                    <div className="row m-0 p-0">
                      {userToys.map((toyId) => {
                        return (
                          <div className="col-4 s-toy-img-container">
                            <ReactImageAppear
                              className="s-toy-img"
                              src={props.getToyPic(toyId)}
                              placeholderClass="s-toy-img"
                              key={toyId}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* name, info, and friends */}
          <div className="col-sm-4 mt-5 text-left">
            <div className="containter">
              <div className="row">
                <div className="col-12">
                  <h3>{user.name}</h3>
                </div>
                <div className="col-12">
                  <h5>
                    {user.city}, {user.country}
                  </h5>
                  <hr />
                </div>

                <div className="col-12">
                  <p>{user.info}</p>
                </div>

                <div className="col-12">
                  <p className="mb-0">Looking for:</p>
                  {user.wishList.map((wish) => (
                    <p>{wish}</p>
                  ))}
                </div>

                <div className="col-12">
                  <p className="mb-0">User Rating</p>

                  <Rating name="read-only" value={user.rating} readOnly />
                </div>
                <div className="col-4">
                  <p className="mb-0 mt-2">Points</p>
                  <h5>{user.points}</h5>
                </div>

                <div className="col-4">
                  <p className="mb-0 mt-2">Interactions</p>
                  <h5>{user.interactions}</h5>
                </div>

                <div className="col-4">
                  <p className="mb-0 mt-2">Friends</p>
                  <h5>{noOfFriends}</h5>
                </div>

                {user.friends.map((friend) => {
                  return (
                    <div className="col-3 mt-2 p-0">
                      <Link to={`/profile/${friend}`}>
                        <div className="container">
                          <div className="row">
                            <div className="col-12 m-0 p-0 friend-col">
                              <div className="friend-profile-pic">
                                <ReactImageAppear
                                  src={props.getUserPic(friend)}
                                  className="content-friend-profile-pic"
                                  placeholderClass="content-friend-profile-pic"
                                  key={friend}
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <p
                                style={{ fontSize: "0.8rem" }}
                                className="text-center"
                              >
                                {props.getUserName(friend).split(" ")[0]}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        ;
      </div>
      <div style={{ position: "relative" }}></div>
    </React.Fragment>
  );
};
