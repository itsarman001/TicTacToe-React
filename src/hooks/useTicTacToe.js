import { useState } from "react";

const initialBoard = () => Array(9).fill("");

function useTicTacToe() {
    const [board, setBoard] = useState(initialBoard());
    const [isXNext, setIsXNext] = useState(true);
    
}