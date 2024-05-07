import React from 'react'

function Square({value,onClick}) {
  return (
    <div className="square__container">
  <button className="sqaure" type="button" onClick={onClick}>
  {value}
  </button> 
    </div>
     
  )
}

export default Square