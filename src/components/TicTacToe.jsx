import useTicTacToe from "../hooks/useTicTacToe";

const TicTacToe = () => {
  const { gameBoard, handleClick, statusMessage, resetGame } = useTicTacToe();

  return (
    <section className="container">
      <div className="gameInfo">
        {/* Game Title */}
        <h3 className="gameTitle">Tic Tac Toe</h3>
        <div>
          {/* Status Message */}
          <span className="statusMessage">{statusMessage}</span>
          {/* Game Reset Btn */}
          <button className="resetBtn" onClick={() => resetGame()}>
            Restart
          </button>
        </div>
      </div>

      <div className="gameBoard">
        {gameBoard.map((board, index) => (
          <button
            className="gameBtns"
            disabled={board !== ""}
            onClick={() => handleClick(index)}
            key={index}
          >
            {board}
          </button>
        ))}
      </div>
    </section>
  );
};

export default TicTacToe;
