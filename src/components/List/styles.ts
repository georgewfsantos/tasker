import styled from "styled-components";

interface ContainerProps {
  done?: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: 0 0.94rem;
  height: 100%;
  flex: 0 0 20rem;
  opacity: ${(props) => (props.done ? 0.4 : 1)};

  & + div {
    border-left: 0.062rem solid rgba(255, 255, 255, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.62rem;

    h2 {
      font-weight: 500;
      font-size: 1rem;
      padding: 0 0.62rem;
    }

    button {
      width: 2.62rem;
      height: 2.62rem;
      background: #ff5a59;
      border-radius: 1.12rem;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 1.87rem;
  }
`;
