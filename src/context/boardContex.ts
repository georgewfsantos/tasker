import { createContext } from "react";
import { ListObject } from "../components/Board";

interface BoardContextData {
  lists: ListObject[];
  moveItem: (
    fromListIndex: number,
    targetListIndex: number,
    from: number,
    to: number
  ) => void;
}

const BoardContext = createContext({} as BoardContextData);

export default BoardContext;
