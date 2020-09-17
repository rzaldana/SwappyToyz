import React, { useState } from "react";
import "./App.css";
import { HomePage } from "./views/homePage";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Main } from "./components/main";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { SavedToys } from "./components/savedToys";

const toys = require("./toys/toys.js");
const users = require("./users/users.jsx");

function App() {
  const [auth, setAuth] = useState(true);
  const [user, setUser] = useState({
    id: 123,
    name: "Jane Doe",
    photo: "../img/jane-doe.png",
  });

  // definitions from Homepage

  const [currentToy, setCurrentToy] = useState(toys[1]);
  const [savedToys, setSavedToys] = useState(new Set());

  const addToSavedToys = (toyId) => {
    console.log("Adding Toy");
    setSavedToys((toys) => new Set(toys).add(toyId));
    console.log("State is now: ");
    console.log(savedToys);
  };

  const getSavedToys = () => {
    return savedToys;
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

  // end of defintions from HomePage

  return (
    <div className="App">
      <BrowserRouter>
        {/*Navbar*/}

        <div>
          <Navbar expand="lg" variant="dark" className="color-nav">
            <Navbar.Brand>
              <Link to="/">SwappyToyz</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#">Filter</Nav.Link>
                <Nav.Link href="#">Conversations</Nav.Link>
                <Nav.Link>
                  <Link to="/saved-toys">Saved Toys</Link>
                </Nav.Link>

                <Nav.Link href="#savedToys">{user.name}</Nav.Link>

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
            />
          </Route>
          <Route exact path="/saved-toys">
            <SavedToys
              savedToys={savedToys}
              getSavedToys={getSavedToys}
            ></SavedToys>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
