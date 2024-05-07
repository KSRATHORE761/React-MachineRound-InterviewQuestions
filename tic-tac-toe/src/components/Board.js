import React,{useState} from 'react';
import Square from './Square';
import CalculateWinner from '../utils/Helper';

function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    //const[xNext,setXNext] = useState(true);
    function handleClick(i) {
        if (CalculateWinner(squares) || squares[i]) {
          return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
          nextSquares[i] = 'X';
        } else {
          nextSquares[i] = 'O';
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
      }
    const winner = CalculateWinner(squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

  return (
    <div>
    <div className="status">{status}</div>
<div className="board">
    <div>
        <Square value={squares[0]} onClick={() => handleClick(0)}></Square>
         <Square value={squares[1]} onClick={() => handleClick(1)}></Square>
         <Square value={squares[2]} onClick={() => handleClick(2)}></Square>
    </div>
    <div>
         <Square value={squares[3]} onClick={() => handleClick(3)}></Square>
         <Square value={squares[4]} onClick={() => handleClick(4)}></Square>
         <Square value={squares[5]} onClick={() => handleClick(5)}></Square>
    </div>
    <div>
         <Square value={squares[6]}  onClick={() => handleClick(6)}></Square>
         <Square value={squares[7]} onClick={() => handleClick(7)}></Square>
         <Square value={squares[8]} onClick={() => handleClick(8)}></Square>
    </div>
    </div>
    </div>
    
  )
}

export default Board