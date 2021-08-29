import React from "react";
import "./Card.css";

function Card(props) {
  console.log("../../img/team/" + props.img);
  return (
    <div className="card my-4">
      <h4 className="card-title text-center my-t-3">{props.name}</h4>
      <h4 className="card-title text-center my-2">{props.team}</h4>
      <div className="image-cropper">
        {/* Need to require local images in React */}
        {/* Webpack loads image object modules -> need to call .default to get src attribute */}
        <img src={require("../../img/team/" + props.img).default} alt={props.name} />
      </div>
      <a href={"mailto:" + props.email}>
        <img className="card-mail" src={require("../../img/email.png").default} alt={props.email}></img>
      </a>
    </div>
  );
}

export default Card;
