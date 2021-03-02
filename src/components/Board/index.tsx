import React from "react";
import { loadLists } from "../../services/api";

import { Container } from "./styles";

import List from "../List";

const lists = loadLists();

const Board: React.FC = () => {
  return (
    <Container>
      {lists.map((list) => (
        <List key={list.title} list={list} />
      ))}
    </Container>
  );
};

export default Board;
