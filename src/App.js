import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./views/login";
import { HomePage } from "./views/homePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./protectedRoute";

function App() {
  const [auth, setAuth] = useState(true);
  const [user, setUser] = useState({
    name: "Jane Doe",
    photo: "../img/jane-doe.png",
  });
  const [Queue, setQueue] = useState([]);
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route
            exact
            path="/"
            render={(props) => <Login {...props} setAuth={setAuth} />}
          />
          <ProtectedRoute
            path="/app"
            setAuth={setAuth}
            auth={auth}
            user={user}
            component={HomePage}
          />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
