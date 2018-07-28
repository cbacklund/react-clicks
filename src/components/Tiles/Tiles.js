import React from "react";
import "./Tiles.css";

const Tiles = props => (
  <div className="Tile" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Tiles;