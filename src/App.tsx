import React from "react";
import Board from "./components/Board";
import Header from "./components/Header";
import GlobalStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Board />
      <GlobalStyle />
    </>
  );
};

export default App;
