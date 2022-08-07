import React from "react";
import { Card as ServiceCard } from "../../styles";
function Card(props) {
  const { logo, title, body } = props;
  return (
    <ServiceCard>
      <div className="card__logo">{logo}</div>
      <div className="card__title">{title}</div>
      <div className="card__body">{body}</div>
    </ServiceCard>
  );
}

export default Card;
