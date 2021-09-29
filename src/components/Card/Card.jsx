import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card my-4">
      <div className="image-cropper">
        {/* Need to require local images in React */}
        <img src={require("../../img/team/" + props.img)} alt={props.name} />
      </div>
      {
        props.eboard != null &&
        <a href={"mailto:" + props.email + "@cornell.edu"}>
          <img className="card-mail" src={require("../../img/email.png")} alt={props.email}></img>
        </a>

      }
      <h4 className="card-title text-center">{props.name}</h4>
    </div>
  );
}

export default Card;
