import { Section } from 'lucide-react'
import React, { useState } from 'react'

const FormEventExample = () => {
const [getUsername, setUsername] = useState();
const [getClickUserName, setClickUserName] = useState();

    const getName = (e) => {
setUsername(e.target.value)
    }

    const getClickName = (e) => {
        e.preventDefault();
        setClickUserName(getUsername)

    }
  return (
  
        <div>
        <h2>{getUsername}</h2>
         <h2>{getClickUserName}</h2>
         <form onSubmit={getClickName}>
            <input className='inputDiv' type='text' placeholder='Enter your name' onChange={getName}/> <br/>
            <button className='submitbtn' type='submit'>Submit</button>
         </form>
            
        </div>
   
    
  )
}

export default FormEventExample