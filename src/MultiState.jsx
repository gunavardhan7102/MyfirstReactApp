
import React, { useEffect, useReducer }  from 'react'


const MultiState = () => {

    const FETCH_INIT = 'FETCH_INIT'
    const FETCH_START = 'FETCH_START'
    const FETCH_ERROR = 'FETCH_ERROR'

    const initialState = {
        loading: true,
        data: null,
        error: null
    }

    const data = (state,action) => {
      switch (action.type) {
        case FETCH_INIT:
          return {...state,loading:true}
        case FETCH_START:
          return {...state,loading:false, data: action.payload}
        case FETCH_ERROR:
          return {...state,loading:false, error:action.payload}
        default:
        return state
      }
    }

    const [state, dispatch] = useReducer(data, initialState)
    const dataHandler = async() => {

      try {
           dispatch({type:FETCH_INIT})
const res=await fetch('https://jsonplaceholder.typicode.com/users');
const body=await res.json();

dispatch({type:FETCH_START, payload: body})
      } catch (error) {
        dispatch({type:FETCH_ERROR, payload: error})
      }
      
    }
    useEffect(()=>{
         console.log(dataHandler());
    },[])

  return (
    <div>
   {state.loading && <p>Loading...</p> }
   {state.data && <div>{
    state.data.map((item)=>{
      return item.name
    })
    }</div>}
    {state.error && <div>
{state.error}
    </div>}
    </div>
  )
}

export default MultiState