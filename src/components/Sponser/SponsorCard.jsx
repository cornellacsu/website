import React from "react";
import {Palette} from 'react-palette';
import "./Sponsors.css";

function SponsorCard({ link, img, imgName, width}) {
  return (

<Palette src={img}>
{({ data, loading, error }) => (
    <div class="color-container-sponsors" style={{ 'background-color': data.vibrant }}>
        <div class="white-container-sponsors">
        <a href={link}>
            <img
                src={img}
                alt={imgName}
                className="d-inline-block align-text-top">
            </img>
        </a>
        </div>
    </div>
)}
</Palette>
  )
}

export default SponsorCard;