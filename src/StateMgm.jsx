import React, { useEffect, useState } from 'react'

const StateMgm = () => {
const[city,setCity] = useState('');

   
return (
    <div>
  {(city=='Guna')?<h1>Guna</h1>:<h2>Vijay</h2>}
    <button >{city}</button>
        </div>
   
  )

}
  

export default StateMgm