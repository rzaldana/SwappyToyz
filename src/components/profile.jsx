import React, { useState } from "react";
import toy1 from "../img/toy1.png";
import toy2 from "../img/toy2.png";
import toy3 from "../img/toy3.png";
import "../css/main.css";
import { useParams } from "react-router-dom";
import ReactImageAppear from "react-image-appear";
import "../css/profile.css";
import { Link } from "react-router-dom";

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

  let user = props.getUser(id);

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
          {/* Profile pic and toys */}
          <div className="col-sm-4 mt-5 text-left">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="profile-pic">
                    <img src={user.picture} className="content-profile-pic" />
                  </div>
                </div>
                <div className="col-12">
                  <h5>Toys ({noOfToys})</h5>{" "}
                </div>
                <div className="col-12">
                  <div className="container m-0 p-0">
                    <div className="row m-0 p-0">
                      {userToys.map((toyId) => {
                        return (
                          <div className="col-4 s-toy-img-container">
                            <img
                              className="s-toy-img"
                              src={props.getToyPic(toyId)}
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
                    <h5>{wish}</h5>
                  ))}
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
                  <p className="mb-0 mt-2">Location</p>
                  <h5>{user.interactions}</h5>
                </div>

                <div className="col-4">
                  <p className="mb-0 mt-2">Friends</p>
                  <h5>{noOfFriends}</h5>
                </div>
                <div className="col-8"></div>

                {user.friends.map((friend) => {
                  return (
                    <div className="col-3 mt-2 p-0">
                      <Link to={`/profile/${friend}`}>
                        <div className="container">
                          <div className="row">
                            <div className="col-12 m-0 p-0 friend-col">
                              <div className="friend-profile-pic">
                                <img
                                  src={props.getUserPic(friend)}
                                  className="content-friend-profile-pic"
                                  placeholderClass="content-friend-profile-pic"
                                ></img>
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
