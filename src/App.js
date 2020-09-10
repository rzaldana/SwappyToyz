import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { LandingPage } from "./views/landingPage";
import { AppLayout } from "./views/appLayout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./protectedRoute";

function App() {
  const [auth, useAuth] = useState(false);

  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <h1>Protected React Router</h1>
          <Route
            exact
            path="/"
            render={(props) => <LandingPage {...props} useAuth={useAuth} />}
          />
          <ProtectedRoute
            exact
            path="/app"
            useAuth={useAuth}
            auth={auth}
            component={AppLayout}
          />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
