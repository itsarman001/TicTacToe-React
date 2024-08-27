import Square from "./Square";

function Board({board, handleClick, }) {
  return (
    <div className="grid grid-cols-3 gap-2 mb-5">
      {/* Render the game board cells */}
      {board.map((board,index)=>{
        <Square value={board[index]} handleClick={handleClick} />
      })}
    </div>
  );
}

export default Board;
