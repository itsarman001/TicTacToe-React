import { useState } from "react";

const initialBoard = () => Array(9).fill("");

export default function useTicTacToe() {
  const [board, setBoard] = useState(initialBoard());
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (i) => {
    const winner = checkWinner(board);
    if (winner || board[i]) return;
    const newBoard = [...board];
    newBoard[i] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

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

  const checkWinner = (currentBoard) => {
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const getStatusMesage = () => {
    const winner = checkWinner(board);
    if(winner) return `Player ${winner} Wins!`;
    if(!board.includes(null)) return `Its a Draw!`;
    return `Player ${isXNext? "X": "O"} Turn`;
  };
  const resetGame = () => {
    setBoard[initialBoard()];
  };

  return {
    board,
    isXNext,
    handleClick,
    getStatusMesage,
    checkWinner,
    resetGame,
  };
}
