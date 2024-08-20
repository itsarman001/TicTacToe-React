import React, { useState } from "react";

function TicTacToe() {
  const [gameBoard, setGameBoard] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleClick = (i) => {
    const newGameBoard = [...gameBoard];
    newGameBoard[i] = currentPlayer;
    setGameBoard(newGameBoard);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");

    const newWinner = checkWinner(newGameBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else if (isMatchDraw(newGameBoard)) {
      setWinner("Draw!");
    }
  };

  const checkWinner = (gameBoard) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const condition of winConditions) {
      const [a, b, c] = condition;
      if (
        gameBoard[a] &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[a] === gameBoard[c]
      ) {
        return gameBoard[a];
      }
    }
    return null;
  };

  const isMatchCompleted = (winner) => {
    if(winner) {

    }
  };

  const isMatchDraw = (board) => {
    return board.every((cell) => cell !== "");
  };

  return (
    <>
      <div className="my-5 text-xl">
        {winner === null && <h4 className="text-white">
          Player Turn : <span className="text-lime-500">{currentPlayer}</span>
        </h4>}
        {winner && <h4 className="text-white">
          Winner: <span className="text-lime-500">{winner}</span>
        </h4>}
      </div>
      <div className="grid grid-cols-3 gap-2 mb-5">
        <div
          className="box"
          onClick={() => {
            handleClick(0);
          }}
        >
          {gameBoard[0]}
        </div>
        <div
          className="box"
          onClick={() => {
            handleClick(1);
          }}
        >
          {gameBoard[1]}
        </div>
        <div
          className="box"
          onClick={() => {
            handleClick(2);
          }}
        >
          {gameBoard[2]}
        </div>
        <div
          className="box"
          onClick={() => {
            handleClick(3);
          }}
        >
          {gameBoard[3]}
        </div>
        <div
          className="box"
          onClick={() => {
            handleClick(4);
          }}
        >
          {gameBoard[4]}
        </div>
        <div
          className="box"
          onClick={() => {
            handleClick(5);
          }}
        >
          {gameBoard[5]}
        </div>
        <div
          className="box"
          onClick={() => {
            handleClick(6);
          }}
        >
          {gameBoard[6]}
        </div>
        <div
          className="box"
          onClick={() => {
            handleClick(7);
          }}
        >
          {gameBoard[7]}
        </div>
        <div
          className="box"
          onClick={() => {
            handleClick(8);
          }}
        >
          {gameBoard[8]}
        </div>
      </div>
      <button className="btn">Reset</button>
    </>
  );
}

export default TicTacToe;
