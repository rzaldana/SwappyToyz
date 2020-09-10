import React from "react";
import auth from "../auth";

export const LandingPage = (props) => {
  return (
    <div>
      <h1>Landing Page</h1>
      <button
        onClick={() => {
          props.useAuth(true);
          props.history.push("/app");
        }}
      >
        Log in
      </button>
    </div>
  );
};
