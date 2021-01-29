import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
    if (action.type === "+") {
        return state + action.value
    }else if (action.type === "-"  ){
        return state - action.value
    }
     
    
}

const Button = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={() => dispatch({ type: "+", value: 5 })}>plus+5</button>
            <button onClick={() =>state && dispatch({ type: "-", value: 5 })}>minus-5</button>
        </div>
    )
}

export default Button
