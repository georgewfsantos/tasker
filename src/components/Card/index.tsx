import React, { useRef, useContext } from "react";
import { CardObject } from "../List";
import { useDrag, useDrop } from "react-dnd";

import BoardContext from "../../context/boardContex";

import { Container, Label } from "./styles";

interface CardProps {
  card: CardObject;
  index: number;
  listIndex: number;
}

interface Item {
  type: string;
  id: number;
  index: number;
  listIndex: number;
}

const Card: React.FC<CardProps> = ({ card, index, listIndex }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { moveItem } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: "CARD", index, listIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover: (item: Item, monitor) => {
      const draggedFromListIndex = item.listIndex;
      const targetListIndex = listIndex;
      const draggedItemIndex = item.index;
      const targetItemIndex = index;

      if (
        draggedItemIndex === targetItemIndex &&
        draggedItemIndex === targetListIndex
      ) {
        return;
      }

      const targetItemSize = ref.current?.getBoundingClientRect();

      const targetItemCenter =
        (targetItemSize!.bottom - targetItemSize!.top) / 2;

      const draggedItemOffset = monitor.getClientOffset();
      const draggedItemTop = draggedItemOffset!.y - targetItemSize!.top;

      if (
        draggedItemIndex < targetItemIndex &&
        draggedItemTop < targetItemCenter
      ) {
        return;
      }

      if (
        draggedItemIndex > targetItemIndex &&
        draggedItemTop > targetItemCenter
      ) {
        return;
      }

      moveItem(
        draggedFromListIndex,
        targetListIndex,
        draggedItemIndex,
        targetItemIndex
      );

      item.index = targetItemIndex;
      item.listIndex = targetListIndex;
    },
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
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
