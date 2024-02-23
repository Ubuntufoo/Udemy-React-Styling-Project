// child component of Player.jsx to display the grid of the tic-tac-toe game board

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare }) {

//   const [gameBoard, setGameBoard] = useState(initialGameBoard);

//   function handleSelectSquare(rowIndex, colIndex) {
//     setGameBoard((prevGameBoard) => {
//       const updatedBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
//       updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
//       return [...updatedBoard];
//     });

//     onSelectSquare();
// }

  return (
    <ol id="game-board">
            {gameBoard.map((row, rowIndex) => {
              return (
                <li key={rowIndex}>
                  <ol>
                    {row.map((playerSymbol, colIndex) => {
                      return (
                        <li key={colIndex}>
                          <button onClick={onSelectSquare}>{playerSymbol}</button>
                        </li>
                      );
                    })}
                  </ol>
                </li>
              );
            })}
          </ol>
        )
      }
