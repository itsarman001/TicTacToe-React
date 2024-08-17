import React from "react";

function App() {
  return (
    <div className="w-screen bg-slate-700 h-screen flex items-center justify-start flex-col">
      <h2 className="text-3xl text-center text-white py-3 font-semibold uppercase">
        Tic Tac Toe <span className="text-cyan-300">React</span>
      </h2>
      <div className="grid grid-cols-3 gap-2 mb-5">
        <div className="bg-slate-500 min-w-20 h-20 rounded-md flex items-center justify-center text-white font-bold text-2xl"></div>
        <div className="bg-slate-500 min-w-20 h-20 rounded-md flex items-center justify-center text-white font-bold text-2xl"></div>
        <div className="bg-slate-500 min-w-20 h-20 rounded-md flex items-center justify-center text-white font-bold text-2xl"></div>
        <div className="bg-slate-500 min-w-20 h-20 rounded-md flex items-center justify-center text-white font-bold text-2xl"></div>
        <div className="bg-slate-500 min-w-20 h-20 rounded-md flex items-center justify-center text-white font-bold text-2xl"></div>
        <div className="bg-slate-500 min-w-20 h-20 rounded-md flex items-center justify-center text-white font-bold text-2xl"></div>
        <div className="bg-slate-500 min-w-20 h-20 rounded-md flex items-center justify-center text-white font-bold text-2xl"></div>
        <div className="bg-slate-500 min-w-20 h-20 rounded-md flex items-center justify-center text-white font-bold text-2xl"></div>
        <div className="bg-slate-500 min-w-20 h-20 rounded-md flex items-center justify-center text-white font-bold text-2xl"></div>
      </div>
      <button className="px-3 py-2 mx-auto bg-red-600 font-semibold uppercase rounded-md text-white hover:bg-red-700 active:scale-90 transition">Reset</button>
    </div>
  );
}

export default App;
