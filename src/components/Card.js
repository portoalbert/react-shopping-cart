import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.src} alt="" />
      <h3>{props.name}</h3>
      <h4>{props.description}</h4>
      <h4>${props.price}</h4>
      <button onClick={props.onClick}>Add To Cart</button>
    </div>
  );
}

export default Card;
