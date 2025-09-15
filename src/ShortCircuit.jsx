import React, { useState } from 'react'

const ShortCircuit = () => {

const a = ['guna', 'vardhan']
const b = ['ajay','kumar']

const obj1 = {
    maths:100,
    science: 95
}

const obj2 = {
    english : 98,
    History: 99
}

console.log(...a,...b)
console.log({...obj1,...obj2})



    const[game,setgame] = useState(true)
  return (
    <div>
    {game && <div>ShortCircuit</div>}
    </div>
  )
}

export default ShortCircuit