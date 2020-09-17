import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./views/login";
import { HomePage } from "./views/homePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./protectedRoute";
import { Main } from "./components/main";

function App() {
  const [auth, setAuth] = useState(true);
  const [user, setUser] = useState({
    id: 123,
    name: "Jane Doe",
    photo: "../img/jane-doe.png",
  });
  const [Queue, setQueue] = useState([]);
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <HomePage user={user}>
            <Route exact path="/hi">
              <Main></Main>
            </Route>
          </HomePage>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
