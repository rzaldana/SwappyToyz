import React from "react";
import ReactImageAppear from "react-image-appear";
import "../css/recommended.css";
import { Link } from "react-router-dom";

export const Recommended = (props) => {
  return (
    <div className="col-sm-2 f-container">
      <h5>Recommended</h5>
      {/*TODO: FIX RECOMMENDED IMAGES SPACING ISSUES */}
      {props.recommended.map((toyId) => {
        return (
          <div className="rec-img-container">
            <Link to="/" style={{ width: "100%" }}>
              <ReactImageAppear
                src={props.getToyPic(toyId)}
                onClick={() => props.goToToy(toyId)}
                className="rec-img"
                placeholderClass="rec-img"
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
