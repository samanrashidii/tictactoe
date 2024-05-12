import Square from './Square';
import { useState } from 'react';

export default function App () {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null))

    const handleClick = function (i) {
        const newSquares = squares.slice();
        if (xIsNext) {
            newSquares[i] = 'X';
        } else {
            newSquares[i] = 'O';
        }
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    }

    return (
      <div className="game-board">
        {squares.map((square, index) => (
          <Square
            key={index}
            value={square}
            onSquareClick={() => handleClick(index)}
          />
        ))}
      </div>
    );
};
