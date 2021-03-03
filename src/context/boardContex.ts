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
  closeModal: () => void;
  setLists: React.Dispatch<React.SetStateAction<ListObject[]>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BoardContext = createContext({} as BoardContextData);

export default BoardContext;
