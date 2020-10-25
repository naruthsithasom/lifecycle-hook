import React, { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1
    case "decrement":
      return state - 1
    case "reset":
      return 0
    default : 
    return state 
  }
}
export const UseReducer = () => {
  const [state, disPatch] = useReducer(reducer, 0)
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Use Reducer</h1>
      {state}
      <div>
        <button onClick={() => disPatch({type: "increment"})}> + </button>
        <button onClick={() => disPatch({type: "decrement"})}> - </button>
        <button onClick={() => disPatch({type: "reset"})}> reset </button>
      </div>
    </div>
  )
}



