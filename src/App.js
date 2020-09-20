import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Main } from "./components/main";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { SavedToys } from "./components/savedToys";
import { Conversations } from "./components/conversations.jsx";
import { Profile } from "./components/profile.jsx";
import ReactImageAppear from "react-image-appear";

const toys = require("./toys/toys.js");
const users = require("./users/users.jsx");

function App() {
  const [auth, setAuth] = useState(true);
  const [user, setUser] = useState(5);

  // definitions from Homepage

  const [currentToy, setCurrentToy] = useState(toys[1]);
  const [savedToys, setSavedToys] = useState(new Set());
  const [conversations, setConversations] = useState(new Set());

  const addToConversations = (userId) => {
    setConversations((convos) => new Set(convos).add(userId));
  };

  const addToSavedToys = (toyId) => {
    console.log("Adding Toy");
    setSavedToys((toys) => new Set(toys).add(toyId));
    console.log("State is now: ");
    console.log(savedToys);
  };

  const getSavedToys = () => {
    return savedToys;
  };

  const getToy = (id) => {
    return toys[id];
  };

  const getNextToy = (id) => {
    const randNum = Math.floor(Math.random() * 10);
    const toy = toys[randNum];
    setCurrentToy(toy);
  };

  const getUserPic = (id) => {
    return users[id].picture;
  };

  const getUserName = (id) => {
    return users[id].name;
  };

  const getUserWishList = (id) => {
    return users[id].wishList;
  };

  const userMatch = (id) => {
    return users[id].match;
  };

  const getUser = (id) => {
    return users[id];
  };

  const getUserToys = (id) => {
    console.log("Entering getUserToys");
    console.log("toys =");
    console.log(toys);
    let userToys = [];

    console.log("user id:");
    console.log(id);

    toys.forEach((toy) => {
      if (id == toy.ownerId) {
        userToys.push(toy.id);
      }
    });

    return userToys;
  };

  // end of defintions from HomePage

  return (
    <div className="App">
      <BrowserRouter>
        {/*Navbar*/}

        <div>
          <Navbar expand="lg" variant="dark" className="color-nav">
            <Navbar.Brand>
              <Link className="router-link" to="/">
                SwappyToyz
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#">Filter</Nav.Link>
                <Nav.Link href="#">
                  <Link className="router-link" to="/conversations">
                    Conversations
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="router-link" to="/saved-toys">
                    Saved Toys
                  </Link>
                </Nav.Link>

                <Nav.Link href="#savedToys">
                  <Link className="router-link" to={`/profile/${user}`}>
                    {getUserName(user)}
                    {/* 
                    <div>
                      <ReactImageAppear src={getUserPic(user)} />
                    </div>*/}
                  </Link>
                </Nav.Link>

                <Nav.Link>Log Out</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <Switch>
          <Route exact path="/">
            <Main
              user={user}
              toy={currentToy}
              getNextToy={getNextToy}
              getUserPic={getUserPic}
              getUserName={getUserName}
              getUserWishList={getUserWishList}
              userMatch={userMatch}
              addToSavedToys={addToSavedToys}
              getSavedToys={getSavedToys}
              addToConversations={addToConversations}
            />
          </Route>
          <Route exact path="/saved-toys">
            <SavedToys savedToys={savedToys} getToy={getToy}></SavedToys>
          </Route>
          <Route exact path="/conversations">
            <Conversations
              conversations={conversations}
              getUser={getUser}
            ></Conversations>
          </Route>
          <Route path="/profile/:id">
            <Profile
              getUser={getUser}
              getUserToys={getUserToys}
              getUserPic={getUserPic}
              getUserName={getUserName}
            ></Profile>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
