import produce from "immer";
import React, { useState } from "react";
import BoardContext from "../../context/boardContex";
import { loadLists } from "../../services/api";
import List, { CardObject } from "../List";
import Modal from "../Modal";
import { Container } from "./styles";

const listsArray = loadLists();

export interface ListObject {
  title: string;
  creatable: boolean;
  cards: CardObject[];
  done?: boolean;
}

const Board: React.FC = () => {
  const [lists, setLists] = useState<ListObject[]>(() => {
    const storedList = localStorage.getItem("@lists");
    return storedList ? JSON.parse(storedList) : listsArray;
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const moveItem = (
    fromListIndex: number,
    targetListIndex: number,
    from: number,
    to: number
  ) => {
    setLists(
      produce(lists, (draft) => {
        const draggedItem = draft[fromListIndex].cards[from];

        draft[fromListIndex].cards.splice(from, 1);
        draft[targetListIndex].cards.splice(to, 0, draggedItem);
      })
    );

    localStorage.setItem("@lists", JSON.stringify(lists));
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <BoardContext.Provider
      value={{ lists, setLists, moveItem, closeModal, setIsModalOpen }}
    >
      <Container>
        {lists.map((list: ListObject, index) => (
          <List key={list.title} list={list} listIndex={index} />
        ))}
      </Container>
      {isModalOpen && <Modal />}
    </BoardContext.Provider>
  );
};

export default Board;
