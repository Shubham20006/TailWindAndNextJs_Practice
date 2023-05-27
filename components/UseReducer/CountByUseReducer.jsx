import React from 'react'
import { useReducer } from 'react'

const initialState=0

const reducer=(state,action)=>{
    switch(action){
        case'increment':return state+1
        case 'decrement':return state-1
        case 'reset':return initialState
        default:return state
    }

}

function CountByUseReducer() {
   const[count,dispatch]= useReducer(reducer,initialState)
  return (
    <div>
        --------------useReducer----------------
        <div>{count}</div>
      <button onClick={()=>dispatch('increment')}>Increment/</button>
      <button onClick={()=>dispatch('decrement')}>Decrement/</button>
      <button onClick={()=>dispatch('reset')}>reset</button>
    </div>
  )
}

export default CountByUseReducer
