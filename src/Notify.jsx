import React from 'react'
import { toast, ToastContainer } from 'react-toastify'

const Notify = () => {

    const notify = () => {
        toast('Wow Guna')
    }
  return (
   <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
  )
}

export default Notify