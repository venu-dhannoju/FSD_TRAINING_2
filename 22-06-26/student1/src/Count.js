import React, { useState } from 'react';

function Count() {
    const [count,setCount]=useState(0);
  return (
      <div>
        <p>count is {count}</p>
        <button onClick={()=>setCount((count)=>count-1)}>-</button>
        <button onClick={()=>setCount((count)=>0)}>reset</button>
        <button onClick={()=>setCount((count)=>count+1)}>+</button>

    </div>
  );
}

export default Count;

