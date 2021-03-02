import React, { useState } from "react";
import produce from "immer";

import { loadLists } from "../../services/api";
import BoardContext from "../../context/boardContex";

import { Container } from "./styles";

import List, { CardObject } from "../List";

const listsArray = loadLists();

export interface ListObject {
  title: string;
  creatable: boolean;
  cards: CardObject[];
  done?: boolean;
}

const Board: React.FC = () => {
  const [lists, setLists] = useState<ListObject[]>(listsArray);
  console.log(listsArray);

  const moveItem = (
    fromListIndex: number,
    targetListIndex: number,
    from: number,
    to: number
  ) => {
    console.log(from, to);

    setLists(
      produce(lists, (draft) => {
        const draggedItem = draft[fromListIndex].cards[from];

        draft[fromListIndex].cards.splice(from, 1);
        draft[targetListIndex].cards.splice(to, 0, draggedItem);
      })
    );
  };

  return (
    <BoardContext.Provider value={{ lists, moveItem }}>
      <Container>
        {lists.map((list: ListObject, index) => (
          <List key={list.title} list={list} listIndex={index} />
        ))}
      </Container>
    </BoardContext.Provider>
  );
};

export default Board;
