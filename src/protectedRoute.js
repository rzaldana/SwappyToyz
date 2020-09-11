import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({
  component: Component,
  auth,
  setAuth,
  user,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) {
          return <Component setAuth={setAuth} user={user} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
