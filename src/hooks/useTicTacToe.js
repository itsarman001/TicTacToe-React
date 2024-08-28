import { useState } from "react";

const initialBoard = () => Array(9).fill("");

const useTicTacToe = () => {
  const [gameBoard, setGameBoard] = useState(initialBoard());
  const [isXNext, setIsXNext] = useState(true);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleClick = (index) => {
    if (gameBoard[index] !== "") return;
    
    const newGameBoard = [...gameBoard];
    newGameBoard[index] = isXNext ? "X" : "O";
    const winner = checkWinner(newGameBoard);

    if (winner) {
      setGameBoard(newGameBoard);
      getStatusMessage(winner, newGameBoard);
      return;
    }

    setIsXNext(!isXNext);
    getStatusMessage(winner, newGameBoard);
    setGameBoard(newGameBoard);
  };

  const getStatusMessage = (winner, newGameBoard) => {
    if (winner) return setStatusMessage(`Player ${winner} Wins!`);
    if (!newGameBoard.includes("")) return setStatusMessage("It's a Draw");
    return setStatusMessage(`Player ${isXNext ? "O" : "X"} Turn 😉`);
  };

  const WINNING_PATTERN = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (gameBoard) => {
    for (let index = 0; index < WINNING_PATTERN.length; index++) {
      const [a, b, c] = WINNING_PATTERN[index];
      if (
        gameBoard[a] &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[a] === gameBoard[c]
      ) {
        console.log(`Winner Found ${gameBoard[a]}`);
        return gameBoard[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setGameBoard(initialBoard());
  };

  return { gameBoard, statusMessage, handleClick, resetGame };
};

export default useTicTacToe;
