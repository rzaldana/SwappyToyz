import React from "react";

export const SavedToys = (props) => {
  console.log("Saved Toys");
  console.log(props.savedToys);
  console.log(props.getSavedToys());
  return props.savedToys.map((toy) => <p>{toy}</p>);
};
