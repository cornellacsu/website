import React from "react";
import styles from "./Card.css";

function Card(props) {
  console.log("../../img/team/" + props.img);
  return (
    <div className="card my-4">
      <h4 className="card-title text-center my-t-3">{props.name}</h4>
      <h4 className="card-title text-center my-2">{props.team}</h4>
      <div className="image-cropper">
        <img src={require("../../img/team/" + props.img)} />
      </div>
      <img src={require("./Xinyu.jpg")}></img>
    </div>
  );
}

export default Card;
