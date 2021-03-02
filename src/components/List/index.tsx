import React from "react";
import { MdAdd } from "react-icons/md";

import Card from "../Card";

import { Container } from "./styles";

export interface CardObject {
  id: number;
  content: string;
  labels: string[];
  user?: string;
}

interface ListProps {
  list: {
    title: string;
    creatable: boolean;
    cards: CardObject[];
    done?: boolean;
  };
  listIndex: number;
}

const List: React.FC<ListProps> = ({ list, listIndex }) => {
  return (
    <Container done={list.done}>
      <header>
        <h2>{list.title}</h2>
        {list.creatable && (
          <button type="button">
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>

      <ul>
        {list.cards.map((card, index) => (
          <Card key={card.id} card={card} index={index} listIndex={listIndex} />
        ))}
      </ul>
    </Container>
  );
};

export default List;
