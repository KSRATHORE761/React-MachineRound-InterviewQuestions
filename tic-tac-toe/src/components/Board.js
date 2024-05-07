import React,{useState} from 'react';
import Square from './Square';
import CalculateWinner from '../utils/Helper';

function Board() {
  const[squares,setSquares]= useState(Array(9).fill(null));
  const[IsXNext,setIsXNext] = useState(true);

  const handleClick = (i) =>{
    if(squares[i] || CalculateWinner(squares)){
      return;
    }
    const nextSquare = squares.slice();
    if(IsXNext){
      nextSquare[i] = 'X';
    }
    else{
      nextSquare[i] = 'O';
    }
    setSquares(nextSquare);
    setIsXNext(!IsXNext);

  }
  const winner = CalculateWinner(squares);
  let status;
  if(winner){
    status = 'Winner: '+ winner;
  }
  else{
    status = 'Next player: ' + (IsXNext ? 'X' : 'O');
  }
  const reset = () =>{
    const resetSquare = squares.slice();
    resetSquare.fill(null);
    setSquares(resetSquare);
  }
  return (
    <div>
    <div className="status">{status}</div>
    <div className="board">
      <Square value={squares[0]} onClick={()=>handleClick(0)}/>
      <Square value={squares[1]}  onClick={()=>handleClick(1)}/>
      <Square value={squares[2]}  onClick={()=>handleClick(2)}/>
    </div>
    <div className="board">
      <Square value={squares[3]} onClick={()=>handleClick(3)}/>
      <Square value={squares[4]} onClick={()=>handleClick(4)}/>
      <Square value={squares[5]} onClick={()=>handleClick(5)}/>
    </div>
    <div className="board">
      <Square value={squares[6]} onClick={()=>handleClick(6)}/>
      <Square value={squares[7]} onClick={()=>handleClick(7)}/>
      <Square value={squares[8]} onClick={()=>handleClick(8)}/>
    </div>
    <button type="button" className="resetboard__btn" onClick={reset}>Reset Board</button>
    </div>
    
  )
}

export default Board