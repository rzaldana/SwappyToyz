import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Main } from "../components/main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SavedToys } from "../components/savedToys";
const toys = require("../toys/toys.js");
const users = require("../users/users.jsx");

export const HomePage = (props) => {
  const [currentToy, setCurrentToy] = useState(toys[1]);
  const [savedToys, setSavedToys] = useState([1]);

  const addToSavedToys = (toyId) => {
    console.log("Adding Toy");
    setSavedToys((toys) => [...toys, toyId]);
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
  return (
    <div>
      <Navbar expand="lg" variant="dark" className="color-nav">
        <Navbar.Brand href="/go">SwappyToyz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/app/a">Filter</Nav.Link>
            <Nav.Link href="#link">Conversations</Nav.Link>
            <Nav.Link href="/go/savedToys">Saved Toys</Nav.Link>

            <Nav.Link href="#savedToys">{props.user.name}</Nav.Link>

            <Nav.Link
              onClick={() => {
                props.setAuth(false);
                props.history.push("/");
              }}
            >
              Log Out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Route exact path="/go">
        <Main
          user={props.user}
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
      <Route exact path="/go/savedToys">
        <SavedToys
          savedToys={savedToys}
          getSavedToys={getSavedToys}
        ></SavedToys>
      </Route>
    </div>
  );
};
