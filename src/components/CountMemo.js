import React, { memo } from 'react'

const CountMemo = ({count}) => {
    console.log("count increment", count);
  return (
    <div>
        <h1 style={{color:"white"}}>{count}</h1>
        </div>
  )
}

export default memo(CountMemo);