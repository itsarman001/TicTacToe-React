import React, { useState } from "react";
import useTicTacToe from "../hooks/useTicTacToe";

function TicTacToe() {
  const {
    board,
    isXNext,
    handleClick,
    getStatusMesage,
    checkWinner,
    resetGame,
  } = useTicTacToe();

  // Render the game component
  return (
    <section className="container">
      <h1 className="">
        Tic Tac Toe
      </h1>
      {/* Get Status Message */}
      <div>{getStatusMesage}</div>
      <div>
        <div>Score Board</div>
        <div>
          <span>X Score: </span>
          <span>O Score: </span>
        </div>
      </div>
      <div className="game-board">
      {board.map((board, index) => (
        <button key={index} className="cell" onClick={()=>{
          handleClick(index)
        }}>{board[index]}</button>
      ))}
      
        
      </div>

      <button onClick={() => resetGame()}>Restart</button>
    </section>
  );
}

export default TicTacToe;
