import styled from "styled-components";

export const Container = styled.div`
  background: rgba(128, 128, 128, 0.8);
  /* background: rgba(242, 243, 245, 0.8); */
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background: #fff;
  /* background: var(--white); */
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60 rgba(255, 255, 255, 0.05);
  /* box-shadow: 0 0 60 rgba(0, 0, 0, 0.05); */
  text-align: center;
  position: relative;

  h3 {
    color: #434343;
  }

  input {
    width: 100%;
    margin-top: 0.62rem;
    padding: 0.5rem;
    outline: 0;

    &:focus {
      border: 1px solid #ff5a59;
    }
  }

  button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: transparent;
    border: 0;
    font-size: 0;
    cursor: pointer;
    outline: var(--blue);
  }
`;
