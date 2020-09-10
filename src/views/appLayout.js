import React from "react";

export const AppLayout = (props) => {
  return (
    <div>
      <h1>App Layout</h1>
      <button
        onClick={() => {
          props.useAuth(false);
          props.history.push("/");
        }}
      >
        Log out
      </button>
    </div>
  );
};
