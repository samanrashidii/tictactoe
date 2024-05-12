import Square from './Square';
import { useState } from 'react';

export default function Board () {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [history, setHistory] = useState([])
    const currentPlayer = `Player: ${xIsNext ? 'X' : 'O'}`;

    const handleClick = function (i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const newSquares = squares.slice();
        if (xIsNext) {
            newSquares[i] = 'X';
        } else {
            newSquares[i] = 'O';
        }
        setSquares(newSquares);
        if (calculateWinner(newSquares)) {
            alert(`Winner is ${xIsNext ? 'X' : 'O'}`)
        } else {
            setXIsNext(!xIsNext);
        }
    }

    const resetBoard = function () {
        setSquares(Array(9).fill(null));
    }

    function calculateWinner (squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

    return (
      <div className="game-board">
        <div
            className="panel"
        >
            {currentPlayer}
        </div>
        <div
            className="board"
        >
            {squares.map((square, index) => (
                <Square
                    key={index}
                    value={square}
                    onSquareClick={() => handleClick(index)}
                />
            ))}
        </div>
        <button
            className="reset-button"
            onClick={resetBoard}
        >
            Reset
        </button>
      </div>
    );
};
