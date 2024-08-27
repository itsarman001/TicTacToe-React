import React from "react";

function Square({ onClick, value }) {
  return (
    <button
      className=" bg-slate-500 min-w-20 h-20 rounded-md flex items-center justify-center text-white font-bold text-2xl"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Square;
