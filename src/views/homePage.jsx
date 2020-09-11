import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { ProtectedRoute } from "../protectedRoute";
import { Main } from "../components/main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SavedToys } from "../components/savedToys";

export const HomePage = (props) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/app">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/app/a">Filter</Nav.Link>
            <Nav.Link href="#link">Conversations</Nav.Link>
            <Nav.Link href="/app/savedToys">Saved Toys</Nav.Link>

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

      <Route exact path="/app" component={Main} />
      <Route exact path="/app/savedToys" component={SavedToys} />

      {/*<ProtectedRoute
        exact
        path="/app/a"
        setAuth={props.setAuth}
        auth={props.auth}
        user={props.user}
      component={Main}
      />*/}
    </div>
  );
};
