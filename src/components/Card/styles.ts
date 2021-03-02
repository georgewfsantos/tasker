import styled from "styled-components";

export const Container = styled.div`
  border-radius: 0.31rem;
  border: 0.12rem solid #d5d5d5;
  margin-bottom: 0.62rem;
  padding: 0.94rem;
  box-shadow: 0 2px 2px 0 rgba(255, 255, 255, 0.2),
    0 1px 6px 0 rgba(255, 255, 255, 0.19);
  cursor: grab;

  header {
    height: 0.2rem;
    margin-bottom: 0.92rem;
  }

  p {
    font-weight: 500;
    line-height: 1.25rem;
  }

  img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.12rem;
    margin-top: 0.31rem;
  }
`;

export const Label = styled.span`
  width: 0.62rem;
  height: 0.62rem;
  border-radius: 0.125rem;
  display: inline-block;
  background: ${(props) => props.color};
`;
