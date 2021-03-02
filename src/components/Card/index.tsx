import React from "react";
import { CardObject } from "../List";

import { Container, Label } from "./styles";

interface CardProps {
  card: CardObject;
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <Container>
      <header>
        {card.labels.map((label) => (
          <Label key={label} color={label} />
        ))}
      </header>
      <p>{card.content}</p>
      {card.user && <img src={card.user} alt="Avatar" />}
    </Container>
  );
};

export default Card;
