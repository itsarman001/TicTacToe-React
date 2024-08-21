import React, { useState } from "react";

function TicTacToe() {
  const [gameBoard, setGameBoard] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [scoreBoard, setScoreBoard] = useState({ X: 0, O: 0 });

  const handleClick = (i) => {
    const newGameBoard = [...gameBoard];
    newGameBoard[i] = currentPlayer;
    setGameBoard(newGameBoard);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");

    const newWinner = checkWinner(newGameBoard);
    if (newWinner) {
      setWinner(newWinner);
      isMatchCompleted(newWinner, newGameBoard);
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

  const isMatchCompleted = (winner, gameBoard) => {
    if (winner) {
      gameBoard = ["G", "A", "M", "E", "O", "V", "E", "R", "🎉"];
      setGameBoard(gameBoard);
      setScoreBoard((prevScoreBorad) => ({
        ...prevScoreBorad,
        winner: prevScoreBorad.winner + 1,
      }));
    }
  };

  const isMatchDraw = (board) => {
    return board.every((cell) => cell !== "");
  };

  const restart = () => {
    setGameBoard(Array(9).fill(""));
    setWinner(null);
  };

  return (
    <>
      <div className="my-2 text-xl">
      {winner === null && (
          <h4 className="text-white">
            Player Turn : <span className="text-yellow-500">{currentPlayer}</span>
          </h4>
        )}
        {winner && (
          <h4 className="text-white">
            Winner: <span className="text-lime-500">{winner}</span>
          </h4>
        )}
      </div>

      <div className="my-3 text-xl text-white">
        <div>Score Board</div>
        <div className="flex gap-2 items-center justify-between">
          <span className="text-red-500">X: <span className="text-yellow-400">{scoreBoard.X}</span></span>
          <span className="text-green-500">O: <span className="text-yellow-400">{scoreBoard.O}</span></span>
        </div>

      </div>
      <div className="grid grid-cols-3 gap-2 mb-5">
        <div
          class="box"
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
      <button
        className="btn"
        onClick={() => {
          restart();
        }}
      >
        Restart
      </button>
    </>
  );
}

export default TicTacToe;
