import React, { useEffect,  useState } from 'react'

const GetAPI = () => {
    const API = 'https://jsonplaceholder.typicode.com/posts'
const[user,setUser] = useState();
    const getData = async() => {
        console.log('Hitting')
const res= await fetch(API);
const data=await res.json();
console.log(data)
setUser(data)
    }
    useEffect(()=>{
 getData();
 console.log(user)
    },[])
   
  return (
    <div>
{user.map((items)=>{
   return items.title
})}
    </div>
  )
}

export default GetAPI