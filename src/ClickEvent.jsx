import React, { useState } from 'react'

const ClickEvent = () => {

const[num,setnum] = useState(0);
 const Increment = () => {
    setnum(num+1);
}

const Decrement = () => {
    setnum(num-1);
}

const Reset = () => {

    setnum(0);
}

  return (
    <div>
    {num}
        <button onClick={Increment}>+</button>
        <button onClick={Reset}>Reset</button>
        <button onClick={Decrement}>-</button>
    
    </div>
  )
}

export default ClickEvent