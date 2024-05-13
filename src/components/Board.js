import Square from './Square';

export default function Board ({xIsNext, squares, gameIsTie, onPlay}) {

    const winner = calculateWinner(squares);
    let status = 'Next player: ' + (xIsNext ? 'X' : 'O')

    const handleClick = function (i) {
        
        if (winner) {
            status = 'Winner is : ' + winner;
        }
        if (gameIsTie) {
            status = 'Game is Tie';
        }

        if (squares[i] || winner) {
            return;
        }
        const newSquares = squares.slice();
        if (xIsNext) {
            newSquares[i] = 'X';
        } else {
            newSquares[i] = 'O';
        }
        onPlay(newSquares);
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
        <>
            <div className="status panel">{status}</div>
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
        </>
    );
};
