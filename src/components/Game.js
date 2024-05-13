import Board from './Board';
import { useState } from 'react';

export default function Game () {
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[currentMove];
    const [gameIsTie, setGameIsTie] = useState(false);

    function handlePlay (newSquares) {
        const newHistory = [...history.slice(0, currentMove + 1), newSquares];
        setHistory(newHistory);
        setCurrentMove(newHistory.length - 1);
        history.forEach((historyItem) => {
            if (!historyItem) {
                setGameIsTie(true);
            }
        })
    }

    function jumpTo (nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = `Go to move #${move}`;
        } else {
            description = `Go to game start`;
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })

    return (
      <div className="game">
        <div className="game-board">
            <Board xIsNext={xIsNext} squares={currentSquares} gameIsTie={gameIsTie} onPlay={handlePlay} />
        </div>
        <div className="game-info">
            <ol>{moves}</ol>
        </div>
      </div>
    );
};
