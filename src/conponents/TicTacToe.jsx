import React, { useState } from "react";
import useTicTacToe from '../hooks/useTicTacToe'

function TicTacToe() {

  const {} = useTicTacToe()

  // Render the game component
  return (
    <div className="w-screen bg-slate-700 h-screen flex items-center justify-start flex-col">
      <h2 className="text-3xl text-center text-white py-3 font-semibold uppercase">
        Tic Tac Toe <span className="text-cyan-300">React</span>
      </h2>
      <div className="my-2 text-xl flex items-center justify-center">
        {winner && (
          <h4 className="text-white">
            Winner: <span className="text-lime-500">{winner}</span>
          </h4>
        )}
      </div>
      <div className="my-4 text-xl text-white px-5 py-2 text-center w-64">
        <div>Score Board</div>
        <div className="flex gap-2 items-center justify-between">
          <span
            className={`text-red-500  px-3 py-2 ${
              currentPlayer === "X" ? "border-b-red-400 border-b-2" : ""
            } `}
          >
            X: <span>{scoreBoard.X}</span>
          </span>
          <span
            className={`text-lime-500  px-3 py-2 ${
              currentPlayer === "O" ? "border-b-lime-400 border-b-2" : ""
            } `}
          >
            O: <span>{scoreBoard.O}</span>
          </span>
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
    </div>
  );
}

export default TicTacToe;
