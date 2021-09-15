import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card my-4">
      <div className="image-cropper">
        {/* Need to require local images in React */}
        {/* Webpack loads image object modules -> need to call .default to get src attribute */}
        <img src={require("../../img/team/" + props.img).default} alt={props.name} />
      </div>
      {
        props.eboard != null &&
        <a href={"mailto:" + props.email}>
          <img className="card-mail" src={require("../../img/email.png").default} alt={props.email}></img>
        </a>

      }
      <h4 className="card-title text-center my-t-3">{props.name}</h4>
    </div>
  );
}

export default Card;
