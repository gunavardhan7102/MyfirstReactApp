import React, { useEffect, useState } from 'react'

const ScreenSize = () => {
const[screenwidth,setscreenwidth]=useState(window.innerWidth);
const[screenheight,setscreenheight]=useState(window.innerHeight);

const screenresize = () => {
  setscreenwidth(window.innerWidth)
  setscreenheight(window.innerHeight)
}

useEffect(()=>{
  window.addEventListener('resize',screenresize);
// window.removeEventListener('resize',screenresize)
  },[])
useEffect(()=>{
  // window.addEventListener('resize',screenresize);
window.removeEventListener('resize',screenresize)
  },[])


  return (
    <div>
    <h1>Width: {screenwidth}</h1>
     <h1>Height: {screenheight}</h1>
    </div>
  )
}

export default ScreenSize