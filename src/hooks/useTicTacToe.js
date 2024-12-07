import { useState } from "react";

const initialBoard = () => Array(9).fill("");

const useTicTacToe = () => {
  const [gameBoard, setGameBoard] = useState(initialBoard());
  const [isXNext, setIsXNext] = useState(true);
  const [statusMessage, setStatusMessage] = useState(null);
  const [scoreBoard, setScoreBoard] = useState({ X: 0, O: 0 });

  const handleClick = (index) => {
    if (gameBoard[index] !== "") return;

    const newGameBoard = [...gameBoard];
    const winner = checkWinner(newGameBoard);

    if (winner) {
      setGameBoard(newGameBoard);
      getStatusMessage(winner, newGameBoard);
      getScoreBoard(winner)
      return;
    }
    newGameBoard[index] = isXNext ? "X" : "O";

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
        return gameBoard[a];
      }
    }
    return null;
  };

  const getScoreBoard = (winner) => {
    if (winner == "X") {
      setScoreBoard((prevScoreBoard) => ({
        ...prevScoreBoard,
        X: prevScoreBoard.X + 1,
      }));
    } else {
      setScoreBoard((prevScoreBoard) => ({
        ...prevScoreBoard,
        X: prevScoreBoard.X + 1,
      }));
    }
  };

  const resetGame = () => {
    setGameBoard(initialBoard());
  };

  return { gameBoard, statusMessage, handleClick, scoreBoard, resetGame };
};

export default useTicTacToe;
