import React from 'react'

const CountRender = ({count}) => {
    console.log("count decrement", count);
  return (
    <div>
        <h1 style={{color:"white"}}>{count}</h1>
    </div>
  )
}

export default CountRender