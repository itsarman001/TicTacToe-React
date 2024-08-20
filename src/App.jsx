import React from "react";
import TicTocToe from "./conponents/TicTacToe";
import TicTacToe from "./conponents/TicTacToe";

function App() {
  return (
    <div className="w-screen bg-slate-700 h-screen flex items-center justify-start flex-col">
      <h2 className="text-3xl text-center text-white py-3 font-semibold uppercase">
        Tic Tac Toe <span className="text-cyan-300">React</span>
      </h2>
      <TicTacToe />
    </div>
  );
}

export default App;
