import React, { useReducer } from 'react'

const initialState = (0)
const reducer = (state, action) => {
    switch (action.type) {
        case "Plus":
         return state + action.value
         case "Minus":
                return state - action.value
                case "Reset":
                    return initialState
                default:
                    return state
    }
}

const FuncValue = () => {
const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>{state}</h1>
            <button onClick ={() => dispatch({type: "Plus", value: 5})}>+</button>
            <button onClick ={() => state && dispatch({type: "Minus", value: 10})}>-</button>
            <button onClick ={() =>dispatch({type: "Reset", value: 0})}>0</button>
        </div>
    )
}

export default FuncValue

