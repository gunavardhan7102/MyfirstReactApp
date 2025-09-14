import React from 'react'
import { userData } from './data'

const SampleArray = () => {

    let players = [
        {
            cricket: 'Dhoni',
            hockey: 'Dhyanchand',
            football: 'Chetri',
            batminton: 'Sindu'
        }
    ]

    const arr = ['Guna', 'Vijay', 12, {name:'Guna'}]
  return (
    <div>
    {players.map((items)=>{
return items.batminton
    })}
    
    {
userData.map((user)=>{
return user.name + user.address.city
})

    }
    </div>


  )
}

export default SampleArray