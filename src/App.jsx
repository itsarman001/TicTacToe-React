import React, { useState } from "react";

function App() {
  let data = ["", "", "", "", "", "", "", "", ""];
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);

  const toggle = (e, num) => {
    if (lock) return 0;
    
    count % 2 === 0 ? (e.target.innerHTML = "X") : (e.target.innerHTML = "O");
    data[num] = count % 2 === 0 ? "X" : "O";
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="w-screen bg-slate-700 h-screen flex items-center justify-start flex-col">
      <h2 className="text-3xl text-center text-white py-3 font-semibold uppercase">
        Tic Tac Toe <span className="text-cyan-300">React</span>
      </h2>
      <div className="grid grid-cols-3 gap-2 mb-5">
        <div
          className={`bg-slate-500 min-w-20 h-20 rounded-md flex items-center justify-center text-white font-bold text-2xl`}
          onClick={(e) => {
            toggle(e, 0);
          }}
        ></div>
        <div
          className={`bg-slate-500 min-w-20 h-20 rounded-md flex items-center justify-center text-white font-bold text-2xl`}
          onClick={(e) => {
            toggle(e, 1);
          }}
        ></div>
        <div
          className={`bg-slate-500 min-w-20 h-20 rounded-md flex items-center justify-center text-white font-bold text-2xl`}
          onClick={(e) => {
            toggle(e, 2);
          }}
        ></div>
        <div
          className={`bg-slate-500 min-w-20 h-20 rounded-md flex items-center justify-center text-white font-bold text-2xl`}
          onClick={(e) => {
            toggle(e, 3);
          }}
        ></div>
        <div
          className={`bg-slate-500 min-w-20 h-20 rounded-md flex items-center justify-center text-white font-bold text-2xl`}
          onClick={(e) => {
            toggle(e, 4);
          }}
        ></div>
        <div
          className={`bg-slate-500 min-w-20 h-20 rounded-md flex items-center justify-center text-white font-bold text-2xl`}
          onClick={(e) => {
            toggle(e, 5);
          }}
        ></div>
        <div
          className={`bg-slate-500 min-w-20 h-20 rounded-md flex items-center justify-center text-white font-bold text-2xl`}
          onClick={(e) => {
            toggle(e, 6);
          }}
        ></div>
        <div
          className={`bg-slate-500 min-w-20 h-20 rounded-md flex items-center justify-center text-white font-bold text-2xl`}
          onClick={(e) => {
            toggle(e, 7);
          }}
        ></div>
        <div
          className={`bg-slate-500 min-w-20 h-20 rounded-md flex items-center justify-center text-white font-bold text-2xl`}
          onClick={(e) => {
            toggle(e, 8);
          }}
        ></div>
      </div>
      <button className="px-3 py-2 mx-auto bg-red-600 font-semibold uppercase rounded-md text-white hover:bg-red-700 active:scale-90 transition">
        Reset
      </button>
    </div>
  );
}

export default App;
