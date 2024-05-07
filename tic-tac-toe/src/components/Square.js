import React from 'react'

function Square({value,onClick}) {
  return (
    <div className="square__container">
    <button className="square" onClick={onClick}>{value}</button>
    </div>
     
  )
}

export default Square