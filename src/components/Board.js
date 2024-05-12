import Square from './Square';
import { useState } from 'react';

export default function App () {
    const [squares, setSquares] = useState(Array(9).fill(null))

    return (
      <div className="game-board">
        {squares.map((square) => (
          <Square
            key={square}
            value={square}
          />
        ))}
      </div>
    );
};
