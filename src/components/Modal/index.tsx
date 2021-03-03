import { FormEvent, useContext, useState } from "react";
import BoardContext from "../../context/boardContex";
import { MdClose } from "react-icons/md";

import { Container, Content } from "./styles";
import { setMaxListeners } from "process";

const Modal: React.FC = () => {
  const { closeModal } = useContext(BoardContext);
  const [taskDescription, setTaskDescription] = useState("");
  const { lists, setLists } = useContext(BoardContext);

  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    setTaskDescription(event.currentTarget.value);
  };

  const handleKeypress = (event: KeyboardEvent) => {};

  return (
    <Container>
      <Content>
        <h3>Type task description</h3>

        <input
          name="content"
          type="text"
          onKeyPress={() => {}}
          onChange={handleInputChange}
        />
        <button type="button" onClick={closeModal}>
          <MdClose color="#ff5a59" size={20} />
        </button>
      </Content>
    </Container>
  );
};

export default Modal;
