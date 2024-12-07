import useTicTacToe from "./hooks/useTicTacToe";
import TicTacToe from "./components/TicTacToe";

const App = () => {
  const { gameBoard, handleClick, statusMessage, scoreBoard, resetGame } = useTicTacToe();
  return <TicTacToe gameBoard={gameBoard} handleClick={handleClick} statusMessage={statusMessage} scoreBoard={scoreBoard} resetGame={resetGame} />;
};

export default App;
