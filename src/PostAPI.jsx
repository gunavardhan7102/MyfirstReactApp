import React, { useState } from 'react'

const PostAPI = () => {
const[data,setdata]= useState(
    {
        id:'',
        email:'',
        firstname:'',
        lastname:''
    }
);

const setValue = (e) => {
const {name,value} = e.target;
setdata((item)=>({
    ...item, [name]:value
}))
}

const saveform = async(e) => {
e.preventDefault();
console.log(data)
const res =await fetch('https://reqres.in/api/users',{
    method:'POST',
    headers: {
    'x-api-key': 'reqres-free-v1',
    'Content-type': 'application/json'
  },
  body:JSON.stringify(data)
})
console.log(res.status)
}

  return (
    <div>
        <form onSubmit={saveform}>
            <label>ID</label>
            <input type='text' name='id' onChange={setValue}/>
            <label>Email</label>
            <input type='email' name='email' onChange={setValue}/>
            <label>First Name</label>
            <input type='text' name='firstname' onChange={setValue}/>
            <label>Last Name</label>
            <input type='text' name='lastname' onChange={setValue}/>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default PostAPI