import React from 'react'


const SecondComp = (props) => {
  const{name, city, country, continent} = props.userobj
  return (
    <div>{name} {props.userobj2}</div>
  )
}

export default SecondComp