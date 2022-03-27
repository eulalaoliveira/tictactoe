/**
 * tic tac toe page container
 * @author Larissa Oliveira Santos
 */

import React, { useContext } from "react"
import Title from "../components/Title";
import Board from "../components/Board";
import Footer from "../components/Footer";
import { Context } from "../context/AppProvider";

export default function TicTacToe() {
  const { winner, board, handleCellClick, resetGame } = useContext(Context);

  return (
    <main>
      <Title />
      <img 
        src="https://geniuscrew.eu/wp-content/uploads/2021/09/astronauta-download-1024x576-1.png"
        alt="astronauta"
      />
      <Board winner={winner} board={board} handleCellClick={handleCellClick} />
      {winner && <Footer winner={winner} resetGame={resetGame} />}
    </main>
  );
}

