import React from "react";

const Travels= props => (
  <figure>
    <figcaption>
      <p>{props.destination}</p>
      <p>{props.country}</p>
      <img src={props.photo} alt={props.destination} />
      <p>{props.distance}</p>
    </figcaption>
  </figure>
);

export default Travels;