import React from 'react'
import Mumbai from './Mumbai'
import { useData } from '../context/ExampleContext'
const Delhi = (props) => {

const {surprise,setsurprise, surpriseobj} =useData();

  return (
    <div>
{setsurprise('Vijay')}
    {surprise}
    object:
    {surpriseobj.name}
    <Mumbai/>
    </div>
  )
}

export default Delhi